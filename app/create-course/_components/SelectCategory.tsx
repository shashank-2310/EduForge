import { UserInputContext } from '@/app/_context/UserInputContext';
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectCategory() {
    const { userInput, setUserInput } = useContext(UserInputContext);

    const handleCategoryChange = (category: string) => {
        setUserInput((prev : any) => ({
            ...prev,
            category: category
        }))
    }

    return (
        <div className='px-10 md:px-20'>
            <h2 className='my-5'>Select the Course Category</h2>
            <div className='grid grid-cols-3 gap-10'>
                {CategoryList.map((category, index) => (
                    //TODO: Fix the ts-ignore
                    // @ts-ignore
                    <div className={`flex flex-col items-center rounded-xl hover:border-primary hover:bg-blue-50 p-5 border cursor-pointer ${userInput?.category == category.name && "border-primary bg-blue-50"}`}
                        key={index}
                        onClick={() => handleCategoryChange(category.name)}
                    >
                        <Image priority src={category.icon} alt='category-image' width={50} height={50} />
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectCategory