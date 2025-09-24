"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/hello")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);
    return (
        <div className = "bg-zinc-50">
            <nav>
                <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className = "flex justify-between h-16 items-center">
                        <Link href = "/" className = "text-2xl font-bold text-zinc-700 bg-zinc-200 rounded-lg px-7 py-1"> MyStore </Link>
                            <div className = "flex items-center space-x-10 text-lg">
                                <Link href = "/" className = "text-zinc-700 hover:text-blue-600"> Home </Link>
                                <Link href = "/" className = "text-zinc-700 hover:text-blue-600"> Shop </Link>
                                <Link href = "/" className = "text-zinc-700 hover:text-blue-600"> Cart </Link>
                                <Link href = "/login" className = "px-7 py-1 bg-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-300"> Login </Link>
                            </div>
                    </div>
                </div>
            </nav>


        <section className = "py-16">
            <div className = "max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className = "w-full md:w-1/2">
                    <h1 className = "text-5xl font-semibold text-zinc-700 leading-tight"> Welcome </h1>
                    <h1 className = "text-5xl font-semibold text-zinc-700 mb-5"> to our store </h1>
                    <p className = "text-zinc-700 mb-6">
                        A simple website project I created for making an E-commerce
                        platform with a simple ERP system to manage inventory, product,
                        sales, and employee
                    </p>
                    <a href = "/" className = "px-8 py-3 bg-zinc-200 text-zinc-700 rounded-lg shadow hover:bg-zinc-400 transition ml-12"> Shop now!! </a>
                </div>
                <div className = "w-full md:w-1/2 mt-10 md:mt-10">
                    <img src = "https://via.placeholder.com/500x400" alt = "Hero Image" className = "rounded-lg shadow-lg mx-auto"/>
                </div>
            </div>
        </section>

        <section id = "shop" className = "py-16 bg-zinc-50">
            <div className = "max-w-7xl mx-auto px-6 text-center">
                <h2 className = "text-3xl font-semibold text-zinc-700 text-left mt-10"> Featured Product </h2>
                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {[1, 2, 3, 4].map((i) => (
                        <div key = {i} className = "flex flex-col items-center">
                            <div className = "bg-zinc-200 p-6 rounded-lg">
                                <img src = "https://via.placeholder.com/250" alt = "Product Image" className = "w-full h-48 object-cover rounded-lg mb-4"/>
                            </div>
                            <h2 className = "text-lg mt-5 font-medium text-zinc-700"> Product Name </h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <footer className = "bg-zinc-100 border-t border-zinc-200">
            <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-zinc-700">
                <div className = "flex flex-col md:flex-row md:justify-between gap-10">
                    <div className = "w-full md:w-1/2">
                        <div className = "w-full max-w-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6332.225944465032!2d104.00361338313543!3d1.122382373863972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be09646b351%3A0x36a826082690c786!2sBatam%20International%20University!5e0!3m2!1sen!2sid!4v1757992939615!5m2!1sen!2sid"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className = "mt-4 space-y-2 text-sm">
                            <p>
                                <img src = "https://flagcdn.com/w40/id.png" alt = "Indonesian Flag" className = "inline w-6 h-4 mr-2"/>
                                     <strong> Jl. Gajah Mada </strong>, Tiban Indah, Kec. Sekupang, Kota Batam, Kepulauan Riau 29426
                            </p>
                        </div>
                    </div>
                    <div className = "w-full md:w-1/2 flex flex-col items-end text-right justify-between space-y-6">
                        <div className = "space-y-2 text-sm">
                            <p> <strong> Email: </strong> andrichens4@gmail.com </p>
                            <p> <strong> Phone: </strong> +62 821-7487-7794 </p>
                            <p> <strong> Hours: </strong> Mon-Fri, 9am-6pm </p>
                        </div>
                        <div className = "flex space-x-4 text-2xl text-zinc-600">
                            <a href = "#" className = "hover:text-blue-500"> Instagram </a>
                            <a href = "#" className = "hover:text-blue-500"> Facebook </a>
                            <a href = "#" className = "hover:text-blue-500"> LinkedIn </a>
                            <a href = "#" className = "hover:text-blue-500"> Email   </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "bg-zinc-200 py-4 text-center text-lg text-zinc-600">
                &copy; 2025 MyStore. All rights reserved
            </div>

        </footer>
    </div>
    );
}