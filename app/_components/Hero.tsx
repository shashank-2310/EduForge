import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
                        EduForge
                        <strong className="font-extrabold text-black sm:block">Custom Learning Paths, Powered by AI</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Forge your path to knowledge with tailor-made lessons. Personalized courses crafted to suit your learning goals and help you master any subject                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-secondary focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero