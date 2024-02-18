import style from "./techStack.module.scss";

import { useInView, motion, delay } from "framer-motion";
import { ReactNode, useRef } from "react";

import {
    Javascript,
    TypeScript,
    CSS,
    HTML,
    Nextjs,
    Tailwind,
    Redux,
    MongoDb,
    Supabase,
    Saas,
    Node,
    HookForm,
    Express,
    Zustand,
    React,
    Framer,
} from "../../svgs";

function TechStack() {
    const techRef = useRef(null);

    const isInView = useInView(techRef, { once: true, amount: 0.3 });

    const TechIcon = ({ children }: { children: ReactNode }) => {
        return <div className={style.techIcon}>{children}</div>;
    };

    const techIconArrays = [
        { node: <HTML />, name: "HTML" },
        { node: <CSS />, name: "CSS" },
        { node: <Javascript />, name: "Javascript" },
        { node: <TypeScript />, name: "TypeScript" },
        { node: <React />, name: "React" },
        { node: <Nextjs />, name: "Next.js" },
        { node: <Tailwind />, name: "Tailwind" },
        { node: <Saas />, name: "Saas" },
        { node: <Framer />, name: "Framer" },
        { node: <Supabase />, name: "Supabase" },
        { node: <MongoDb />, name: "MongoDb" },
        { node: <Node />, name: "Node.js" },
        { node: <Express />, name: "Express.js" },
        { node: <HookForm />, name: "React HookForm" },
        { node: <Zustand />, name: "Zustand" },
    ];

    const containerVarients = {
        in: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
            },
        },
        out: { opacity: 0 },
    };

    const itemVariants = {
        out: { opacity: 0, y: "50px", scale: 0.3 },
        in: (i: number) => ({
            opacity: 1,
            y: "0px",
            scale: 1,
            transition: { delay: i * 0.05 },
        }),
    };

    return (
        <section className={style.container}>
            <h1>Tech Stack</h1>
            <motion.ul
                // variants={containerVarients}
                // initial="out"
                // animate={isInView ? "in" : "out"} // Control the parent's state based on isInView
                ref={techRef}
                className={style.techStackContainer}
            >
                <div className={style.techStack}>
                    {techIconArrays.map((item, i) => {
                        return (
                            <motion.div
                                key={i} // Key should be unique for each child
                                variants={itemVariants} // Assign variants for the stagger effect
                                animate={isInView ? "in" : "out"}
                                custom={i}
                            >
                                <TechIcon key={i}>{item.node}</TechIcon>
                                <p>{item.name}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.ul>
            <div className={style.glow}>
                <div></div>
            </div>
            <div className={style.glow2}>
                <div></div>
            </div>
            <div className={style.glow3}>
                <div></div>
            </div>
        </section>
    );
}

export default TechStack;
