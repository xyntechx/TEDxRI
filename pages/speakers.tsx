import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Page.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";

const About: NextPage = () => {
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

            <h1 className={styles.title}>Speakers</h1>
            <p className={styles.text}>
                TEDxYouth@RafflesInstitution speakers will include Y56 students,
                staff, and distinguished alumni sharing about
                &quot;Impact&quot;, including that in the scientific,
                technological, artistic, medical, philanthropic, humanitarian
                field.
            </p>
            <p className={styles.text}>
                Applications for student speakers will open soon! Invitation
                emails will be sent to staff and alumni speakers soon as well!
            </p>
            <br />
            <br />
            <div className={styles.buttoncontainer}>
                <Link href="/faq">
                    <a className={styles.button}>Learn More</a>
                </Link>
            </div>
            {/* <div className={styles.grid}>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/eric.jpeg"
                        alt="Eric Li"
                        width={300}
                        height={300}
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
                        width={300}
                        height={300}
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
            </div> */}

            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default About;
