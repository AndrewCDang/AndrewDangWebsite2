import style from "./architecture.module.scss";
import {
    Exploration1,
    Exploration2,
    Exploration3,
    Exploration4,
    Exploration5,
} from "./architectureImages";
export const exploreText = {
    title: "Yr3 Design | Taichung Eco Park",
    location: "Taichung",
    type: "Civic / Landscape / Environment",
    construction: "Landscaping/Steel",
    nomination: "Featured ESALA Degree Project",
};

export const exploreFlavourText = (
    <div className={`${style.quote}`}>
        <p>
            I explored Philippe Rahm's groundbreaking project, which applied
            advanced climatic technology to control outdoor environments,
            extending indoor climate management outdoors as a solution to
            climate change's rising temperatures.
        </p>
    </div>
);

export const exploreDescription = (
    <section>
        <p style={{ fontWeight: "bold" }}>Critical-Environmental Study</p>
        <br></br>
        <p className={""}>
            Rahm used computational fluid dynamics to identify low-heat,
            humidity, and pollution areas, enhancing these with climatic
            devices. This created "Climatic Pathways," offering varied climatic
            experiences. Rahm's innovative approach aimed to redefine
            architecture through weather processes, creating a vibrant mix of
            climatic conditions and experiences through continuous climate
            modulation.
        </p>
    </section>
);

export const exploreContent = (
    <section className={style.contentContainer}>
        <div className={style.workContainer}>
            <section>
                <div className={style.imageFull}>
                    <Exploration1 />
                </div>
                <div>
                    <strong>Thesis drawing </strong>
                    Current landscape (left) and adapted site with enclosures
                    (right)
                </div>
            </section>
            <section>
                <div className={style.imageFull}>
                    <Exploration2 />
                </div>
                <div className={style.modalAnnotations}>
                    <div>
                        <p className={style.yellowTitle}>
                            Depolluting/Cleaning devices
                        </p>
                        <p>
                            Ozone Eclipse devices reduce pollution by absorbing
                            harmful gases such as aerosols, nitrogen oxides and
                            ozone. Pre-industrial draught devices filter out
                            PM10 and PM2.5 particles in the air. Cleaning
                            devices then blow out clean air.
                        </p>
                    </div>
                    <div>
                        <p className={style.blueTitle}>
                            Dehumidity/Dry Devices
                        </p>
                        <p>
                            Humidity levels are reduced by Dry Cloud devices
                            which intake hu- mid air, extract water vapour via
                            silicate bags and release dry air back into the
                            environment.
                        </p>
                    </div>
                    <div>
                        <p className={style.redTitle}>
                            Anticyclone/Cooling devices
                        </p>
                        <p>
                            Cool down air through heat exchange with the city’s
                            water and underground via geothermal ducts where it
                            is cooler. The canopy on top acts as a shading
                            utensil and has insulated skin to prevent heat
                            radiation.
                        </p>
                    </div>
                </div>
            </section>
            <section className={style.splitContianer} style={{ gap: "1rem" }}>
                <div
                    style={{
                        gridColumn: "1/-1",
                        display: "flex",
                        gap: "0.5rem",
                        margin: "0 auto",
                    }}
                >
                    <div style={{ maxWidth: "400px", aspectRatio: 0.8 }}>
                        <Exploration3 />
                    </div>
                    <div style={{ maxWidth: "400px", aspectRatio: 0.8 }}>
                        <Exploration4 />
                    </div>
                </div>
                <div>
                    <strong>Replicating Conditions </strong>
                    Abstract Models visualises seperation of warm and cool air
                    through fluid density (left) and different
                    conditions(clean,cool,dry) of modulated air working together
                    (right).{" "}
                </div>
            </section>
            <section>
                <Exploration5 />
            </section>
        </div>
    </section>
);
