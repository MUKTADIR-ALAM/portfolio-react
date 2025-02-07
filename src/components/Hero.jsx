import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content gap-28  flex-col lg:flex-row-reverse justify-between">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">I'm {"<Muktadir-Alam/>"}</h1>
          <p className="py-6 text-2xl font-semibold">
            <span className="mr-2">Fullstack</span>
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -mb-1"></span>
              Web Developer
            </span>
          </p>
          <button className="btn btn-primary">Get Resume</button>
          {/* my social links */}
          <div className="flex my-4 space-x-4">
            <a target="_blank" href="https://github.com/MUKTADIR-ALAM">
              <FaGithub size={20} />
            </a>
            <a target="_blank" href="https://github.com/MUKTADIR-ALAM">
              <FaFacebook size={20} />
            </a>
            <a target="_blank" href="https://github.com/MUKTADIR-ALAM">
              <FaLinkedin size={20} />
            </a>
            <a target="_blank" href="https://github.com/MUKTADIR-ALAM">
              <FaX size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
