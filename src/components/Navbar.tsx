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
      <div className="bg-cyan-400 shadow-lg flex">
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

          <div className="text-cyan-700 tracking-wide ml-auto">
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
            className="mr-auto hover:scale-110"
          >
            <BiMenuAltRight className="text-2xl m-3" />
          </button>
          <div
            className={
              menu === true
                ? "fixed right-3 bg-cyan-500 p-3 mr-20 shadow-lg rounded-lg ring-offset-2 ring "
                : "hidden"
            }
          >
            <ul className="text-white divide-y divide-blue-200 opacity-75">
              <li>
                <Link href='/'>
                <a>Home</a>
                </Link>
              </li>
              <li> <Link href='/Artists'>
                <a>Artists</a>
                </Link>
                </li>
              <li> <Link href='/Art'>
                <a>Art</a>
                </Link>
                </li>
              <li> <Link href='/About_us'>
                <a>About Us</a>
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
