import React from 'react'
import Header from '../dashboard/_components/Header'

function CreateCouseLayout({children} : {children: React.ReactNode}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default CreateCouseLayout