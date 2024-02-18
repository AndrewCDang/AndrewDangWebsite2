import React from "react";
import style from "./contactMe.module.scss";
import { Github, LinkedIn } from "../../svgs";
import { useState } from "react";
import { Button } from "../../(buttons)/buttons";

function ContactMe() {
    return (
        <section className={style.container}>
            <section className={style.section}>
                <h2>Contact</h2>
                <div className={style.mediaGrid}>
                    <a target="_blank" href="https://github.com/AndrewCDang">
                        <div className={style.contactIcon}>
                            <Github />
                        </div>
                        <p>Github</p>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/andrew-dang-91b4bb173/"
                    >
                        <div className={style.contactIcon}>
                            <LinkedIn />
                        </div>
                        <p>LinkedIn </p>
                    </a>
                </div>
                <hr></hr>

                <section className={style.formContainer}>
                    <h6>Send me a message</h6>
                    <form>
                        <span className={style.formBackground}></span>

                        <fieldset>
                            <input
                                placeholder=""
                                id="userEmail"
                                type="text"
                            ></input>
                            <label htmlFor="userEmail">Your email</label>
                            <span className={style.span1}></span>
                        </fieldset>
                        <hr></hr>
                        <fieldset>
                            <textarea
                                placeholder=""
                                rows={6}
                                id="message"
                            ></textarea>
                            <label htmlFor="message">Message</label>
                            <span></span>
                        </fieldset>
                    </form>
                    <div>
                        <Button text="Send" />
                    </div>
                </section>
            </section>
            <span className={style.formBg}></span>
        </section>
    );
}

export default ContactMe;
