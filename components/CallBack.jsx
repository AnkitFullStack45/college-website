'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPhone,
  faListUl,
  faBook,
  faXmark,
  faArrowRight,
  faCaretDown,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './CallBack.css'

config.autoAddCss = false;

const COURSES = {
  Undergraduate: ['BCA', 'BBA', 'B.COM', 'B.P.E.S', 'LLB(LSR)', 'BA.LLB(LSR)', 'B.ED'],
  Postgraduate: ['M.ED'],
  Diploma: ['D.EL.ED'],
};

const EMPTY_FORM = { name: '', mobile: '', level: 'Undergraduate', course: '' };

export default function CallbackModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const closeTimer = useRef(null);

  useEffect(() => setMounted(true), []);

  // Fresh form every time the popup opens
  useEffect(() => {
    if (open) {
      setForm(EMPTY_FORM);
      setErrors({});
      setStatus('idle');
    }
    return () => clearTimeout(closeTimer.current);
  }, [open]);

  const close = useCallback(() => {
    clearTimeout(closeTimer.current);
    onClose?.();
  }, [onClose]);

  // Lock page scroll ONLY while open; always restore on cleanup
  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleaned = name === 'mobile' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setForm((prev) => ({
      ...prev,
      [name]: cleaned,
      ...(name === 'level' ? { course: '' } : {}),
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Please enter your name';
    if (!/^[6-9]\d{9}$/.test(form.mobile)) err.mobile = 'Enter a valid 10-digit mobile number';
    if (!form.course) err.course = 'Please choose a course';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');

      setStatus('done');
      closeTimer.current = setTimeout(close, 2500);
    } catch {
      setStatus('error');
    }
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="cbm-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="cbm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cbm-title"
      >
        <button type="button" className="cbm-close" onClick={close} aria-label="Close">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Header */}
        <div className="cbm-header">
          <span className="cbm-badge">Admissions Open</span>
          <h3 id="cbm-title" className="cbm-title">Request a Call Back</h3>
          <p className="cbm-sub">Academic Session 2027-28</p>
        </div>

        {/* Success state */}
        {status === 'done' ? (
          <div className="cbm-done">
            <span className="cbm-done-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <h4>Thank you!</h4>
            <p>Our admission team will call you back shortly.</p>
          </div>
        ) : (
          <form className="cbm-body" onSubmit={handleSubmit} noValidate>
            <div className="cbm-group">
              <label className={`cbm-field ${errors.name ? 'has-error' : ''}`}>
                <span className="cbm-icon"><FontAwesomeIcon icon={faUser} /></span>
                <input
                  className="cbm-input"
                  type="text"
                  name="name"
                  placeholder="Applicant Name *"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  autoFocus
                />
              </label>
              {errors.name && <small className="cbm-err">{errors.name}</small>}
            </div>

            <div className="cbm-group">
              <label className={`cbm-field ${errors.mobile ? 'has-error' : ''}`}>
                <span className="cbm-icon"><FontAwesomeIcon icon={faPhone} /></span>
                <input
                  className="cbm-input"
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number *"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </label>
              {errors.mobile && <small className="cbm-err">{errors.mobile}</small>}
            </div>

            <div className="cbm-group">
              <label className="cbm-field cbm-select">
                <span className="cbm-icon"><FontAwesomeIcon icon={faListUl} /></span>
                <select
                  className="cbm-input"
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                >
                  {Object.keys(COURSES).map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <span className="cbm-caret"><FontAwesomeIcon icon={faCaretDown} /></span>
              </label>
            </div>

            <div className="cbm-group">
              <label className={`cbm-field cbm-select ${errors.course ? 'has-error' : ''}`}>
                <span className="cbm-icon"><FontAwesomeIcon icon={faBook} /></span>
                <select
                  className="cbm-input"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                >
                  <option value="" disabled>Choose Course *</option>
                  {COURSES[form.level].map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                <span className="cbm-caret"><FontAwesomeIcon icon={faCaretDown} /></span>
              </label>
              {errors.course && <small className="cbm-err">{errors.course}</small>}
            </div>

            <button type="submit" className="cbm-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Request Call Back'}
              <span className="cbm-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>

            {status === 'error' && (
              <p className="cbm-error">Something went wrong. Please try again.</p>
            )}

            <p className="cbm-note">We respect your privacy and will only call about admissions.</p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}