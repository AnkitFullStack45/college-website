"use client";

import { useEffect, useState } from "react";
import "./demo-class.css";

const EDUCATION_LEVELS = ["12th or Equivalent", "Graduation", "Masters"];
const DEMO_COURSES = ["BCA", "BBA", "B.com", "B.A.LL.B", "English"];

const SCHOOLS = [
    "12TH",
    "VED VIDYA MANDIR INTER COLLEGE",
    "AADARSH KANIYA INTER COLLEGE",
    "ADARSH JANTA INTER COLLEGE",
    "ARAYA VEDIK INTER COLLEGE",
    "ARVACHIN BHARTIYA PUBLIC SCHOOL",
    "ASHOK MEMORIAL PUBLIC SCHOOL",
    "AUM SUN PUBLIC SCHOOL",
    "B.K.D INTER COLLEGE",
    "BABA INTER COLLEGE",
    "BBPS",
    "BPM INTER COLLEGE",
    "BTM SIKRI ROAD MODINAGAR",
    "BUDDHA CLASSES",
    "CH. CHARAN SINGH SMARK JANTA INTER COLLEGE",
    "CHAMELI DEVI DURGA PRASAD CHHAYA PUBLIC SCHOOL",
    "D S INTER COLLEGE SHAKURPUR",
    "D. G. R. PUBLIC SCHOOL",
    "DEHRADHUN PUBLIC SCHOOL ASHOK NAGAR",
    "DEHRADHUN PUBLIC SCHOOL SANJAY NAGAR",
    "DR BR AMBEDKAR INTER COLLEGE",
    "DR. K.N. MODI SCIENCE AND COMMERCE INTER COLLEGE",
    "DYAWATI MODI PUBLIC SCHOOL",
    "EKLAVYA PUBLIC SCHOOL",
    "G.I.C",
    "GANDHI VIDYALYA INTER COLLEGE",
    "GENIUS PUBLIC SCHOOL",
    "GGIC KALCHINA MODINAGAR",
    "GREENLAND PUBLIC SCHOOL",
    "GURU RAM RAI PUBLIC SCHOOL",
    "GURUNANAK GIRLS INTER COLLEGE",
    "HANSH INTER COLLEGE",
    "HAPPY MODEL SR SEC SCHOOL",
    "HARSH INTER COLLEGE MURADNAGAR GHAZIABAD",
    "HERITAGE ACADEMY",
    "HHKM INTER COLLEGE VIJAYNAGAR",
    "ISHANI SARVODAYA KANYA VIDYALAYA",
    "J. L. M. GIRLS INTER COLLEGE",
    "J.L.N GIRLS INTER COLLEGE",
    "J.P.M PUBLIC SCHOOL",
    "JAINMATI UJAGARMAL JAIN INTER COLLEGE",
    "JANTA PUBLIC SCHOOL",
    "K N INTER COLLEGE",
    "KAILASHWATI INTER COLLEGE",
    "KAMAL INTER COLLEGE",
    "KANYA VEDIC INTER COLLEGE",
    "KARSHAK INTER COLLEGE",
    "KATAR SINGH MEMORIAL SCHOOL",
    "KENDRIYA VIDYALAYA ORDINANCE FACTORY,MURADNAGAR",
    "KISAN INTER COLLEGE Niwari",
    "KISHAN INTER COLLEGE MOHIUDDINPUR",
    "KISSAN INTER COLLEGE",
    "KRISHNA VIDYA NIKETAN",
    "KV KAMLA NEHRU NAGAR",
    "LAKSHYA CLASSES",
    "LILAVATI RAMGOPAL SARASWATI VIDYA MANDIR",
    "LOK MANYA TILAK JANTA INTER COLLEGE",
    "LUV KUSH COACHING CENTER",
    "M S PUBLIC SCHOOL",
    "MAHARANA PRATAP INTER SCHOOL",
    "MAHARISHI DAYANAND INTER COLLEGE",
    "MAHENDER PRATAP SINGH PUBLIC SCHOOL",
    "MILLENIUM ACEDEMY",
    "MILLENIUM PUBLIC SCHOOL",
    "MMH",
    "MODERN ACADEMY",
    "MOUNT CARMEL SCHOOL",
    "MURADNAGAR PUBLIC SCHOOL",
    "N. K CLASSES MOTINAGAR",
    "N.S.V INTER COLLEGE",
    "NAGAR NIGAM BALIKA INTER COLLEGE",
    "NAGAR PALIKA BALIKA INTER COLLEGE",
    "NAITIK CONVENT INTER COLLEGE",
    "NANAK CHAND JANTA INTER COLLEGE",
    "NATIONAL PUBLIC SCHOOL",
    "NAVJEEVAN INTER COLLEGE",
    "NAVYUG VIDHAPEETH INTER COLLEGE",
    "NCJ INTER COLLEGE",
    "NEW RAINBOW PUBLIC SCHOOL",
    "NEW SARASWATI INTER COLLEGE",
    "ORDNANCE FACTORY INTER COLLEGE",
    "P.B.A.S GIRLS INTER COLLEGE",
    "P.B.A.S. Boys INTER COLLEGE",
    "P.S. PUBLIC SCHOOL",
    "PARSANDI DEVI PUBLIC SCHOOL",
    "PURNGYANANJALI INTER COLLEGE",
    "RAJKIYA BALIKA INTER COLLEGE KALCHHINA",
    "RAJKIYA INTER COLLEGE",
    "RAJKIYA KANYA INTER COLLEGE",
    "RAM KAUR INTER COLLEGE",
    "RAM KISHAN INSTITUTE",
    "ROYAL CONVENT INTER COLLEGE",
    "RUKMANI MODI MAHILA INTER COLLEGE",
    "S B PUBLIC SCHOOL",
    "S.V.B.P.INTER COLLEGE, DAUSABANJARPUR",
    "SA INTER COLLEGE",
    "SAHEED PUBLIC MEMORIAL SCHOOL",
    "SANJAY GANDHI BALIKA INTER COLLEGE",
    "SAPNA INTERNATIONAL PUBLIC SCHOOL",
    "SARASWATI SHISHU MANDIR",
    "SARDAR PATEL INTER COLLEGE",
    "SCHOLARS ACADEMY INTER COLLEGE",
    "SETH MUKANDLAL (V.K)INTER COLLEGE GHAZIABAD",
    "SHAMBHU DAYAL INTER COLLEGE",
    "SHATABDI PUBLIC SCHOOL",
    "SHIKSHA PUBLIC SCHOOL NIWARI",
    "SHRI KRISHNA INTER COLLEGE",
    "SHRI ONKAR SINGH MEMORIAL PUBLIC SCHOOL",
    "SHRI RAM INTER COLLEGE",
    "SHRI SANATAN DHARM INTER COLLEGE",
    "SIDDHARTHA INTER COLLEGE",
    "SIR CHHOTU RAM KANYA INTER COLLEGE",
    "SMHS(Sunder Memorial Higher Secondary School)",
    "SSK PUBLIC SCHOOL",
    "SUMMER FIELD PUBLIC SCHOOL",
    "SUNDER MEMORIAL INTER COLLEGE",
    "SUSHILA INTER COLLEGE",
    "T.R.M PUBLIC SCHOOL",
    "T.R.M.P.B.A.S. GIRLS INTER COLLEGE",
    "VIJAY VERMA CLASSES",
    "VIVEK INTER COLLEGE",
    "VIVEKANAND INTERNATIONAL SCHOOL",
];

