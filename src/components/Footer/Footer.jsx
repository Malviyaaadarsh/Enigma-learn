import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <footer className={styles.container} >
            <h1 className={styles.heading}>Explore Other Enigma Features</h1>
            <hr></hr>
            <div className={styles.gather}>
                <ul className={styles.row}>
                    <li><h4>Enigma Core: </h4></li>
                    <li><a href="https://www.enigmaclub.tech">Enigma Club Website</a></li>
                    <li><a href="">Enigma Club Repository</a></li>
                     <li><a href="">Enigma Linktree</a></li>
                </ul>
                <ul className={styles.row}>
                    <li><h4>Enigma Features</h4></li>
                    <li><a href="">Explore Enigma Research</a></li>
                    <li><a href="">Explore Enigma Blogs</a></li>
                    <li><a href="">Explore Enigma Resources</a></li>
                </ul>
                <ul className={styles.row}>
                    <li><h4>Find us on : </h4></li>
                    <li><a href="https://instagram.com/enigma_lnct">Instagram Channel</a></li>
                    <li><a href="https://chat.whatsapp.com/G2fdYwTNgdwAjg0mERGtfQ?mode=wwt">Whatsapp Community</a></li>
                    <li><a href="https://www.linkedin.com/company/enigma-aiml-club/">Enigma LinkedIn Channel</a></li>
                </ul>
            </div>
            <br></br>
<hr></hr>
            <div className={styles.heading}>© 2025 Enigma – AIML Club | All Rights Reserved</div>
        </footer>
    )
}
export default Footer