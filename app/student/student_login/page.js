"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./student_login.css";

// Set NEXT_PUBLIC_API_URL in .env.local to connect your ASP.NET Core API
const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/student/login`
    : "";

// Where the student goes after a successful login
const DASHBOARD_PAGE = "/student/dashboard";

const FORGOT_PASSWORD_URL = "https://erp.templgroup.in/Student/ForgotPassword";
const REGISTER_URL = "https://erp.templgroup.in/Register";

const INITIAL_FORM = { identifier: "", password: "" };

export default function StudentLoginPage() {
    const router = useRouter();

    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | submitting | error
    const [serverError, setServerError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setServerError("");
    };

    const validate = () => {
        const newErrors = {};
        const id = form.identifier.trim();

        if (!id) {
            newErrors.identifier = "Email or mobile number is required.";
        } else {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id);
            const isMobile = /^[6-9]\d{9}$/.test(id);

            if (!isEmail && !isMobile) {
                newErrors.identifier =
                    "Enter a valid email or 10-digit mobile number.";
            }
        }

        if (!form.password) {
            newErrors.password = "Password is required.";
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("submitting");
        setServerError("");

        try {
            if (API_URL) {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        identifier: form.identifier.trim(),
                        password: form.password,
                    }),
                });

                if (response.status === 401 || response.status === 404) {
                    setServerError("Invalid email/mobile or password.");
                    setStatus("error");
                    return;
                }

                if (!response.ok) throw new Error("Request failed");
            } else {
                // No API connected yet: simulate a successful login for development
                await new Promise((resolve) => setTimeout(resolve, 900));
            }

            router.push(DASHBOARD_PAGE);
        } catch (err) {
            setServerError("Unable to sign in right now. Please try again.");
            setStatus("error");
        }
    };

    const isSubmitting = status === "submitting";

    return (
        <main className="slogin-page">
            {/* Animated background */}
            <div className="slogin-bg" aria-hidden="true">
                <span className="slogin-orb slogin-orb-1" />
                <span className="slogin-orb slogin-orb-2" />
                <span className="slogin-orb slogin-orb-3" />
                <span className="slogin-grid" />
            </div>

            <div className="slogin-card">
                <div className="slogin-logo" aria-hidden="true">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 10L12 5 2 10l10 5 10-5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                </div>

                <h1>Student Portal</h1>
                <p className="slogin-subtitle">
                    Sign in to access your dashboard
                </p>

                {serverError && (
                    <div className="slogin-alert" role="alert">
                        {serverError}
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    {/* Email / Mobile */}
                    <div className="slogin-field">
                        <label htmlFor="identifier">Email / Mobile</label>
                        <div className="slogin-input-wrap">
                            <svg
                                className="slogin-input-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <input
                                id="identifier"
                                name="identifier"
                                type="text"
                                value={form.identifier}
                                onChange={handleChange}
                                placeholder="Enter email or mobile number"
                                autoComplete="username"
                                autoFocus
                                aria-invalid={Boolean(errors.identifier)}
                            />
                        </div>
                        {errors.identifier && (
                            <small role="alert">{errors.identifier}</small>
                        )}
                    </div>

                    {/* Password */}
                    <div className="slogin-field">
                        <label htmlFor="password">Password</label>
                        <div className="slogin-input-wrap">
                            <svg
                                className="slogin-input-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                aria-invalid={Boolean(errors.password)}
                            />
                            <button
                                type="button"
                                className="slogin-toggle"
                                onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={
                                    showPassword ? "Hide password" : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                        <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <small role="alert">{errors.password}</small>
                        )}
                    </div>

                    <div className="slogin-row">
                        <a href={FORGOT_PASSWORD_URL}>Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="slogin-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="slogin-spinner" aria-hidden="true" />
                                Signing in...
                            </>
                        ) : (
                            "Login to Dashboard"
                        )}
                    </button>
                </form>

                <p className="slogin-register">
                    New student? <a href={REGISTER_URL}>Create an account</a>
                </p>
            </div>

            <footer className="slogin-footer">
                &copy; 2026 IET ERP. All rights reserved.
            </footer>
        </main>
    );
}