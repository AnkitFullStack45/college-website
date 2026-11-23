import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./approvals.css";

export const metadata = {
    title: "Affiliations & Approvals | TEMPL Group of Institutions",
    description:
        "Explore the approvals, recognitions and academic affiliations of TEMPL Group of Institutions, including IET College and LSR Law Academy, Ghaziabad.",
    alternates: {
        canonical: "https://www.templgroup.in/about/approvals",
    },
};

const approvalBodies = [
    {
        id: 1,
        shortName: "NAAC",
        name: "National Assessment and Accreditation Council",
        image: "/images/approvals/naac.webp",
    },
    {
        id: 2,
        shortName: "NCTE",
        name: "National Council for Teacher Education",
        image: "/images/approvals/ncte.webp",
    },
    {
        id: 3,
        shortName: "SCERT",
        name: "State Council of Educational Research and Training",
        image: "/images/approvals/scert.webp",
    },
    {
        id: 4,
        shortName: "CCSU",
        name: "Chaudhary Charan Singh University, Meerut",
        image: "/images/approvals/ccsu.webp",
    },
    {
        id: 5,
        shortName: "AICTE",
        name: "All India Council for Technical Education",
        image: "/images/approvals/aicte.webp",
    },
    {
        id: 6,
        shortName: "BCI",
        name: "Bar Council of India, New Delhi",
        image: "/images/approvals/bci.webp",
    },
    {
        id: 7,
        shortName: "UGC",
        name: "University Grants Commission",
        image: "/images/approvals/ugc.webp",
    },
    {
        id: 8,
        shortName: "MINISTRY OF EDUCATION",
        name: "Ministry of Education, Government of India",
        image: "/images/Approvals/Mhrd.webp",
    },
];

const programmes = [
    {
        id: 1,
        programme: "Bachelor of Computer Applications (BCA)",
        college: "IET College",
        affiliation: "Chaudhary Charan Singh University, Meerut",
    },
    {
        id: 2,
        programme: "Bachelor of Business Administration (BBA)",
        college: "IET College",
        affiliation: "Chaudhary Charan Singh University, Meerut",
    },
    {
        id: 3,
        programme: "Bachelor of Commerce (B.Com.)",
        college: "IET College",
        affiliation: "Chaudhary Charan Singh University, Meerut",
    },
    {
        id: 4,
        programme: "Bachelor of Education (B.Ed.)",
        college: "IET College",
        affiliation: "CCSU, Meerut / NCTE",
    },
    {
        id: 5,
        programme: "Master of Education (M.Ed.)",
        college: "IET College",
        affiliation: "CCSU, Meerut / NCTE",
    },
    {
        id: 6,
        programme: "Bachelor of Physical Education and Sports (BPES)",
        college: "IET College",
        affiliation: "Chaudhary Charan Singh University, Meerut",
    },
    {
        id: 7,
        programme: "Diploma in Elementary Education (D.El.Ed.)",
        college: "IET College",
        affiliation: "SCERT / Relevant Examining Authority",
    },
    {
        id: 8,
        programme: "Bachelor of Laws (LL.B.)",
        college: "LSR Law Academy",
        affiliation: "CCSU, Meerut / Bar Council of India",
    },
    {
        id: 9,
        programme: "Bachelor of Arts – Bachelor of Laws (BA LL.B.)",
        college: "LSR Law Academy",
        affiliation: "CCSU, Meerut / Bar Council of India",
    },
];

