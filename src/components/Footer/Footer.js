import React from 'react';
import Bandera from './assets/img/mexico.png';
import Email from './assets/img/mail.png';
import styles from './footer.module.css';

const footer = () => {
  return (
    <div className={styles.foot}>

      <div className={styles.date}>
      <img src={Bandera} style={{ width: '40px', height:'40px'}} />
      <div className={styles.num}>
      <h5>+52 (55) 22471423</h5>
      </div>
        
      </div>
       
       <div className={styles.date}>
       <img src={Email} style={{ width: '40px', height:'40px'}} />
       <div className={styles.num}>
       <h5> danielaponce34@aragon.unam.mx</h5>
       </div>
        
       </div>

        

    </div>
  )
}

export default footer