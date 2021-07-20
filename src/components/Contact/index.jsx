import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleSubmit(event) {
    event.preventDefault();
    if(!errorMessage) {
      setFormState({ [event.target.name]: event.target.value });
      console.log("Form", formState);
    }
  }

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
  }
  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="Message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
