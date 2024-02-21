import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import duddingston2 from "../../../public/architecture/interior1.jpg";
import duddingston3 from "../../../public/architecture/interior2.jpg";
import duddingston4 from "../../../public/architecture/axo1.jpg";
import duddingston5 from "../../../public/architecture/axo2.jpg";
import duddingston6 from "../../../public/architecture/2804_T_Long-01.jpg";
import duddingston7 from "../../../public/architecture/section.jpg";
import exploration1 from "../../../public/architecture/expl-banner.jpg";
import exploration2 from "../../../public/architecture/p20.png";
import exploration3 from "../../../public/architecture/cooling-gif-2x-RIFE-RIFE4.0-40fps.gif";
import exploration4 from "../../../public/architecture/hybrid-2x-RIFE-RIFE4.0-20fps.gif";
import exploration5 from "../../../public/architecture/psdfinal render 4.png";

const ImageComponent = (image: StaticImport) => {
    return (
        <div style={{ position: "relative" }}>
            <Image
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="art image"
                placeholder="blur"
            ></Image>
        </div>
    );
};

const ImageComponentCarousel = (image: StaticImport) => {
    return (
        <div style={{ position: "relative" }}>
            <Image
                src={image}
                alt="architecture image"
                layout="responsive"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 50vw"
                quality={80}
                placeholder="blur"
            ></Image>
        </div>
    );
};

const ImageComponentCarouselGif = (image: StaticImport) => {
    return (
        <div
            style={{
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <Image
                src={image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="architecture image"
                layout="responsive"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 50vw"
                quality={80}
            ></Image>
        </div>
    );
};

const ImageComponentCarouselHD = ({ image }: { image: StaticImport }) => {
    return (
        <div style={{ position: "relative" }}>
            <Image
                src={image}
                layout="fill"
                alt="architecture image"
                placeholder="blur"
                quality={100}
            ></Image>
        </div>
    );
};

const ImageComponentCarouselHDFill = (image: StaticImport) => {
    return (
        <div style={{ position: "relative" }}>
            <Image
                src={image}
                layout="responsive"
                alt="architecture image"
                placeholder="blur"
                quality={100}
            ></Image>
        </div>
    );
};

export const Dudd2 = () => {
    return ImageComponentCarousel(duddingston2);
};

export const Dudd3 = () => {
    return ImageComponentCarousel(duddingston3);
};

export const Dudd4 = () => {
    return ImageComponentCarousel(duddingston4);
};

export const Dudd5 = () => {
    return ImageComponentCarousel(duddingston5);
};

export const Dudd6 = () => {
    return ImageComponentCarouselHDFill(duddingston6);
};

export const Dudd7 = () => {
    return ImageComponentCarousel(duddingston7);
};

export const Exploration1 = () => {
    return ImageComponentCarousel(exploration1);
};
export const Exploration2 = () => {
    return ImageComponentCarousel(exploration2);
};

export const Exploration3 = () => {
    return ImageComponentCarouselGif(exploration3);
};
export const Exploration4 = () => {
    return ImageComponentCarouselGif(exploration4);
};
export const Exploration5 = () => {
    return ImageComponentCarousel(exploration5);
};
