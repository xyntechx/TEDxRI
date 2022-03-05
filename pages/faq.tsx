import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import base from "../styles/Base.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";

const Faq: NextPage = () => {
    return (
        <div className={base.maincontainer}>
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

            <h1 className={base.title}>FAQ</h1>
            <p className={base.red}>Q: What is TEDxYouth@RafflesInstitution?</p>
            <p className={base.text}>
                A: TEDxYouth@RafflesInstitution is Raffles Institution&apos;s
                2022 TEDx conference.
            </p>
            <br />

            <p className={base.red}>Q: When is TEDxYouth@RafflesInstitution?</p>
            <p className={base.text}>
                A: TEDxYouth@RafflesInstitution will be held on 30 July 2022,
                from 0830 to 1630 (UTC+08:00) either at the PAC of Raffles
                Institution or virtually on Zoom, depending on the prevailing
                conditions of the pandemic. Should the event be in-person, it
                will simultaneously be livestreamed on YouTube for public
                viewing.
            </p>
            <br />

            <p className={base.red}>
                Q: What are the topics of the TEDxYouth@RafflesInstitution
                talks?
            </p>
            <p className={base.text}>
                A: With &quot;Impact&quot; as our theme, speakers will share
                about scientific, technological, artistic, medical,
                philanthropic, humanitarian impact, etc.
            </p>
            <br />

            <p className={base.red}>
                Q: How do I attend TEDxYouth@RafflesInstitution?
            </p>
            <p className={base.text}>
                A: In-person attendance is open only to Y56 students of Raffles
                Institution. However, the public may attend the conference
                virtually via links made available on this page and on our
                Instagram, Twitter, & LinkedIn pages nearer to the event date.
            </p>
            <br />

            <p className={base.red}>
                Q: How do I become an EXCO or volunteer at
                TEDxYouth@RafflesInstitution?
            </p>
            <p className={base.text}>
                A: Sign-ups for TEDxYouth@RafflesInstitution EXCO and volunteers
                will open soon! Do note that this is only applicable to Y56
                students of Raffles Institution. For queries, please email us at{" "}
                <Link href="mailto:contact@tedxri.com">
                    <a className={base.link}>contact@tedxri.com</a>
                </Link>
                .
            </p>
            <br />

            <p className={base.red}>
                Q: How can I become a speaker at TEDxYouth@RafflesInstitution?
            </p>
            <p className={base.text}>
                A: TEDxYouth@RafflesInstitution will feature speakers who are
                Y56 students, staff, and distinguished alumni of Raffles
                Institution. Invitations will be sent out to staff and alumni
                speakers, but student speakers are welcome to apply via an
                application form on the{" "}
                <Link href="/speakers">
                    <a className={base.link}>Speakers</a>
                </Link>{" "}
                page soon!
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
