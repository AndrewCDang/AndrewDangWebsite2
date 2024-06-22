import { motion, useAnimate, stagger } from "framer-motion";
import styles from "../../../styles/page.module.scss";
import { useEffect } from "react";

function LandingText({ landingIn }: { landingIn: boolean }) {
    const [scope, animate] = useAnimate();
    const [scope0, animate0] = useAnimate();
    const [scope0b, animate0b] = useAnimate();
    const [scope2, animate2] = useAnimate();
    const [scope3, animate3] = useAnimate();
    const [scope4, animate4] = useAnimate();

    const line00 = "Andrew`Dang";
    const line00Array = line00.split("");

    const line1 = "Full`Stack`Developer";
    const line1Array = line1.split(""); //0.35

    const line1b =
        "I`m`passionate`about`creating`visually`engaging`web`apps`with`delightful`user`experiences`";
    const line1bArray = line1.split(""); //0.35

    const line2 = "Background`in";
    const line2Array = line2.split(""); //0.85

    const line3 = "`Architecture`";
    const line3Array = line3.split("");

    const line4 = "and";
    const line4Array = line4.split("");

    const line5 = "`Art";
    const line5Array = line5.split("");

    const letterVariant = {
        initial: {
            opacity: 0,
            scale: 0.3,
            rotate: -180,
        },
    };

    const constHandleAnimate = async () => {
        await animate0(
            "h3",
            { opacity: 1, rotate: 0, scale: 1 },
            { delay: stagger(0.01) }
        );

        await animate(
            "h1",
            { opacity: 1, rotate: 0, scale: 1 },
            { delay: stagger(0.025) }
        );

        await animate2(
            "h5",
            { opacity: 1, rotate: 0, scale: 1 },
            { delay: stagger(0.01) }
        );
        animate3(
            "h5",
            { opacity: 1, rotate: 0, scale: 1 },
            { delay: stagger(0.025) }
        );
    };

    useEffect(() => {
        constHandleAnimate();
    }, []);

    const landingVarients = {
        in: {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
            filter: "blur(0rem)",
        },
        out: {
            opacity: 0,
            transform: "translateY(-100px) scale(0.9)",
            filter: "blur(0.5rem)",
        },
    };

    return (
        <motion.div
            animate={landingIn ? "in" : "out"}
            variants={landingVarients}
            className={styles.body}
        >
            <div>
                <div>
                    <div className={styles.linesContainer}>
                        <div ref={scope0} className={`${styles.lines}`}>
                            <div className={styles.linesSection}>
                                {line00Array.map((letter, index) => {
                                    return (
                                        <motion.h3
                                            key={index}
                                            variants={letterVariant}
                                            initial="initial"
                                        >
                                            <span
                                                style={{
                                                    opacity:
                                                        line00Array[index] ===
                                                        "`"
                                                            ? 0
                                                            : 1,
                                                }}
                                            >
                                                {letter}
                                            </span>
                                        </motion.h3>
                                    );
                                })}
                            </div>
                        </div>
                        <div ref={scope0b} className={`${styles.lines}`}>
                            <div ref={scope} className={styles.lines}>
                                {line1Array.map((letter, index) => {
                                    return (
                                        <motion.h1
                                            key={index}
                                            className={`${styles.jobTitle} ${styles.red}`}
                                            variants={letterVariant}
                                            initial="initial"
                                        >
                                            <span
                                                style={{
                                                    opacity:
                                                        line1Array[index] ===
                                                        "`"
                                                            ? 0
                                                            : 1,
                                                }}
                                            >
                                                {letter}
                                            </span>
                                        </motion.h1>
                                    );
                                })}
                                <div
                                    ref={scope2}
                                    className={styles.linesContainer}
                                >
                                    <div className={styles.lines}>
                                        {line2Array.map((letter, index) => {
                                            return (
                                                <motion.h5
                                                    key={index}
                                                    variants={letterVariant}
                                                    initial="initial"
                                                >
                                                    <span
                                                        style={{
                                                            opacity:
                                                                line2Array[
                                                                    index
                                                                ] === "`"
                                                                    ? 0
                                                                    : 1,
                                                        }}
                                                    >
                                                        {letter}
                                                    </span>
                                                </motion.h5>
                                            );
                                        })}
                                        {line3Array.map((letter, index) => {
                                            return (
                                                <motion.h5
                                                    key={index}
                                                    className={styles.blue}
                                                    variants={letterVariant}
                                                    initial="initial"
                                                >
                                                    <span
                                                        style={{
                                                            opacity:
                                                                line3Array[
                                                                    index
                                                                ] === "`"
                                                                    ? 0
                                                                    : 1,
                                                        }}
                                                    >
                                                        {letter}
                                                    </span>
                                                </motion.h5>
                                            );
                                        })}
                                        <div
                                            ref={scope3}
                                            className={styles.linesContainer}
                                        >
                                            <div className={styles.lines}>
                                                {line4Array.map(
                                                    (letter, index) => {
                                                        return (
                                                            <motion.h5
                                                                key={index}
                                                                variants={
                                                                    letterVariant
                                                                }
                                                                initial="initial"
                                                            >
                                                                <span
                                                                    style={{
                                                                        opacity:
                                                                            line4Array[
                                                                                index
                                                                            ] ===
                                                                            "`"
                                                                                ? 0
                                                                                : 1,
                                                                    }}
                                                                >
                                                                    {letter}
                                                                </span>
                                                            </motion.h5>
                                                        );
                                                    }
                                                )}
                                                {line5Array.map(
                                                    (letter, index) => {
                                                        return (
                                                            <motion.h5
                                                                key={index}
                                                                className={
                                                                    styles.yellow
                                                                }
                                                                variants={
                                                                    letterVariant
                                                                }
                                                                initial="initial"
                                                            >
                                                                <span
                                                                    style={{
                                                                        opacity:
                                                                            line5Array[
                                                                                index
                                                                            ] ===
                                                                            "`"
                                                                                ? 0
                                                                                : 1,
                                                                    }}
                                                                >
                                                                    {letter}
                                                                </span>
                                                            </motion.h5>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default LandingText;
