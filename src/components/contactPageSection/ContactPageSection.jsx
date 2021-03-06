import React from "react"
import Icon from "../../assets/contactIcon.svg"
import ContactFormBig from "./ContactFormBig"

const ContactPageSection = props => {
  return (
    <section className="contact-form-page-section">
      <div className="global-wrapper">
        <h2 className="page-heading contact-form-page-section__title">
          Contact
        </h2>
        <Icon />
        <h6 className="contact-form-page-section__subheading">{props.title}</h6>
        <h2 className="contact-form-page-section__heading">{props.subtitle}</h2>
        <ContactFormBig
          name={"Hey my name is"}
          namePlaceholder={"Type Here"}
          subject={"and I am looking for"}
          email={"Get in touch with me at"}
          emailPlaceholder={"Type your email address"}
          message={"And I am looking for"}
          messagePlaceholder={"Type your question or message"}
          phone={"or via phone number"}
          phonePlaceholder={"Type your tel number"}
          btnText={"Submit"}
        />
      </div>
    </section>
  )
}

export default ContactPageSection
