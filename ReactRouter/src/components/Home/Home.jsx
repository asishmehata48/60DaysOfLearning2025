import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-1 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl mt-80 sm:mt-1 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        SecureTech
                        </h2>

                        <p className="hidden sm:block text-4xl">
                        SecureTech is a student-driven initiative to empower youth with cybersecurity knowledge, helping them stay safe, smart, and secure in the digital world.
                        </p>

                        <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 font-medium text-white bg-blue-700 rounded-lg hover:opacity-75"
                        >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp;Download Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-120 rounded-full shadow" src="https://github.com/asishmehata48/SecureTech/blob/main/logo.png?raw=true" alt="image1" style={{ backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)' }}
                     />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-69  rounded-full shadow" src="https://github.com/asishmehata48/SecureTech/blob/main/logo.png?raw=true" alt="image2"
                style={{
                    backgroundImage: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                }}/>
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
    );
}
