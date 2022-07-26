import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import page from "../styles/Page.module.css";
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
                    content="2022 student-led TEDx conference"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Nyx Iskandar"></meta>
                <meta
                    property="og:title"
                    content="TEDxYouth@RafflesInstitution"
                />
                <meta
                    property="og:description"
                    content="2022 student-led TEDx conference"
                />
                <meta
                    property="og:image"
                    content="https://tedxri.com/og-logo.png"
                />
                <meta property="og:url" content="https://tedxri.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Skip />

            <Topnav />

            <section className={styles.intro}>
                <Image
                    src="/logo.png"
                    alt="TEDxRI Logo"
                    width={795}
                    height={273}
                />
                <p className={styles.text}>2022 student-led TEDx conference</p>
                <br />
                {/* <div className={styles.buttoncontainer}>
                    <Link href="/faq">
                        <a className={page.button}>Learn More</a>
                    </Link>
                </div> */}
            </section>

            <div className={curves.curves}></div>

            <section id="our-event" className={curves.red}>
                <div className={curves.blobcontent}>
                    <h1 className={styles.title}>Impact</h1>
                    <h1 className={styles.subtitle}>6 August 2022</h1>
                    <p className={styles.subtitle}>Online</p>
                    <p className={styles.content}>
                        TEDxYouth@RafflesInstitution aims to spark intellectual
                        curiosity, innovation, and conversation on ideas that
                        matter amongst youth in Singapore and beyond.
                    </p>
                    <br />
                    <br />
                    <div className={styles.buttoncontainer}>
                        <Link href="/schedule">
                            <a className={styles.button}>
                                See what&apos;s in store for you!
                            </a>
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
