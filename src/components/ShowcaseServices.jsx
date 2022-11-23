import { services } from '../data/services'

export const ShowcaseServices = () => {
  return (
    <div className='absolute left-0 bottom-0 w-[40rem] bg-gray-600 px-14 py-12'>
      <p className='mb-4 text-base font-light text-gray-400'>My Services</p>

      <ul>
        {services.map((service, index) => (
          <li className='mb-2 text-base font-light text-gray-200' key={index}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}
