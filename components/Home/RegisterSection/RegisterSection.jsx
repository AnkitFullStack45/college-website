"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./RegisterSection.css";

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

const makeCaptcha = () => String(Math.floor(100000 + Math.random() * 900000));

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
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Runs only in the browser, so server and client HTML always match
  useEffect(() => {
    setCaptcha(makeCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const refreshCaptcha = () => {
    setCaptcha(makeCaptcha());
    setForm((prev) => ({ ...prev, captchaInput: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Please enter the candidate name";
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      e.mobile = "Enter a valid 10-digit mobile number";
    if (form.whatsapp && !/^[6-9]\d{9}$/.test(form.whatsapp))
      e.whatsapp = "Enter a valid 10-digit number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (form.fatherMobile && !/^[6-9]\d{9}$/.test(form.fatherMobile))
      e.fatherMobile = "Enter a valid 10-digit number";
    if (!captcha || form.captchaInput !== captcha)
      e.captchaInput = "Security code is incorrect";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Change this URL to your ASP.NET Core API endpoint
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

      if (!res.ok) throw new Error("Request failed");

      setStatus({ type: "success", message: "Thank you! We will contact you soon." });
      setForm(initialForm);
      setCaptcha(makeCaptcha());
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section">
      <div className="register-image">
        <Image
          src="/images/bg5.webp"
          alt="TEMPL Group campus"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="register-img"
        />
      </div>

      <div className="register-form-wrap">
        <h2 className="register-title">Register</h2>

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div className="register-field">
            <label htmlFor="fullName">
              Candidate Full Name <span className="req">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <small className="err">{errors.fullName}</small>}
          </div>

          <div className="register-row">
            <div className="register-field">
              <label htmlFor="mobile">
                Mobile No. <span className="req">*</span>
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                maxLength={10}
                value={form.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <small className="err">{errors.mobile}</small>}
            </div>

            <div className="register-field">
              <label htmlFor="whatsapp">WhatsApp Mobile No.</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                maxLength={10}
                value={form.whatsapp}
                onChange={handleChange}
              />
              {errors.whatsapp && <small className="err">{errors.whatsapp}</small>}
            </div>
          </div>

          <div className="register-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <small className="err">{errors.email}</small>}
          </div>

          <div className="register-field">
            <label htmlFor="fatherName">Father Name</label>
            <input
              id="fatherName"
              name="fatherName"
              type="text"
              value={form.fatherName}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="fatherMobile">Father Mobile</label>
            <input
              id="fatherMobile"
              name="fatherMobile"
              type="tel"
              maxLength={10}
              value={form.fatherMobile}
              onChange={handleChange}
            />
            {errors.fatherMobile && (
              <small className="err">{errors.fatherMobile}</small>
            )}
          </div>

          <div className="register-field">
            <label htmlFor="course">Interested Course</label>
            <select
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {courses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="register-field">
            <div className="register-captcha">
              <span className="register-captcha-code" aria-label="Security code">
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
              name="captchaInput"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter Security code"
              value={form.captchaInput}
              onChange={handleChange}
            />
            {errors.captchaInput && (
              <small className="err">{errors.captchaInput}</small>
            )}
          </div>

          <button type="submit" className="register-submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

          {status.message && (
            <p className={`register-status ${status.type}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}