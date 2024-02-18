import Image from "next/image";
import Images0 from "../../../public/art/andrewDang_art0.jpg";
import Images1 from "../../../public/art/andrewDang_art1.jpg";
import Images2 from "../../../public/art/andrewDang_art2.jpg";
import Images3 from "../../../public/art/andrewDang_art3.jpg";
import Images4 from "../../../public/art/andrewDang_art4-lq.jpg";
import Images5 from "../../../public/art/andrewDang_art5.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
            <Image src={image} alt="art image" placeholder="blur"></Image>
        </div>
    );
};

export function Image0() {
    return ImageComponent(Images0);
}

export function Image1() {
    return ImageComponent(Images1);
}

export function Image2() {
    return ImageComponent(Images2);
}

export function Image3() {
    return ImageComponent(Images3);
}

export function Image4() {
    return ImageComponent(Images4);
}

export function Image5() {
    return ImageComponent(Images5);
}

export function Image0C() {
    return ImageComponentCarousel(Images0);
}

export function Image1C() {
    return ImageComponentCarousel(Images1);
}

export function Image2C() {
    return ImageComponentCarousel(Images2);
}

export function Image3C() {
    return ImageComponentCarousel(Images3);
}

export function Image4C() {
    return ImageComponentCarousel(Images4);
}

export function Image5C() {
    return ImageComponentCarousel(Images5);
}
