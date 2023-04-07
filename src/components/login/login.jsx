import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { CgFacebook } from 'react-icons/cg';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../api/blogSlice/blogSlice';
import { useNavigate, Link } from 'react-router-dom';
import Mes from '../errorMes/mes';
import axios from 'axios';
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask'
import {Checkbox} from 'primereact/checkbox';
import {Password} from 'primereact/password';
import './login.scss'
function Login({ sign }) {
  const {control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mes, setMes] = useState("");
  const [checked,setChecked] = useState(false);
  const onSubmit = async (data) => {
    sign
      ?
      await axios.post('https://minecard.az/api/moonsun/register', data
      ).then(
        res => {
          dispatch(addUserData(data));
          navigate("/");
        }
      ).catch(
        err => {
          setMes("Bu email artıq var");
          setTimeout(() => {
            setMes("")
          }, 5000);
        }
      )
      :
      await axios.post('https://minecard.az/api/moonsun/login', data
      ).then(
        res => {
          localStorage.setItem('token', res?.data?.data?.token);
          getUserData();
        }
      ).catch(
        err => {
          setMes("Ya email ya da şifrə yanlışdır");
          setTimeout(() => {
            setMes("")
          }, 5000);
        }
      )
  }

  const getUserData = async () => {
    try {
      const response = await axios.get('https://minecard.az/api/moonsun/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      dispatch(addUserData(response?.data?.data?.user));
      navigate("/");
    }
    catch {

    }
  }
  const getInputErrors = (name) => {
    return errors[name] && <small className='p-error'>{errors[name].message}</small>

  }
  return (
    <div className='Login'>
      <Mes message={mes} />
      <div className="button">
        <button><FcGoogle className='icon' /> with Google</button>
        <button><CgFacebook className='icon face' /> with Facebook</button>
      </div>
      <div className="span"><span>və ya</span></div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-3" >
        {
          sign
          &&
          <div className="flex flex-column gap-3">
            <Controller
              name='fullname'
              control={control}
              rules={{ required: "Ad daxil edilməlidir" }}
              render={({ field, fieldState }) => (
                <>
                  <div className='flex flex-column gap-2'>
                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}>Ad</label>
                    <InputText id={field.name} value={field.value} type="text" className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} placeholder='Adınızı daxil edin..' />
                    {getInputErrors('fullname')}
                  </div>
                </>
              )}
            />
            <Controller
              name='phone'
              control={control}
              rules={{ required: "Telefon nömrəsi daxil edilməlidir" }}
              render={({ field, fieldState }) => (
                <>
                  <div className='flex flex-column gap-2'>
                    <label htmlFor={field.name}>Telefon</label>
                    <InputMask id={field.name} value={field.value} onChange={(e) => field.onChange(e.target.value)} className={classNames({ 'p-invalid': fieldState.error })} mask="(+994) 99-999-99-99" placeholder="(+994) 99-999-99-99" />
                    {getInputErrors('phone')}
                  </div>
                </>
              )}
            />
          </div>
        }
        <Controller
          name='email'
          control={control}
          rules={{ required: "Elektron poçt daxil edilməlidir" }}
          render={({ field, fieldState }) => (
            <>
              <div className='flex flex-column gap-2'>
                <label htmlFor={field.name}>Email</label>
                <InputText id={field.name} type="email" value={field.value} onChange={(e) => field.onChange(e.target.value)} className={classNames({ 'p-invalid': fieldState.error })} placeholder='Elektron poçtu daxil edin..' />
                {getInputErrors('email')}
              </div>
            </>
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={
            {
              required: "Parol daxil edilməlidir",
              minLength: {
                value: 8,
                message: "Parol uzunluğu 8-dən az ola bilməz"
              },
              maxLength: {
                value: 20,
                message: "Parol uzunluğu 20-dən çox ola bilməz"
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,20}$/,
                message: 'Zayıf kod'
              }
            }
          }
          render={({ field, fieldState }) => (
            <>
              <div className='flex flex-column gap-2' style={{width:"100%"}}>
                <label htmlFor={field.name}>Parol</label>
                <Password id={field.name} placeholder="Parolu daxil edin.." value={field.value} onChange={(e) => field.onChange(e.target.value)}  inputRef={field.ref} toggleMask className={classNames({ 'p-invalid': fieldState.error })}  />
                {getInputErrors('password')}
              </div>
            </>
          )}
        />
        {
          sign
          &&
          <div className="check-need">
            <div className="flex align-items-center">
              <Checkbox inputId="check" name="check" onChange={e => setChecked(e.checked)} checked={checked}  />
              <label htmlFor="check" className="ml-2">Xatırla məni</label>
            </div>
            <Link className="forgot" to="/forgot" >
              Forgot password?
            </Link>
          </div>
        }
        <Button type='submit' label={sign ? "Qeydiyyatdan keç" : "Daxil ol"} severity="warning" raised />
      </form>
    </div>
  )
}

export default Login;
