import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "../../../public/Signify_logo.svg.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={Pic} width={100} height={30} alt="logo" />
    </Link>
  );
};

export default Logo;
