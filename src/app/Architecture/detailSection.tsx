"use client";
import { Dudd6 } from "./architectureImages";
import style from "./architecture.module.scss";
import { useRef, useEffect, useLayoutEffect } from "react";

function DetailSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null); // Store the animation frame id

    const scrollWidthRef = useRef(0);
    const containerWidthRef = useRef(0);
    const animationDirectionRef = useRef(1);
    const scrollLeftRef = useRef(0);
    const pauseRef = useRef(false);
    const isTransitioning = useRef(false);

    const animation = () => {
        if (scrollRef.current) {
            if (!pauseRef.current) {
                scrollLeftRef.current += 0.5 * animationDirectionRef.current;
                scrollRef.current.scrollLeft = scrollLeftRef.current;
            } else {
                return;
            }

            // Directional modifier at ends
            if (
                scrollRef.current.scrollLeft >=
                    scrollWidthRef.current - containerWidthRef.current - 1 &&
                animationDirectionRef.current != -1
            ) {
                animationDirectionRef.current = -1;
            }
            if (
                scrollRef.current.scrollLeft <= 1 &&
                animationDirectionRef.current != 1
            ) {
                animationDirectionRef.current = 1;
            }
            animationFrameRef.current = requestAnimationFrame(animation);
        }
    };

    const unpauseAnimation = (e: MouseEvent) => {
        if (
            scrollRef.current?.contains(e.target as HTMLDivElement) &&
            !isTransitioning.current
        ) {
            scrollLeftRef.current = scrollRef.current.scrollLeft;
            pauseRef.current = false;
            requestAnimationFrame(animation);
        }
    };

    const animationStartRef = useRef(0);

    const pauseAnimation = (e: MouseEvent | TouchEvent) => {
        if (scrollRef.current?.contains(e.target as HTMLDivElement)) {
            pauseRef.current = true;

            // Cancel any ongoing animation frame request
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null; // Reset the reference
            }

            startRef.current = (scrollRef.current as HTMLDivElement).scrollLeft;
            endRef.current =
                (scrollRef.current as HTMLDivElement).scrollLeft +
                25 * animationDirectionRef.current;

            requestAnimationFrame(pauseAnimationTransition);
        }
    };

    const startRef = useRef(0);
    const endRef = useRef(0);
    const duration = 1000;

    function easeOutQuad(t: number) {
        return t * (2 - t);
    }

    function lerp(start: number, end: number, t: number) {
        const easedT = easeOutQuad(t);
        return start * (1 - easedT) + end * easedT;
    }

    const pauseAnimationTransition = (currentTime: number) => {
        if (!animationStartRef.current) {
            animationStartRef.current = currentTime;
        }
        const elapsedTime = currentTime - animationStartRef.current;
        let t = elapsedTime / duration;

        if (t > 1) t = 1;
        const position = lerp(startRef.current, endRef.current, t) as number;

        scrollLeftRef.current = position;
        if (scrollRef.current) {
            (scrollRef.current as HTMLDivElement).scrollLeft =
                scrollLeftRef.current;
        }

        if (t < 1) {
            animationFrameRef.current = requestAnimationFrame(
                pauseAnimationTransition
            );
            if (!isTransitioning.current) {
                isTransitioning.current = true;
            }
        } else {
            animationStartRef.current = 0;
            isTransitioning.current = false;
        }
    };

    // Scroll Animation
    useLayoutEffect(() => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth;
            const scrollContainerWidth = scrollRef.current.offsetWidth / 2;
            const startingScroll = scrollRef.current.scrollWidth / 2;

            scrollRef.current.scrollLeft =
                scrollWidth - startingScroll - scrollContainerWidth;

            scrollWidthRef.current = scrollWidth;
            containerWidthRef.current = scrollRef.current.offsetWidth;

            requestAnimationFrame(animation);
        }
    }, [scrollRef]);

    // Pause Animation
    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.addEventListener("mouseenter", pauseAnimation);
            scrollRef.current.addEventListener("touchstart", pauseAnimation);

            scrollRef.current.addEventListener("mouseleave", unpauseAnimation);
            scrollRef.current.addEventListener("touchend", pauseAnimation);
        }
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener(
                    "mouseenter",
                    pauseAnimation
                );
                scrollRef.current.removeEventListener(
                    "mouseleave",
                    unpauseAnimation
                );
            }
        };
    }, [scrollRef]);

    const cancelAnimation = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    // Use this in a cleanup effect or wherever you need to stop the animation
    useEffect(() => {
        return () => {
            cancelAnimation(); // Cancel on unmount
        };
    }, []);

    return (
        <div ref={scrollRef} className={style.detailSection}>
            <Dudd6 />
        </div>
    );
}

export default DetailSection;
