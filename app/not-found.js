import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
    return (
        <main className="not-found-page">

            <div className="not-found-container">

                {/* Error Number */}
                <div className="error-number">
                    404
                </div>

                {/* Error Content */}
                <div className="error-content">

                    <span className="error-label">
                        PAGE NOT FOUND
                    </span>

                    <h1>
                        Oops! This Page Has Gone Missing.
                    </h1>

                    <p>
                        The page you are looking for may have been
                        removed, renamed, or is temporarily unavailable.
                        Don't worry, you can explore our website and
                        find what you need.
                    </p>

                    {/* Buttons */}
                    <div className="error-buttons">

                        <Link href="/" className="home-button">
                            <i className="fa-solid fa-house"></i>
                            Back to Home
                        </Link>

                        <Link href="/courses" className="courses-button">
                            Explore Courses
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                    </div>

                    <div className="error-footer">
                        <span>Need assistance?</span>
                        <a href="mailto:admin@templgroup.in">
                            Contact TEMPL Support
                        </a>
                    </div>

                </div>

            </div>

        </main>
    );
}