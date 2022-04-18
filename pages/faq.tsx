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
                A: TEDxYouth@RafflesInstitution will be held on 6 August 2022
                virtually on Zoom and simultaneously livestreamed on YouTube.
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
                A: Anyone may attend the conference virtually via links made
                available on this page and on our Instagram & LinkedIn pages
                nearer to the event date.
            </p>
            <br />

            <p className={base.red}>
                Q: Why is TEDxYouth@RafflesInstitution now online?
            </p>
            <p className={base.text}>
                A: In light of the COVID-19 situation in Singapore, the school
                has instructed the EXCO to move the event from an in-person one
                at the PAC to a virtual one online.
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
                page in due course!
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
