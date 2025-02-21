import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React from 'react'

function SelectCategory() {
    return (
        <div className='px-10 md:px-20'>
            <h2 className='my-5'>Select the Course Category</h2>
            <div className='grid grid-cols-3 gap-10'>
                {CategoryList.map((category, index) => (
                    <div className="flex flex-col items-center rounded-xl hover:border-primary hover:bg-blue-50 p-5 border" key={index}>
                        <Image src={category.icon} alt='category-image' width={50} height={50} />
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectCategory