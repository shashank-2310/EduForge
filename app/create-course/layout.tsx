"use client"

import React, { useState } from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContext } from '../_context/UserInputContext'

function CreateCouseLayout({ children }: { children: React.ReactNode }) {
    const [userInput, setUserInput] = useState([]);

    return (
        <div>
            <UserInputContext.Provider value={{ userInput, setUserInput }}>
                <>
                    <Header />
                    {children}
                </>
            </UserInputContext.Provider>
        </div>
    )
}

export default CreateCouseLayout