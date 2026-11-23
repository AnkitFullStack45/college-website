"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./RegisterSection.css";

// Available courses
const courses = [
  "BCA",
  "BBA",
  "B.COM",
  "LL.B",
  "B.A LL.B",
  "B.ED",
  "M.ED",
  "D.El.Ed",
  "B.P.E.S",
  "Cyber Security",
];

// Highlights displayed on hero image
const HIGHLIGHTS = [
  "Experienced faculty and mentors",
  "Modern campus in Delhi-NCR",
  "Career-focused programmes",
];

// Generate CAPTCHA
const makeCaptcha = () => String(Math.floor(100000 + Math.random() * 900000));

// Initial form values
const initialForm = {
  fullName: "",
  mobile: "",
  whatsapp: "",
  email: "",
  fatherName: "",
  fatherMobile: "",
  course: "",
  captchaInput: "",
};

export default function RegisterSection() {
  const [form, setForm] = useState(initialForm);

  const [captcha, setCaptcha] = useState("");

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Generate CAPTCHA after component mounts
  useEffect(() => {
    setCaptcha(makeCaptcha());
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Refresh CAPTCHA
  const refreshCaptcha = () => {
    setCaptcha(makeCaptcha());

    setForm((prev) => ({
      ...prev,
      captchaInput: "",
    }));

    setErrors((prev) => ({
      ...prev,
      captchaInput: "",
    }));
  };

  // Form validation
  const validate = () => {
    const e = {};

    if (!form.fullName.trim()) {
      e.fullName = "Please enter the candidate name";
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      e.mobile = "Enter a valid 10-digit mobile number";
    }

    if (form.whatsapp && !/^[6-9]\d{9}$/.test(form.whatsapp)) {
      e.whatsapp = "Enter a valid 10-digit number";
    }

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }

    if (form.fatherMobile && !/^[6-9]\d{9}$/.test(form.fatherMobile)) {
      e.fatherMobile = "Enter a valid 10-digit number";
    }

    if (!captcha || form.captchaInput !== captcha) {
      e.captchaInput = "Security code is incorrect";
    }

    return e;
  };

  // Submit form
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const found = validate();

    setErrors(found);

    if (Object.keys(found).length > 0) {
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      // ASP.NET Core API endpoint
      const res = await fetch("/api/enquiry", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          fullName: form.fullName,
          mobile: form.mobile,
          whatsapp: form.whatsapp,
          email: form.email,
          fatherName: form.fatherName,
          fatherMobile: form.fatherMobile,
          course: form.course,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      // Success
      setStatus({
        type: "success",
        message: "Thank you! We will contact you soon.",
      });

      setForm(initialForm);

      setCaptcha(makeCaptcha());

      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section">
      {/* =================================
                FULL WIDTH HERO IMAGE
            ================================= */}

      <div className="register-image">
        <Image
          src="/images/bg5.webp"
          alt="TEMPL Group Campus"
          fill
          priority
          sizes="100vw"
          className="register-img"
        />

        {/* Image overlay */}
        <div className="register-image-shade"></div>

        {/* Hero content */}
        <div className="register-image-content">
          <span className="register-badge">Admissions Open</span>

          <h1>Start Your Journey at TEMPL Group</h1>

          <p>Academic Session 2027-28</p>

          {/* Highlights */}
          <ul className="register-highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <span className="highlight-check">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* =================================
                REGISTRATION FORM SECTION
            ================================= */}

      <div className="register-form-wrap">
        <div className="register-card">
          {/* Form heading */}
          <div className="register-head">
            <span className="register-eyebrow">ADMISSION ENQUIRY</span>

            <h2 className="register-title">Register Now</h2>

            <p className="register-sub">
              Fill in the details below and our admission team will contact you
              shortly. Fields marked <span className="req">*</span>
              are required.
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit} noValidate>
            {/* =================================
                            CANDIDATE DETAILS
                        ================================= */}

            <div className="register-group">
              <h4 className="register-group-title">
                <span>01</span>
                Candidate Details
              </h4>

              {/* Candidate Name */}
              <div className="register-field">
                <label htmlFor="fullName">
                  Candidate Full Name
                  <span className="req">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "has-error" : ""}
                />

                {errors.fullName && (
                  <small className="err">{errors.fullName}</small>
                )}
              </div>

              {/* Mobile and WhatsApp */}
              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="mobile">
                    Mobile Number
                    <span className="req">*</span>
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    className={errors.mobile ? "has-error" : ""}
                  />

                  {errors.mobile && (
                    <small className="err">{errors.mobile}</small>
                  )}
                </div>

                <div className="register-field">
                  <label htmlFor="whatsapp">WhatsApp Mobile Number</label>

                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="WhatsApp number"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className={errors.whatsapp ? "has-error" : ""}
                  />

                  {errors.whatsapp && (
                    <small className="err">{errors.whatsapp}</small>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="register-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "has-error" : ""}
                />

                {errors.email && <small className="err">{errors.email}</small>}
              </div>
            </div>

            {/* =================================
                            PARENT DETAILS
                        ================================= */}

            <div className="register-group">
              <h4 className="register-group-title">
                <span>02</span>
                Parent Details
              </h4>

              <div className="register-row">
                {/* Father Name */}
                <div className="register-field">
                  <label htmlFor="fatherName">Father's Name</label>

                  <input
                    id="fatherName"
                    name="fatherName"
                    type="text"
                    placeholder="Enter father's name"
                    value={form.fatherName}
                    onChange={handleChange}
                  />
                </div>

                {/* Father Mobile */}
                <div className="register-field">
                  <label htmlFor="fatherMobile">Father's Mobile Number</label>

                  <input
                    id="fatherMobile"
                    name="fatherMobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={form.fatherMobile}
                    onChange={handleChange}
                    className={errors.fatherMobile ? "has-error" : ""}
                  />

                  {errors.fatherMobile && (
                    <small className="err">{errors.fatherMobile}</small>
                  )}
                </div>
              </div>
            </div>

            {/* =================================
                            COURSE & VERIFICATION
                        ================================= */}

            <div className="register-group">
              <h4 className="register-group-title">
                <span>03</span>
                Course & Verification
              </h4>

              {/* Course Selection */}
              <div className="register-field">
                <label htmlFor="course">Interested Course</label>

                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                >
                  <option value="">Select a course</option>

                  {courses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* CAPTCHA */}
              <div className="register-field">
                <label htmlFor="captchaInput">
                  Security Verification
                  <span className="req">*</span>
                </label>

                <div className="register-captcha-row">
                  <div className="register-captcha">
                    <span
                      className="register-captcha-code"
                      aria-label="Security code"
                    >
                      {captcha || "••••••"}
                    </span>

                    <button
                      type="button"
                      className="register-captcha-refresh"
                      onClick={refreshCaptcha}
                      aria-label="Refresh security code"
                    >
                      ↻
                    </button>
                  </div>

                  <input
                    id="captchaInput"
                    name="captchaInput"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Enter security code"
                    value={form.captchaInput}
                    onChange={handleChange}
                    className={errors.captchaInput ? "has-error" : ""}
                  />
                </div>

                {errors.captchaInput && (
                  <small className="err">{errors.captchaInput}</small>
                )}
              </div>
            </div>

            {/* =================================
                            SUBMIT BUTTON
                        ================================= */}

            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Admission Enquiry →"}
            </button>

            {/* SUCCESS / ERROR MESSAGE */}

            {status.message && (
              <p role="status" className={`register-status ${status.type}`}>
                {status.message}
              </p>
            )}

            {/* PRIVACY NOTE */}

            <p className="register-note">
              Your details are safe with us and will only be used to contact you
              about admissions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
