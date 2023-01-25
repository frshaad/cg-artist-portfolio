import "../styles/about.scss";
import { ContactForm } from "./ContactForm";
import { ContactSocial } from "./ContactSocial";
import { ContactTitle } from "./ContactTitle";
import { Spacer } from "./Spacer";

export const Contact = () => {
  return (
    <section
      id='contact'
      className='mt-64 mb-16 flex w-full items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-black lg:mb-28 lg:mt-56 lg:flex-row 2xl:mb-36 2xl:mt-64 '
    >
      <div className='m-auto flex flex-col-reverse items-center justify-center xl:flex-row'>
        <article className='relative -top-24 z-10 mx-auto  flex w-10/12 max-w-xl flex-col rounded-xl bg-[rgb(255,255,255,0.5)]  p-4 drop-shadow-2xl backdrop-blur-md md:p-8 xl:left-16 xl:top-0 '>
          <ContactTitle />
          <ContactSocial />
          <Spacer />
          <ContactForm />
        </article>

        <div className='mb-2 w-11/12 max-w-lg lg:mb-0 xl:w-10/12'>
          <img
            src='../images/mahdi.jpg'
            className='h-auto w-full rounded-xl shadow-lg drop-shadow-2xl saturate-[0.6] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:saturate-[0.75]'
            alt='Mahdi Bahmani image'
          />
        </div>
      </div>
    </section>
  );
};
