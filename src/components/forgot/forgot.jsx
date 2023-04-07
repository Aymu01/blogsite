import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import JoinNav from '../navbar/join_nav';
import Mes from '../errorMes/mes';
import { buildPassEmail } from '../../api/blogSlice/blogSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './forgot.scss'
import axios from 'axios';
import { useState } from 'react';
 function Forgot() {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        axios.post("https://minecard.az/api/moonsun/mailToBuildPassword",data
        ).then(
         res => {
               setMessage("Kod emailə göndərildi");
               dispatch(buildPassEmail(data.email));
               setTimeout(() => {
                  navigate("/build")
               },1000)
         }
        ).catch(
         err => {
            if(err.response.status === 400) {
               setMessage("Kod artıq emailə göndərilib");
            }else if(err.response.status === 404){
               setMessage("Email tapılmadı. Bir daha giriniz");
            }
            console.log(err.response.status)
         }
        )
      //console.log(data.email);
    }
  return (
        <div >
            <JoinNav />
            <div className="forgot-back">
            <div className="forgot-page">
               <div className="forgot-title">Şifrənizi unutmusunuz?</div>
                <Mes message={message}/>
               <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                 <input type="email" name='email' placeholder='numune@gmail.com' className='email' {...register("email",{
                    required:
                    {
                        value:true,
                        message:"Boş buraxa bilməzsiz"
                    }
                 })}/>
                 <ErrorMessage className="error" as="p" errors={errors} />
                 <button>Təsdiqlə</button>
               </form>
            </div>
            </div>
        </div>
  )
}

export default Forgot;
