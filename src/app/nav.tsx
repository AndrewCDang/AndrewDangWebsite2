"use client";

import styles from "./styles/nav.module.scss";
import Link from "next/link";
import NavBuger from "./(components)/(nav)/navBurger";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAnimate } from "framer-motion";

function Nav() {
    const Logo = () => {
        return (
            <svg
                style={{ fill: "black" }}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 627.1 404.46"
                width={40}
                height={40}
            >
                <path d="M0,403.58c.66,.44,.8,.61,.94,.61,35.32,.11,70.64,.24,105.95,.2,1.19,0,2.95-1.39,3.47-2.56,2.11-4.7,3.73-9.61,5.72-14.36,13.67-32.71,27.34-65.42,41.1-98.09,15.63-37.11,31.31-74.19,47.07-111.24,2.87-6.74,6.24-13.27,9.81-20.8,1.02,2.06,1.49,2.91,1.87,3.81,12.79,30.55,25.65,61.07,38.32,91.66,12.29,29.66,24.43,59.39,36.57,89.11,8.05,19.71,16.09,39.42,23.85,59.25,1.38,3.54,3.68,3.22,6.3,3.22,32.16,.03,64.32,.05,96.48,.07,1.59,0,3.18,0,5.11,0-.27-1.37-.3-2.03-.53-2.62-9.62-24.28-19-48.66-28.95-72.81-18.94-45.99-38.04-91.91-57.36-137.74-16.54-39.25-33.49-78.32-50.25-117.48-9.96-23.26-19.91-46.51-29.83-69.79-1.04-2.44-2.09-3.99-5.34-3.97-24.16,.19-48.32,.16-72.48,.07-2.77-.01-4.13,.9-5.16,3.47-3.53,8.81-7.23,17.55-11.01,26.24-17.6,40.43-35.22,80.85-52.9,121.24-12.13,27.72-24.5,55.33-36.53,83.1-17.71,40.9-35.24,81.89-52.76,122.87-6.59,15.41-12.94,30.92-19.47,46.53Z" />
                <path d="M298.25,.19c2.71,0,4.34,0,5.98,0,38.5,0,77.01-.51,115.49,.14,38.18,.64,74.36,9.68,107.84,29.15,24.92,14.49,46.17,33.13,63.28,56.44,18.23,24.85,29.92,52.61,34.1,83.56,5.96,44.06-.39,86.19-19.44,126.07-14.28,29.89-35.31,54.21-61.94,73.66-23.67,17.28-49.9,28.22-78.03,35-3,.72-4.56-.12-5.71-3.08-10.47-26.92-21.05-53.8-31.59-80.69-.19-.47-.36-.95-.53-1.43-2.46-7.26-2.16-7.63,5.47-8.97,20.1-3.5,39.06-10,55.29-23.02,21.88-17.54,31.51-41.69,34.99-68.94,2.05-16.08,1.95-32.17-1.96-47.98-5.63-22.79-18.12-40.44-38.63-51.81-18.56-10.29-38.8-14.28-59.54-14.96-25.97-.85-51.97-.59-77.96-.59-3.9,0-5.62-1.09-7.2-4.98-9.94-24.59-20.36-48.99-30.51-73.5-3.15-7.61-6-15.35-9.4-24.09Z" />
            </svg>
        );
    };

    const [burgerOpen, setBurgerOpen] = useState(false);
    const navModalRef = useRef<HTMLElement>(null);
    const burgerRef = useRef<HTMLElement>(null);

    const navClickHandler = (e: Event) => {
        if (
            !burgerRef.current?.contains(e.target as HTMLElement) &&
            !navModalRef.current?.contains(e.target as HTMLElement) &&
            burgerOpen
        ) {
            setBurgerOpen(false);
        }
    };
    const handleEscKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            if (burgerOpen) {
                setBurgerOpen(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("click", navClickHandler);
        document.addEventListener("keydown", handleEscKeyPress);

        return () => {
            window.removeEventListener("click", navClickHandler);
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    });

    return (
        <section className={styles.navBar}>
            <section>
                <Link href={"/"}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                </Link>
                <section className={styles.sectionContent}>
                    <div>
                        <Link href={"/"}>
                            <p>Web-Dev</p>
                        </Link>
                        <Link href={"/Architecture"}>
                            <p>Architecture</p>
                        </Link>
                        <Link href={"/Art"}>
                            <p>Art</p>
                        </Link>
                    </div>
                    <aside
                        ref={burgerRef}
                        onClick={() => setBurgerOpen(!burgerOpen)}
                    >
                        <NavBuger state={burgerOpen} />
                    </aside>
                </section>
                <motion.aside
                    ref={navModalRef}
                    initial={false}
                    animate={{
                        transform: burgerOpen
                            ? "translateY(0%)"
                            : "translateY(-100%)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        velocity: 50,
                        restSpeed: 1,
                    }}
                    className={styles.navModal}
                >
                    <div>
                        <Link
                            onClick={() => setBurgerOpen(!burgerOpen)}
                            href={"/"}
                        >
                            <h4>Web-Dev</h4>
                        </Link>
                        <Link
                            onClick={() => setBurgerOpen(!burgerOpen)}
                            href={"/Architecture"}
                        >
                            <h4>Architecture</h4>
                        </Link>
                        <Link
                            onClick={() => setBurgerOpen(!burgerOpen)}
                            href={"/Art"}
                        >
                            <h4>Art</h4>
                        </Link>
                    </div>
                </motion.aside>
            </section>
        </section>
    );
}

export default Nav;
