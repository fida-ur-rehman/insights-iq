import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (sectionId: string) => {
    setMenuOpen(false); // Close the menu after clicking
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure the scroll happens after the menu closes
  };

  return (
    <>
      <header
        className={`w-full text-primary py-2 px-2 md:px-3 fixed top-0 left-0 right-0 z-50 bg-white shadow-lg`}
        style={{ backgroundColor: 'white', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <div className="container flex items-center justify-between mx-auto">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/Frame 6.png" width={64} height={64} alt="Logo" />
            <span className="text-2xl font-bold text-primary">Insights IQ</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 px-14">
          <Link href="#" className="text-lg font-medium hover:underline" onClick={() => handleMenuClick('Why?')} prefetch={false}>
              Why?
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => handleMenuClick('Subjects')} prefetch={false}>
              Subjects
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => handleMenuClick('Overview')} prefetch={false}>
              Overview
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => handleMenuClick('Instructor')} prefetch={false}>
              Instructors
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => handleMenuClick('Partners')} prefetch={false}>
              Partners
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => handleMenuClick('FAQ')} prefetch={false}>
              FAQ
            </Link>
          </nav>
          <button className="md:hidden text-primary" onClick={toggleMenu}>
            {menuOpen ? (
              <span className="text-2xl"></span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center text-center">
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={toggleMenu}>
              <span className="text-3xl">&times;</span>
            </button>
            <Link href="#" className="text-primary-foreground text-2xl py-2" onClick={() => handleMenuClick('Why?')}>
              Why?
            </Link>
            <Link href="#" className="text-primary-foreground text-2xl py-2" onClick={() => handleMenuClick('Subjects')}>
            Subjects
            </Link>
            <Link href="#" className="text-primary-foreground text-2xl py-2" onClick={() => handleMenuClick('Overview')}>
              Overview
            </Link>
            <Link href="#" className="text-primary-foreground text-2xl py-2" onClick={() => handleMenuClick('Instructor')}>
              Instructors
            </Link>
            <Link href="#" className="text-primary-foreground text-2xl py-2" onClick={() => handleMenuClick('Partners')}>
              Partners
            </Link>
            <Link href="#" className="text-primary-foreground text-2xl py-2" onClick={() => handleMenuClick('FAQ')}>
              FAQ
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
