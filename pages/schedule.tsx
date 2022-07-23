import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Schedule.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";

const Schedule: NextPage = () => {
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

            <Topnav />

            <h1 className={styles.title}>Schedule</h1>
            <table className={styles.table}>
                <tr className={styles.row}>
                    <th className={styles.header}>Blocks</th>
                    <th className={styles.header}>Action</th>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.time} rowSpan={5}>
                        2:00pm-3:00pm
                    </td>
                    <td className={styles.cell}>Introduction (2 min)</td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Welcome address by Nyx, Co-Founder of TEDxRI (3-5 min)
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Eric Li (18 min) <br />
                        Co-Founder, TEDxRI
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Prof. Alex Siow (18 min) <br />
                        Professor at National University of Singapore (NUS)
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Theodoric Chew (15 min) <br />
                        Co-founder & CEO, Intellect
                    </td>
                </tr>
                <tr className={styles.break}>
                    <td className={styles.time} rowSpan={1}>
                        3:00pm-3.20pm
                    </td>
                    <td className={styles.cell}>Break</td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.time} rowSpan={3}>
                        3:20pm-4.10pm
                    </td>
                    <td className={styles.cell}>
                        Alvin Kuek (18 min) <br />
                        CEO & Co-Founder of Mind Stretcher Education Group
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Anshari Rahman (18 min) <br />
                        Vice President at GenZero
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Denyse Chan (10 min) <br />
                        Singapore National Fencer & Sport Excellence (spex)
                        Scholar
                    </td>
                </tr>
                <tr className={styles.break}>
                    <td className={styles.time} rowSpan={1}>
                        4:10pm-4.25pm
                    </td>
                    <td className={styles.cell}>Break</td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.time} rowSpan={4}>
                        4.25pm-5.15pm
                    </td>
                    <td className={styles.cell}>
                        Chun Soon Kon (10 min) <br />
                        Founder of Worksider
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Kahhow Lee (12 min) <br />
                        Educator and Founder of String
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Geraldine Tan (10 min) <br />
                        Educator
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Kah Hwee (15 min) <br />
                        Youth Counselor
                    </td>
                </tr>
                <tr className={styles.break}>
                    <td className={styles.time} rowSpan={1}>
                        5:15pm-5.30pm
                    </td>
                    <td className={styles.cell}>Break</td>
                </tr>

                <tr className={styles.row}>
                    <td className={styles.time} rowSpan={7}>
                        5.30pm-6.30pm
                    </td>
                    <td className={styles.cell}>
                        Alex Li (22S03O) (8 min) <br />
                        Year 6 Student
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Kareena Shanice Kumar (22S06E) (6 min) <br />
                        Year 6 Student
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Teo Sui Leng (22S06M) (12 min) <br />
                        Year 6 Student
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Zu Lilian (23S03P) (4 min) <br />
                        Year 5 Student
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Ilangovan Harishiga (10 min) <br />
                        Year 5 Student
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Kushagra Kesarwani (4F) (10 min) <br />
                        Year 4 Student
                    </td>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Santusht Narula (4J) (9 min) <br />
                        Year 4 Student
                    </td>
                </tr>
            </table>

            <Footer />
        </div>
    );
};

export default Schedule;
