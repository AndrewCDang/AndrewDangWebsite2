import React, { FormEvent, useEffect } from "react";
import style from "./contactMe.module.scss";
import { Github, LinkedIn } from "../../svgs";
import { useState, useRef } from "react";
import { Button } from "../../(buttons)/buttons";
import { onSubmit } from "@/app/(api)/formSubmission";
import { useAnimate } from "framer-motion";

function ContactMe() {
    const [emailValid, setEmailValid] = useState<boolean | null>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [errorMessages, setErrorMessage] = useState<string[]>([]);
    const [sending, setSending] = useState<boolean>(false);

    const validateEmail = (input: string) => {
        const regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
        const condition = regex.test(input);
        if (condition) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const submitRequest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (messageRef.current) {
            if (emailValid && messageRef.current.value.length > 0) {
                setSending(true);
                const submit = await onSubmit(e);
                setSending(false);
                if (submit?.Success) {
                    constHandleAnimate();
                }

                return;
            }
        }
    };

    const submitBtn = () => {
        if (messageRef.current) {
            let errorMessagesArray = [] as string[];
            if (!emailValid) {
                errorMessagesArray = [...errorMessagesArray, "Invalid Email"];
            }
            if (messageRef.current.value.length === 0) {
                errorMessagesArray = [
                    ...errorMessagesArray,
                    "Please Enter Message",
                ];
            }
            if (!emailValid || messageRef.current.value.length === 0) {
                constHandleInvalid();
            }
            setErrorMessage(errorMessagesArray);
        }
    };

    const [scope0, animate0] = useAnimate();

    const constHandleAnimate = async () => {
        animate0(
            "button",
            { pointerEvents: "none", userSelect: "none" },
            { duration: 0 }
        );
        await animate0(
            "#sentText",
            {
                y: 100,
            },
            { duration: 0 }
        );
        await animate0(
            "form",
            { opacity: 0.3, rotate: 180, scaleY: 0.5 },
            { ease: "easeInOut", duration: 0.5 }
        );
        await Promise.all([
            animate0("form", { x: 300, opacity: 0, scaleY: 0.1 }),
            animate0("#sentText", {
                opacity: 1,
                zIndex: 200,
                y: 0,
            }),
        ]);

        await animate0(
            "#sentText",
            {
                opacity: 0,
                y: 100,
            },
            { ease: "easeInOut", duration: 0.12 }
        );

        await animate0(
            "#sentText",
            {
                opacity: 0,
                y: 0,
                zIndex: 0,
            },
            { duration: 0 }
        );
        await animate0("form", { x: -400, rotate: 0 }, { duration: 0 });

        if (emailRef.current && messageRef.current) {
            emailRef.current.value = "";
            messageRef.current.value = "";
        }

        animate0(
            "form",
            {
                opacity: 1,
                scaleY: 1,
                x: 0,
            },
            { duration: 0.5 }
        );
        animate0(
            "button",
            { pointerEvents: "unset", userSelect: "unset" },
            { duration: 0 }
        );
        animate0(
            "#sentText",
            { opacity: 0, zIndex: 0, scale: 1 },
            { duration: 0 }
        );
    };

    const constHandleInvalid = async () => {
        await animate0("form", { x: 20 }, { ease: "easeIn", duration: 0.1 });
        await animate0("form", { x: -20 }, { ease: "linear", duration: 0.1 });
        await animate0("form", { x: 0 }, { type: "spring", stiffness: 500 });
    };

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

                <section ref={scope0} className={style.formContainer}>
                    <h6>Send me a message</h6>
                    <form onSubmit={submitRequest}>
                        <span className={style.formBackground}></span>
                        <fieldset>
                            <input
                                ref={emailRef}
                                placeholder=""
                                onChange={(e) => validateEmail(e.target.value)}
                                id="userEmail"
                                type="email"
                                name="email"
                                required
                            ></input>
                            <label
                                style={{
                                    color:
                                        emailValid == false
                                            ? "rgb(255, 86, 120)"
                                            : "rgb(169, 169, 169)",
                                }}
                                htmlFor="userEmail"
                            >{`${
                                emailValid == false
                                    ? "Enter valid email"
                                    : "Your email"
                            }`}</label>
                            <span className={style.span1}></span>
                        </fieldset>
                        <hr></hr>
                        <fieldset>
                            <textarea
                                ref={messageRef}
                                placeholder=""
                                rows={6}
                                name="message"
                                required
                            ></textarea>
                            <label htmlFor="message">Message</label>
                            <span></span>
                        </fieldset>
                        <div className="h-captcha" data-captcha="true"></div>
                        <div className={style.buttonContainer}>
                            <Button
                                text={sending ? "Sending" : "Send"}
                                handler={submitBtn}
                                loading={sending}
                            />
                            {errorMessages && (
                                <ul className={style.errorsContainer}>
                                    {errorMessages.map((err, index) => {
                                        return <li key={index}>{err}</li>;
                                    })}
                                </ul>
                            )}
                        </div>
                    </form>
                    <h3 id="sentText" className={style.sentConfirmation}>
                        Sent!
                    </h3>
                </section>
            </section>
            <span className={style.formBg}></span>
        </section>
    );
}

export default ContactMe;
