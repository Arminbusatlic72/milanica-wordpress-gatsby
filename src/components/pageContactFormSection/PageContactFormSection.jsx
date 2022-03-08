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

export default PageContactFormSection
