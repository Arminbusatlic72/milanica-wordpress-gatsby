import React from "react"

const ContactFormBig = props => {
  return (
    <form method="post" action="#" className="contact-form" data-netlify="true">
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
        {props.message}
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
          placeholder=" Type your email address"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.phone}
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder=" Type your tel number"
          className="contact-form__input"
        />
      </label>
      <label className="contact-form__label">
        {props.web}
        <input
          type="text"
          name="web"
          id="web"
          placeholder=" Subject"
          className="contact-form__input"
        />
      </label>

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  )
}

export default ContactFormBig
