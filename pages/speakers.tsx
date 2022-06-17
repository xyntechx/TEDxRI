import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Page.module.css";
import popup from "../styles/Popup.module.css";
import base from "../styles/Base.module.css";
import Footer from "../components/footer";
import Topnav from "../components/topnav";
import { useState } from "react";

const About: NextPage = () => {
    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);

    const closePopUp = async () => {
        setShow0(false);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
        setShow6(false);
        setShow7(false);
        setShow8(false);
        setShow9(false);
        setShow10(false);
        setShow11(false);
        setShow12(false);
        setShow13(false);
        setShow14(false);
        setShow15(false);
    };

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

            {show0 && <EricLi closePopUp={closePopUp} setShow={setShow0} />}
            {show1 && <AlexSiow closePopUp={closePopUp} setShow={setShow1} />}
            {show2 && <TheodoricChew closePopUp={closePopUp} setShow={setShow2} />}
            {show3 && <AlvinKuek closePopUp={closePopUp} setShow={setShow3} />}
            {show4 && <AnshariRahman closePopUp={closePopUp} setShow={setShow4} />}
            {show5 && <DenyseChan closePopUp={closePopUp} setShow={setShow5} />}
            {show6 && <SoonKonChun closePopUp={closePopUp} setShow={setShow6} />}
            {show7 && <GeraldineTanShuHui closePopUp={closePopUp} setShow={setShow7} />}
            {show8 && <ChuaKahHwee closePopUp={closePopUp} setShow={setShow8} />}
            {show9 && <AlexLi closePopUp={closePopUp} setShow={setShow9} />}
            {show10 && <KareenaShaniceKumar closePopUp={closePopUp} setShow={setShow10} />}
            {show11 && <TeoSuiLeng closePopUp={closePopUp} setShow={setShow11} />}
            {show12 && <ZuLilian closePopUp={closePopUp} setShow={setShow12} />}
            {show13 && <IlangovanHarishiga closePopUp={closePopUp} setShow={setShow13} />}
            {show14 && <KushagraKesarwani closePopUp={closePopUp} setShow={setShow14} />}
            {show15 && <SantushtNarula closePopUp={closePopUp} setShow={setShow15} />}

            <h1 className={styles.title}>Speakers</h1>
            <p className={styles.text}>
                TEDxYouth@RafflesInstitution speakers include students, staff,
                and distinguished alumni sharing about &quot;Impact&quot;,
                including that in the scientific, technological, artistic,
                medical, philanthropic, humanitarian field.
            </p>
            <p className={styles.textred}>
                Click on the profile pictures to learn more about each speaker!
            </p>

            <br />
            <br />

            <div className={styles.speakergrid}>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/eric.jpeg"
                        alt="Eric Li"
                        className={styles.speakerpic}
                        onClick={() => setShow0(true)}
                    />
                    <br />
                    <p className={styles.name}>Eric Li</p>
                    <p className={styles.role}>TEDx Founder & Speaker</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/prof-alex.jpg"
                        alt="Professor Alex Siow"
                        className={styles.speakerpic}
                        onClick={() => setShow1(true)}
                    />
                    <br />
                    <p className={styles.name}>Prof. Alex Siow</p>
                    <p className={styles.role}>
                        Professor at National University of Singapore (NUS)
                    </p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/theodoric.jpeg"
                        alt="Theodoric Chew"
                        className={styles.speakerpic}
                        onClick={() => setShow2(true)}
                    />
                    <br />
                    <p className={styles.name}>Theodoric Chew</p>
                    <p className={styles.role}>Co-founder & CEO, Intellect</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/alvin.jpg"
                        alt="Alvin Kuek"
                        className={styles.speakerpic}
                        onClick={() => setShow3(true)}
                    />
                    <br />
                    <p className={styles.name}>Alvin Kuek</p>
                    <p className={styles.role}>
                        CEO & Co-Founder of Mind Stretcher Education Group
                    </p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/anshari.jpg"
                        alt="Anshari Rahman"
                        className={styles.speakerpic}
                        onClick={() => setShow4(true)}
                    />
                    <br />
                    <p className={styles.name}>Anshari Rahman</p>
                    <p className={styles.role}>Vice President at GenZero</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/denyse.jpg"
                        alt="Denyse Chan"
                        className={styles.speakerpic}
                        onClick={() => setShow5(true)}
                    />
                    <br />
                    <p className={styles.name}>Denyse Chan</p>
                    <p className={styles.role}>
                        Singapore National Fencer & Sport Excellence (spex)
                        Scholar
                    </p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/soon-koon.jpg"
                        alt="Chun Soon Kon"
                        className={styles.speakerpic}
                        onClick={() => setShow6(true)}
                    />
                    <br />
                    <p className={styles.name}>Chun Soon Kon</p>
                    <p className={styles.role}>Founder of Worksider</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/geraldine.jpg"
                        alt="Geraldine Tan"
                        className={styles.speakerpic}
                        onClick={() => setShow7(true)}
                    />
                    <br />
                    <p className={styles.name}>Geraldine Tan</p>
                    <p className={styles.role}>Educator</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/kah-hwee.jpg"
                        alt="Kah Hwee"
                        className={styles.speakerpic}
                        onClick={() => setShow8(true)}
                    />
                    <br />
                    <p className={styles.name}>Kah Hwee</p>
                    <p className={styles.role}>Youth Counselor</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/alex.jpeg"
                        alt="Alex Li"
                        className={styles.speakerpic}
                        onClick={() => setShow9(true)}
                    />
                    <br />
                    <p className={styles.name}>Alex Li</p>
                    <p className={styles.role}>Year 6 Student</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/kareena.jpg"
                        alt="Kareena Shanice Kumar"
                        className={styles.speakerpic}
                        onClick={() => setShow10(true)}
                    />
                    <br />
                    <p className={styles.name}>Kareena Shanice Kumar</p>
                    <p className={styles.role}>Year 6 Student</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/sui-leng.png"
                        alt="Teo Sui Leng"
                        className={styles.speakerpic}
                        onClick={() => setShow11(true)}
                    />
                    <br />
                    <p className={styles.name}>Teo Sui Leng</p>
                    <p className={styles.role}>Year 6 Student</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/lilian.jpeg"
                        alt="Zu Lilian"
                        className={styles.speakerpic}
                        onClick={() => setShow12(true)}
                    />
                    <br />
                    <p className={styles.name}>Zu Lilian</p>
                    <p className={styles.role}>Year 5 Student</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/ilangovan.jpg"
                        alt="Ilangovan Harishiga"
                        className={styles.speakerpic}
                        onClick={() => setShow13(true)}
                    />
                    <br />
                    <p className={styles.name}>Ilangovan Harishiga</p>
                    <p className={styles.role}>Year 5 Student</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/kushagra.jpg"
                        alt="Kushagra Kesarwani"
                        className={styles.speakerpic}
                        onClick={() => setShow14(true)}
                    />
                    <br />
                    <p className={styles.name}>Kushagra Kesarwani</p>
                    <p className={styles.role}>Year 4 Student</p>
                </section>
                <section className={styles.smallcontainer}>
                    <img
                        src="/speakers/santusht.jpg"
                        alt="Santusht Narula"
                        className={styles.speakerpic}
                        onClick={() => setShow15(true)}
                    />
                    <br />
                    <p className={styles.name}>Santusht Narula</p>
                    <p className={styles.role}>Year 4 Student</p>
                </section>
            </div>

            <p className={base.disclaimer}>
                Disclaimer: The opinions expressed in speakers&apos; talks are
                entirely those of the speakers, and do not necessarily represent
                the position of the speakers&apos; companies, the TED
                Foundation, or TEDxYouth@RafflesInstitution. Nothing on this
                website should be construed as tax, legal, or financial advice.
                Although great care has been taken to ensure the accuracy of
                speakers&apos; talks and this website, no warranty or
                representation is made by TEDxYouth@RafflesInstitution as to its
                correctness, completeness, timeliness or accuracy.
            </p>

            <Footer />
        </div>
    );
};

