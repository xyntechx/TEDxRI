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

            <Topnav />

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
                        <Link href="https://xyntechx.com/">
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
                <section className={styles.smallcontainer}>
                    <Image
                        src="/peixuan.jpg"
                        alt="Liu Peixuan"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Liu Peixuan</p>
                    <p className={styles.role}>Head of Publicity</p>
                    <Link href="https://www.linkedin.com/in/liu-peixuan-54a696238/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Peixuan LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/jason.jpg"
                        alt="Jason Nathaniel Sutio"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Jason Nathaniel Sutio</p>
                    <p className={styles.role}>Head of Outreach</p>
                    <Link href="https://www.linkedin.com/in/jason-nathaniel-47646b238/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Jason LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/shreya.jpeg"
                        alt="Shreya Menon"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Shreya Menon</p>
                    <p className={styles.role}>
                        Head of Speaker Development & Master of Ceremonies
                    </p>
                    <Link href="https://www.linkedin.com/in/shreya-menon-737212219/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Shreya LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/cassandra.jpeg"
                        alt="Goh Xinying, Cassandra"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Goh Xinying, Cassandra</p>
                    <p className={styles.role}>
                        Co-Head of Speaker Development
                    </p>
                    <Link href="https://www.linkedin.com/in/cassandra-goh-4b6113227/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Cassandra LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </section>
                <section className={styles.smallcontainer}>
                    <Image
                        src="/alyssa.jpg"
                        alt="Boo Xuan Pei Alyssa"
                        width={200}
                        height={200}
                        className={styles.rounded}
                    />
                    <br />
                    <p className={styles.name}>Boo Xuan Pei Alyssa</p>
                    <p className={styles.role}>Head of Production</p>
                    <Link href="https://www.linkedin.com/in/alyssa-boo-7186a1238/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Alyssa LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
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
