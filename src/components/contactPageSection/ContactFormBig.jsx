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
          placeholder="Type Here"
          className="contact-form__input"
          required
        />
      </div>
      <div className="text-input__full-width">
        <label className="contact-form__label">{props.subject}</label>
        <textarea
          name="message"
          id="message"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
            placeholder="Type your email address"
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
            placeholder="Type your tel number"
            className="contact-form__input"
            required
          />
        </div>
      </div>
      {/* <div className="text-input__half-width">
        <label className="contact-form__label">{props.web}</label>
        <input
          type="text"
          name="web"
          id="web"
          placeholder="Subject"
          className="contact-form__input"
          required
        />
      </div> */}

      <button className="button arrow" type="submit">
        <div className="button__content-wrapper">
          Submit
          <Arrow className="button__arrow" />
        </div>
      </button>
    </form>
  )
}

export default ContactFormBig
