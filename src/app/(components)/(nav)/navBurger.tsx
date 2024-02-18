"use client";

import { useEffect, useRef } from "react";
import style from "../../styles/nav.module.scss";
import Lottie from "lottie-react";
import jsonData from "./data.json";

function NavBuger({ state }: { state: boolean }) {
    const lottieRef = useRef<any>(null);

    const styleSVG = {
        stroke: state ? "#000" : "red",
        strokeWidth: "40px",
    };

    useEffect(() => {
        if (lottieRef.current) {
            if (state) {
                lottieRef.current.play();
                lottieRef.current.setSpeed(1.8);

                lottieRef.current.setDirection(1);
            } else {
                lottieRef.current.play();
                lottieRef.current.setSpeed(1.8);

                lottieRef.current.setDirection(-1);
            }
        }
    }, [state]);

    return (
        <Lottie
            lottieRef={lottieRef}
            className={`${style.lottie} ${state ? style.stateOn : ""}`}
            loop={false}
            autoplay={false}
            animationData={jsonData}
        />
    );
}

export default NavBuger;
