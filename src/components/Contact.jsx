import "./about.scss";
import { ContactForm } from "./ContactForm";
import { ContactSocial } from "./ContactSocial";
import { ContactTitle } from "./ContactTitle";
import { Spacer } from "./Spacer";

export const Contact = () => {
  return (
    <section
      id='contact'
      className='mt-48 mb-28 flex w-full items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-black lg:mb-44 lg:mt-56 lg:flex-row 2xl:mb-48 2xl:mt-64 '
      // style={{ backgroundImage: `url(/images/contact-bg.jpg)` }}
    >
      <article className='mx-auto flex w-11/12 max-w-xl flex-col rounded-xl bg-[rgb(255,255,255,0.5)] p-4 drop-shadow-2xl backdrop-blur-md md:p-8 '>
        <ContactTitle />
        <ContactSocial />
        <Spacer />
        <ContactForm />
      </article>
    </section>
  );
};
