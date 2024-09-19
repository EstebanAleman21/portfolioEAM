"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between my-16 py-24 gap-4 relative min-h-max" // Ensure section takes full height
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="-z-2 flex-grow">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/EstebanAleman21">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/estebanaleman21">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <div className="contact-info mt-4">
          <p className="text-[#ADB7BE]">
            Email:{" "}
            <a
              href="mailto:esteban21112002@gmail.com"
              className="text-blue-300 hover:underline"
            >
              esteban21112002@gmail.com
            </a>
          </p>
          <p className="text-[#ADB7BE]">
            Phone:{" "}
            <a
              href="tel:+528114709545"
              className="text-blue-300 hover:underline"
            >
              +52 8114709545
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
