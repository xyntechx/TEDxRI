import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Page.module.css";
import popup from "../styles/Popup.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";
import { useState } from "react";

const About: NextPage = () => {
    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const closePopUp = async () => {
        setShow0(false);
        setShow1(false);
        setShow2(false);
        setShow3(false);
    };

    return (
        <div className={styles.maincontainer}>
            <Head>
                <title>TEDxYouth@RafflesInstitution</title>
                <meta
                    name="description"
                    content="Raffles Institution's 2022 TEDx conference"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Nyx Iskandar"></meta>
                <meta
                    property="og:title"
                    content="TEDxYouth@RafflesInstitution"
                />
                <meta
                    property="og:description"
                    content="Raffles Institution's 2022 TEDx conference"
                />
                <meta
                    property="og:image"
                    content="https://tedxri.com/og-logo.png"
                />
                <meta property="og:url" content="https://tedxri.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            {show0 || show1 || show2 || show3 ? (
                <div className={popup.main} onClick={closePopUp}>
                    {show0 ? (
                        <div className={popup.container}>
                            <button
                                className={popup.close}
                                onClick={() => setShow0(false)}
                            >
                                X
                            </button>
                            <p className={styles.name}>Head of Publicity</p>
                            <p className={popup.center}>
                                Commitment Level:
                                <br />
                                ~5-10h/week
                            </p>
                            <p className={popup.center}>Details:</p>
                            <ul className={popup.text}>
                                <li>
                                    Responsible for envisioning, creating, and
                                    posting weekly posts/stories on Instagram
                                    (@tedxri) & LinkedIn
                                    (https://www.linkedin.com/company/tedxri)
                                    and liaising with the school &
                                    Students&apos; Council Communications
                                    Department for publicity on
                                    @raffles_institution & @teamraffles, and
                                    LinkedIn
                                    (https://www.linkedin.com/school/raffles-institution/),
                                    etc
                                </li>
                                <li>
                                    Prior experience in Instagram publicity
                                    necessary (e.g. CE01 projects), LinkedIn
                                    experience preferred
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}
                    {show1 ? (
                        <div className={popup.container}>
                            <button
                                className={popup.close}
                                onClick={() => setShow1(false)}
                            >
                                X
                            </button>
                            <p className={styles.name}>Head of Outreach</p>
                            <p className={popup.center}>
                                Commitment Level:
                                <br />
                                ~5-10h/week
                            </p>
                            <p className={popup.center}>Details:</p>
                            <p className={popup.text}>
                                Responsible for creating publicity posters for
                                speaker applications to be displayed in RI,
                                liaising with school for schoolwide
                                email/Stamford/Ivy announcements/Class
                                leaders&apos; WhatsApp messages, liaising with
                                Raffles Press for a feature/interview with
                                co-founders to be published, all communications
                                (e.g. email) with school
                            </p>
                        </div>
                    ) : (
                        <></>
                    )}
                    {show2 ? (
                        <div className={popup.container}>
                            <button
                                className={popup.close}
                                onClick={() => setShow2(false)}
                            >
                                X
                            </button>
                            <p className={styles.name}>
                                Head/Co-Head of Speaker Development
                            </p>
                            <p className={popup.center}>
                                Commitment Level:
                                <br />
                                ~10h/week
                            </p>
                            <p className={popup.center}>Details:</p>
                            <ul className={popup.text}>
                                <li>
                                    Responsible for reaching out to, engaging,
                                    selecting, setting deadlines for speakers &
                                    providing feedback on drafts & rehearsal
                                    performances
                                </li>
                                <li>
                                    More details on requirements:
                                    bit.ly/speakerselection1 &
                                    bit.ly/speakerselection2
                                </li>
                                <li>
                                    Prior experience in public speaking or
                                    debating highly preferred
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}
                    {show3 ? (
                        <div className={popup.container}>
                            <button
                                className={popup.close}
                                onClick={() => setShow3(false)}
                            >
                                X
                            </button>
                            <p className={styles.name}>Head of Production</p>
                            <p className={popup.center}>
                                Commitment Level:
                                <br />
                                ~5-10h/week, more in the weeks before and after
                                the conference
                            </p>
                            <p className={popup.center}>Details:</p>
                            <ul className={popup.text}>
                                <li>
                                    Responsible for leading all production and
                                    planning for the day of the conference,
                                    including content production, stage
                                    management, technology, and video, etc
                                </li>
                                <li>
                                    Liaise with AVU/Raffles Photography
                                    Society/Gavel Club/etc to recruit volunteers
                                    for production, ushering, photo-taking,
                                    emceeing & video-editing, etc
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <></>
            )}

            <h1 className={styles.title}>Executive Committee</h1>
            <div className={styles.grid2}>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/eric.jpeg"
                        alt="Eric Li"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Eric Li</p>
                    <p className={styles.role}>Co-Founder & TEDx Speaker</p>
                    <span className={styles.socials3}>
                        <Link href="https://linkedin.com/in/singapore/">
                            <a target="_blank">
                                <Image
                                    src="/linkedin.png"
                                    alt="Eric LinkedIn"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/e.ricli/">
                            <a target="_blank">
                                <Image
                                    src="/instagram.png"
                                    alt="Eric Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                        <Link href="https://ericli.com/">
                            <a target="_blank">
                                <Image
                                    src="/website.png"
                                    alt="Eric Website"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                    </span>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/nyx.jpg"
                        alt="Nyx Audrey Angelo Iskandar"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Nyx Audrey Angelo Iskandar</p>
                    <p className={styles.role}>
                        Co-Founder & Head of Web Development
                    </p>
                    <span className={styles.socials4}>
                        <Link href="https://www.linkedin.com/in/nyx-iskandar/">
                            <a target="_blank">
                                <Image
                                    src="/linkedin.png"
                                    alt="Nyx LinkedIn"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                        <Link href="https://github.com/xyntechx">
                            <a target="_blank">
                                <Image
                                    src="/github.png"
                                    alt="Nyx GitHub"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/xyntechx/">
                            <a target="_blank">
                                <Image
                                    src="/instagram.png"
                                    alt="Nyx Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                        <Link href="https://xyntechx.netlify.app/">
                            <a target="_blank">
                                <Image
                                    src="/website.png"
                                    alt="Nyx Website"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Link>
                    </span>
                </section>
            </div>

            <p className={styles.text}>
                Applications for the TEDxYouth@RafflesInstitution EXCO will open
                on 20 March at{" "}
                <Link href="https://bit.ly/tedxriexco">
                    <a className={styles.red} target="_blank">
                        https://bit.ly/tedxriexco
                    </a>
                </Link>
                . Follow{" "}
                <Link href="https://www.instagram.com/tedxri/">
                    <a target="_blank" className={styles.red}>
                        @TEDxRI
                    </a>
                </Link>{" "}
                for updates!
            </p>

            <br />
            <br />

            <div className={styles.grid}>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/placeholder.png"
                        alt="Head of Publicity"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Head of Publicity</p>
                    <button
                        className={styles.learnmore}
                        onClick={() => setShow0(true)}
                    >
                        Learn More
                    </button>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/placeholder.png"
                        alt="Head of Outreach"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Head of Outreach</p>
                    <button
                        className={styles.learnmore}
                        onClick={() => setShow1(true)}
                    >
                        Learn More
                    </button>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/placeholder.png"
                        alt="Head/Co-Head of Speaker Development"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>
                        Head/Co-Head of Speaker Development
                    </p>
                    <button
                        className={styles.learnmore}
                        onClick={() => setShow2(true)}
                    >
                        Learn More
                    </button>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/placeholder.png"
                        alt="Head of Production"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Head of Production</p>
                    <button
                        className={styles.learnmore}
                        onClick={() => setShow3(true)}
                    >
                        Learn More
                    </button>
                </section>
            </div>

            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default About;
