import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export const ContactSocial = () => {
  return (
    <div
      id='social-btns'
      className='mx-auto grid grid-cols-3 justify-items-center gap-3 px-8 lg:pt-6'
    >
      <a
        href='https://telegram.me/Mahdi_Bahmani'
        className='message-link transition-all duration-200 ease-in-out hover:text-[#0088cc]'
      >
        <BsTelegram className='message-icon' />
      </a>
      <a
        href='https://wa.me/989367791741'
        className='message-link transition-all duration-200 ease-in-out hover:text-[#075e54]'
      >
        <BsWhatsapp className='message-icon' />
      </a>
      <a
        href='mailto:mahdibahmani@outlook.com'
        className='message-link transition-all duration-200 ease-in-out hover:text-[#EA4335]'
      >
        <IoMdMail className='message-icon h-9 w-9' />
      </a>
    </div>
  );
};
