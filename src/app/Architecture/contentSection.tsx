"use client";
import style from "./architecture.module.scss";
import { ReactElement, RefObject, useEffect, useRef } from "react";
import { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

type LandingText = {
    title: string;
    location: string;
    type: string;
    construction: string;
    nomination: string;
};

function ContentSection({
    image,
    landingText,
    flavourText,
    landingDescription,
    refObj,
}: {
    image: string;
    landingText: LandingText;
    flavourText: string | ReactElement;
    landingDescription: ReactElement;
    refObj: RefObject<HTMLElement | HTMLDivElement>;
}) {
    // Banner Images:
    const ImageComponentCarouselHD = ({
        scrollY,
        url,
    }: {
        scrollY: MotionValue<string>;
        url: string;
    }) => {
        return (
            <div style={{ position: "relative" }}>
                <motion.img
                    src={url}
                    style={{
                        objectPosition: scrollY,
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                    }}
                    alt="architecture image"
                ></motion.img>
            </div>
        );
    };

    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    const transformObjectPos = useTransform(
        scrollYProgress,
        [0.75, 1],
        ["50% 80%", "50% 0%"]
    );

    const Dudd1 = ({
        scrollY,
        url,
    }: {
        scrollY: MotionValue<string>;
        url: string;
    }) => {
        return ImageComponentCarouselHD({ scrollY: scrollY, url: url });
    };

    const Dudd2 = ({
        scrollY,
        url,
    }: {
        scrollY: MotionValue<string>;
        url: string;
    }) => {
        return ImageComponentCarouselHD({ scrollY: scrollY, url: url });
    };

    const scrollTo = () => {
        if (refObj.current) {
            const scrollHeight = refObj.current.getBoundingClientRect().height;
            if (image === "architecture") {
                window.scrollTo({ top: scrollHeight });
            } else {
                window.scrollTo({ top: 0 });
            }
        }
    };

    return (
        <section>
            <motion.div ref={scrollRef} className={`${style.landingBanner}`}>
                {image === "architecture" ? (
                    <Dudd1
                        scrollY={transformObjectPos}
                        url="/architecture/exterior-render.jpg"
                    />
                ) : (
                    <Dudd2
                        scrollY={transformObjectPos}
                        url="/architecture/expl-banner.jpg"
                    />
                )}
                <aside onClick={scrollTo} className={style.linkNextProject}>
                    <div>
                        <div className={style.linkTextContainer}>
                            <h3 className={style.linkTextTitle}>
                                {image === "architecture" ? (
                                    <>
                                        Yr3 Design |<br /> Taichung
                                        <br />
                                        Eco
                                        <br />
                                        Park
                                    </>
                                ) : (
                                    <>
                                        Yr4 Design |<br /> Duddingston
                                        <br />
                                        Library
                                    </>
                                )}
                            </h3>

                            <h3 className={style.linkTextWrap}></h3>
                        </div>

                        <h6 className={style.jumptext}>Jump to section</h6>
                        <img
                            src={
                                image === "architecture"
                                    ? "/architecture/expl-link.jpg"
                                    : "/architecture/architecture-banner-btn.jpg"
                            }
                            className={style.linkImage}
                        ></img>
                    </div>
                </aside>
            </motion.div>
            <aside className={style.bannerBg}>
                <div className={style.landingText}>
                    <div className={""}>
                        <h2
                            className={`${style.textGlow} ${style.projectTitle}`}
                        >
                            {landingText.title}
                        </h2>
                        <div className={style.titleContainer}>
                            <div className={style.flavour}>{flavourText}</div>
                            <div className={style.table}>
                                <section className={style.projectGrid}>
                                    <div>Location</div>
                                    <p>{landingText.location}</p>
                                    <div>Type</div>
                                    <p>{landingText.type}</p>
                                    <div>Construction</div>
                                    <p>{landingText.construction}</p>
                                    <div>Nomination</div>
                                    <p>{landingText.nomination}</p>
                                </section>
                            </div>
                        </div>
                        <aside className={style.landingDescription}>
                            <h6 className={style.textGlow}>ESALA</h6>
                            {landingDescription}
                        </aside>
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default ContentSection;
