import React from "react";
import emailjs from "@emailjs/browser";

const ContactOld = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.name.value !== "" &&
      e.target.name.value.length >= 2 &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.email.value)
    ) {
      emailjs
        .sendForm(
          "service_11icnme",
          "template_j16x3vw",
          e.target,
          "user_a7Y2EsYnydCGWgrqhjDdR"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    e.target.reset();
  };

  return (
    <div className="contact-overlay" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Un renseignement ?</h2>
          <h2>Une question ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reiciendis nihil.
          </p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-detail">
            <div>
              <input type="text" name="name" required />
              <label>Nom</label>
            </div>
            <div>
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
          </div>
          <div className="form-textarea">
            <textarea name="message" required />
            <label>Message</label>
          </div>
          <input className="send" type="submit" value="Envoyer" />
        </form>
      </div>
      <div className="info">
        <div className="info-container">
          <h4>JOHAN-DAMIOT</h4>
          <h4>06 13 31 44 32</h4>
          <h4>johan.soulanges@gmail.com</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactOld;
