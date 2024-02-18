import styles from "./art.module.scss";
import { XSvg } from "../(components)/svgs";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

import {
    Image0C,
    Image1C,
    Image2C,
    Image3C,
    Image4C,
    Image5C,
} from "./artImages";

function Carousel({ imageFocus }: { imageFocus: number }) {
    const images = [
        {
            image: <Image4C />,
            caption: { year: 2021, name: "Distant Dream", notes: "Digital" },
        },
        {
            image: <Image1C />,
            caption: { year: 2021, name: "Figure Practice", notes: "Digital" },
        },
        {
            image: <Image2C />,
            caption: { year: 2022, name: "Reunion", notes: "Digital" },
        },
        {
            image: <Image5C />,
            caption: { year: 2023, name: "Final Appeal", notes: "Digital" },
        },
        {
            image: <Image3C />,
            caption: { year: 2018, name: "For K.Y.S", notes: "Oil Painting" },
        },
        {
            image: <Image0C />,
            caption: {
                year: 2018,
                name: "Reflections Beneath",
                notes: "Digital",
            },
        },
    ];

    return (
        <div className={styles.carouselContainer}>
            {images.map((image, index) => {
                return (
                    <motion.div
                        animate={{
                            x: `${100 * (index - imageFocus)}%`,
                            scale: index === imageFocus ? 1 : 0.3,
                        }}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                        initial={false}
                        className={styles.carousellImage}
                        key={index}
                    >
                        <div className={styles.imageCaptionContainer}>
                            {image.image}
                            <small className={styles.carouselCaption}>
                                <span>{image.caption.name}</span>
                                <span>{image.caption.notes}</span>
                                <span>{image.caption.year}</span>
                            </small>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Carousel;
