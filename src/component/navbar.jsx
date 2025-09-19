import { useState } from "react";
import { Menu, X } from "lucide-react";


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

                <a href="/" className="text-2xl font-bold">
                    <img
                        src="../sonic-logo-removebg-preview.png"
                        alt="Micro Sonic Logo"
                        className="h-12 w-auto"
                    />
                </a>

                <div className="hidden md:flex space-x-6">
                    <a href="/about" className="hover:text-gray-400 transition">About</a>
                    <a href="/query" className="hover:text-gray-400 transition">Contact</a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4">
                    <a href="/about" className="hover:text-gray-400 transition">About</a>
                    <a href="/query" className="hover:text-gray-400 transition">Contact</a>
                </div>
            )}
        </nav>
    );
}

