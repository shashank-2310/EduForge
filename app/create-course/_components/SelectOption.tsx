import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import Image from 'next/image'


function SelectOption() {
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div className='flex gap-1 items-center pb-1'>
                        <Image src='./cap.svg' alt='hat' width={25} height={25} />
                        <label className='text-sm'>Difficulty Level</label>
                    </div>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <div className='flex gap-1 items-center pb-1'>
                        <Image src='./clock.svg' alt='clock' width={25} height={25} />
                        <label className='text-sm'>Course Duration</label>
                    </div>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hour">1 Hour</SelectItem>
                            <SelectItem value="2 Hours">2 Hours</SelectItem>
                            <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <div className='flex gap-1 items-center pb-1'>
                        <Image src='./video.svg' alt='video' width={22} height={22} />
                        <label className='text-sm'>Add Video</label>
                    </div>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <div className='flex gap-1 items-center pb-1'>
                        <Image src='./book.svg' alt='book' width={25} height={25} />
                        <label className='text-sm'>Number of Chapters</label>
                    </div>
                    <Input placeholder='e.g. 3' type='number' />
                </div>
            </div>
        </div>
    )
}

export default SelectOption