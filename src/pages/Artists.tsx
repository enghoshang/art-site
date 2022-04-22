import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import Vincent1 from "/Users/macbookair/Documents/Project/art-site/public/image/Vincent1.jpeg";
import Picaso from "/Users/macbookair/Documents/Project/art-site/public/image/Picaso.jpeg";


const Artists = ()=> {
    return (
        <div className="p-10 space-y-3">
            <div className="flex grid-rows-2 space-x-4">
                <Image src={Vincent1} height={300} width={300} />
                <div>
                    <Link  href={"https://en.wikipedia.org/wiki/Vincent_van_Gogh"}>
                    <h1 className="text-cyan-700">Vincent van Gogh</h1>
                    </Link>
                    <p>
                        Vincent Willem van Gogh (Dutch: [ˈvɛnɛnt ˈvænɡoʊ] (About this sound listen);[1]
                        pronounced [ˈvɛnɛnt ˈvænɡoʊ];[2] 1853 – 1890) was a Dutch Post-Impressionist painter
                        who is among the most famous and influential figures in the history of
                        Western art.
                    </p>
                </div>
                
            </div>
            <div className="flex grid-rows-2 space-x-4">
                <Image src={Picaso} height={300} width={300} />
                <div>
                    <Link  href={"https://en.wikipedia.org/wiki/Pablo_Picasso"}>
                    <h1 className="text-cyan-700">Pablo Picasso</h1>
                    </Link>
                    <p>
                        Pablo Ruiz Picasso (Spanish: [ˈpablo ˈruiz ˈpiʃo];[1] 1881 – 1973) was a Spanish
                        painter, sculptor, printmaker, ceramicist, stage designer, poet, and
                        ceramicist who is regarded as one of modern art's foremost representatives.
                    </p>
             </div>
             </div>       
        </div>
    );
}

export default Artists;