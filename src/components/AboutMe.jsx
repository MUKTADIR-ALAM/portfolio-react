import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
          <div className="mt-12 md:mt-0">
            <img
              src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1738924421~exp=1738928021~hmac=110c8111bab19b198d733a98dcb3a707925fb85a64c2de13342100dcee9be7f9&w=740"
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              My programming journey began when I was 15 years old, back in
              2018, when my father bought me my first PC. That moment sparked my
              curiosity, and I started exploring the world of coding. Over the
              years, I faced numerous challenges trying to establish myself in
              the programming space. I learned a lot but struggled to find my
              place. Everything changed when I discovered Programming Hero. It
              provided me with the structure and guidance I needed to unlock my
              full potential. Through six months of dedication and hard work, I
              transformed my skills and finally achieved my goal of becoming a
              successful MERN stack developer. Now, I want to build profitabel
              and successfull SAAS aoplicaton. Let’s build something amazing
              together! 🚀
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Have a question Ask me on Twitter{" "}
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
