import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";

const Livestream: NextPage = () => {
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
                    content="https://tedxri.com/og-logo.png"
                />
                <meta property="og:url" content="https://tedxri.com/" />
                <meta property="og:type" content="website" />
                <meta
                    httpEquiv="Refresh"
                    content="0; url='http://bit.ly/tedxri'"
                />
            </Head>

            <p className={styles.text}>
                Click{" "}
                <Link href="http://bit.ly/tedxri">
                    <a className={styles.red}>me</a>
                </Link>{" "}
                if you are not redirected!
            </p>
        </div>
    );
};

export default Livestream;
