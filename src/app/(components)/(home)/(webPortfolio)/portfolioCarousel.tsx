"use client";
import React, { useEffect } from "react";
import styles from "./webPortfolio.module.scss";
import { PortfolioProps } from "./webPortfolio";

function PortfolioCarousel({
    children,
    data,
}: {
    children: React.ReactNode;
    data: PortfolioProps;
}) {
    const imageConainerRef = React.useRef<HTMLDivElement>(null);
    const [scrollPositioin, setScrollPositioin] = React.useState(0);
    const numberOfImages = React.Children.count(children);

    const handleScroll = () => {
        if (imageConainerRef.current) {
            const imageContainer = imageConainerRef.current;

            const imageScrollLeft = imageContainer.scrollLeft;
            const imageScrollWidth = imageContainer.scrollWidth;
            const scrollPage = Math.round(
                (imageScrollLeft / imageScrollWidth) * numberOfImages
            );
            console.log(scrollPage);
            setScrollPositioin(scrollPage);
        }
    };

    useEffect(() => {
        if (imageConainerRef.current) {
            imageConainerRef.current.addEventListener("scroll", handleScroll);
            return () => {
                if (imageConainerRef.current) {
                    imageConainerRef.current.removeEventListener(
                        "scroll",
                        handleScroll
                    );
                }
            };
        }
    }, [scrollPositioin]);

    const scrollToHandler = (i: number) => {
        if (imageConainerRef.current) {
            imageConainerRef.current.scrollTo({
                left: i * imageConainerRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className={styles.portfolioImageWrap}>
            <div
                ref={imageConainerRef}
                className={`${styles.portfolioImageContainer} ${
                    data.scrollBar && styles.scrollBar
                }`}
            >
                {children}
                {numberOfImages > 1 && (
                    <div className={styles.scrollLabel}>
                        {Array.from({ length: numberOfImages }, (_, i) => {
                            return (
                                <div
                                    onClick={() => scrollToHandler(i)}
                                    style={{
                                        opacity:
                                            i === scrollPositioin ? 1 : 0.5,
                                    }}
                                    key={i}
                                    className={styles.scrollRadioBtn}
                                ></div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PortfolioCarousel;
