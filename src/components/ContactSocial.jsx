import { BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'

export const ContactSocial = () => {
  return (
    <div className='flex items-center justify-center gap-6 px-8 pt-6 '>
      <a
        href='https://telegram.me/Mahdi_Bahmani'
        className='message-link hover:text-[#0088cc]'
      >
        <BsTelegram className='message-icon' />
      </a>
      <a
        href='https://wa.me/989367791741'
        className='message-link hover:text-[#075e54]'
      >
        <BsWhatsapp className='message-icon' />
      </a>
      <a
        href='mailto:mahdibahmani@outlook.com'
        className='message-link hover:text-[#EA4335]'
      >
        <IoMdMail className='message-icon h-9 w-9' />
      </a>
    </div>
  )
}
