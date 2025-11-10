import styles from './navbar.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/enigma-club-logo.png'
const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}><a href="https://www.enigmaclub.tech" target="_blank"
        rel="noopener noreferrer"
        className={styles.ref}><h2 className={styles.h2}><img src={logo} className={styles.logo} />Learn</h2></a>
        <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.links : styles.deadlink)}>Home</NavLink></li>
        <li><NavLink to="/courses" className={({ isActive }) => (isActive ? styles.links : styles.deadlink)}>Courses</NavLink></li>
        <li><NavLink to="/shorts" className={({ isActive }) => (isActive ? styles.links : styles.deadlink)}>Shorts</NavLink></li>
        <li><NavLink to="/contribute" className={({ isActive }) => (isActive ? styles.links : styles.deadlink)}>Contribute</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
export default navbar
