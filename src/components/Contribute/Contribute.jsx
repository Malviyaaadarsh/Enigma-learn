import React from 'react'
import styles from './Contribute.module.css'
import GLogo from '../../assets/github-logo.png'
import Elogo from '../../assets/email-logo.png'
const Contribute = () => {
  return (
    <div className={styles.body}>
      <h1>Got an idea to contribute? Reach out to us at :</h1>
      <hr></hr>
      <div className={styles.link}><a href="https://github.com/Malviyaaadarsh/Enigma-learn"><img src={GLogo} className={styles.logo}></img><p><u>Github Repository</u> - Fork and Open a pull request</p></a>
    <a href="mailto:enigmaaimlclub@gmail.com"><img src={Elogo} className={styles.logo}></img><p><u>Email us</u></p></a></div>
    </div>
  )
}
export default Contribute
