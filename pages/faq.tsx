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
                    content="https://tedxri.com/logo.png"
                />
                <meta property="og:url" content="https://tedxri.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            <h1 className={base.title}>FAQ</h1>
            <p className={base.red}>Q: What is TEDxNewton?</p>
            <p className={base.text}>
                A: TEDxNewton is Singapore&apos;s national TEDx conference on
                science and technology.
            </p>
            <br />

            <p className={base.red}>Q: When is TEDxNewton 2022?</p>
            <p className={base.text}>
                A: 19 March 2022, 2pm - 7pm virtually on Zoom and simultaneously
                livestreamed on YouTube.
            </p>
            <br />

            <p className={base.red}>
                Q: What are the topics of the TEDxNewton talks?
            </p>
            <p className={base.text}>
                A: Topics include: artificial intelligence (AI), cryptocurrency
                & blockchain, cybersecurity, virtual reality (VR) & the
                metaverse, entrepreneurship & innovation, mathematics,
                engineering, and many more! Discover our speakers{" "}
                <Link href="/speakers">
                    <a className={base.link}>here</a>
                </Link>
            </p>
            <br />

            <p className={base.red}>Q: How do I attend TEDxNewton?</p>
            <p className={base.text}>
                A: Links to TEDxNewton will be made available on this page and
                at @TEDxNewton on Instagram, Twitter, LinkedIn & Facebook by 10
                March 2022.
            </p>
            <br />

            <p className={base.red}>
                Q: Why is TEDxNewton 2022 now held virtually on Zoom instead of
                in-person?
            </p>
            <p className={base.text}>
                A: Due to the rapidly evolving COVID-19 situation, TEDxNewton
                has been shifted from an in-person conference to a virtual one
                in the interests of public health and safety.
                <br />
                TEDxNewton is expected to resume in-person conferences in
                Newton, Singapore for the 2023 edition and beyond.
            </p>
            <br />

            <p className={base.red}>Q: How do I volunteer at TEDxNewton?</p>
            <p className={base.text}>
                A: Sign-ups for TEDxNewton 2022 volunteers are currently closed.
                However, if you would like to apply to join the Executive
                Committee for the 2023 edition of TEDxNewton, you may send an
                email to{" "}
                <Link href="mailto:contact@tedxnewton.com">
                    <a className={base.link}>contact@tedxnewton.com</a>
                </Link>{" "}
                to indicate your interest!
            </p>
            <br />

            <p className={base.red}>
                Q: How can I become a speaker at TEDxNewton?
            </p>
            <p className={base.text}>
                A: Speaker applications have closed for TEDxNewton 2022, but
                prospective speakers are welcome to apply for future editions of
                TEDxNewton. More details will be shared in late 2022/early 2023.
            </p>
            <br />

            <p className={base.red}>
                Q: What is the difference between TED and TEDxNewton?
            </p>
            <p className={base.text}>
                A: TED is a nonprofit organization devoted to Ideas Worth
                Spreading. In the spirit of ideas worth spreading, TEDxNewton is
                independently organized in Singapore and operates under license
                from TED Conferences LLC.
            </p>

            <Footer />
        </div>
    );
};

export default Faq;
