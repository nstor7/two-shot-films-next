"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import Social from './SocialLinks'
import { FaBars }  from 'react-icons/fa'

const Header = () => {
  var [visible, setVisible] = useState(false)

  var mostrarMenu = ()=>{
    setVisible(!visible)
  }
  

  var  classNameSocial = visible ? styles.social : styles.socialNone
  var classNameNav = visible ? styles.navList :  styles.navListNone 
    return (
    <header className={styles.header}>
      <div className={styles.logo}><img className={styles.logo} src="/images/Logo TwoShot.png" alt="" /></div>
      <nav className={styles.nav}>
        <ul className={classNameNav}>
          <li><Link onClick={mostrarMenu} href="/" className={styles.navLink} >Inicio</Link></li>
          <li><Link onClick={mostrarMenu} href="/servicios" className={styles.navLink} >Servicios</Link></li>
          <li><Link onClick={mostrarMenu} href="/portfolio" className={styles.navLink} >Portafolio</Link></li>
          <li><Link onClick={mostrarMenu} href="/contacto" className={styles.navLink} >Cotiza</Link></li>
        </ul>
      </nav>
      <div className={classNameSocial} onClick={mostrarMenu} > <Social /></div>
     <div className={styles.bars} onClick={mostrarMenu}> <FaBars /> </div>
    </header>
  );
};

export default Header;