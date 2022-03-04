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
                        width={110}
                        height={36}
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
                <Link href="/faq">
                    <a className={topnav.link}>FAQ</a>
                </Link>
                {/* <Link href="/speakers">
                    <a className={topnav.link}>Speakers</a>
                </Link> */}
                <Link href="/faq">
                    <a className={topnav.speciallink}>Attend</a>
                </Link>
            </div>
        </header>
    );
};

export default Topnav;
