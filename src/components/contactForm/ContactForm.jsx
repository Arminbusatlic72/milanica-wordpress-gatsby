import React from "react"

const ContactForm = props => {
  return (
    <form
      name="learning-makeover-contact-form-sm"
      method="POST"
      className="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value="learning-makeover-contact-form-sm"
      />
      <label className="contact-form__label">
        {props.name}
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Type Here"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.email}
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" Type your email address"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.subject}
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder=" Subject"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.message}
        <textarea
          name="message"
          id="message"
          rows="1"
          placeholder="Type your message"
          className="contact-form__input textarea"
        />
      </label>
      <input className="button" type="submit" value="Send us message" />
    </form>
  )
}

export default ContactForm
