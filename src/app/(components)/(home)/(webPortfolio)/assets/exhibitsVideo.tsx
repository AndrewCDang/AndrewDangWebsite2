"use client";
import React, { useEffect, useState } from "react";
import style from "./exhbitsVideo.module.scss";

function ExhibitsVideo() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            {isClient && (
                <video
                    className={style.videoStyle}
                    style={{ width: "100%", aspectRatio: "1" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={"/homepage/exhibits_walkthrough.webm"}
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
}

export default ExhibitsVideo;
