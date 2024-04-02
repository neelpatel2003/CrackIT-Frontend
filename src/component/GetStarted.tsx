import React from "react"
import { NavLink } from "react-router-dom"
import isLoggedIn from '../variables'
export default () => {
    return (
        <section className="p-10 mb-56">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl space-y-2 md:mx-auto font-sans">
                    <h3 className="text-gray-800 font-semibold text-xl">
                        TEST YOUR
                    </h3>
                    <p className="text-blue-700 text-3xl sm:text-4xl font-serif">
                        CODING SKILLS
                    </p>
                    <h3 className="text-gray-800 font-semibold text-xl">
                        HERE
                    </h3>
                    <p className="text-gray-800 text-xl">
                        We are a team of experienced developers and designers who offer a range of Coding Questions to help you improve your Coding Skills and to help you get placed in your favourite company.
                    </p>
                </div>
                <div className="mt-3 flex justify-center">
                    <NavLink to={(isLoggedIn.isloggedIn) ? "/questions" : "/login"} className="flex justify-center w-36 py-2 px-3 text-white text-lg bg-indigo-600 duration-150 hover:bg-blue-950 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        <p className="mr-1">Get started</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}