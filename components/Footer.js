import Link from "next/link";
import "./Footer.css";

export default function Footer() {
return ( <footer className="main-footer">
        <div className="footer-container">

            {/* Column 1: College Information */}
            <div className="footer-column footer-about">

                <Link href="/">
                    <img
                        src="/images/templ.webp"
                        alt="TEMPL Group of Institutions"
                        className="footer-logo"
                    />
                </Link>

                <ul className="footer-contact-list">
                    <li>
                      TEMPL Group of Institutions, Knowledge and Innovation Campus,
                       NH-58 Abupur Road, Muradnagar, Midway between Muradnagar and Modinagar, 
                       Near SRM University, Ghaziabad (Delhi-NCR), Uttar Pradesh - 201206
                    </li>

                    <li>
                        <a href="tel:+919422218868">+91 9422218868</a>,
                        {" "}
                        <a href="tel:+919319828699">9319828699</a>,
                        {" "}
                        <a href="tel:+918865961096">8865961096</a>
                    </li>

                    <li>
                        <a href="mailto:admin@templgroup.in">
                            admin@templgroup.in
                        </a>
                        <br />
                        <a href="mailto:info@templgroup.in">
                            info@templgroup.in
                        </a>
                    </li>
                </ul>
            </div>


            {/* Column 2: Useful Links */}
            <div className="footer-column">

                <h3>Useful Links</h3>

                <ul className="footer-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-templ">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/campus">Campus</Link></li>
                    <li><Link href="/placement">Placement</Link></li>
                    <li><Link href="/blog-login">Blog Login</Link></li>
                </ul>

            </div>

         {/* Column 3: Our Services */}
            <div className="footer-column">

                <h3>Our Services</h3>

                <ul className="footer-links">
                    <li><Link href="/departments">Departments</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/colleges">Colleges</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/terms-of-service">Terms of Service</Link></li>
                </ul>

            </div>

            {/* Column 4: Social Networks */}
            <div className="footer-column">

                <h3>Our Social Networks</h3>

                <div className="footer-social">
                    <a
                        href="https://www.facebook.com/profile.php?id=100063790814316/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/templgroup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a
                        href="https://www.youtube.com/@TEMPLGroupofinstitutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                    >
                        <i className="fa-brands fa-youtube"></i>
                    </a>

                </div>

            </div>

        </div>


        {/* Copyright Section */}
        <div className="footer-bottom">
            <p>
                Copyright © 2026 TEMPL Group of Institutions. All rights reserved.
            </p>
        </div>

    </footer>
);
}
