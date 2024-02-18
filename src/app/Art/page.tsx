"use client";

import { Image0, Image1, Image2, Image3, Image4, Image5 } from "./artImages";

import Carousel from "./carousel";
import style from "./art.module.scss";
import { XSvg, ArrowBracketSVG } from "../(components)/svgs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    {
        image: <Image4 />,
        caption: { year: 2021, name: "Distant Dream", notes: "Digital" },
    },
    {
        image: <Image1 />,
        caption: { year: 2021, name: "Figure Practice", notes: "Digital" },
    },
    {
        image: <Image2 />,
        caption: { year: 2022, name: "Reunion", notes: "Digital" },
    },
    {
        image: <Image5 />,
        caption: { year: 2023, name: "Final Appeal", notes: "Digital" },
    },
    {
        image: <Image3 />,
        caption: { year: 2018, name: "For K.Y.S", notes: "Oil Painting" },
    },
    {
        image: <Image0 />,
        caption: { year: 2018, name: "Reflections Beneath", notes: "Digital" },
    },
];

function page() {
    const [carousel, setCarousel] = useState(false);
    const [imageFocus, setImageFocus] = useState<number>(0);

    return (
        <section className={style.container}>
            <div>
                <div className={style.imageGrid}>
                    {images.map((image, index) => {
                        return (
                            <div className={style.imageItem} key={index}>
                                <small>
                                    <span>{image.caption.name}</span>
                                    <span>{image.caption.notes}</span>
                                    <span>{image.caption.year}</span>
                                </small>
                                <div
                                    className={style.galleryImgContainer}
                                    onClick={() => (
                                        setImageFocus(index), setCarousel(true)
                                    )}
                                >
                                    {image.image}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <AnimatePresence>
                {carousel ? (
                    <motion.section
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={style.carousel}
                    >
                        <button
                            onClick={() => setCarousel(false)}
                            className={style.xBtn}
                        >
                            <XSvg />
                        </button>
                        <button
                            style={{
                                opacity:
                                    imageFocus === images.length - 1 ? 0.2 : 1,
                            }}
                            onClick={() =>
                                imageFocus < images.length - 1
                                    ? setImageFocus((state) => state + 1)
                                    : null
                            }
                            className={style.rightArrow}
                        >
                            <ArrowBracketSVG />
                        </button>
                        <button
                            style={{
                                opacity: imageFocus === 0 ? 0.2 : 1,
                            }}
                            onClick={() =>
                                imageFocus > 0
                                    ? setImageFocus((state) => state - 1)
                                    : null
                            }
                            className={style.leftArrow}
                        >
                            <ArrowBracketSVG />
                        </button>
                        <Carousel imageFocus={imageFocus} />
                    </motion.section>
                ) : null}
            </AnimatePresence>
        </section>
    );
}

export default page;
