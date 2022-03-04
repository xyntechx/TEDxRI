import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

// For accessibility

const Skip: NextPage = () => {
    return (
        <a href="#our-event" className={styles.skipToContent}>
            Skip to Content
        </a>
    );
};

export default Skip;
