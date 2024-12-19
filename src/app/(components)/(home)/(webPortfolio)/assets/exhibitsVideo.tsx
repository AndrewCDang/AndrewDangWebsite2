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
                        media="(min-width: 1200px)"
                        src={"/homepage/241219_Exhibits_video_1080p.mp4"}
                        type="video/mp4"
                    />
                    <source
                        src={"/homepage/241219_Exhibits_video_480p.mp4"}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
}

export default ExhibitsVideo;
