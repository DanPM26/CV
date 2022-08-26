import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import styles from './contacto.module.css'


const Contacto = () => {
  const url = 'http://localhost:5000/register/v1/users';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post(url, data)
    .then( res =>{
      console.log(res.data)
    })
  }

  return (
    <div>

      <h1 className={styles.contacto}>Contacto</h1>

      <div className={styles.box}>
      <form className={styles.box1} onSubmit={handleSubmit(onSubmit)}>
           <label className={styles.text} htmlFor="">Name/Nombre</label>
          <input className={styles.box3} {...register("name", { required: true })} />

          <label className={styles.text} htmlFor="">Email</label>
          <input  className={styles.box3} {...register("email", { required: true })} />

          <label  className={styles.text} htmlFor="">Country/País</label>
          <input  className={styles.box3} {...register("country", { required: true })} />

          <label className={styles.text} htmlFor="">Comment/Comentario</label>
          <input  className={styles.box3} {...register("commits", { required: true })} />
          
          {errors.commits && <p>Comment is required</p>}
          <input  type="submit" />
        </form>
      </div>


    </div>
  )
}

export default Contacto