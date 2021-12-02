import React from "react"
import Icon from "../../assets/contactIcon.svg"
import ContactFormBig from "./../contactPageSection/ContactFormBig"

const PageContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="global-wrapper">
        <Icon />
        <h6 className="contact-form-section__subheading">Get in touch</h6>
        <h2 className="contact-form-section__heading">
          Schedule an Appointment
        </h2>
        <ContactFormBig
          name={"Hey my name is"}
          subject={"and I am looking for"}
          email={"Get in touch with me at"}
          message={"And I am looking for"}
          phone={"or via phone number"}
        />
      </div>
    </section>
  )
}

export default PageContactFormSection
