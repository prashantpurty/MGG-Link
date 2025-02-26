"use client";
import React from "react";
import GuildLogo from "./GuildLogo";
import SocialButton from "./SocialButton";
import bgVideo from "./assets/MGG.mp4";

const MartianGuildLanding = () => {
  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/1b0b5b8afbfa2879837c83ba6eab2eceaf70f1b69f1436c735bc790d0a6c79c5?placeholderIfAbsent=true",
      text: "Join Martians Crew!",
      bgColor: "bg-indigo-500",
      href: "https://discord.gg/bc6xPzReuT",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/f9456a35dff5ec3c9c40b0500b6169bac2bc9922f594a676170aabecf410e9fb?placeholderIfAbsent=true",
      text: "Watch Epic Battles",
      bgColor: "bg-red-600",
      href: "https://www.youtube.com/@Martiansgaminguild",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/a7dcece58df45ff2cb6c296486adfc19e12f6269d023c4c619b87d24e01bde19?placeholderIfAbsent=true",
      text: "Follow Us on X",
      bgColor: "bg-stone-300",
      textColor: "text-neutral-950",
      href: "https://x.com/martiansGGC",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/6919c6d9949d1b83fe68ad6f34b959f579b67d4f8747c3b9fb145551ea072148?placeholderIfAbsent=true",
      text: "Chat with us",
      bgColor: "bg-green-500",
      textColor: "text-white",
      href: "https://chat.whatsapp.com/FR4YzZMFQorHKgqHcduHFs",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/29d8327bc8acc91df61cf4343a0d08599b94fbbbab2ee4270ced1864f7cf8d08?placeholderIfAbsent=true",
      text: "Join the Insta fam!",
      bgColor: "bg-pink-500",
      textColor: "text-stone-50",
      href: "https://www.instagram.com/martians_gg/",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/04d6b046a4988f0b18907907aaa5dda1f10abbd9f4260a4f4b469f43a331680d?placeholderIfAbsent=true",
      text: "Web3 Gaming Hub!",
      bgColor: "bg-sky-500",
      textColor: "text-stone-50",
      href: "https://t.me/+hd_nFdYeFQs0NTVl",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/aec6b02545feca644c49daa626638ff4fad02886cd296e171ae0e94db78a5550?placeholderIfAbsent=true",
      text: "Coming Soon",
      bgColor: "bg-white",
      textColor: "text-neutral-950",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center px-5 py-10 min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center w-full max-w-xl min-h-[800px] lg:min-h-[1224px] mt-3">
        <header className="flex flex-col items-center w-full text-center">
          <GuildLogo />
          <h1 className="mt-5 text-3xl md:text-4xl font-bold text-white tracking-wide">
            MARTIANS GAMING GUILD
          </h1>
          <p className="mt-3 text-lg font-bold tracking-wider text-white">
            Unite, Play, Conquer
          </p>
        </header>

        <nav
          className="w-full space-y-6 mt-8 md:space-y-8"
          aria-label="Social links"
        >
          {socialLinks.map((link, index) => (
            <SocialButton
              key={index}
              icon={link.icon}
              text={link.text}
              bgColor={link.bgColor}
              textColor={link.textColor}
              href={link.href}
            />
          ))}
        </nav>
        <p className="text-white mt-8 text-center">
          © 2025 Martians Gaming Guild. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default MartianGuildLanding;
