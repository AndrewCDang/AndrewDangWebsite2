"use client";
import styles from "./styles/page.module.scss";
import { useRef } from "react";
import { useScroll, useInView, motion } from "framer-motion";
import WebPortfolio from "./(components)/(home)/(webPortfolio)/webPortfolio";
import TechStack from "./(components)/(home)/(teckStack)/techStack";
import OtherWorks from "./(components)/(home)/(otherWorks)/otherWorks";
import ContactMe from "./(components)/(home)/(contactMe)/contactMe";
import Landing from "./(components)/(home)/(landing)/landing";

export default function Home() {
    const otherRef = useRef(null);
    const otherInView = useInView(otherRef, { amount: 0.2 });
    const portfolioRef = useRef(null);
    const { scrollYProgress: otherScrollProgress } = useScroll({
        target: portfolioRef,
    });

    return (
        <main className={styles.main}>
            <Landing otherInView={otherInView} />
            <WebPortfolio />
            <section ref={portfolioRef} className={styles.other}>
                <motion.div
                    animate={{
                        opacity: otherInView ? 0 : 1,
                        y: otherInView ? "-200px" : "0px",
                    }}
                    transition={{ delay: 0.25 }}
                >
                    <TechStack />
                </motion.div>
                <div ref={otherRef}>
                    <OtherWorks scrollYProgress={otherScrollProgress} />
                    <ContactMe />
                </div>
            </section>
        </main>
    );
}
