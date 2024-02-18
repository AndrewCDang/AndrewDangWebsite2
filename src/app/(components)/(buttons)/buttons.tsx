import React from "react";
import style from "./buttons.module.scss";
import { RightArrow } from "../svgs";
import Link from "next/link";

export function LinkButton1({ text, link }: { text: string; link: string }) {
    return (
        <Link target="_blank" href={link} className={style.anchor}>
            <button className={style.linkButton1}>
                <h6>{text}</h6>
                <div>
                    <RightArrow />
                </div>
                <span>
                    <div>
                        <h6>{text}</h6>
                        <div>
                            <RightArrow />
                        </div>
                    </div>
                </span>

                <span className={style.span2}>
                    <div></div>
                </span>
            </button>
        </Link>
    );
}

export function LinkButton2({ text, link }: { text: string; link: string }) {
    return (
        <Link target="_blank" href={link} className={style.anchor}>
            <button className={style.linkButton2}>
                <h6>{text}</h6>
                <div>
                    <RightArrow />
                </div>
                <span>
                    <div>
                        <h6>{text}</h6>
                        <div>
                            <RightArrow />
                        </div>
                    </div>
                </span>
            </button>
        </Link>
    );
}

export function Button({ text }: { text: string }) {
    return (
        <button className={style.button1}>
            <div>
                <h6>{text}</h6>
                <div>
                    <RightArrow />
                </div>
                <span>
                    <div>
                        <h6>{text}</h6>
                        <div>
                            <RightArrow />
                        </div>
                    </div>
                </span>
            </div>
        </button>
    );
}
