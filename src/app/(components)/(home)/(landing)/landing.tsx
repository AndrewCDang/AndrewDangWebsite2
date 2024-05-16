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
} from "../../../(components)/svgs";
import LandingText from "./landingText";

function Landing({ otherInView }: { otherInView: any }) {
    const svgArrays = [
        <Square key={0} />,
        <Triangle key={1} />,
        <Circle key={2} />,
    ];
    const webRef = useRef(null);
    const landingRef = useRef(null);
    const [widthStart, setWidthStart] = useState("50%");
    const [leftStart, setLeftStart] = useState("50%");
    const [containerWidth, setContainerWidth] = useState(0);
    const svgContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: landingRef,
    });
    const webPortfolioInView = useInView(webRef);

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
                ref={webRef}
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

            <aside className={styles.bottomContainer}>
                <div className={styles.title}>
                    <div>
                        <h1>Web Apps</h1>
                        <h2>Portfolio</h2>
                        <div className={styles.summaryContainer}>
                            <h6>
                                I enjoy creating visually delightful and
                                engaging user experiences
                            </h6>
                            <h6>
                                I create apps based on my hobbies, personal
                                challenges, and productivity needs. These
                                projects have given me invaluable experience
                                with a wide range of front-end and back-end
                                technologies.
                            </h6>
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
