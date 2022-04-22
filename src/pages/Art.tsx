import React from "react";
import Image from "next/image";
import Van1 from "/Users/macbookair/Documents/Project/art-site/public/image/Van1.jpeg";
import Van2 from "/Users/macbookair/Documents/Project/art-site/public/image/Van2.jpeg";
import Van3 from "/Users/macbookair/Documents/Project/art-site/public/image/Van3.jpeg";


const Art = ()=> {
    return (
    <div className="grid grid-cols-3 gap-4 justify-items-center p-4">
        <div className="hover:scale-110 shadow-lg shadow-cyan-500/50">
        <Image src={Van1} width={400} height={400}/>
        </div>
        <div className="hover:scale-110 shadow-lg shadow-cyan-500/50">
        <Image src={Van2} width={400} height={400}/>
        </div>
        <div className="hover:scale-110 shadow-lg shadow-cyan-500/50 -z-30">
        <Image src={Van3} width={400} height={400}/>
        </div>
        <div className="hover:scale-110 shadow-lg shadow-cyan-500/50">
        <Image src={Van1} width={400} height={400}/>
        </div>
        <div className="hover:scale-110 shadow-lg shadow-cyan-500/50">
        <Image src={Van2} width={400} height={400}/>
        </div>
        <div className="hover:scale-110 shadow-lg shadow-cyan-500/50">
        <Image src={Van3} width={400} height={400}/>
        </div>
  
    </div>
    );
}

export default Art;