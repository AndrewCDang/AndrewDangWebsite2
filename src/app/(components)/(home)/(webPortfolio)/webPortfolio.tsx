import React, { MutableRefObject, ReactNode, RefObject } from "react";
import styles from "./webPortfolio.module.scss";
import TechTextIcons from "../../(icons)/techTextIcons";
import { LinkButton1, LinkButton2 } from "../../(buttons)/buttons";
import memoMake_gif1 from "../../../../../public/homepage/memomake-gif-1.gif";
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
import portfolio_gif from "../../../../../public/homepage/homepage-portfolio.gif";

import Image from "next/image";
import FlashmuVideo from "./assets/flashmuVideo";
import ExhibitsVideo from "./assets/exhibitsVideo";
import PortfolioCarousel from "./portfolioCarousel";

export type PortfolioProps = {
    name: string;
    headings: string[];
    techStack: Array<string[]>;
    gitLink?: string;
    webLink?: string;
    figures?: { caption: string; image: ReactNode }[] | null;
    scrollBar: boolean;
    video?: { caption: string; video: ReactNode } | null;
};

const PortfolioItem = ({ props }: { props: PortfolioProps }) => {
    return (
        <section>
            <div>
                <h2 className={styles.projectName}>{props.name}</h2>
                <section className={styles.content}>
                    {/* Tech Stack */}
                    <div>
                        <div>
                            <div className={styles.subtitles}>
                                {props.headings.map((item, i) => {
                                    return <p key={i}>{item}</p>;
                                })}
                            </div>
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
                    {props.figures && (
                        <PortfolioCarousel data={props}>
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
                        </PortfolioCarousel>
                    )}
                    {props.video && (
                        <div className={styles.videoContainer}>
                            {props.video.video}
                        </div>
                    )}
                </section>

                {/* Buttons */}
                <div className={styles.linksContainer}>
                    {props.gitLink && (
                        <LinkButton2 text="Code" link={props.gitLink} />
                    )}
                    {props.webLink && props.webLink !== "soon" && (
                        <LinkButton1
                            text="Visit Website"
                            link={props.webLink}
                        />
                    )}
                    {props.webLink && props.webLink === "soon" && (
                        <div className={styles.soon}>Deploying Soon</div>
                    )}
                </div>
            </div>
        </section>
    );
};

const clipprPortfolio = {
    name: "Clippr.",
    headings: [
        "Personalised Barber Discovery and Booking App based on ethnicity and venue type",
    ],
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

const webPortfolio = {
    name: "Website Portfolio",
    headings: ["The website you're currently on!"],
    techStack: [
        ["Next.js", "TypeScript"],
        ["SASS/SCSS", "Framer Motion"],
    ],
    gitLink: "https://github.com/AndrewCDang/AndrewDangWebsite2",
    figures: [
        {
            caption:
                "Portfolio website consisting of dynamic custom and scroll-based animations",
            image: <Image alt={"clippr image"} src={portfolio_gif} />,
        },
    ],
    scrollBar: false,
};

const racketPortfolio = {
    name: "Racket Radar",
    headings: [
        "Personalised badminton racket finder and matcher based on skill level and user preferences",
    ],
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
        "•Interactive Hang-Man App Built in React",
        "•Custom Animations and graphics",
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

const memmoMakePortfolio = {
    name: "Quizmu",
    headings: [
        "• Online Communual FlashCard Quizz Maker and Tester",
        "• View and edit collection in dashboard, create cards in tables ",
        "• Backend/database utilising SQL joins, aggregate functions, CTEs and more",
        "• Implementing caching for fetch requests with on-demand revalidation",
    ],
    techStack: [
        ["Next.js", "TypeScript"],
        ["SASS/SCSS Modules", "Framer Motion"],
        ["Zod", "AuthJs", "PostgreSQL", "Neon", "PostgresJs", "Cloudinary"],
    ],
    gitLink: "https://github.com/AndrewCDang/MemoMake",
    webLink: "https://www.quizmu.com/",
    video: {
        caption: "Interactive flashcard set quizz",
        video: <FlashmuVideo />,
    },

    scrollBar: false,
};

const exhibitionPortfolio = {
    name: "Exhibits",
    headings: [
        "• Freelance : Designed and developed Exhibits web-app as the sole contributor. Collaborated with the founder through meetings to refine and iterate designs.",
        "• Exhibits’ transforms how users discover and engage with London’s vibrant art scene, offering an intuitive interface to explore over ongoing 150 exhibits, 250 venues, and 75 curated categories. The also website aims to promote the existing mobile app. ",
        "• Implemented seamless integration of existing Django backend with Next.js app. Used SSG to generate static pages for SEO purposes, ISR to improve page load times/reduce server load.",
        "• Achieved scores of at least 90/100 on Lighthouse (Performance, Accessibility SEO).",
    ],
    techStack: [
        ["Next.js", "TypeScript"],
        ["TailwindCSS", "ShadCn", "Framer Motion"],
        ["React Query", "AuthJs", "React-Hook-Form", "Zod", "Zustand"],
        ["Django REST framework"],
    ],
    // gitLink: "https://github.com/AndrewCDang/Exhibition",
    // webLink: "https://exhibition.andrewcdang.com/",
    video: {
        caption: "Exhibits website",
        video: <ExhibitsVideo />,
    },

    scrollBar: false,
};

function WebPortfolio({
    webPortfolioRef,
}: {
    webPortfolioRef: RefObject<HTMLDivElement>;
}) {
    return (
        <section ref={webPortfolioRef} className={styles.portfolioContainer}>
            <section className={styles.portfolio}>
                <PortfolioItem props={exhibitionPortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={memmoMakePortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={clipprPortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={racketPortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={hangManPortfolio} />
                <hr className={styles.hr}></hr>
                <PortfolioItem props={webPortfolio} />
                <hr className={styles.hr}></hr>
            </section>
        </section>
    );
}

export default WebPortfolio;
