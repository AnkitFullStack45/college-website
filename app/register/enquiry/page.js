"use client";

import { useState } from "react";
import "./enquiry.css";

const COURSES = [
    "BCA",
    "BBA",
    "B.Com",
    "LL.B",
    "BA.LL.B",
    "B.P.E.S",
    "Cyber Crime And Law",
    "B.Ed",
    "M.Ed",
];

const INITIAL_FORM = {
    fullName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    fatherName: "",
    fatherMobile: "",
    course: "",
};

// Change this to your ASP.NET Core API endpoint when it is ready
const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`
    : "";

export default function EnquiryPage() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Keep phone fields numeric only
        const phoneFields = ["mobile", "whatsapp", "fatherMobile"];
        const cleaned = phoneFields.includes(name)
            ? value.replace(/\D/g, "").slice(0, 10)
            : value;

        setForm((prev) => ({ ...prev, [name]: cleaned }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.fullName.trim()) {
            newErrors.fullName = "Candidate full name is required.";
        }

        if (!form.mobile) {
            newErrors.mobile = "Mobile number is required.";
        } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }

        if (form.whatsapp && !/^[6-9]\d{9}$/.test(form.whatsapp)) {
            newErrors.whatsapp = "Enter a valid 10-digit WhatsApp number.";
        }

        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (form.fatherMobile && !/^[6-9]\d{9}$/.test(form.fatherMobile)) {
            newErrors.fatherMobile = "Enter a valid 10-digit mobile number.";
        }

        if (!form.course) {
            newErrors.course = "Please select a course.";
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
                console.log("Enquiry submitted:", form);
            }

            setStatus("success");
            setForm(INITIAL_FORM);
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="enquiry-page">
            <section className="enquiry-hero">
                <span className="enquiry-eyebrow">Admissions Open</span>
                <h1>
                    Admission <span>Enquiry</span>
                </h1>
                <p>
                    Fill in the form below and our admission team will contact
                    you shortly.
                </p>
            </section>

            <div className="enquiry-container">
                {/* LEFT: CONTACT INFO */}
                <aside className="enquiry-info">
                    <h2>Contact Us</h2>

                    <div className="enquiry-info-block">
                        <h3>Location</h3>
                        <p>
                            TEMPL Group of Institution, Knowledge and
                            Innovation Campus, NH-58 Abupur Road, Muradnagar,
                            Midway between Muradnagar and Modinagar, Near SRM
                            University, Ghaziabad (Delhi-NCR), Uttar Pradesh -
                            201206
                        </p>
                    </div>

                    <div className="enquiry-info-block">
                        <h3>Email</h3>
                        <a href="mailto:admin@templgroup.in">
                            admin@templgroup.in
                        </a>
                        <a href="mailto:info@templgroup.in">
                            info@templgroup.in
                        </a>
                    </div>

                    <div className="enquiry-info-block">
                        <h3>Call</h3>
                        <a href="tel:+919412221868">+91 9412221868</a>
                        <a href="tel:+919319828699">+91 9319828699</a>
                        <a href="tel:+918865961096">+91 8865961096</a>
                    </div>
                </aside>

                {/* RIGHT: FORM */}
                <section className="enquiry-form-card">
                    <h2>Register</h2>

                    {status === "success" && (
                        <div className="enquiry-alert enquiry-alert-success">
                            Thank you! Your enquiry has been submitted. We will
                            contact you soon.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="enquiry-alert enquiry-alert-error">
                            Something went wrong. Please try again or call us
                            directly.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="enquiry-field enquiry-full">
                            <label htmlFor="fullName">
                                Candidate Full Name <b>*</b>
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Enter candidate full name"
                                autoComplete="name"
                            />
                            {errors.fullName && (
                                <small>{errors.fullName}</small>
                            )}
                        </div>

                        <div className="enquiry-field">
                            <label htmlFor="mobile">
                                Mobile No. <b>*</b>
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

                        <div className="enquiry-field">
                            <label htmlFor="whatsapp">WhatsApp Mobile No.</label>
                            <input
                                id="whatsapp"
                                name="whatsapp"
                                type="tel"
                                inputMode="numeric"
                                value={form.whatsapp}
                                onChange={handleChange}
                                placeholder="10-digit WhatsApp number"
                            />
                            {errors.whatsapp && <small>{errors.whatsapp}</small>}
                        </div>

                        <div className="enquiry-field enquiry-full">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                autoComplete="email"
                            />
                            {errors.email && <small>{errors.email}</small>}
                        </div>

                        <div className="enquiry-field">
                            <label htmlFor="fatherName">Father Name</label>
                            <input
                                id="fatherName"
                                name="fatherName"
                                type="text"
                                value={form.fatherName}
                                onChange={handleChange}
                                placeholder="Enter father's name"
                            />
                        </div>

                        <div className="enquiry-field">
                            <label htmlFor="fatherMobile">Father Mobile</label>
                            <input
                                id="fatherMobile"
                                name="fatherMobile"
                                type="tel"
                                inputMode="numeric"
                                value={form.fatherMobile}
                                onChange={handleChange}
                                placeholder="10-digit mobile number"
                            />
                            {errors.fatherMobile && (
                                <small>{errors.fatherMobile}</small>
                            )}
                        </div>

                        <div className="enquiry-field enquiry-full">
                            <label htmlFor="course">
                                Interested Course <b>*</b>
                            </label>
                            <select
                                id="course"
                                name="course"
                                value={form.course}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {COURSES.map((course) => (
                                    <option key={course} value={course}>
                                        {course}
                                    </option>
                                ))}
                            </select>
                            {errors.course && <small>{errors.course}</small>}
                        </div>

                        <button
                            type="submit"
                            className="enquiry-submit"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting"
                                ? "Submitting..."
                                : "Submit Enquiry"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}