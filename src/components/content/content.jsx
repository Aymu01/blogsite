import React, { useState } from 'react';
import './content.scss';
import Navbar from '../navbar/navbar';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai'
import { addBlogData } from '../../api/blogSlice/blogSlice';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './content.scss';

function Content() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [key, setKey] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = data => {
        const keyElem = data.key.split(",")
        const newData = Object.assign(data,{newKey:keyElem,id:uuid()});
        dispatch(addBlogData(newData));
        navigate("/blog")
    }

    
    
    const [photo, setPhoto] = useState("");
    const [current, setCurrent] = useState(0);
    const keyDelete = (elem) => {
        const newArr = key.filter((el) => (el!==elem));
        setKey(newArr);   
    }
    const addKey = (e) => {
        if(e.key === ","){
            setKey(e.target.value.split(","));  
        }
    }
    const photoDown = (e) => {
        setPhoto(e.target.files.length);
    }
    return (
        <div >
            <Navbar />
            <div className="content">
                <h5>Blog yarat</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="validation">
                        <label>Başlıq</label>
                        <input type="text" className='name' name='blog' placeholder='Blog adını daxil edin'  {...register("blog", {
                            required:
                            {
                                value: true,
                                message: "*Blog adı daxil edilməlidir."
                            },
                            minLength:
                            {
                                value: 3,
                                message: "*Ad çox qısadır."
                            },
                            maxLength:
                            {
                                value: 50,
                                message: "*Ad çox uzundur."
                            }
                        })} />
                        <ErrorMessage className="error" errors={errors} name="blog" as="p" />
                    </div>
                    <div className="validation">
                        <label>Adınız</label>
                        <input type="text" className='name' name='person' placeholder='Adınızı daxil edin'  {...register("person", {
                            required:
                            {
                                value: true,
                                message: "*Adınız daxil edilməlidir."
                            },
                            minLength:
                            {
                                value: 2,
                                message: "*Ad tək simvol ola bilməz"
                            },
                            maxLength:
                            {
                                value: 20,
                                message: "*Ad çox uzundur."
                            }
                        })} />
                        <ErrorMessage className="error" errors={errors} name="person" as="p" />
                    </div>
                    <div className="validation">
                        <label>Blog yazısı</label>
                        <textarea name="body" className="body" cols="36" style={{resize:"none"}} onKeyUp={(e) => setCurrent(e.target.value.length)} rows="50" placeholder='Yazını daxil edin..' maxLength="4000" {...register("body", {
                            required:
                            {
                                value: true,
                                message: "*Boş qala bilməz"
                            },
                            minLength:
                            {
                                value: 20,
                                message: "*Çox qısa yazıdır"
                            }
                        })
                        }></textarea>
                        <div className="count">
                            <div className="current">{current}/4000</div>
                        </div>
                        <ErrorMessage className="error area" errors={errors} name="body" as="p" />
                    </div>
                    <div className="validation">
                        <label>Şəkil</label>
                        <label htmlFor="files" className='photo'>
                            <input type="file" name='files' id='files' onInput={(e) => photoDown(e)} multiple {...register("files", {
                                required: {
                                    value: true,
                                    message: "*Şəkil əlavə olunmalıdı"
                                }
                            })
                            } />
                            {
                                photo !== ""
                                    ?
                                    <span><AiOutlineDownload /> {photo} şəkil əlavə edildi</span>
                                    :
                                    <span ><AiOutlineDownload /> İnvoys yüklə (jpg,png,jpeg,pdf)</span>
                            }
                        </label>
                        <ErrorMessage className="error" errors={errors} name="files" as="p" />
                    </div>
                    <div className="validation">
                        <label >Janr</label>
                        <select name="genre" required id="genre" {...register("genre", {
                            required:
                            {
                                value: true,
                                message: "*Seçim edin"
                            }
                        })}>
                            <option value="" selected disabled>Seçim edin</option>
                            <option value="fantastik">Fantastik</option>
                            <option value="dram">Dram</option>
                            <option value="romantik">Romantik</option>
                            <option value="komedi">Komedi</option>
                            <option value="elmi">Elmi</option>
                            <option value="tarixi">Tarixi</option>
                            <option value="dedektiv">Dedektiv</option>
                            <option value="şeir">Şeir</option>
                        </select>
                        <BsChevronDown className='down' />
                        <ErrorMessage className="error" errors={errors} name="genre" as="p" />
                    </div>
                    <div className="validation">
                        <label>Açar söz</label>
                        <input type="text" className='keyword' name='key'  onKeyDown={(e) => addKey(e)} placeholder='Açar sözləri daxil edin' {...register("key")}/>
                        <div className="warning">
                            Söz daxil etdikdən sonra vergüldən istifadə edin. Onlar avtomatik olaraq əlavə olunacaq.
                        </div>
                    </div>
                    <div className="keyBtns">
                        {
                            key.length !== 0
                            &&
                            key.map((elem) => (
                                elem !== "" &&
                                <div className="key">{elem} <AiOutlineClose className='cancel' onClick={() => keyDelete(elem)} /></div>
                            ))
                        }
                    </div>
                    <button className="continue-btn">Continue</button>
                </form>

            </div>
        </div>
    )
}

export default Content;