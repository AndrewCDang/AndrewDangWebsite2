import React, {
    ReactNode,
    useEffect,
    useState,
    useRef,
    RefObject,
} from "react";
import styles from "./landingIntro.module.scss";
import {
    motion,
    useTransform,
    useMotionValueEvent,
    useAnimation,
} from "framer-motion";

function LandingIntro({
    otherInView,
    scrollYProgress,
    children,
    index,
    containerWidth,
}: {
    otherInView: boolean;
    scrollYProgress: any;
    children: ReactNode;
    index: number;
    containerWidth: number;
}) {
    // Translating transformations in respect with scroll Y values
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.1, 2]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale3 = useTransform(scrollYProgress, [0, 1], [1, 25]);

    const scaleX = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0, -1]);
    const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

    const moveLeft = useTransform(
        scrollYProgress,
        [0, 0.7, 1],
        ["50%", "30%", "0%"]
    );

    const moveTop = useTransform(
        scrollYProgress,
        [0, 0.7, 1],
        ["50%", "50%", "0%"]
    );

    const scrollColour = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["rgb(255, 86, 120)", "rgb(255, 86, 120)", "rgb(0,0,0)"]
    );

    const rotate = useTransform(scrollYProgress, [0, 1], [`0deg`, `360deg`]);

    const scaleSquare = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["calc(4rem - 0%)", "calc(3rem + 50%)", "calc(0rem + 100%)"]
    );

    const scaleHeight = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["calc4rem - 0%)", "calc(3rem + 50%)", "calc(0rem + 100svh)"]
    );

    const blur1 = useTransform(
        scrollYProgress,
        [0, 0.25, 0.95],
        [`blur(${0}px)`, `blur(${16}px)`, `blur(${0}px)`]
    );
    const blur2 = useTransform(
        scrollYProgress,
        [0, 1],
        [`blur(${0}px)`, `blur(${2}px)`]
    );
    const blur3 = useTransform(
        scrollYProgress,
        [0, 0.5],
        [`blur(${0}px)`, `blur(${16}px)`]
    );

    const blurArray = [blur1, blur2, blur3];
    const scaleArray = [scale, scale2, scale3];

    //Infinite  Sin wave animation playing when scroll Y is below certain point
    const animationFrameRef = useRef<number | null>(null); // Animation Ref
    const [position, setPosition] = useState<string>(); //Animation Position

    let time = 0;
    const animationDelay = `${200 * index}ms`;

    const transitionOut = useRef<boolean>(false);
    const savedValuesRef = useRef<boolean>(false);
    const scrollingDown = useRef<boolean>(false);
    const scrollValue = useRef<number>(0);

    // Scroll Y tracker
    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        if ((latest as number) > 0.6) {
            transitionOut.current = true;
            if (
                latest > scrollValue.current &&
                scrollingDown.current === false
            ) {
                scrollingDown.current = true;
            } else if (
                latest < scrollValue.current &&
                scrollingDown.current === true
            ) {
                scrollingDown.current = false;
            }
        } else {
            transitionOut.current = false;
        }
        scrollValue.current = latest as number;
    });

    // Transformation values
    const scaleXRef = useRef(1);
    const scaleYRef = useRef(1);
    const translateXRef = useRef(0);
    const translateYRef = useRef(0);
    const rotateRef = useRef(0);

    // Saved Values of last transformation values before transition to fit screen
    const savedScaleXRef = useRef(0);
    const savedScaleYRef = useRef(1);
    const savedTranslateXRef = useRef(0);
    const savedTranslateYRef = useRef(0);
    const savedRotateRef = useRef(0);

    function roundAndFix(number: number) {
        if (index === 2 && number < -0.3) {
            return -2;
        }
        if (number < -0.75 && number > -1) {
            return -1;
        }
        if (number >= -0.75 && number < 0) {
            return 0;
        }
        const rounded = Math.round(number);
        return rounded === 0 ? 0 : rounded;
    }

    const [z1, setz1] = useState<number>();
    const [z2, setz2] = useState<number>();
    const [z3, setz3] = useState<number>();

    const z1Ref = useRef(0);
    const z2Ref = useRef(0);
    const z3Ref = useRef(0);

    // Function which animtes per frame
    const animate = () => {
        if (transitionOut.current === false) {
            // Default Animation
            scaleXRef.current =
                (Math.sin((time - (30 * (index + 1) * Math.PI) / 180) / 2) +
                    1.2) /
                2;
            scaleYRef.current =
                (Math.sin((time + (150 * (index + 1) * Math.PI) / 180) / 2) +
                    1.2) /
                2;

            translateXRef.current =
                Math.sin(time - (30 * index * Math.PI) / 180) *
                ((containerWidth - 64) / 2);

            translateYRef.current =
                Math.sin((time + (10 * index * Math.PI) / 180) / 2) * 200;

            rotateRef.current = ((time * 10) % 360) / 360;
            setPosition(
                (prevPosition) =>
                    `   translateX(calc(${translateXRef.current * -1}px))
                            translateY(${translateYRef.current}px)
                            scale(${scaleXRef.current},${scaleYRef.current})
                            rotate(${rotateRef.current}turn)
                        `
            );

            const yValue = roundAndFix(
                Math.sin((time - (100 * index * Math.PI) / 180) / 2)
            );
            if (z1Ref.current !== yValue) {
                z1Ref.current = yValue;
                setz1(yValue);
            }

            if (savedValuesRef.current === true) {
                savedValuesRef.current = false;
            }
            time += 0.01;
        } else if (scrollingDown.current === true) {
            // Transition to fit screen
            if (savedValuesRef.current === false) {
                savedScaleXRef.current = scaleXRef.current;
                savedScaleYRef.current = scaleYRef.current;
                savedTranslateXRef.current = translateXRef.current;
                savedTranslateYRef.current = translateYRef.current;
                savedRotateRef.current = rotateRef.current;

                savedValuesRef.current = true;
            }
            const resetSpeed = 0.01;
            const targetScale = 1;
            const targetTranslate = 0;
            const targetRotate = Math.round(rotateRef.current);

            const lerp = (start: number, end: number, amount: number) =>
                (1 - amount) * start + amount * end;

            scaleXRef.current = lerp(
                scaleXRef.current,
                targetScale,
                resetSpeed * 3
            );
            scaleYRef.current = lerp(
                scaleYRef.current,
                targetScale,
                resetSpeed * 2
            );
            translateXRef.current = lerp(
                translateXRef.current,
                targetTranslate,
                resetSpeed * 3
            );
            translateYRef.current = lerp(
                translateYRef.current,
                targetTranslate,
                resetSpeed * 8
            );
            rotateRef.current = lerp(
                rotateRef.current,
                targetRotate,
                resetSpeed * 3
            );

            setPosition(
                `translateX(calc(${translateXRef.current * -1}px)) translateY(${
                    translateYRef.current
                }px) scale(${scaleXRef.current},${scaleYRef.current}) rotate(${
                    rotateRef.current
                }turn)`
            );
        } else if (scrollingDown.current === false) {
            // Transition Back to default
            const resetSpeed = 0.03;
            const lerp = (start: number, end: number, amount: number) =>
                (1 - amount) * start + amount * end;

            scaleXRef.current = lerp(
                scaleXRef.current,
                savedScaleXRef.current,
                resetSpeed * 8
            );
            scaleYRef.current = lerp(
                scaleYRef.current,
                savedScaleYRef.current,
                resetSpeed
            );
            translateXRef.current = lerp(
                translateXRef.current,
                savedTranslateXRef.current,
                resetSpeed * 8
            );
            translateYRef.current = lerp(
                translateYRef.current,
                savedTranslateYRef.current,
                resetSpeed
            );
            rotateRef.current = lerp(
                rotateRef.current,
                savedRotateRef.current,
                resetSpeed * 2
            );

            setPosition(
                `translateX(calc(${translateXRef.current * -1}px)) translateY(${
                    translateYRef.current
                }px) scale(${scaleXRef.current},${scaleYRef.current}) rotate(${
                    rotateRef.current
                }turn)`
            );
        }
        requestAnimationFrame(animate);
    };

    // UseEffect calling upon animation on component mount
    useEffect(() => {
        if (containerWidth) {
            animationFrameRef.current = requestAnimationFrame(animate);
            return () => {
                if (animationFrameRef.current !== null) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, [containerWidth]);

    if (!position) {
        return null;
    }
    return (
        <>
            {index === 0 ? (
                <motion.div
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                >
                    <motion.div
                        style={{
                            left: moveLeft,
                            width: "100vw",
                        }}
                        className={`${styles.container}`}
                    >
                        <motion.div
                            className={`${styles.iconContainer}`}
                            style={{
                                top: moveTop,
                                transform: position,
                                zIndex: z1,
                                width: scaleSquare,
                                height: scaleHeight,
                            }}
                        >
                            <motion.div
                                style={{
                                    filter: blurArray[index],
                                    height: "100%",
                                }}
                                animate={{
                                    scale: [0.5, 10, 1],
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    style={{
                                        height: "100%",
                                        transform: `translateX(-500px)`,
                                        backgroundColor: scrollColour,
                                    }}
                                    animate={{
                                        opacity: otherInView ? 0 : 1,
                                        transform: otherInView
                                            ? "translateY(-100%) scale(0.5)"
                                            : "translateY(0%) scale(1)",
                                        backgroundColor: "rgb(255, 86, 120)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.1,
                                    }}
                                >
                                    <motion.div>{children}</motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 0.3,
                        delay: index === 1 ? 1.175 : 2,
                    }}
                >
                    <motion.div
                        style={{
                            scale: scaleArray[index],
                            left: "50%",
                        }}
                        className={`${styles.container}`}
                    >
                        <motion.div
                            className={`${styles.iconContainer}`}
                            style={{
                                top: "50%",
                                transform: position,
                                zIndex: z1,
                            }}
                        >
                            <motion.div
                                style={{
                                    scaleX: scaleX,
                                    scaleY: scaleY,
                                    filter: blurArray[index],
                                    rotate: rotate,
                                    fill:
                                        index === 1
                                            ? "rgb(5, 203, 214)"
                                            : "rgb(255, 208, 86)",
                                }}
                                className={`${styles.icon}`}
                            >
                                <motion.div
                                    animate={{
                                        scale: [0.5, 10, 1],
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        delay: index * 0.4,
                                    }}
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}

export default LandingIntro;
