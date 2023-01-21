import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BiMailSend } from "react-icons/bi";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "mahdi_bahmani",
        "template_y8oz8gf",
        form.current,
        "1H21uTkhIHaS-KyqI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
        type='text'
        name='user_name'
        placeholder="What's your name?"
        required
        className='contact-input'
      />

      <input
        type='email'
        name='user_email'
        placeholder='Enter your email'
        required
        className='contact-input'
      />

      <textarea
        name='message'
        placeholder='Write down the message...'
        required
        rows='3'
        className='contact-input'
      />
      <input
        type='submit'
        value='Send'
        className='mx-auto w-1/3 cursor-pointer pt-3 text-xl font-medium text-cyan-800 dark:text-cyan-500'
      />
    </form>
  );
};
