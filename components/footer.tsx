import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import footer from "../styles/Footer.module.css";

const Footer: NextPage = () => {
    return (
        <footer className={footer.footer}>
            <section>
                <Image
                    src="/logo.png"
                    alt="TEDxRI Logo"
                    width={220}
                    height={72}
                />
                <section className={footer.socials}>
                    <Link href="https://www.instagram.com/tedxri/">
                        <a target="_blank">
                            <Image
                                src="/instagram.png"
                                alt="TEDxRI Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link href="https://www.linkedin.com/company/tedxri">
                        <a target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="TEDxRI LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link href="mailto:contact@tedxri.com">
                        <a target="_blank">
                            <Image
                                src="/mail.png"
                                alt="TEDxRI Email"
                                width={20}
                                height={20}
                            />
                        </a>
                    </Link>
                </section>
                <section className={footer.vsubfooter}>
                    <div className={footer.tooltip}>
                        What is TEDx?
                        <span className={footer.tooltiptext}>
                            In the spirit of ideas worth spreading, TED has
                            created a program called TEDx. TEDx is a program of
                            local, self-organized events that bring people
                            together to share a TED-like experience. Our event
                            is called{" "}
                            <span className={styles.red}>
                                TEDxYouth@RafflesInstitution
                            </span>
                            , where x = independently organized TED event. At
                            our{" "}
                            <span className={styles.red}>
                                TEDxYouth@RafflesInstitution
                            </span>{" "}
                            event, TED Talks video and live speakers will
                            combine to spark deep discussion and connection in a
                            small group. The TED Conference provides general
                            guidance for the TEDx program, but individual TEDx
                            events, including ours, are self-organized.
                        </span>
                    </div>
                </section>
            </section>
        </footer>
    );
};

export default Footer;
