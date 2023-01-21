import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BiMailSend } from "react-icons/bi";

export const ContactForm = () => {
  const emailJsServiceID = import.meta.env.VITE_EMAILJS_SERVICEID;
  const emailJsTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef();
  const submitBtn = document.getElementById("submit-btn");
  // const userName = document.getElementById("user-name");
  // const userEmail = document.getElementById("user-email");
  // const userMessage = document.getElementById("user-message");

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
          submitBtn.classList.add("text-green-700");
          submitBtn.value = "Sent!";
          setTimeout(() => {
            submitBtn.value = "Send";
            submitBtn.classList.remove("text-green-700");
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
      className='grid grid-cols-1 justify-items-center gap-5'
    >
      <input
        id='user-name'
        type='text'
        name='user_name'
        placeholder="What's your name?"
        required
        className='contact-input'
      />

      <input
        id='user-email'
        type='email'
        name='user_email'
        placeholder='Enter your email'
        required
        className='contact-input'
      />

      <textarea
        id='user-meassage'
        name='message'
        placeholder='Write down the message...'
        required
        rows='3'
        className='contact-input'
      />
      <input
        id='submit-btn'
        type='submit'
        value='Send'
        className='mx-auto w-1/3 cursor-pointer pt-3 text-xl font-medium text-cyan-800 dark:text-cyan-500'
      />
    </form>
  );
};
