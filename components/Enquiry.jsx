'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPhone,
  faPhoneVolume,
  faListUl,
  faBook,
  faXmark,
  faArrowRight,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './Enquiry.css';

// Stops Font Awesome injecting its CSS late, which causes oversized icons on first paint in Next.js
config.autoAddCss = false;

const GRACE_MS = 3000; // popup stays visible at least this long
const MOVE_DISTANCE = 40; // px of real mouse movement needed to collapse

const COURSES = {
  Undergraduate: ['BCA', 'BBA', 'B.COM', 'B.P.E.S', 'LLB(LSR)', 'BA.LLB(LSR)', 'B.ED'],
  Postgraduate: ['M.ED'],
  Diploma: ['D.EL.ED'],
};

const EMPTY_FORM = { name: '', mobile: '', level: 'Undergraduate', course: '' };

export default function Enquiry() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false); // closed by default
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [form, setForm] = useState(EMPTY_FORM);
  const panelRef = useRef(null);

  // Render only on the client (needed for the portal)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-open on the home page every time it loads or refreshes.
  // Every other page (about, departments, 404...) starts closed.
  useEffect(() => {
    if (!mounted) return;
    setOpen(pathname === '/');
  }, [mounted, pathname]);

  // Collapse after real mouse movement / touch / scroll outside the popup
  useEffect(() => {
    if (!mounted || !open) return;

    const mountedAt = Date.now();
    const startScroll = window.scrollY;
    let startX = null;
    let startY = null;

    const insidePanel = (target) => {
      const panel = panelRef.current;
      return (
        panel &&
        (panel.contains(target) || panel.contains(document.activeElement))
      );
    };

    function cleanup() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('scroll', onScroll);
    }

    const collapse = () => {
      setOpen(false);
      cleanup();
    };

    function onMove(e) {
      // remember the first cursor position, ignore fake events with same position
      if (startX === null) {
        startX = e.clientX;
        startY = e.clientY;
        return;
      }
      if (Date.now() - mountedAt < GRACE_MS) return;
      if (insidePanel(e.target)) return;
      if (Math.hypot(e.clientX - startX, e.clientY - startY) > MOVE_DISTANCE) {
        collapse();
      }
    }

    function onTouch(e) {
      if (Date.now() - mountedAt < GRACE_MS) return;
      if (!insidePanel(e.target)) collapse();
    }

    function onScroll() {
      if (Date.now() - mountedAt < GRACE_MS) return;
      if (Math.abs(window.scrollY - startScroll) > 80) collapse();
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return cleanup;
  }, [mounted, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'level' ? { course: '' } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('done');
      setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop: fades the page while the popup is open */}
      <div
        className={`enq-overlay ${open ? 'enq-overlay-show' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* The popup */}
      <aside
        ref={panelRef}
        className={`enq-panel ${open ? 'enq-panel-open' : ''}`}
        role="dialog"
        aria-label="Admission enquiry"
      >
        <div className="enq-header">
          <button
            type="button"
            className="enq-close"
            onClick={() => setOpen(false)}
            aria-label="Close enquiry form"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h3 className="enq-title">Admission Enquiry</h3>
          <span className="enq-session">Academic Session 2027-28</span>
        </div>

        <form className="enq-body" onSubmit={handleSubmit}>
          <label className="enq-field">
            <span className="enq-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              className="enq-input"
              type="text"
              name="name"
              placeholder="Applicant Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="enq-field">
            <span className="enq-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input
              className="enq-input"
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              value={form.mobile}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              title="Enter a valid 10-digit mobile number"
              required
            />
          </label>

          <label className="enq-field enq-select">
            <span className="enq-icon">
              <FontAwesomeIcon icon={faListUl} />
            </span>
            <select
              className="enq-input"
              name="level"
              value={form.level}
              onChange={handleChange}
            >
              {Object.keys(COURSES).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <span className="enq-caret">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </label>

          <label className="enq-field enq-select">
            <span className="enq-icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <select
              className="enq-input"
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose Course *
              </option>
              {COURSES[form.level].map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <span className="enq-caret">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </label>

          <button
            type="submit"
            className="enq-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Apply Now'}
            <span className="enq-arrow-chip">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>

          {status === 'done' && (
            <p className="enq-success">
              Thank you! Our team will contact you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="enq-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </aside>

      {/* Left bar: solid navy bar with white icon on desktop, round call button on mobile */}
      <button
        type="button"
        className={`enq-tab ${!open ? 'enq-tab-show' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open admission enquiry form"
      >
        <span className="enq-tab-icon">
          <FontAwesomeIcon icon={faPhoneVolume} />
        </span>
        <span className="enq-tab-text">Admission Enquiry</span>
      </button>
    </>,
    document.body
  );
}