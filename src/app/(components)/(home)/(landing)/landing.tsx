import styles from "../../../styles/page.module.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import {
    motion,
    useInView,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import LandingIntro from "../../(landingIntro)/landingIntro";
import {
    Square,
    Circle,
    Triangle,
    RightArrow,
    LandingSvg1,
    LandingSvg2,
    LandingSvg3,
} from "../../../(components)/svgs";
import LandingText from "./landingText";

function Landing({
    otherInView,
    webPortfolioInView,
    techStackInView,
}: {
    otherInView: boolean;
    webPortfolioInView: boolean;
    techStackInView: boolean;
}) {
    const svgArrays = [
        <Square key={0} />,
        <Triangle key={1} />,
        <Circle key={2} />,
    ];
    const introRef = useRef(null);
    const introInView = useInView(introRef, {
        amount: 0.5,
        margin: "400px 0px 0px 0px",
    });

    const landingRef = useRef(null);
    const [widthStart, setWidthStart] = useState("50%");
    const [leftStart, setLeftStart] = useState("50%");
    const [containerWidth, setContainerWidth] = useState(0);
    const svgContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: landingRef,
    });

    const backgroundTransform = useTransform(
        scrollYProgress,
        [0, 1],
        ["300px 300px", "200px 200px"]
    );

    const widthTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [widthStart, "100%"]
    );

    const leftTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [leftStart, "0%"]
    );

    const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    // Handling window resize / resetting animation
    function handleResize() {
        setWindowDim();
    }

    const setWindowDim = () => {
        if (window.innerWidth < 500) {
            setWidthStart("100%");
            setLeftStart("0%");
        } else {
            // Reset to default or other values for wider windows
            setWidthStart("50%");
            setLeftStart("50%");
        }

        if (svgContainerRef.current) {
            setContainerWidth(
                (svgContainerRef.current as HTMLElement).offsetWidth
            );
        }
    };

    // Moving SVG elements into central position and later fill background position (left value)
    const [toggleLeft, setToggleLeft] = useState(true);
    const leftVarients = {
        start: {
            transform: "translateX(-2.5rem)",
        },
        end: {
            transform: "translateX(0px)",
        },
    };

    // Animating out/in landing text
    const [landingIn, setLandingIn] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        // Landing states
        if (latest > 0.6) {
            if (landingIn) {
                setLandingIn(false);
            }
        } else {
            if (!landingIn) {
                setLandingIn(true);
            }
        }
        // Left positioin states
        if (latest > 0.8) {
            if (toggleLeft) {
                setToggleLeft(false);
            }
        } else {
            if (!toggleLeft) {
                setToggleLeft(true);
            }
        }
    });

    useEffect(() => {
        if (svgContainerRef.current) {
            setContainerWidth(
                (svgContainerRef.current as HTMLElement).offsetWidth
            );
        }
    }, [svgContainerRef]);

    useEffect(() => {
        setWindowDim();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section ref={landingRef} className={styles.container}>
            {/* <ReactLenis
                root
                options={{ lerp: webPortfolioInView ? 0.1 : 10 }}
            ></ReactLenis> */}
            <motion.div
                style={{
                    backgroundSize: backgroundTransform,
                    opacity: backgroundOpacity,
                }}
                className={styles.landingBg}
            ></motion.div>
            <div className={styles.landing}>
                <LandingText landingIn={landingIn} />
                <motion.div
                    style={{
                        width: widthTransform,
                        left: leftTransform,
                    }}
                    animate={toggleLeft ? "start" : "end"}
                    transition={{ duration: 3 }}
                    variants={leftVarients}
                    ref={svgContainerRef}
                    className={styles.svgContainer}
                >
                    {svgArrays.map((svg, i) => {
                        return (
                            <div key={i}>
                                <LandingIntro
                                    scrollYProgress={scrollYProgress}
                                    otherInView={otherInView}
                                    webPortfolioInView={webPortfolioInView}
                                    techStackInView={techStackInView}
                                    introInView={introInView}
                                    index={i}
                                    containerWidth={containerWidth}
                                >
                                    {svg}
                                </LandingIntro>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            <aside ref={introRef} className={styles.bottomContainer}>
                <div className={styles.title}>
                    <div>
                        <h1>Web Apps</h1>
                        <h2>Portfolio</h2>
                        <div className={styles.summaryContainer}>
                            <div className={styles.summaryLine}>
                                <LandingSvg1 />
                                <p>
                                    As a developer with a design background, I
                                    enjoy creating visually delightful and
                                    engaging user experiences
                                </p>
                            </div>
                            <div className={styles.summaryLine}>
                                <LandingSvg2 />
                                <p>
                                    I keep up to date with latest industry
                                    trends, drawing inspiration from leading
                                    creative developers and technological
                                    advancements.
                                </p>
                            </div>
                            <div className={styles.summaryLine}>
                                <LandingSvg3 />
                                <p>
                                    I enjoy problem-solving through
                                    LeetCode-style coding challenges exploring
                                    new software patterns which I regularly
                                    apply in my personal projects.
                                </p>
                            </div>
                        </div>
                        <div className={styles.glow}>
                            <div></div>
                        </div>
                        <div className={styles.glow2}>
                            <div></div>
                        </div>
                        <div className={styles.glow3}>
                            <div></div>
                        </div>
                    </div>
                </div>{" "}
                <div className={styles.bottomPointer}>
                    <div>
                        <RightArrow />
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default Landing;
