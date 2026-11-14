"use client";

import "./LocationMap.css";

const LOCATION = {
    name: "TEMPL Group of Institutions",
    address: "NH-58, Abupur Road, Muradnagar, Uttar Pradesh 201206",
};

const query = encodeURIComponent(`${LOCATION.name}, ${LOCATION.address}`);

/* Embedded map (no API key needed) */
const EMBED_URL = `https://www.google.com/maps?q=${query}&output=embed`;

/* Opens the real Google Maps app / site */
const OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${query}`;

/* Opens directions to the campus */
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

export default function LocationMap() {
    return (
        <section className="location-map-section">
            <div className="location-map-wrapper">

                <iframe
                    className="location-map-frame"
                    src={EMBED_URL}
                    title="TEMPL Group of Institutions location map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                ></iframe>

                {/* Glass info card (top-left, like Google's card) */}
                <div className="location-map-card">

                    <h3>{LOCATION.name}</h3>
                    <p>{LOCATION.address}</p>

                    <div className="location-map-actions">

                        <a
                            href={OPEN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-map-btn"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M14 3h7v7" />
                                <path d="M10 14L21 3" />
                                <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                            </svg>
                            Open in Maps
                        </a>

                        <a
                            href={DIRECTIONS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-map-direction"
                            aria-label="Get directions"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M3 11l19-9-9 19-2-8-8-2z" />
                            </svg>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}