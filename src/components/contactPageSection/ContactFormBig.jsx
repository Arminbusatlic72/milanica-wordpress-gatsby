import React from "react"
import Arrow from "../../assets/btnArrow.svg"

const ContactFormBig = props => {
  return (
    <form
      name="learning-makeover-contact-form"
      method="POST"
      className="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value="learning-makeover-contact-form"
      />
      <div className="text-input__full-width">
        <label className="contact-form__label">{props.name}</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={props.namePlaceholder}
          className="contact-form__input"
          required
        />
      </div>
      <div className="text-input__full-width">
        <label className="contact-form__label">{props.subject}</label>
        <textarea
          name="message"
          id="message"
          placeholder={props.messagePlaceholder}
          className="contact-form__textarea"
          required
        />
      </div>
      <div className="text-input__wrapper">
        <div className="text-input__half-width">
          <label className="contact-form__label">{props.email}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={props.emailPlaceholder}
            className="contact-form__input"
            required
          />
        </div>
        <div className="text-input__half-width">
          <label className="contact-form__label">{props.phone}</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder={props.phonePlaceholder}
            className="contact-form__input"
            required
          />
        </div>
      </div>

      <button className="button arrow" type="submit">
        <div className="button__content-wrapper">
          {props.btnText}
          <Arrow className="button__arrow" />
        </div>
      </button>
    </form>
  )
}

export default ContactFormBig
