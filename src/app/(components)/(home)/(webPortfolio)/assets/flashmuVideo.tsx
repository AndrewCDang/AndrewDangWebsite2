"use client";
import React, { useEffect, useState } from "react";

function FlashmuVideo() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            {isClient && (
                <video
                    style={{ width: "100%", aspectRatio: "1" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={"/homepage/flashmu_video.mp4"}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
}

export default FlashmuVideo;
