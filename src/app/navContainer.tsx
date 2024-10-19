"use client";
import React, { useEffect, useState } from "react";
import style from "./(components)/(nav)/navContainer.module.scss";
import { motion } from "framer-motion";

const NavBar = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        // Get current scroll position
        const currentScrollY = window.scrollY;

        // Check if the user is scrolling down or up
        if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Hide navbar when scrolling down
        } else {
            setIsVisible(true); // Show navbar when scrolling up
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", controlNavbar);

        // Clean up event listener on unmount
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
