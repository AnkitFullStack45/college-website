"use client";

import { useState } from "react";
import "./webinar.css";

const STREAMS = [
    "Science (PCM)",
    "Science (PCB)",
    "Commerce With Maths",
    "Commerce Without Maths",
    "Humanities",
];

const WEBINAR_TOPICS = [
    {
        id: "ba-career",
        title: "Kya 12th ke baad kewal BA karna right choice hai ek successful career ke liye.?",
        date: "30th May 2026",
        time: "11:00 AM",
    },
    {
        id: "ai-expert",
        title: "Kya AI expert banne ke liye B.Tech hi kewal option hai.?",
        date: "30th May 2026",
        time: "02:00 PM",
    },
];

const INITIAL_FORM = {
    studentName: "",
    fatherName: "",
    mobile: "",
    stream: "",
    webinarTopic: "",
};

// Set NEXT_PUBLIC_API_URL in .env.local to connect your ASP.NET Core API
const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/webinar-registration`
    : "";

export default function WebinarRegistrationPage() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;

        const cleaned =
            name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;

        setForm((prev) => ({ ...prev, [name]: cleaned }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleTopicSelect = (topic) => {
        setForm((prev) => ({
            ...prev,
            webinarTopic: topic.title,
            webinarDateTime: `${topic.date}, ${topic.time}`,
        }));
        setErrors((prev) => ({ ...prev, webinarTopic: "" }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.studentName.trim()) {
            newErrors.studentName = "Student name is required.";
        }

        if (!form.fatherName.trim()) {
            newErrors.fatherName = "Father name is required.";
        }

        if (!form.mobile) {
            newErrors.mobile = "Mobile number is required.";
        } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }

        if (!form.stream) {
            newErrors.stream = "Please select your stream.";
        }

        if (!form.webinarTopic) {
            newErrors.webinarTopic = "Please select a webinar topic.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("submitting");

        try {
            if (API_URL) {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });

                if (!response.ok) throw new Error("Request failed");
            } else {
                // No API connected yet: simulate a successful submit
                await new Promise((resolve) => setTimeout(resolve, 800));
                console.log("Webinar registration:", form);
            }

            setStatus("success");
            setForm(INITIAL_FORM);
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="webinar-page">
            <section className="webinar-hero">
                <span className="webinar-eyebrow">Free Online Webinar</span>
                <h1>
                    Student Webinar <span>Registration</span>
                </h1>
                <p>
                    Join our expert-led webinars to make a confident choice
                    about your career after 12th. Register now to reserve your
                    seat.
                </p>
            </section>

            <div className="webinar-container">
                <section className="webinar-form-card">
                    <h2>Register for the Webinar</h2>

                    {status === "success" && (
                        <div className="webinar-alert webinar-alert-success">
                            Thank you! You are registered for the webinar. We
                            will share the joining details with you soon.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="webinar-alert webinar-alert-error">
                            Something went wrong. Please try again or call us
                            directly.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="webinar-field webinar-full">
                            <label htmlFor="studentName">
                                Student Name <b>*</b>
                            </label>
                            <input
                                id="studentName"
                                name="studentName"
                                type="text"
                                value={form.studentName}
                                onChange={handleChange}
                                placeholder="Enter student name"
                                autoComplete="name"
                            />
                            {errors.studentName && (
                                <small>{errors.studentName}</small>
                            )}
                        </div>

                        <div className="webinar-field">
                            <label htmlFor="fatherName">
                                Father Name <b>*</b>
                            </label>
                            <input
                                id="fatherName"
                                name="fatherName"
                                type="text"
                                value={form.fatherName}
                                onChange={handleChange}
                                placeholder="Enter father's name"
                            />
                            {errors.fatherName && (
                                <small>{errors.fatherName}</small>
                            )}
                        </div>

                        <div className="webinar-field">
                            <label htmlFor="mobile">
                                Mobile Number <b>*</b>
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                inputMode="numeric"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="10-digit mobile number"
                                autoComplete="tel"
                            />
                            {errors.mobile && <small>{errors.mobile}</small>}
                        </div>

                        <div className="webinar-field webinar-full">
                            <label htmlFor="stream">
                                Stream <b>*</b>
                            </label>
                            <select
                                id="stream"
                                name="stream"
                                value={form.stream}
                                onChange={handleChange}
                            >
                                <option value="">Select Stream</option>
                                {STREAMS.map((stream) => (
                                    <option key={stream} value={stream}>
                                        {stream}
                                    </option>
                                ))}
                            </select>
                            {errors.stream && <small>{errors.stream}</small>}
                        </div>

                        <div className="webinar-field webinar-full">
                            <span className="webinar-label">
                                Select Webinar Topic <b>*</b>
                            </span>

                            <div className="webinar-topics">
                                {WEBINAR_TOPICS.map((topic) => {
                                    const selected =
                                        form.webinarTopic === topic.title;

                                    return (
                                        <label
                                            key={topic.id}
                                            className={`webinar-topic ${
                                                selected
                                                    ? "webinar-topic-active"
                                                    : ""
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="webinarTopic"
                                                value={topic.title}
                                                checked={selected}
                                                onChange={() =>
                                                    handleTopicSelect(topic)
                                                }
                                            />
                                            <span className="webinar-radio" />
                                            <span className="webinar-topic-body">
                                                <strong>{topic.title}</strong>
                                                <em>
                                                    Date &amp; Time :{" "}
                                                    {topic.date}, {topic.time}
                                                </em>
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>

                            {errors.webinarTopic && (
                                <small>{errors.webinarTopic}</small>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="webinar-submit"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting"
                                ? "Registering..."
                                : "Register Now"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}