export default About;

interface SpeakerArgs {
    closePopUp: () => void;
    setShow: (mode: boolean) => void;
}

const EricLi = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>&quot;Cryptocurrency is the future of money.&quot;</p>
                <p>
                    Eric Li is a 19-year-old founder, programmer, and innovator.
                    He previously founded TEDxNewton, Singapore&apos;s
                    nationwide conference on science and technology, attracting
                    over 6 million impressions/views from people in 150+
                    countries and all 7 continents. A crypto native, Eric has
                    held cryptocurrency since 2017 and is passionate about
                    decentralised finance (DeFi), especially the technology
                    underpinning automated market makers and decentralized
                    lending & borrowing.
                </p>
                <span className={popup.images}>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;
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
                    &nbsp;&nbsp;&nbsp;&nbsp;
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
            </div>
        </div>
    );
};

const AlexSiow = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Prof Alex Siow is a professor in the department of
                    Information Systems and Analytics of the School of
                    Computing, NUS since 2015. Alex started as a Structural
                    Engineer in the HDB in 1981 and appointed the CIO in 1989.
                    In 2003, he was SVP in StarHub, where he was Head, Business
                    Markets and CIO. In 2012, he joined Accenture as a Managing
                    Director. Alex is currently in a number of boards, including
                    Tee International, Toffs Technologies, DART Consulting, Red
                    Alpha, SUSS and THK-AMK Hospital. Alex&apos;s book
                    &quot;Leading with IT: Lessons from Singapore&apos;s first
                    CIO&quot; was published in Feb 2021.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/alex-siow-cmc-af-ccsk-5213b4/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Prof Alex LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.facebook.com/Alexsy88">
                        <a target="_blank">
                            <Image
                                src="/facebook.png"
                                alt="Prof Alex Facebook"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const TheodoricChew = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Theodoric Chew is the Co-founder & CEO of Intellect, Asia
                    Pacific&apos;s largest mental health company that provides
                    technology-enabled mental healthcare for the world&apos;s
                    leading workforces. Today, Intellect serves over 3 million
                    members globally, covering Asia&apos;s largest employers.
                    Intellect is backed by leading investors including Insignia
                    Ventures Partners, Y Combinator, HOF Capital, Headline, East
                    Ventures, MS&AD Ventures, XA Network and an extensive list
                    of family offices, big tech executives & renowned angel
                    investors.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/theodoricchew/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Theodoric LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://intellect.co/">
                        <a target="_blank">
                            <Image
                                src="/website.png"
                                alt="Theodoric Website"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.theodoric.com/">
                        <a target="_blank">
                            <Image
                                src="/website.png"
                                alt="Theodoric Website"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://twitter.com/theodoricchew">
                        <a target="_blank">
                            <Image
                                src="/twitter.png"
                                alt="Theodoric Twitter"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.instagram.com/theodoricchew/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Theodoric Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const AlvinKuek = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    &quot;Be inspired, and inspire others. The only way to do
                    this is to dream, and venture out.&quot;
                </p>
                <p>
                    An ex-MOE RI Scholar, RJC Pre-U Scholar & a Kuok Foundation
                    University Scholar, Alvin is the Co-Founder of the Mind
                    Stretcher Education Group. He began his career at Arthur
                    Andersen & Price Waterhouse before being headhunted to
                    become the CFO of two tech firms, one of which eventually
                    listed. In the past 16 years, Alvin has nurtured thousands
                    of students (including two RI President&apos;s Scholars). An
                    animated speaker, Alvin is a familiar face at Mind Stretcher
                    workshops & seminars. He has also given talks at various
                    tertiary institutions and business organisations to share
                    his extensive experience in education and entrepreneurship.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/alvin-kuek-346808209/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Alvin LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.mindstretcher.biz/founding-educators">
                        <a target="_blank">
                            <Image
                                src="/website.png"
                                alt="Alvin Website"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const AnshariRahman = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    &quot;We cannot change the cards we are dealt, just how we
                    play the game.&quot;
                </p>
                <p>
                    Anshari Rahman is Vice President at GenZero, based in
                    Singapore. Prior to joining GenZero and Temasek, Anshari was
                    a climate change negotiator with the National Climate Change
                    Secretariat under the Prime Minister&apos;s Office. He has
                    over 10 years experience in multilateral negotiations and
                    policymaking, having represented the Singapore Government at
                    various multilateral fora such as the UNFCCC, UNCBD, IPCC
                    and ASEAN. He has coordinated whole-of-government
                    initiatives such as Singapore&apos;s updated Nationally
                    Determined Contribution and carbon markets strategy. He was
                    the lead carbon markets negotiator for Singapore, and has
                    co-chaired expert level negotiations on Article 6 of the
                    Paris Agreement (international market and non-market based
                    cooperation). Anshari has a Bachelor of Science (Life
                    Sciences) from the National University of Singapore.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/anshari-rahman/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Anshari LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const DenyseChan = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Denyse is a Singapore National Fencer and an incoming
                    undergraduate in Economics and Political Science at UC
                    Berkeley. She graduated from RI in 2021 with 6 distinctions.
                    In RI, she was a founding member of Project Perpective and
                    published two children books targeted at correcting negative
                    perceptions against migrant workers.
                </p>
                <p>
                    A Team Singapore Fencer since 2016, Denyse is a recipient of
                    the prestigious Sport Excellence Scholarship and won the
                    Singapore Schools Sports Council Best Sportsgirl Award in
                    2020. Her achievements include winning Gold at the Asian
                    Junior Championships in 2019 and at the SEA Games twice, in
                    2019 and 2022.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/denyse-chan/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Denyse LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://tinyurl.com/riprojectperspective">
                        <a target="_blank">
                            <Image
                                src="/website.png"
                                alt="Denyse Website"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const SoonKonChun = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>&quot;Noone is willingly good or bad&quot;</p>
                <p>
                    Chun Soon Kon founded Worksider to solve the Experience
                    Paradox to help millions of students take their first step
                    for successful life and career. Leveraging his past
                    experiences in P&amp;G, Amazon and BCG and his many other
                    ventures, he has been helping over 20,000 students find the
                    right internships in over 500 companies through Worksider.
                    As a firm believer of using technology to help others and
                    with his multicultural background of being a Korean who
                    lived in Japan and Singapore, he hopes to scale his impact
                    globally.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/soonkonchun/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Chun Soon Koon LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://worksider.com/">
                        <a target="_blank">
                            <Image
                                src="/website.png"
                                alt="Worksider Website"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://t.me/sginternships">
                        <a target="_blank">
                            <Image
                                src="/telegram.png"
                                alt="SGInternships Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const GeraldineTanShuHui = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    &quot;Two roads diverged in a wood, and I—I took the one
                    less traveled by, And that has made all the
                    difference.&quot;
                </p>
                <p>
                    Geraldine is a Biology teacher at Raffles Institution who is
                    passionate about astronomy and affective education, and
                    always thinking of ways to optimise and enhance pedagogical
                    content knowledge. Outside the classroom, Geraldine spends
                    time educating parents on the science of sleep,
                    compassionate and respectful sleep routines, and sleep
                    hygiene for infants to preschoolers. In 2016, she pioneered
                    a Facebook parenting community to provide free resources and
                    support on children&apos;s sleep. Currently, she partners
                    medical professionals and parenting experts to extend her
                    work to the larger Singapore community.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.facebook.com/groups/SGBabySleep">
                        <a target="_blank">
                            <Image
                                src="/facebook.png"
                                alt="Geraldine Facebook"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const ChuaKahHwee = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Kah Hwee was inspired into this work when she saw the hurts
                    in young lives suffering from broken families. She wanted to
                    give the children and youths an avenue to voice their
                    thoughts and express their feelings. Switching careers from
                    business development to counseling, she had been attending
                    to young people for almost two decades. What sustained her
                    in this demanding work was her playtime with her nieces and
                    nephews, her conversations with her husband and plants, and
                    her prayer time with God. Kah Hwee enjoys the interaction
                    with young people and hopes to continue making a lasting
                    positive impact on their lives!
                </p>
            </div>
        </div>
    );
};

