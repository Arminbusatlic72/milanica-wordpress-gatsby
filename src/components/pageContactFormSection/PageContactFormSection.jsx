import React from "react"
import Icon from "../../assets/contactIcon.svg"
import ContactForm from "../contactForm/ContactForm"

const PageContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="global-wrapper">
        <Icon />
        <h6 className="contact-form-section__subheading">Get in touch</h6>
        <h2 className="contact-form-section__heading">
          Schedule an Appointment
        </h2>
        <ContactForm
          name="Hey, may name is"
          email="My email is"
          subject="and I am looking for"
          message="This is my message"
        />
      </div>
    </section>
  )
}

export default PageContactFormSection
