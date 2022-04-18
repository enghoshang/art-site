import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import insta from "/Users/macbookair/Documents/Project/painting-website/public/image/insta.png";
import facebook from "/Users/macbookair/Documents/Project/painting-website/public/image/facebook.png";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  // make state true and false for menu
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="bg-green-400 flex">
        <div className="p-3  flex space-x-5">
          <Image src={facebook} width={25} height={25} />
          <div className="hover:text-blue-400">
            <Link href={"https://www.facebook.com/Idgaf9257"}>
              <a> Hoshang Ahmad</a>
            </Link>
          </div>
          <p></p>

          <Image src={insta} width={25} height={25} />
          <div className="hover:text-red-400">
            <Link href={"https://www.instagram.com/?hl=en"}>
              <a> hoshang_o_o</a>
            </Link>
          </div>

          <div className="text-orange-500 tracking-wide">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </div>
        </div>
        <div className="ml-auto">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className="mr-auto"
          >
            <BiMenuAltRight className="text-2xl m-3" />
          </button>
          <div
            className={
              menu === true
                ? "fixed right-3 bg-white p-3 mr-24"
                : "hidden"
            }
          >
            <ul>
              <li>home</li>
              <li>Arts</li>
              <li>Artists</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
