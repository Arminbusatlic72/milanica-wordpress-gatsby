import React from "react"

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
      <label className="contact-form__label">
        {props.name}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type Here"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.subject}
        <textarea
          name="message"
          id="message"
          rows="1"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.email}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Type your email address"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.phone}
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Type your tel number"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.web}
        <input
          type="text"
          name="web"
          id="web"
          placeholder="Subject"
          className="contact-form__input"
        />
      </label>

      <input className="button" type="submit" value="Submit" />
    </form>
  )
}

export default ContactFormBig
