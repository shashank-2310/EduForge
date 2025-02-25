import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React, { useContext } from 'react'

function TopicsDescription() {
    const { userInput, setUserInput } = useContext(UserInputContext);

    const handleInputChange = (fieldName : string, value : string) => {
        setUserInput((prev: any) => ({
            ...prev,
            [fieldName]: value
        }))
    }
    
    return (
        <div className='mx-20 lg:mx-44'>
            <div className="mt-5">
                <div className='flex gap-1 items-center pb-1'>
                    <Image src='./bulb.svg' alt='bulb' width={25} height={25} />
                    <label>Write the for which you want to generate a course (e.g., Python Course, Yoga, etc.):</label>
                </div>
                <Input className='h-14 text-xl' placeholder='Topic' onChange={(e) => handleInputChange('topic', e.target.value)} />
            </div>
            <div className="mt-5">
                <div className='flex gap-1 items-center pb-1'>
                    <Image src='./notepad.svg' alt='notepad' width={25} height={25} />
                    <label>Tell us more about your course, what you want to include in the course (Optional)</label>
                </div>
                <Textarea className='h-24 text-xl' placeholder='About your course' onChange={(e) => handleInputChange('description', e.target.value)} />
            </div>
        </div>
    )
}

export default TopicsDescription