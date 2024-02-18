import React, { ReactNode } from "react";
import styles from "./webPortfolio.module.scss";
import TechTextIcons from "../../(icons)/techTextIcons";
import { LinkButton1, LinkButton2 } from "../../(buttons)/buttons";
import clippr_gif1 from "../../../../../public/homepage/homepage_clippr.gif";
import clippr_gif2 from "../../../../../public/homepage/homepage_clippr2.gif";
import clippr_gif3 from "../../../../../public/homepage/homepage_clippr3.gif";
import clippr_gif4 from "../../../../../public/homepage/homepage_clippr4.gif";
import clippr_gif5 from "../../../../../public/homepage/homepage_clippr5.gif";
import clippr_gif6 from "../../../../../public/homepage/homepage_clippr6.gif";
import racket_gif1 from "../../../../../public/homepage/homepage_racket1.gif";
import racket_gif2 from "../../../../../public/homepage/homepage_racket2.gif";
import racket_gif3 from "../../../../../public/homepage/homepage_racket3.gif";
import hangman_gif1 from "../../../../../public/homepage/homepage_hangman1.gif";
import hangman_gif2 from "../../../../../public/homepage/homepage_hangman2.gif";

import Image from "next/image";

type PortfolioProps = {
    name: string;
    headings: string[];
    techStack: Array<string[]>;
    gitLink: string;
    webLink: string;
    figures: { caption: string; image: ReactNode }[];
    scrollBar: boolean;
};

const PortfolioItem = ({ props }: { props: PortfolioProps }) => {
    return (
        <section>
            <div>
                <section className={styles.content}>
                    {/* Tech Stack */}
                    <div>
                        <div>
                            <h2 className={styles.projectName}>{props.name}</h2>
                            {props.headings.map((item, i) => {
                                return <p key={i}>{item}</p>;
                            })}
                        </div>
                        <div className={styles.techStack}>
                            {props.techStack.map((items, i) => {
                                return (
                                    <div key={i}>
                                        {items.map((item, i) => {
                                            return (
                                                <TechTextIcons
                                                    key={i}
                                                    tech={item}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Images */}
                    <div
                        className={`${styles.portfolioImageContainer} ${
                            props.scrollBar && styles.scrollBar
                        }`}
                    >
                        {props.figures.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`${styles.portfolioImage}`}
                                >
                                    <div className={styles.imageItem}>
                                        {item.image}
                                        <small>{item.caption}</small>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Buttons */}
                <div className={styles.linksContainer}>
                    <LinkButton2 text="Code" link={props.gitLink} />
                    <LinkButton1 text="Visit Website" link={props.webLink} />
                </div>
            </div>
        </section>
    );
};

const clipprPortfolio = {
    name: "Clippr.",
    headings: ["Barber Discovery and Booking App"],
    techStack: [
        ["Next.js", "TypeScript", "TailwindCSS"],
        ["Supabase", "Supabase Auth", "SQL"],
        ["Zustand", "React Hook Form"],
    ],
    gitLink: "https://github.com/AndrewCDang/clippr",
    webLink: "https://clippr.vercel.app/",
    figures: [
        {
            caption: "Unique landing page with scrollbased animation.",
            image: <Image alt={"clippr image"} src={clippr_gif1} />,
        },
        {
            caption:
                "Personalisation input modal + utilising Google location auto-complete API.",
            image: <Image alt={"clippr image"} src={clippr_gif2} />,
        },
        {
            caption:
                "View/interaction of appointments. Navigates to table of previous haircuts",
            image: <Image alt={"clippr image"} src={clippr_gif3} />,
        },
        {
            caption:
                "Booking calander system shows available cuts on barber available days.",
            image: <Image alt={"clippr image"} src={clippr_gif4} />,
        },
        {
            caption: "Customer looking through past cuts + review",
            image: <Image alt={"clippr image"} src={clippr_gif5} />,
        },
        {
            caption: "Account set up creation with image uploads",
            image: <Image alt={"clippr image"} src={clippr_gif6} />,
        },
    ],
    scrollBar: true,
};

const racketPortfolio = {
    name: "Racket Radar",
    headings: ["Racket finder and matcher via user skill level"],
    techStack: [
        ["React", "JavaScript", "CSS"],
        ["Node.js", "Express.js", "MongoDb"],
    ],
    gitLink: "https://github.com/AndrewCDang/RacketRadar",
    webLink: "https://racket-radar.netlify.app/",
    figures: [
        {
            caption:
                "Dynamically filter rackets based on racket/user specifications",
            image: <Image src={racket_gif1} alt="racket image" />,
        },
        {
            caption: "Select and compare, like and favourite",
            image: <Image src={racket_gif2} alt="racket image" />,
        },
        {
            caption:
                "Find out user skill level, placed in region of suggested rackets ",
            image: <Image src={racket_gif3} alt="racket image" />,
        },
    ],
    scrollBar: false,
};

const hangManPortfolio = {
    name: "Hang Man",
    headings: [
        "Interactive hang-man built in React",
        "Custom Animations and graphics",
    ],
    techStack: [["React", "JavaScript", "CSS"], ["Redux Toolkit"]],
    gitLink: "https://github.com/AndrewCDang/HangMan",
    webLink: "https://andrewcdang.github.io/HangMan/",
    figures: [
        {
            caption: "Win outcome - Custom animted SVGs",
            image: <Image src={hangman_gif1} alt="racket image" />,
        },
        {
            caption:
                "Lose outcome - definition of word fetched via dictionary API ",
            image: <Image src={hangman_gif2} alt="hangman image" />,
        },
    ],
    scrollBar: false,
};

function WebPortfolio() {
    return (
        <section className={styles.portfolioContainer}>
            <section className={styles.portfolio}>
                <div className={styles.title}>
                    <div>
                        <h1>Portfolio Projects</h1>
                        <div className={styles.glow}>
                            <div></div>
                        </div>
                        <div className={styles.glow2}>
                            <div></div>
                        </div>
                        <div className={styles.glow3}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <PortfolioItem props={clipprPortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={racketPortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={hangManPortfolio} />
            </section>
        </section>
    );
}

export default WebPortfolio;
