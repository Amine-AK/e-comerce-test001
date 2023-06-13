"use client";

import Image from "next/image"
import { CustomButton } from ".";

export default function Hero() {
    const handleScroll = ()=>{console.log("error")}
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="herro__titel">
                HELLO IN OUR SOCIETY 
                -- HAVE YOU FNNY ON YOUR SEARCH.
            </h1>
            <p className="hero__subtitle">
                this is my first stor programmed with NextJs. it's good to hear your opinion of my work 
            </p>
            <CustomButton 
                title="EXPLORE STOR"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/main.jpeg" 
                    alt="hero"
                    fill className="object-contain max-w-[300px]"
                />
            </div>
            <div className="hero__image-overlay"></div>
        </div>
    </div>
  )
}
