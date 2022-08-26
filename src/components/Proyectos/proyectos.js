import React from 'react';
import Landing from './assets/img/landing1.png';
import Crud from './assets/img/crud2.png';
import dashboard from './assets/img/dash3.png';
import App from './assets/img/app4.png';
import foco from './assets/img/foco.png';
import Retro from './assets/img/retro.png';
import Lapiz from './assets/img/lapiz.png';
import Libros from './assets/img/libros.png';
import final from './assets/img/final.png'
import styles from './proyectos.module.css'

const proyectos = () => {




  return (
    <div>
      <h1 className={styles.work}>Formas de trabajo & proyectos</h1>
      <h3 className={styles.work1}>Forms of working and proyects</h3>

      
      
 <div className={styles.apps}>

       <a className={styles.link} href={'https://danpm26.github.io/Landing-1/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=d853b31b-4f87-4cbd-9ede-54475c645200&submissionId=a60e3c8d-6b96-44c8-88c4-d5b8047fee2c'}>
       <img className={styles.app1} src={Landing} style={{ width: '600px', height:'400px'}} />
        </a>

        <a className={styles.link} href={'https://danpm26.github.io/CRUD-proyecto2/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=77f32d26-d1ff-4135-b22a-184253fdd18b&submissionId=73cc8693-3c43-1dd0-70d3-578de9484f8c'}>
        <img className={styles.app1} src={Crud} style={{ width: '600px', height:'400px'}} />
        </a>

        <a className={styles.link} href={'https://danpm26.github.io/Proyecto-APINd/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=cd81ade4-fe85-45b2-aca8-3b5e931c7b24&submissionId=433ccda3-f877-c132-8d4b-b9df0e7144dc'} >
        <img className={styles.app1} src={dashboard} style={{ width: '600px', height:'400px'}} /> 
        </a>

         <a className={styles.link} href={'https://ephemeral-quokka-bbfc0b.netlify.app/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=fec4a797-f146-4219-b63f-ddf4042ad552&submissionId=bda82805-b63c-8551-9b30-80e7419739a3'}>
         <img className={styles.app1} src={App} style={{ width: '600px', height:'400px'}} />
         </a>
        
  </div> 
  <div>
    <h1  className={styles.work}>Planeación del diseño & trabajo del proyecto</h1>
    <h3 className={styles.work1}> Design planning & project work</h3>
  </div>

  <div className={styles.box1}>
    <h1 className={styles.number}>1.</h1>
    <h3 className={styles.abc}> Los grandes proyectos conllevan grandes ideas</h3>
    <img className={styles.img} src={foco} style={{ width: '100px', height:'90px'}} />
  </div>

  <div className={styles.box1}>
    <h1 className={styles.number}>2.</h1>
    <h3 className={styles.abc}> La comunicación y el bocetaje son escenciales</h3>
    <img className={styles.img} src={Lapiz} style={{ width: '100px', height:'90px'}} />
  </div>

  <div className={styles.box1}>
    <h1 className={styles.number}>3.</h1>
    <h3 className={styles.abc}> Y la investigación lo es más</h3>
    <img className={styles.img} src={Libros} style={{ width: '100px', height:'90px'}} />
  </div>
  <div className={styles.box1}>
    <h1 className={styles.number}>4.</h1>
    <h3 className={styles.abc}> Lo más genial de ser Web Developer es la retroalimentación constante</h3>
    <img className={styles.img} src={Retro} style={{ width: '100px', height:'90px'}} />
  </div>
  <div className={styles.box1}>
    <h1 className={styles.number} >5.</h1>
    <h3 className={styles.abc}> El producto final debe verse como esto</h3>
    <img className={styles.img} src={final} style={{ width: '100px', height:'90px'}} />
  </div>

   </div>


   
  )
}

export default proyectos