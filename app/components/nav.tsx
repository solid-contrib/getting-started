'use client'

import { MouseEvent, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState('')
  const navItems = ['Solid Documentation', 'Add a Resource']
  const router = useRouter()

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveItem('Solid Documentation')
        break
      case '/add-resource':
        setActiveItem('Add a Resource')
        break
      default:
        console.log(`404`)
    }
  }, [pathname])

  const handleClick = (e: any) => {
    let link = ''
    switch (e.target.innerText) {
      case 'Add a Resource':
        link = 'add-resource'
        break
      case 'Solid Documentation':
        link = '/'
        break
      default:
        '/'
    }
    router.push(link)
  }

  return (
    <div className="flex bg-primary-800 mb-10 pl-5 py-3">
      {navItems.map((item) => (
        <button
          key={item}
          className={
            activeItem === item
              ? 'text-2xl mr-4 text-primary-300 text-shadow-neonGlow'
              : 'text-2xl mr-4 text-primary-300 hover:text-shadow-neonGlow'
          }
          onClick={(e) => handleClick(e)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
