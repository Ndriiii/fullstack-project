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
                        <Link href="/" className="text-2xl font-bold text-zinc-700 bg-zinc-200 rounded-lg px-7 py-1"> MyStore </Link>
                         <div className="flex items-center space-x-10 text-lg">
                            <Link href="/" className="text-zinc-700 hover:text-blue-600"> Home </Link>
                            <Link href="/" className="text-zinc-700 hover:text-blue-600"> Shop </Link>
                            <Link href="/" className="text-zinc-700 hover:text-blue-600"> Cart </Link>
                            <Link href="/login" className="px-7 py-1 bg-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-300"> Login </Link>
                         </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}