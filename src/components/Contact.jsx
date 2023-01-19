import { ContactForm } from "./ContactForm";
import { ContactSocial } from "./ContactSocial";
import { ContactTitle } from "./ContactTitle";
import { Spacer } from "./Spacer";

export const Contact = () => {
  return (
    <section
      id='contact'
      className='flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat p-8 dark:bg-black lg:flex-row '
      style={{ backgroundImage: `url(/images/contact-bg.jpg)` }}
    >
      <article className='mx-auto flex h-fit w-full flex-col rounded-xl bg-[rgb(255,255,255,0.5)] p-8 drop-shadow-2xl backdrop-blur-md  dark:bg-[rgb(0,0,0,0.5)]  md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-3/12'>
        <ContactTitle />
        <ContactSocial />
        <Spacer />
        <ContactForm />
      </article>
    </section>
  );
};
