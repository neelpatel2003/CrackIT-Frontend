import React from 'react'

export default () => {

    const team = [
        {
            avatar: "/team/neel2.JPG",
            name: "Neel Patel",
            title: "Full Stack Developer"
        },
        {
            avatar: "/team/divya.jpg",
            name: "Divya Patel",
            title: "Software engineer"
        },
    ]

    return (
        <section className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-4xl font-serif">
                        Our team
                    </h3>
                    <p className="text-gray-600 text-xl mt-3">
                        We are a team of developers that work Day and Night for a particular Project and our Team always try to improve ourselves.
                        Meet the people behind this project.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex justify-between mx-80">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-80 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-[160px] h-[230px] object-cover shadow-lg rounded-xl"
                                            alt="Team member photo"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-2xl text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600 text-lg">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}