import React from "react";
import "./contactme.css";
function ContactMe() {
  return (
    <div id="contact-me" className="">
      <h1>Contact Me</h1>
      <div id="contact-me-container" className="px-3">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1815.1697230153788!2d77.15154403854703!3d24.508334035086854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.509451499999997!2d77.151004!4m5!1s0x397af84de06e73dd%3A0xac998c8be4739529!2sNFL%20Township%2C%20Vijaipur%2C%20Madhya%20Pradesh!3m2!1d24.5072051!2d77.1541542!5e0!3m2!1sen!2sin!4v1743830257632!5m2!1sen!2sin"
            className="rounded-md"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div id="form">
          <h2>Send A Message</h2>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your mail"
              required
            />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Write a message. Some suggestions"
            ></textarea>
            <button className="bg-green-400 py-3 font-sans font-bold hover:bg-black">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
