import type { NextPage } from "next";
import Head from "next/head";
import base from "../styles/Base.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";
import Link from "next/link";

const Faq: NextPage = () => {
    return (
        <div className={base.maincontainer}>
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

            <h1 className={base.title}>FAQ</h1>
            <p className={base.red}>Q: What is TEDxYouth@RafflesInstitution?</p>
            <p className={base.text}>
                A: TEDxYouth@RafflesInstitution is a student-led TEDx conference
                held at Raffles Institution.
            </p>
            <br />

            <p className={base.red}>
                Q: When was TEDxYouth@RafflesInstitution?
            </p>
            <p className={base.text}>
                A: TEDxYouth@RafflesInstitution was held on 6 August 2022
                virtually from 2 to 6.30pm.
            </p>
            <br />

            <p className={base.red}>
                Q: What were the topics of the TEDxYouth@RafflesInstitution
                talks?
            </p>
            <p className={base.text}>
                A: The talks at our conference revolved around our theme,
                &quot;Impact&quot;, in a plethora of fields, from science to the
                arts and from philantrophy to medicine.
            </p>
            <br />

            <p className={base.red}>
                Q: Who were the speakers at TEDxYouth@RafflesInstitution?
            </p>
            <p className={base.text}>
                A: TEDxYouth@RafflesInstitution featured speakers who are
                students, staff, and alumni of Raffles Institution.
            </p>
            <br />

            <p className={base.red}>
                Q: How can I view TEDxYouth@RafflesInstitution talks?
            </p>
            <p className={base.text}>
                A: Videos of all the talks delivered at our conference will be
                made available for public viewing by September 2022.
            </p>
            <br />

            <p className={base.red}>
                Q: What is the difference between TED and
                TEDxYouth@RafflesInstitution?
            </p>
            <p className={base.text}>
                A: TED is a nonprofit organization devoted to Ideas Worth
                Spreading. In the spirit of ideas worth spreading,
                TEDxYouth@RafflesInstitution is independently organized in
                Singapore and operates under license from TED Conferences LLC.
            </p>

            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default Faq;
