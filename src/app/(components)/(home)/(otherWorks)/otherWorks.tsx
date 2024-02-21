import style from "./otherWorks.module.scss";
import architectureImg from "/public/architecture/architecture-banner-btn.jpg";
import artImg from "/public/art/andrewDang_art4-lq.jpg";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";

import Image from "next/image";

function OtherWorks({ scrollYProgress }: { scrollYProgress: any }) {
    const parallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const architectureItems = {
        name: "Architecture",
        src: architectureImg,
    };
    const artItems = {
        name: "Art",
        src: artImg,
    };

    const itemsArry = [architectureItems, artItems];

    return (
        <section className={style.container}>
            <div>
                <h1>Other Works</h1>
                <div className={style.sectionContainer}>
                    {itemsArry.map((item, i) => {
                        return (
                            <Link href={`/${item.name}`} key={i}>
                                <section className={style.workContainer}>
                                    <div>
                                        <motion.div
                                            style={{
                                                y: parallax,
                                                height: "100%",
                                                width: "100%",
                                            }}
                                        >
                                            <div className={style.workImage}>
                                                <Image
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                    alt=""
                                                    placeholder="blur"
                                                    src={item.src}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                    <h5>{item.name}</h5>
                                </section>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default OtherWorks;
