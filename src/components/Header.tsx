import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
];

const Header = () => {
  return (
    <>
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-12 py-4 max-w-6xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <Image className='w-40 h-10' src="https://binghattiweb.imgix.net/logo.svg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-xl font-bold text-white">Binghatti</a>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header