import React from "react"
import Icon from "../../assets/contactIcon.svg"
import ContactFormBig from "./ContactFormBig"

const ContactPageSection = props => {
  return (
    <section className="contact-form-page-section">
      <div className="global-wrapper">
        <h2 className="page-heading contact-form-page-section__title">
          Kontaktirajte nas
        </h2>
        <Icon />
        <h6 className="contact-form-page-section__subheading">{props.title}</h6>
        <h2 className="contact-form-page-section__heading">{props.subtitle}</h2>
        <ContactFormBig
          name={"Moje ime je"}
          namePlaceholder={"napišite Vaše ime"}
          subject={"i potrebna mi je"}
          email={"Kontaktirajte me"}
          emailPlaceholder={"napišite email adresu"}
          message={"I meni je potrebna"}
          messagePlaceholder={"napišite nam poruku"}
          phone={"ili putem telefona"}
          phonePlaceholder={"napišiti Vaš tel broj"}
          btnText={"Pošalji"}
        />
      </div>
    </section>
  )
}

export default ContactPageSection
