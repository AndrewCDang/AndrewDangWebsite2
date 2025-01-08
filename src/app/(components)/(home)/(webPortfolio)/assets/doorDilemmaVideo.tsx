"use client";
import React, { useEffect, useState } from "react";
import style from "./exhbitsVideo.module.scss";

function DoorDilemma() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            {isClient && (
                <video
                    style={{ width: "100%", aspectRatio: "1" }}
                    className={style.videoStyle}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        media="(min-width:1024px)"
                        src="/homepage/250108_doorDilema.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
}

export default DoorDilemma;
