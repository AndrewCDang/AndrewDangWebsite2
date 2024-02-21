import style from "./architecture.module.scss";
import { Dudd2, Dudd3, Dudd4, Dudd5, Dudd7 } from "./architectureImages";
import DetailSection from "./detailSection";

export const duddLandingText = {
    title: "Yr4 Design | Duddingston Library",
    location: "Edinburgh",
    type: "Civic / Educational",
    construction: "CLT Portal frame, rammed earth walls",
    nomination: "Mcckay Award",
};

export const duddFlavourText = (
    <div className={`${style.quote}`}>
        <p>
            “ Scotland will be a Good Food Nation, where people from every walk
            of life take pride and plea- sure in, and benefit from, the food
            they produce, buy, cook, serve, and eat each day. ”
        </p>
        <p>- The Scottish Government (2015)</p>
    </div>
);

export const duddLandindDescription = (
    <section>
        <p className={""}>
            The proposal sets forth an ambitious master plan for the School of
            Regional Studies in Duddingston, Scotland, with a focus on fostering
            local food initiatives. It aims to enhance public knowledge about
            quality nutrition, reduce reliance on imported goods to lower carbon
            emissions, and promote healthier eating habits in Edinburgh.
        </p>
        <br></br>
        <p className={""}>
            The strategy includes bolstering community ties through the
            expansion of current allotments, the creation of new communal
            spaces, and the development of pathways in untapped areas. Central
            to the initiative is the development of a sustainable food system
            designed to supply fresh ingredients for the school's meal programs
            and educate students on eco-friendly food practices. The project
            intends to broaden the scope of Duddingston’s agricultural
            activities, offering additional land and improved facilities for
            growing, as well as the local commerce of produce.
        </p>
    </section>
);

export const duddContent = (
    <section className={style.contentContainer}>
        <div className={style.workContainer}>
            <section>
                <div className={style.imageFull}>
                    <Dudd2 />
                </div>
                <div>
                    <strong>Interior perspective </strong>
                    view from main entrance lobby
                </div>
            </section>
            <section>
                <div className={style.imageFull}>
                    <Dudd3 />
                </div>
                <div>
                    <strong>Exterior perspective </strong>
                    view from main hub towards entrance lobby
                </div>
            </section>
            <section className={style.splitContianer}>
                <Dudd4 />
                <Dudd5 />
                <div>
                    <strong>Axonometric Drawings </strong>
                    synthesis of stereotomic and tectonic construction
                </div>
            </section>
            <section>
                <DetailSection />
            </section>
            <section className={style.splitContainer2}>
                <Dudd7 />
                <div>
                    <strong>Bringing nature indoors </strong>
                    <br></br>
                    The design utilises rammed earth construction to seamlessly
                    blend the building's raw exterior with the interior's
                    comfort. Expressive timber portal frames extend across the
                    primary library area, promoting flexibility and openness.
                    The façade, expressed in brick, harmonises with the local
                    townscape while safeguarding the moisture-sensitive rammed
                    earth against erosion.
                </div>
            </section>
        </div>
    </section>
);
