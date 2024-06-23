'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveItem('Solid Documentation');
        break;
      case '/add-resource':
        setActiveItem('Add a Resource');
        break;
      case '/glossary':
        setActiveItem('Glossary');
        break;
      default:
        console.log(`404`);
    }
  }, [pathname]);

  return (
    <div className="flex bg-primary-800 mb-10 pl-5 py-3">
      <Link
        className={
          activeItem === 'Solid Documentation'
            ? 'text-2xl mr-4 text-primary-300 text-shadow-neonGlow'
            : 'text-2xl mr-4 text-primary-300 hover:text-shadow-neonGlow'
        }
        href="/"
      >
        Solid Documentation
      </Link>
      <Link
        className={
          activeItem === 'Add a Resource'
            ? 'text-2xl mr-4 text-primary-300 text-shadow-neonGlow'
            : 'text-2xl mr-4 text-primary-300 hover:text-shadow-neonGlow'
        }
        href="/add-resource"
      >
        Add a Resource
      </Link>
      <Link
        className={
          activeItem === 'Glossary'
            ? 'text-2xl mr-4 text-primary-300 text-shadow-neonGlow'
            : 'text-2xl mr-4 text-primary-300 hover:text-shadow-neonGlow'
        }
        href="/glossary"
      >
        Glossary
      </Link>
    </div>
  );
}
