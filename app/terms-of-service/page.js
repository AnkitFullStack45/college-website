import "./terms-of-service.css";

export const metadata = {
    title: "Terms of Service | TEMPL Group of Institutions",
    description:
        "Read the Terms of Service of TEMPL Group of Institutions. Understand the rules, policies, and conditions governing the use of our website and services.",
    alternates: {
        canonical: "/terms-of-service",
    },
};

const termsSections = [
    {
        title: "Acceptance of Terms",
        content: [
            "By browsing, accessing, or submitting any information through this website, you confirm your acceptance of these Terms of Service.",
            "These terms apply to all visitors, students, prospective students, applicants, parents, and other users accessing or using the website of TEMPL Group of Institutions.",
            "If you do not agree with any part of these terms, you are requested to discontinue using this website.",
        ],
    },
    {
        title: "Use of the Site & Intellectual Property",
        content: [
            "All content available on this website, including text, logos, layout, images, graphics, videos, designs, and database information, is the intellectual property of TEMPL Group of Institutions or its respective licensors.",
            "Users are permitted to access and use the website for personal, educational, and informational purposes.",
            "Unauthorized copying, reproduction, modification, distribution, publication, or commercial use of any website content without prior written permission is strictly prohibited.",
            "Any unauthorized use of website materials may result in appropriate legal action under applicable laws.",
        ],
    },
    {
        title: "Admissions & Information Accuracy",
        content: [
            "TEMPL Group of Institutions makes reasonable efforts to ensure that the information published on its website is accurate, relevant, and up to date.",
            "The information provided may include:",
        ],
        list: [
            "Courses and academic programmes.",
            "Admission procedures and eligibility criteria.",
            "Fee structures and payment information.",
            "Scholarships and educational opportunities.",
            "Academic calendars and examination schedules.",
            "Institutional events and announcements.",
            "Faculty, facilities, and campus information.",
        ],
        extra: [
            "However, TEMPL Group of Institutions reserves the right to modify, update, or discontinue courses, admission policies, curricula, fee structures, schedules, and other institutional information whenever necessary, subject to applicable regulations.",
            "Submitting an enquiry form, registration form, or admission application through the website does not guarantee admission to any programme. Admission is subject to the applicable eligibility requirements, institutional procedures, and availability of seats.",
            "Users are encouraged to verify important admission-related information directly with the institution before making any decisions.",
        ],
    },
    {
        title: "Fee Payments & Online Transactions",
        content: [
            "Where online payment facilities are available, registration fees, academic fees, and other applicable charges may be processed through authorized payment gateways or service providers.",
            "By making an online payment, you agree to provide accurate and complete payment information and ensure that you are authorized to use the selected payment method.",
            "All online transactions are subject to the applicable terms, conditions, and security policies of the respective payment service providers.",
            "TEMPL Group of Institutions shall not be responsible for payment failures, delays, or technical issues caused by third-party payment gateways, banks, or financial institutions, except where liability cannot be excluded under applicable law.",
        ],
    },
    {
        title: "Refund and Cancellation Policy",
        content: [
            "Refunds and cancellations relating to registration fees, admission fees, academic fees, or other payments are governed by the official refund and cancellation policies of TEMPL Group of Institutions and applicable regulatory requirements.",
            "Refund eligibility, applicable deductions, processing timelines, and cancellation procedures may vary depending on the nature of the payment and the applicable institutional rules.",
            "For information regarding refunds or payment cancellations, students and applicants should contact the college administration or refer to the relevant official fee payment guidelines.",
        ],
    },
    {
        title: "Security & Fraud Prevention",
        content: [
            "Users agree to access and use this website responsibly and shall not engage in any activity that may compromise its security, functionality, or availability.",
            "The following activities are strictly prohibited:",
        ],
        list: [
            "Attempting unauthorized access to website servers, databases, or restricted areas.",
            "Introducing viruses, malware, malicious scripts, or harmful code.",
            "Attempting to disrupt, damage, or interfere with website operations.",
            "Using unauthorized automated tools, bots, or scraping systems to collect website information.",
            "Attempting to access, modify, or misuse another user's personal information.",
            "Engaging in fraudulent activities or submitting false information.",
            "Misusing website forms, registration facilities, or communication channels.",
        ],
        extra: [
            "Any suspected security breach, fraudulent activity, or unauthorized access attempt may be investigated and reported to the appropriate authorities in accordance with applicable laws.",
        ],
    },
    {
        title: "Limitation of Liability",
        content: [
            "TEMPL Group of Institutions makes reasonable efforts to maintain the availability, accuracy, and reliability of its website. However, we do not guarantee uninterrupted access or that the website will always be free from errors, technical issues, or temporary service interruptions.",
            "To the extent permitted by applicable law, TEMPL Group of Institutions shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:",
        ],
        list: [
            "The use of or inability to access this website.",
            "Errors, omissions, or inaccuracies in published information.",
            "Temporary website interruptions or technical failures.",
            "Unauthorized access or misuse caused by factors beyond our reasonable control.",
            "Actions or services provided by third-party websites or service providers.",
        ],
        extra: [
            "Nothing in these Terms of Service excludes or limits any liability that cannot legally be excluded or limited under applicable laws.",
        ],
    },
    {
        title: "Governing Law & Jurisdiction",
        content: [
            "These Terms of Service shall be governed by and interpreted in accordance with the laws of India.",
            "Any disputes, claims, or legal proceedings arising out of or in connection with the use of this website shall be subject to the jurisdiction of the competent courts located in Ghaziabad, Uttar Pradesh, India, subject to applicable law.",
        ],
    },
    {
        title: "Changes to These Terms",
        content: [
            "TEMPL Group of Institutions reserves the right to revise, modify, update, or replace any part of these Terms of Service at its discretion.",
            "Any changes will be published on this page. Continued use of the website after such changes are published constitutes acceptance of the revised terms, to the extent permitted by applicable law.",
            "Users are encouraged to review this page periodically to remain informed about the latest Terms of Service.",
        ],
    },
];

