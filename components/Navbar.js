"use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    // ABOUT TEMPL
    {
        name: "About TEMPL",
        href: "/about",
        submenu: [
            { name: "Our Spiritual Guides", href: "/about/spiritual-guides" },
            { name: "Our Inspirations", href: "/about/inspirations" },
            { name: "About TEMPL Group", href: "/about" },
            { name: "Milestones", href: "/about/milestones" },
            { name: "Vision & Mission", href: "/about/vision-mission" },
            { name: "Chairman's Message", href: "/about/chairman-message" },
            { name: "Vice Chairperson's Message", href: "/about/vice-chairperson-message"},
            { name: "Director's Message",href: "/about/director-message"},
            { name: "Head - Administrations & Finance Message", href: "/about/head-administration-finance-message"},
        ],
    },
    // OUR EDGE
    {
        name: "Our Edge",
        href: "/Edge/templ-edge",
        submenu: [
            { name: "TEMPL EDGE", href: "/Edge/templ-edge" },
            { name: "Infrastructure", href: "/Edge/infrastructure" },
            { name: "Placement Facility", href: "/Edge/placement-facility" },
            { name: "Campus Life", href: "/Edge/campus-life" },
            { name: "Library", href: "/Edge/library" },
            { name: "Computer Lab", href: "/Edge/computer-lab" },
            { name: "College Club", href: "/Edge/college-clubs" },
        ],
    },
    // COLLEGES
    {
        name: "Colleges",
        href: "/colleges",
        submenu: [
            {
                name: "Institute For Education & Technical Sciences",
                href: "/colleges/iet-college",
            },
            {
                name: "LSR Law Academy",
                href: "/colleges/lsr-law-academy",
            },
        ],
    },

    // COURSES - MULTI LEVEL DROPDOWN
    {
        name: "Courses",
        href: "/courses",
        submenu: [
            {
                name: "UG Courses",
                href: "/ug-courses",
                submenu: [
                    { name: "BCA (IET)", href: "/courses/ug-courses/bca" },
                    { name: "BBA (IET)", href: "/courses/ug-courses/bba" },
                    { name: "B.Com (IET)", href: "/courses/ug-courses/bcom" },
                    { name: "B.A.LL.B (LSR)", href: "/courses/ug-courses/ballb" },
                    { name: "B.P.E.S (IET)", href: "/courses/ug-courses/bpes" },
                    { name: "B.Ed (IET)", href: "/courses/ug-courses/bed" },
                    { name: "LLB (LSR)", href: "/courses/ug-courses/llb" }
                ],
            },
            {
                name: "PG Courses",
                href: "/courses/pg-courses",
                submenu: [
                    { name: "M.Ed (IET)", href: "/courses/pg-courses/med" },
                ],
            },
            {
                name: "PG Diploma",
                href: "/courses/pg-diploma",
                submenu: [
                    {
                        name: "D.El.Ed",  href: "/courses/pg-diploma/deled",
                    },
                ],
            },
            {
                name: "English Speaking",
                href: "/courses/english-speaking",
            },
            {
                name: "Free Courses",
                href: "/courses/free-courses",
            },
        ],
    },

    // DEPARTMENTS
    {
        name: "Departments",
        href: "/departments",
        submenu: [
            {
                name: "Department of Management",
                href: "/departments/dep-management",
            },
            {
                name: "Department of Computer Science",
                href: "/departments/dep-computer",
            },
            {
                name: "Department of Commerce",
                href: "/departments/dep-commerce",
            },
            {
                name: "Department of Law",
                href: "/departments/dep-law",
            },
            {
                name: "Department of Education",
                href: "/departments/dep-education",
            },
                 
        ],
    },

    // REGISTER NOW
    {
        name: "Register Now",
        href: "/register",
        submenu: [
            { name: "Enquiry Form", href: "/register/enquiry" },
            {
                name: "Information Brochure",
                href: "/information-brochure",
            },
            { name: "Book a Demo Class", href: "/register/demo-class" },
            { name: "Admission 2026", href: "/admission-2026" },
            {
                name: "Scholarship and Career Evaluation",
                href: "/scholar-registration",
            },
            {
                name: "Webinar Registration",
                href: "/register/webinar",
            },
        ],
    },

    // STUDENT
    {
        name: "Student",
        href: "/student",
        submenu: [
            {
                name: "Semester Registration",
                href: "/sem-registration",
            },
            {
                name: "Event Registration",
                href: "/event-registration",
            },
            {
                name: "Diwali Stall Booking",
                href: "/stall",
            },
            {
                name: "MCQ Assessment",
                href: "/student/mcq_assessment_test",
            },
            {
                name: "Student Login",
                href: "/student/student_login",
            },
        ],
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Main mobile dropdown
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Nested mobile dropdown
    const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);

    // Hides desktop dropdowns after a link click (until the mouse leaves)
    const [hideDropdown, setHideDropdown] = useState(false);

    // Toggle mobile navigation
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
    };

    // Toggle main dropdown on mobile
    const toggleDropdown = (name) => {
        setActiveDropdown((prev) => (prev === name ? null : name));
        setActiveNestedDropdown(null);
    };

    // Toggle nested dropdown on mobile
    const toggleNestedDropdown = (name) => {
        setActiveNestedDropdown((prev) => (prev === name ? null : name));
    };

    // Close all menus
    const closeMenu = () => {
        setMenuOpen(false);
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
        setHideDropdown(true);
        document.activeElement?.blur();
    };

    return (
        <header className="main-navbar">
            <div className="navbar-container">

                {/* LOGO */}
                <Link href="/" className="navbar-logo" onClick={closeMenu}>
                    <img
                        src="/images/templ.webp"
                        alt="TEMPL Group of Institutions"
                    />
                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    className={`mobile-toggle ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* NAVIGATION */}
                <nav
                    className={`navbar-menu ${menuOpen ? "menu-open" : ""} ${
                        hideDropdown ? "dropdown-hidden" : ""
                    }`}
                >
                    <ul className="navbar-list">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className={`navbar-item ${
                                    item.submenu ? "has-dropdown" : ""
                                }`}
                                onMouseLeave={() => setHideDropdown(false)}
                            >
                                {/* MAIN MENU */}
                                <div className="navbar-link-wrapper">
                                    <Link
                                        href={item.href}
                                        className="navbar-link"
                                        onClick={(e) => {
                                            if (
                                                item.submenu &&
                                                window.innerWidth <= 992
                                            ) {
                                                e.preventDefault();
                                                toggleDropdown(item.name);
                                            } else {
                                                closeMenu();
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>

                                    {item.submenu && (
                                        <>
                                            <span className="desktop-arrow">
                                                <span></span>
                                            </span>

                                            <button
                                                type="button"
                                                className="mobile-arrow"
                                                onClick={() =>
                                                    toggleDropdown(item.name)
                                                }
                                                aria-label={`Toggle ${item.name}`}
                                            >
                                                <span></span>
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* FIRST DROPDOWN */}
                                {item.submenu && (
                                    <div
                                        className={`dropdown-wrapper ${
                                            activeDropdown === item.name
                                                ? "dropdown-open"
                                                : ""
                                        }`}
                                    >
                                        <ul className="dropdown-list">
                                            {item.submenu.map((subItem) => (
                                                <li
                                                    key={subItem.name}
                                                    className={`dropdown-item ${
                                                        subItem.submenu
                                                            ? "has-nested-dropdown"
                                                            : ""
                                                    }`}
                                                >
                                                    <div className="dropdown-link-wrapper">
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={(e) => {
                                                                if (
                                                                    subItem.submenu &&
                                                                    window.innerWidth <= 992
                                                                ) {
                                                                    e.preventDefault();
                                                                    toggleNestedDropdown(
                                                                        subItem.name
                                                                    );
                                                                } else {
                                                                    closeMenu();
                                                                }
                                                            }}
                                                        >
                                                            {subItem.name}
                                                        </Link>

                                                        {subItem.submenu && (
                                                            <>
                                                                <span className="nested-desktop-arrow">
                                                                    ›
                                                                </span>

                                                                <button
                                                                    type="button"
                                                                    className="nested-mobile-arrow"
                                                                    onClick={() =>
                                                                        toggleNestedDropdown(
                                                                            subItem.name
                                                                        )
                                                                    }
                                                                    aria-label={`Toggle ${subItem.name}`}
                                                                >
                                                                    ›
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* SECOND DROPDOWN */}
                                                    {subItem.submenu && (
                                                        <div
                                                            className={`nested-dropdown-wrapper ${
                                                                activeNestedDropdown ===
                                                                subItem.name
                                                                    ? "nested-dropdown-open"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <ul className="nested-dropdown-list">
                                                                {subItem.submenu.map(
                                                                    (course) => (
                                                                        <li key={course.name}>
                                                                            <Link
                                                                                href={course.href}
                                                                                onClick={closeMenu}
                                                                            >
                                                                                {course.name}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ERP LOGIN */}
                <a
                    href="https://erp.templgroup.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="erp-login"
                    aria-label="ERP Login"
                    title="ERP Login"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        fill="currentColor"
                    >
                        <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112  562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                    </svg>
                </a>
            </div>
        </header>
    );
}