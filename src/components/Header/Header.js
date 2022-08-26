import React from 'react';
import { NavLink } from 'react-router-dom';
import Linkedin from './assets/img/ink.png';
import Github from './assets/img/github.png';
import styles from './Header.module.css'

const header = () => {


  return (
    
    <div className={styles.box}>   

     <div className={styles.in}>
     <a href={'https://www.linkedin.com/in/danni-pm-8b8182170'}>
     <img src={Linkedin} style={{ width: '40px', height:'40px'}}/>
     </a>
      
     
     </div>

      <div className={styles.git}>
        <a href={'https://github.com/DanPM26'}>
        <img src={Github} style={{ width: '40px', height:'40px'}} />
        </a>
      
      </div>
     
    
      <div className={styles.navbox}>
      <NavLink className={styles.nav} to='/'> Perfil </NavLink>
      </div>
      <div className={styles.navbox}>
      <NavLink className={styles.nav}  to='/proyectos'> Proyectos</NavLink>
      </div>
      <div className={styles.navbox}>

      <NavLink className={styles.nav} to='/contacto'>Contacto</NavLink>
      </div>   
      
      </div>
    

  )
}

export default header