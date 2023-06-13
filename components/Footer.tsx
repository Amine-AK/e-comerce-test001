import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex dlex-col text-black-100 
    mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col
        flex-wrap justify-between gap-5 sm:px-16
        px-6 py-10'>
        <div className="flex flex-col justify-start items-start gap-6">
          <Image 
            src="/logo.png"
            alt="logo discription"
            width={118} height={18}
            className="object-contain"/>
            <p className='text-base text-gray-700'>
              MyStore 2023 <br/>
              All rights reserved &copy;
            </p>
        </div>
        <div className="footer__links link-list">
          {footerLinks.map((link) => (
            <><div key={link.title}
              className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div></>
          ))}
          
        </div>
      </div>
      <div className='justify-between items-center flex-wrap mt-10 border-t
          border-gray-100 sm:px16 px-6 py-10 privacy' >
        <p>
          @2023 MyStore All Rights Reseved
        </p>
        <div className='footer__copyright-link'>
          <Link href="/" className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href="/" className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
      

    </footer>
  )
}