const AlexLi = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    &quot;The past holds answers to the future, you just have to
                    go back and find them.&quot;
                </p>
                <p>
                    Alex is a current Year 6 student studying in Raffles
                    Institution. Ever since his encounter with the periodic
                    table in Primary 4, Alex has since then strove to find out
                    more about the wonders of this world through the lenses of
                    Chemistry. Alex has taken part in a number of activities to
                    this end, such as enrolling in the Raffles Academy for
                    Chemistry, participating in the Chemistry Olympiad and
                    obtaining a Silver Medal. He is especially passionate about
                    Organic Chemistry, believing it has the potential to be part
                    of many important applications in society. He is currently
                    undertaking online research at Cambridge University for
                    Metal-Organic Frameworks (MOFs) and at Princeton University
                    for Polymer Synthesis.
                </p>
            </div>
        </div>
    );
};

const KareenaShaniceKumar = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    I&apos;m Kareena, a driven and focused individual passionate
                    about economics and its intersections with international
                    relations and public policy. A Year 6 student taking the
                    unconventional subject combination of PME Lit, I enjoy
                    reading poetry, listening to R&B or watching the latest
                    kdrama in my free time. I hope that through this conference,
                    attendees are able to take away new viewpoints and ideas!
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/kareena-shanice-kumar-4a7b5a227/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Kareena LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const TeoSuiLeng = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Sui Leng is currently a Year 6 student at Raffles
                    Institution and an alumnus of Raffles Girls&apos; School
                    (RGS). Presently from Raffles Debaters, she previously
                    served as the Vice-President of the RGS Robotics Club and
                    the Founder of Project EmpowHER. Having embarked on her
                    entrepreneurial journey at 15, she has since had
                    opportunities to meet and network with various industry
                    mentors and professionals and enjoys experimenting with
                    ideas whilst learning about the world of entrepreneurship.
                    In her spare time, she enjoys reading about politics and
                    economics as well as learning about new technologies.
                </p>
                <span className={popup.images}>
                    <Link href="https://instagram.com/sui_leng.teo/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Sui Leng Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const ZuLilian = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Hello, I&apos;m Lilian from 23S03P! A fun fact about me is
                    that 3 years ago, my school was giving away its old library
                    books and I shamelessly took 30... but as of today,
                    I&apos;ve only read half of them. My hobbies include
                    crocheting and spending time with my friends! I genuinely
                    hope that you will enjoy my talk -- as teenagers growing up
                    in today&apos;s digital age, I thought that my topic would
                    offer a unique perspective on the way we choose to live our
                    lives, thereby rendering it an interesting food for thought
                    :)
                </p>
                <span className={popup.images}>
                    <Link href="https://www.linkedin.com/in/lilian-zu-aa5aaa239/">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Lilian LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.instagram.com/lillxnn/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Lilian Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const IlangovanHarishiga = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    &quot;Flow as the Sea wills you to and everything will fall
                    in place.&quot;
                </p>
                <p>
                    Ilangovan Harishiga is a rather extroverted human who loves
                    to talk to anyone and everyone. She has an ardent dedication
                    towards dancing and writing, both of which she constantly
                    works on and has attained awards for, over the course of her
                    journey. She is also a voracious reader, reading everything
                    from Fantasy to Non-Fiction! To add on, she likes the
                    ability to weave words to possibly evoke a change in
                    perspective in everyone near and far. Thus, she likes public
                    speaking and has spoken to many audiences in both her mother
                    tongue and in English.
                </p>
                <span className={popup.images}>
                    <Link href="https://www.instagram.com/hari.shiga/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Ilangovan Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const KushagraKesarwani = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    &quot;We don&apos;t inherit the world from our forefathers,
                    we borrow it from our children&quot;
                </p>
                <p>
                    I&apos;m Kush, a Year 4 RI student who&apos;s been
                    passionate about the sciences and engineering ever since I
                    began watching youtube videos. I have always been interested
                    in how things move. My interest led me to explore this topic
                    at a deeper level through Raffles Academy and wrote multiple
                    portfolio pieces. Among them, I took a deep dive in rocket
                    engine design, rocket fuel, the systems behind our
                    electrical grid and yes, the risks and rewards of hydrogen
                    power in the field of aviation. I couldn&apos;t be more
                    excited to share my findings with you, this year at
                    TEDxYouth@RafflesInstitution
                </p>
                <span className={popup.images}>
                    <Link href="https://www.instagram.com/justkushhere/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Kush Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

const SantushtNarula = ({ closePopUp, setShow }: SpeakerArgs) => {
    return (
        <div className={popup.main} onClick={closePopUp}>
            <div className={popup.container}>
                <button className={popup.close} onClick={() => setShow(false)}>
                    X
                </button>
                <p>
                    Hi, I&apos;m Santusht Narula - a student from Raffles
                    Institution currently enrolled in year 4 with a strong
                    interest in aviation, technology, and entrepreneurship. In
                    school, I am part of the robotics and drama clubs - places
                    in which I regularly get to learn and apply invaluable hard
                    and soft skills. I have led my house as Director in
                    Dramafeste 2022 and am a Peer Support Leader to the current
                    year 1 batch of students. Outside of school, I love to watch
                    F1 and cricket and am an avid cyclist.
                </p>
                <span className={popup.images}>
                    <Link href="http://www.linkedin.com/in/santushtnarula">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Santusht LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.instagram.com/santushtttttt/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="Santusht Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.youtube.com/channel/UCH5bmfZoF8MuJaWP2fBwtfg">
                        <a target="_blank">
                            <Image
                                src="/youtube.png"
                                alt="Santusht YouTube"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};
