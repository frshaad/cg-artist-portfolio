import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const ContactForm = () => {
  const emailJsServiceID = import.meta.env.VITE_EMAILJS_SERVICEID;
  const emailJsTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef();
  const submitBtn = document.getElementById("submit-btn");

  const sendEmail = (e) => {
    e.preventDefault();
    submitBtn.value = "Sending...";

    emailjs
      .sendForm(
        emailJsServiceID,
        emailJsTemplateID,
        form.current,
        emailJsPublicKey
      )
      .then(
        (result) => {
          submitBtn.value = "Sent!";
          setTimeout(() => {
            submitBtn.value = "Send";
          }, 10000);
        },
        (error) => {
          submitBtn.classList.add("text-red-700");
          submitBtn.value = "Not Sent!";
          setTimeout(() => {
            submitBtn.value = "Send";
            submitBtn.classList.remove("text-green-700");
          }, 10000);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid grid-cols-1 justify-items-center gap-5"
    >
      <input
        id="user-name"
        type="text"
        name="user_name"
        placeholder="What's your name?"
        required
        className="contact-input"
      />

      <input
        id="user-email"
        type="email"
        name="user_email"
        placeholder="Enter your email"
        required
        className="contact-input"
      />

      <textarea
        id="user-meassage"
        name="message"
        placeholder="Write down the message..."
        required
        rows="3"
        className="contact-input"
      />
      <input
        id="submit-btn"
        type="submit"
        value="Send"
        className="dark-shadow mx-auto mt-3 flex cursor-pointer items-center rounded-lg bg-black px-8 py-3 text-center text-white transition-all duration-300 ease-in-out"
      />
    </form>
  );
};
