"use client";

import "./WhatsappButton.css";

export default function WhatsAppButton() {
const phoneNumber = "918476995966";

const message = "Hello! I would like to know more about TEMPL Group of Institutions.";

return (
    <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        className="whatsapp-side-tab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
    >
        <i className="fa-brands fa-whatsapp whatsapp-icon"></i>

        <span className="whatsapp-text">
            chat On Whatsapp
        </span>
    </a>
);

}

