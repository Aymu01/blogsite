import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { newPassword } from '../../api/blogSlice/blogSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import JoinNav from '../navbar/join_nav';
import Mes from '../errorMes/mes';
import { useNavigate } from 'react-router-dom';

function BuildPass() {
    const {buildData} = useSelector(state => state.userDataFunc);
    const {handleSubmit, register, formState:{errors}} = useForm();
    const [mes,setMes] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(buildData.email)
    const onSubmit = async (data) => {
        await axios.post("https://minecard.az/api/moonsun/buildPassword",
        {
          "email" : buildData.email,
          "code" : data.code
        }
        ).then(
            res => {
                //console.log(res)
                dispatch(newPassword(data.code));
                navigate("/newPass")
                
            }
        ).catch(
            err => {
                if(err.response.status === 404){
                  setMes("Yanlış kod")
                }else if(err.response.status === 400){
                  setMes("Kodun vaxtı bitdi")
                }
                console.log(err)
            }
        )
    }
  return (
    <div>
          <JoinNav />
      <div className="forgot-back">
        <div className="forgot-page">
       <div className="title">Kodu daxil edin</div>
       <Mes message={mes}/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Code' name='code' {...register("code",{
                required:
                {
                   value:true,
                   message:"Doldurulmalıdır"
                }
            })} />
           <ErrorMessage as="p" className="error" name='code' errors={errors}/>
           <button>Göndər</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default BuildPass;