export default function ApprovalsPage() {
    return (
        <main className="affiliations-page">

            {/* =================================
                PAGE HERO
            ================================= */}

            <section className="affiliations-hero">

                <div className="affiliations-hero-overlay"></div>

                <div className="affiliations-hero-content">

                    <span className="affiliations-eyebrow">
                        TEMPL GROUP OF INSTITUTIONS
                    </span>

                    <h1>
                        Affiliations & <span>Approvals</span>
                    </h1>

                    <p>
                        Our commitment to recognised education,
                        academic standards and institutional excellence.
                    </p>

                    <div className="affiliations-breadcrumb">

                        <Link href="/">Home</Link>

                        <i className="fa-solid fa-chevron-right"></i>

                        <Link href="/about">About TEMPL</Link>

                        <i className="fa-solid fa-chevron-right"></i>

                        <span>Affiliations & Approvals</span>

                    </div>

                </div>

            </section>


            {/* =================================
                INTRODUCTION
            ================================= */}

            <section className="affiliations-intro">

                <div className="affiliations-container">

                    <div className="affiliations-intro-badge">
                        <i className="fa-solid fa-certificate"></i>
                        RECOGNISED & APPROVED
                    </div>

                    <h2>
                        Our Approvals & <span>Affiliations</span>
                    </h2>

                    <p>
                        TEMPL Group of Institutions is committed to
                        providing quality education through recognised
                        academic affiliations and regulatory frameworks.
                        Our institutions work in accordance with the
                        applicable guidelines of universities and
                        statutory education bodies.
                    </p>

                    <p>
                        IET College and LSR Law Academy offer programmes
                        under their respective academic and regulatory
                        frameworks, supporting quality education and
                        professional development.
                    </p>

                </div>

            </section>


            {/* =================================
                RECOGNISED BODIES
            ================================= */}

            <section className="recognised-section">

                <div className="affiliations-container">

                    <div className="section-heading">

                        <span className="section-label">
                            OUR RECOGNITION
                        </span>

                        <h2>
                            Recognised <span>Bodies</span>
                        </h2>

                        <p>
                            Academic and statutory organisations
                            associated with our institutions and programmes.
                        </p>

                    </div>


                    <div className="recognised-grid">

                        {approvalBodies.map((item) => (

                            <div
                                className="recognised-card"
                                key={item.id}
                            >

                                <div className="recognised-logo">

                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={120}
                                        height={100}
                                    />

                                </div>

                                <div className="recognised-info">

                                    <span className="recognised-short-name">
                                        {item.shortName}
                                    </span>

                                    <h3>
                                        {item.name}
                                    </h3>

                                </div>

                                <div className="recognised-card-icon">
                                    <i className="fa-solid fa-check"></i>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================
                PROGRAMME AFFILIATIONS
            ================================= */}

            <section className="programme-section">

                <div className="affiliations-container">

                    <div className="section-heading">

                        <span className="section-label">
                            ACADEMIC INFORMATION
                        </span>

                        <h2>
                            Programme-wise <span>Affiliations</span>
                        </h2>

                        <p>
                            Explore the academic affiliations and
                            applicable regulatory bodies for the
                            programmes offered at TEMPL.
                        </p>

                    </div>


                    <div className="programme-table-wrapper">

                        <table className="programme-table">

                            <thead>

                                <tr>
                                    <th>S.No.</th>
                                    <th>Programme</th>
                                    <th>Institution</th>
                                    <th>Affiliation / Approval</th>
                                </tr>

                            </thead>

                            <tbody>

                                {programmes.map((item) => (

                                    <tr key={item.id}>

                                        <td>
                                            {String(item.id).padStart(2, "0")}
                                        </td>

                                        <td className="programme-name">
                                            {item.programme}
                                        </td>

                                        <td>
                                            <span className="college-tag">
                                                {item.college}
                                            </span>
                                        </td>

                                        <td>
                                            {item.affiliation}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <p className="programme-disclaimer">
                        Note: Affiliations and approvals are programme-specific
                        and subject to applicable university and regulatory
                        requirements. Please contact the institution for
                        programme-specific confirmation.
                    </p>

                </div>

            </section>


            {/* =================================
                BOTTOM CTA
            ================================= */}

            <section className="affiliations-cta">

                <div className="affiliations-cta-content">

                    <span>
                        YOUR FUTURE STARTS HERE
                    </span>

                    <h2>
                        Choose Quality Education.
                        <br />
                        Build a Better Future.
                    </h2>

                    <p>
                        Explore academic opportunities at IET College
                        and LSR Law Academy.
                    </p>

                    <div className="affiliations-cta-buttons">

                        <Link href="/register/enquiry" className="cta-primary">
                            Apply Now
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                        <Link href="/register/enquiry" className="cta-secondary">
                            Contact Us
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}