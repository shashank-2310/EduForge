import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React from 'react'

function TopicsDescription() {
    return (
        <div className='mx-20 lg:mx-44'>
            <div className="mt-5">
                <div className='flex gap-1 items-center pb-1'>
                    <Image src='./bulb.svg' alt='bulb' width={25} height={25} />
                    <label>Write the for which you want to generate a course (e.g., Python Course, Yoga, etc.):</label>
                </div>
                <Input placeholder='Topic' />
            </div>
            <div className="mt-5">
                <div className='flex gap-1 items-center pb-1'>
                    <Image src='./notepad.svg' alt='notepad' width={25} height={25} />
                    <label>Tell us more about your course, what you want to include in the course (Optional)</label>
                </div>
                <Textarea placeholder='About your course' />
            </div>
        </div>
    )
}

export default TopicsDescription