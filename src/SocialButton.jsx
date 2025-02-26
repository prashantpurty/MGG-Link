"use client";
import React from "react";

const SocialButton = ({
  icon,
  text,
  bgColor,
  href,
  textColor = "text-red-50",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-4 px-6 py-3 w-full text-xl sm:text-2xl font-medium text-center ${bgColor} rounded-full ${textColor} transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
      role="button"
      aria-label={text}
    >
      <img
        src={icon}
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        alt=""
        aria-hidden="true"
      />
      <span className="flex-1">{text}</span>
    </a>
  );
};

export default SocialButton;
