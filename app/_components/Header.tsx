import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between p-5 shadow-sm'>
            <Image src="/logo.png" alt="logo" width={150} height={100} />
            <Button>Get Started</Button>
        </div>
    )
}

export default Header