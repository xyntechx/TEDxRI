import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import grid from "../styles/Grid.module.css";
import curves from "../styles/Curves.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";
import Skip from "../components/skip";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
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
                    content="https://tedxri.com/logo.png"
                />
                <meta property="og:url" content="https://tedxri.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Skip />

            <Topnav />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <section className={grid.container}>
                <Image
                    src="/logo.png"
                    alt="TEDxRI Logo"
                    width={1061}
                    height={364}
                />
            </section>

            <br />
            <br />
            <br />

            <div className={curves.curves}></div>

            <section id="our-event" className={curves.red}>
                <div className={curves.blobcontent}>
                    <h1 className={styles.title}>Impact</h1>
                    <h1 className={styles.subtitle}>30 July 2022</h1>
                    <p className={styles.subtitle}>0830 - 1630 (UTC+08:00)</p>
                    <p className={styles.subtitle}>
                        @ Raffles Institution / Online
                    </p>
                    <p className={styles.content}>
                        TEDxYouth@RafflesInstitution is Raffles
                        Institution&apos;s 2022 TEDx conference, featuring
                        speakers sharing about scientific, technological,
                        artistic, medical, philanthropic, humanitarian impact,
                        etc.
                    </p>
                    <br />
                    <br />
                    <div className={styles.buttoncontainer}>
                        <Link href="/faq">
                            <a className={styles.button}>I want to attend!</a>
                        </Link>
                    </div>
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </section>
            <div className={curves.curvesflipped}></div>
            <Footer />
        </div>
    );
};

export default Home;
