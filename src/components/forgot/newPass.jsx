import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { AiFillEye } from 'react-icons/ai';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Mes from '../errorMes/mes';
import './newPass.scss'
function NewPass() {
    const {handleSubmit,register,formState:{errors}} = useForm();
    const {buildData} = useSelector(state => state.userDataFunc);
    const [mes,setMes] = useState("");
    const navigate = useNavigate();
    const onSubmit = async(data) => {
        await axios.put("https://minecard.az/api/moonsun/buildPassword",{
            "email":buildData.email,
            "code":buildData.code,
            "password":data.password,
            "password_confirmation":data.password_confirmation
        }).then(
            res => {
              setMes("Parol yenilendi");
            setTimeout(() => {
                navigate("/login");
            },1000)
            }
        ).catch(
            err => {
               if(err.response.status === 422){
                 setMes("Parollar eyni deyil")
               }else if(err.response.status === 404){
                setMes("Köhnə parolla eynidir")
              }
            }
        )
    }
    const [pass,setPass] = useState("password");
    const showPass = () => {
        setPass(pass === "password" ? "text" : "password");
      }
  return (
    <div>
      <div className="forgot-back">
        <div className="forgot-page">
            <div className="forgot-title">Yeni parol</div>
            <Mes message={mes}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="validation">
                <input type={pass} placeholder='Yeni şifrəni daxil et' name="password" {...register("password",{
                    required: {
                        value: true,
                        message: "Parol daxil edilməlidir"
                      },
                      minLength: {
                        value: 8,
                        message: "Parol uzunluğu 8-dən az ola bilməz"
                      },
                      maxLength: {
                        value: 20,
                        message: "Parol uzunluğu 20-dən çox ola bilməz"
                      }
                })} />
                 <div className="see" onClick={showPass}><AiFillEye /></div>
                 <ErrorMessage errors={errors} name="password" as="p" className='error-span' />
                 </div>
                 <div className="validation">
                <input type={pass} placeholder='Yeni şifrəni yeniden daxil et' name="password_confirmation" {...register("password_confirmation",{
                    required: {
                        value: true,
                        message: "Parol daxil edilməlidir"
                      },
                      minLength: {
                        value: 8,
                        message: "Parol uzunluğu 8-dən az ola bilməz"
                      },
                      maxLength: {
                        value: 20,
                        message: "Parol uzunluğu 20-dən çox ola bilməz"
                      }
                })} />
                 <div className="see" onClick={showPass}><AiFillEye /></div>
                 <ErrorMessage errors={errors} name="password_confirmation" as="p" className='error-span' />
                 </div>
                 <button>Tamamla</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default NewPass;