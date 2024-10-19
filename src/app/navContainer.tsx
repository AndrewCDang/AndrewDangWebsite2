"use client";
import React, { useEffect, useState } from "react";
import style from "./(components)/(nav)/navContainer.module.scss";
import { motion } from "framer-motion";

const NavBar = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;

        // Only hide navbar if the user scrolls down more than 24px
        if (currentScrollY > lastScrollY && currentScrollY > 24) {
            setIsVisible(false); // Hide navbar when scrolling down past threshold
        } else if (currentScrollY < lastScrollY) {
            setIsVisible(true); // Show navbar when scrolling up
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <motion.nav
            style={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : "-100%" }}
            className={style.navBar}
        >
            {children}
        </motion.nav>
    );
};

export default NavBar;
