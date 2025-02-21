"use client"

import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from 'react-icons/hi2'

export default function SideBar() {

    type MenuItem = {
        id: number,
        name: string,
        icon: React.JSX.Element,
        path: string,
    }

    const Menu : MenuItem[] = [
        {
            id: 1,
            name: 'Home',
            icon: <HiOutlineHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineSquare3Stack3D />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <HiOutlineShieldCheck />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <HiOutlinePower />,
            path: '/dashboard/logout'
        }
    ]

    const pathName = usePathname();

    return (
        <div className='fixed h-full md:w-64 p-5 shadow-md'>
            <Image priority src='/logo.png' alt='logo' width={160} height={100} />
            <hr className='my-5' />
            <ul>
                {Menu.map((item: MenuItem, index: number) => (
                    <Link
                        href={item.path}
                        key={index}
                        className={`flex items-center gap-2 p-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path == pathName && 'bg-gray-100 text-black'}`}
                    >
                        <p className="text-xl">{item.icon}</p>
                        <h2>{item.name}</h2>
                    </Link>
                ))}
            </ul>

            <div className="absolute bottom-10 w-4/5">
                <Progress value={33} />
                <h2 className='text-sm my-2'>3 out of 5 Course created</h2>
                <h2 className='text-sm text-gray-500'>Upgrade your plan for unlimited course generate</h2>
            </div>
        </div>
    )
}