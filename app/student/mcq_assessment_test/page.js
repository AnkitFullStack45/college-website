"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./mcq_assessment_test.css";

// Set NEXT_PUBLIC_API_URL in .env.local to connect your ASP.NET Core API
const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/mcq/verify-student`
    : "";

// Where the student goes after a successful login
const NEXT_PAGE = "/mcq-assessment";

export default function McqLoginPage() {
    const router = useRouter();

    const [studentId, setStudentId] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("idle"); // idle | verifying | error

    const handleChange = (e) => {
        // Letters, numbers, dash and slash only
        const cleaned = e.target.value
            .replace(/[^a-zA-Z0-9/-]/g, "")
            .toUpperCase();

        setStudentId(cleaned);
        setError("");
        setStatus("idle");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = studentId.trim();

        if (!id) {
            setError("Please enter your Student ID.");
            return;
        }

        if (id.length < 3) {
            setError("Student ID looks too short. Please check and try again.");
            return;
        }

        setStatus("verifying");

        try {
            if (API_URL) {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ studentId: id }),
                });

                if (response.status === 404 || response.status === 401) {
                    setError(
                        "This Student ID is not registered. Please check and try again."
                    );
                    setStatus("error");
                    return;
                }

                if (!response.ok) throw new Error("Request failed");

                const data = await response.json();
                sessionStorage.setItem("mcqStudent", JSON.stringify(data));
            } else {
                // No API connected yet: simulate a successful login for development
                await new Promise((resolve) => setTimeout(resolve, 800));
                sessionStorage.setItem(
                    "mcqStudent",
                    JSON.stringify({ studentId: id })
                );
            }

            router.push(NEXT_PAGE);
        } catch (err) {
            setError("Unable to verify right now. Please try again shortly.");
            setStatus("error");
        }
    };

    const isVerifying = status === "verifying";

    return (
        <main className="mcq-page">
            <div className="mcq-card">
                <div className="mcq-icon" aria-hidden="true">
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
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                </div>

                <span className="mcq-eyebrow">TEMPL Group of Institutions</span>
                <h1>MCQ Assessment Portal</h1>
                <p className="mcq-subtitle">
                    Enter your registered Student ID to continue
                </p>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="mcq-field">
                        <label htmlFor="studentId">Student ID</label>
                        <input
                            id="studentId"
                            name="studentId"
                            type="text"
                            value={studentId}
                            onChange={handleChange}
                            placeholder="Enter your Student ID"
                            autoComplete="username"
                            autoFocus
                            maxLength={30}
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? "studentId-error" : undefined}
                        />
                        {error && (
                            <small id="studentId-error" role="alert">
                                {error}
                            </small>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mcq-submit"
                        disabled={isVerifying}
                    >
                        {isVerifying ? "Verifying..." : "Verify & Login"}
                    </button>
                </form>

                <p className="mcq-help">
                    Having trouble logging in? Contact the admissions office at{" "}
                    <a href="mailto:info@templgroup.in">info@templgroup.in</a>
                </p>
            </div>
        </main>
    );
}