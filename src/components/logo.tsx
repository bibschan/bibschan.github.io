"use client";

import Image from "next/image";

const Logo = () => {
  const handleLogoClick = () => {
    const externalLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    window.open(externalLink, "_blank");
  };

  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={170}
        height={70}
        className="cursor-pointer"
        onClick={handleLogoClick}
      />
    </div>
  );
};

export default Logo;
