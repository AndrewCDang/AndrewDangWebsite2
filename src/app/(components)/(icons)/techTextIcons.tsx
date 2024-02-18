import React from "react";
import style from "./techTextIcons.module.scss";

function TechTextIcons({ tech }: { tech: string }) {
    return <div className={style.icon}>{tech}</div>;
}

export default TechTextIcons;
