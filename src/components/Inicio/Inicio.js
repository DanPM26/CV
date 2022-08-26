import React from 'react';
import Foto from './assets/img/dany.png';
import javascript from './assets/img/java.png';
import react from './assets/img/react.png';
import html from './assets/img/html.png';
import css from './assets/img/css.png';
import node from './assets/img/node.png';
import mongo from './assets/img/mongodb.png';
import firebase from './assets/img/firebase.png';
import styles from './inicio.module.css'


const Inicio = () => {
  

  return (

  <div className={styles.body}>

        <div className={styles.logo}>
            <h1 className={styles.developer}>Web Developer Fullstack Jr.</h1>
            <h2 className={styles.name}>Dany Ponce</h2>
         </div>

      <div className={styles.box1}>

        <div>
         <img  className={styles.foto} src={Foto} style={{ width: '500px', height:'350px'}} />
        </div>

        <div>
        <h1 className={styles.logo2}> 
        "El código de mi vida lo maneja un controlador de versiones y no es Github"
       </h1>
        <h2 className={styles.logo3}>
        Fan del Frontend pero enamoradx del Backend.
        </h2>
        <h3 className={styles.logo4}>
        Soy una persona comprometida, creativa y motivada para crecer profesionalmente. Con gran interés, afición y aptitud en el desarrollo, creación y manejo de proyectos.
        Mi motivación, son los nuevos aprendizajes y la utilización de la creatividad cómo herramienta para dar solución a problemas concretos.
       </h3>
       </div>
     </div>

   <div className={styles.letras}>
   <h1 className={styles.skills}> Skills & Knowledge</h1>
  </div>
    

  <div className={styles.imgsk}>
 <img className={styles.ja} src={javascript} style={{ width: '100px', height:'80px'}} />
 <img className={styles.ja}  src={react} style={{ width: '100px', height:'80px'}} />
 <img className={styles.ja}  src={html} style={{ width: '100px', height:'80px'}} />
 <img className={styles.ja}  src={css} style={{ width: '100px', height:'80px'}} />
 <img className={styles.ja}  src={node} style={{ width: '100px', height:'80px'}} />
 <img className={styles.ja}  src={mongo} style={{ width: '100px', height:'80px'}} />
 <img className={styles.ja}  src={firebase} style={{ width: '100px', height:'80px'}} />
 </div>

 <div className={styles.me}>
  <h2>Sobre mi/ About me:</h2>

  <div className={styles.about}>
<div className={styles.box}>
    <h3 className={styles.name1}>Formación/Education</h3>

    <h4>IPN, CECyT N°10 "Carlos Vallejo Márquez"</h4>
    <h5>TÉCNICO EN METROLOGÍA Y CONTROL DE CALIDAD: FÍSICO MATEMÁTICO, 2016</h5>

    <h4>UNAM,FACULTAD DE ESTUDIOS SUPERIORES ARAGÓN</h4>
    <h5>LICENCIATURA EN SOCIOLOGÍA: CIENCIAS SOCIALES,2021 </h5>
  </div>

  <div className={styles.box}>
    <h3  className={styles.name1}>Experiencia/Experience</h3>
    <h4>Bootcamp fullstack, UTEL University. 7 months</h4>
  </div>

  <div className={styles.box}>
    <h3 className={styles.name1}>Idiomas/lenguages</h3>
    <h4>Inglés avanzado /English Advance </h4>
    <h4> Italiano comprensión lectora /Italian reading comprehension</h4>
    <h4> Español nativo/ Spanish native</h4>
  </div>

  </div>
 </div>
</div>
  )
}

export default Inicio