const INITIAL_FORM = {
    studentName: "",
    fatherName: "",
    mobile: "",
    education: "",
    school: "",
    demoCourse: "",
    demoDateTime: "",
};

// Set NEXT_PUBLIC_API_URL in .env.local to connect your ASP.NET Core API
const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/demo-class`
    : "";

// Returns the current local time formatted for <input type="datetime-local">
function getMinDateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
}

export default function DemoClassPage() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [minDateTime, setMinDateTime] = useState("");

    useEffect(() => {
        setMinDateTime(getMinDateTime());
    }, []);

    const isSchoolStudent = form.education === "12th or Equivalent";

    const handleChange = (e) => {
        const { name, value } = e.target;

        let cleaned = value;
        if (name === "mobile") {
            cleaned = value.replace(/\D/g, "").slice(0, 10);
        }

        setForm((prev) => {
            const next = { ...prev, [name]: cleaned };
            // Clear school when the student is no longer in 12th
            if (name === "education" && cleaned !== "12th or Equivalent") {
                next.school = "";
            }
            return next;
        });
        setErrors((prev) => ({ ...prev, [name]: "" }));
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

        if (!form.education) {
            newErrors.education = "Please select your education.";
        }

        if (isSchoolStudent && !form.school) {
            newErrors.school = "Please select your school.";
        }

        if (!form.demoCourse) {
            newErrors.demoCourse = "Please select a demo class.";
        }

        if (!form.demoDateTime) {
            newErrors.demoDateTime = "Please choose a date and time.";
        } else if (new Date(form.demoDateTime) < new Date()) {
            newErrors.demoDateTime = "Please choose a future date and time.";
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
                console.log("Demo class request:", form);
            }

            setStatus("success");
            setForm(INITIAL_FORM);
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="demo-page">
            <section className="demo-hero">
                <span className="demo-eyebrow">Free Demo Class</span>
                <h1>
                    Demo Class <span>Request</span>
                </h1>
                <p>
                    Experience our teaching first-hand. Choose a course and a
                    time that suits you, and we will confirm your demo class.
                </p>
            </section>

            <div className="demo-container">
                <section className="demo-form-card">
                    <h2>Book Your Demo Class</h2>

                    {status === "success" && (
                        <div className="demo-alert demo-alert-success">
                            Thank you! Your demo class request has been
                            submitted. We will contact you to confirm the
                            schedule.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="demo-alert demo-alert-error">
                            Something went wrong. Please try again or call us
                            directly.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="demo-field demo-full">
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

                        <div className="demo-field">
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

                        <div className="demo-field">
                            <label htmlFor="mobile">
                                Mobile <b>*</b>
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

                        <div
                            className={`demo-field ${
                                isSchoolStudent ? "" : "demo-full"
                            }`}
                        >
                            <label htmlFor="education">
                                Education <b>*</b>
                            </label>
                            <select
                                id="education"
                                name="education"
                                value={form.education}
                                onChange={handleChange}
                            >
                                <option value="">--Select--</option>
                                {EDUCATION_LEVELS.map((level) => (
                                    <option key={level} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                            {errors.education && (
                                <small>{errors.education}</small>
                            )}
                        </div>

                        {isSchoolStudent && (
                            <div className="demo-field">
                                <label htmlFor="school">
                                    School <b>*</b>
                                </label>
                                <select
                                    id="school"
                                    name="school"
                                    value={form.school}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    {SCHOOLS.map((school) => (
                                        <option key={school} value={school}>
                                            {school}
                                        </option>
                                    ))}
                                </select>
                                {errors.school && <small>{errors.school}</small>}
                            </div>
                        )}

                        <div className="demo-field">
                            <label htmlFor="demoCourse">
                                Demo Class <b>*</b>
                            </label>
                            <select
                                id="demoCourse"
                                name="demoCourse"
                                value={form.demoCourse}
                                onChange={handleChange}
                            >
                                <option value="">--Select--</option>
                                {DEMO_COURSES.map((course) => (
                                    <option key={course} value={course}>
                                        {course}
                                    </option>
                                ))}
                            </select>
                            {errors.demoCourse && (
                                <small>{errors.demoCourse}</small>
                            )}
                        </div>

                        <div className="demo-field">
                            <label htmlFor="demoDateTime">
                                Date &amp; Time <b>*</b>
                            </label>
                            <input
                                id="demoDateTime"
                                name="demoDateTime"
                                type="datetime-local"
                                value={form.demoDateTime}
                                min={minDateTime}
                                onChange={handleChange}
                            />
                            {errors.demoDateTime && (
                                <small>{errors.demoDateTime}</small>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="demo-submit"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting"
                                ? "Submitting..."
                                : "Request Demo Class"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}