export default function TermsOfService() {
    return (
        <main className="terms-page">

            {/* Hero Section */}
            <section className="terms-hero">

                <div className="terms-hero-overlay"></div>

                <div className="terms-hero-content">

                    <span className="terms-subtitle">
                        TRANSPARENCY & RESPONSIBILITY
                    </span>

                    <h1>Terms of Service</h1>

                    <p>
                        Understanding the terms and conditions
                        governing your use of our website.
                    </p>

                    <div className="terms-breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Terms of Service</span>
                    </div>

                </div>
            </section>

            {/* Main Content */}
            <section className="terms-container">

                {/* Introduction */}
                <div className="terms-intro">

                    <div className="terms-intro-icon">
                        <i className="fa-solid fa-file-contract"></i>
                    </div>

                    <div>
                        <h2>Welcome to TEMPL Group of Institutions</h2>

                        <p>
                            Welcome to the official website of TEMPL Group
                            of Institutions. By accessing or using this
                            website, you agree to comply with and be bound
                            by the following Terms of Service. These terms
                            establish the conditions governing your use
                            of our website and its available services.
                        </p>

                        <p>
                            If you do not agree with these terms,
                            please do not use this website.
                        </p>
                    </div>

                </div>

                <div className="terms-layout">

                    {/* Sidebar */}
                    <aside className="terms-sidebar">

                        <h3>On This Page</h3>

                        <ul>
                            {termsSections.map((section, index) => (
                                <li key={index}>
                                    <a href={`#terms-${index + 1}`}>
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </aside>

                    {/* Terms Content */}
                    <div className="terms-content">

                        {termsSections.map((section, index) => (
                            <article
                                className="terms-section"
                                id={`terms-${index + 1}`}
                                key={index}
                            >

                                <div className="terms-section-heading">

                                    <span className="terms-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h2>{section.title}</h2>

                                </div>

                                <div className="terms-section-body">

                                    {section.content?.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}

                                    {section.list && (
                                        <ul>
                                            {section.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.extra?.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}

                                </div>

                            </article>
                        ))}

                        {/* Final Note */}
                        <div className="terms-final-note">

                            <i className="fa-solid fa-circle-info"></i>

                            <div>
                                <h3>Need More Information?</h3>

                                <p>
                                    For further information regarding
                                    institutional policies, admissions,
                                    or website-related matters, please
                                    contact TEMPL Group of Institutions
                                    through our official website.
                                </p>

                                <a
                                    href="https://www.templgroup.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Official Website

                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}