"use client";
import { ReactElement, RefObject, useEffect } from "react";
import style from "./architecture.module.scss";
import ContentSection from "./contentSection";
import {
    duddLandingText,
    duddLandindDescription,
    duddContent,
    duddFlavourText,
} from "./duddingstonData";

import {
    exploreDescription,
    exploreContent,
    exploreText,
    exploreFlavourText,
} from "./explorationData";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function Page() {
    const LandingBanner = ({
        image,
        landingText,
        landingDescription,
        projectContent,
        flavourText,
        refObj,
    }: {
        image: string;
        landingText: {
            title: string;
            location: string;
            type: string;
            construction: string;
            nomination: string;
        };
        landingDescription: ReactElement;
        projectContent: ReactElement;
        flavourText: string | ReactElement;
        refObj: RefObject<HTMLElement | HTMLDivElement>;
    }) => {
        return (
            <section>
                <section className={style.projectContainer}></section>
                <ContentSection
                    image={image}
                    landingText={landingText}
                    flavourText={flavourText}
                    landingDescription={landingDescription}
                    refObj={refObj}
                />
                <section>{projectContent}</section>
            </section>
        );
    };
    const explorationRef = useRef(null);
    const isInView = useInView(explorationRef, { once: true });

    const duddContentRef = useRef(null);

    return (
        <section style={{ overflow: "hidden" }}>
            <section ref={duddContentRef} className={style.container}>
                <LandingBanner
                    image={"architecture"}
                    landingText={duddLandingText}
                    landingDescription={duddLandindDescription}
                    projectContent={duddContent}
                    flavourText={duddFlavourText}
                    refObj={duddContentRef}
                />
            </section>
            <motion.div
                ref={explorationRef}
                className={style.container}
                animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 100,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <LandingBanner
                    image={"art"}
                    landingText={exploreText}
                    landingDescription={exploreDescription}
                    projectContent={exploreContent}
                    flavourText={exploreFlavourText}
                    refObj={explorationRef}
                />
            </motion.div>
        </section>
    );
}

export default Page;
