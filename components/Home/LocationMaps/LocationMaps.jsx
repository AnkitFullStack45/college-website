
"use client";

import "./LocationMaps.css";

const LOCATION = {
    name: "TEMPL Group of Institutions",
    address: "NH-58, Abupur Road, Muradnagar, Uttar Pradesh 201206",
};

const query = encodeURIComponent(
    `${LOCATION.name}, ${LOCATION.address}`
);

const EMBED_URL = `https://www.google.com/maps?q=${query}&output=embed`;

export default function LocationMap() {
    return (
        <section className="location-map-section">
            <div className="location-map-wrapper">

                <iframe
                    className="location-map-frame"
                    src={EMBED_URL}
                    title="TEMPL Group of Institutions Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />

            </div>
        </section>
    );
}
