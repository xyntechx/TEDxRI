import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import topnav from "../styles/Topnav.module.css";

const Topnav: NextPage = () => {
    return (
        <header className={topnav.nav}>
            <Link href="/">
                <a>
                    <Image
                        src="/logo.png"
                        alt="TEDxRI Logo"
                        width={165}
                        height={54}
                    />
                </a>
            </Link>
            <div className={topnav.navlinks}>
                <Link href="/">
                    <a className={topnav.link}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={topnav.link}>About</a>
                </Link>
                <Link href="/speakers">
                    <a className={topnav.link}>Speakers</a>
                </Link>
                <Link href="/schedule">
                    <a className={topnav.link}>Schedule</a>
                </Link>
                <Link href="/faq">
                    <a className={topnav.speciallink}>FAQ</a>
                </Link>
            </div>
        </header>
    );
};

export default Topnav;
