import React from 'react';
import { useForm } from 'react-hook-form';
import './com.scss';
import { ErrorMessage } from '@hookform/error-message';

function Com() {
  const {handleSubmit,register,formState:{errors}} = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
       <div className="comment-area">
        <div className="title">Şərh yazın</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea name="comment" id="com" placeholder='Şərhinizi bura yaza bilərsiniz..' {...register("comment",{
                required:
               {
                value:true,
                message:"Şərh hissəsi doldurulmaldır"
               }
            })}></textarea> 
             <ErrorMessage name='comment' as="p" errors={errors} classname="error" />
            <div className="button"><button>Şərhi göndər</button></div>
            
        </form>
       
       </div>
    </div>
  )
}

export default Com;
