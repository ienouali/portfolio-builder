import React from "react";
import Input from "../commun/Input/Input";

export default function PersonalInfo({handleChange , picture}) {
        return (
            <div className='form__personal--info mb-medium'>
                <figure className='form__personal--info__picture'>
                    <img alt='profile-img'
                         src={`${picture !== undefined
                             ? picture
                             : 'https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1615376889~hmac=22a2a8a3b2fcb27e3aa2c08bcb955e64'}
                             `}
                    />
                    <div className="button-wrapper">
                          <span className="label">
                            Choose an image
                          </span>
                        <input onChange={(e) => handleChange(e)}
                               type="file" name="picture" id="upload"
                               className="upload-box" placeholder="Upload File"
                        />
                    </div>
                </figure>

                <div className='form__personal--info__fields'>
                    <Input onChange={(e) => handleChange(e)}
                           type='text'
                           placeholder='firstname'
                           name='firstname'
                    />
                    <Input onChange={(e) => handleChange(e)}
                           type='text'
                           placeholder='lastname'
                           name='lastname'
                    />
                    <Input onChange={(e) => handleChange(e)}
                           type='tel'
                           placeholder='profile (ex: web developer)'
                           name='profile'
                    />
                    <Input onChange={(e) => handleChange(e)}
                           type='date'
                           name='age'
                    />
                    <Input onChange={(e) => handleChange(e)}
                           type='textarea'
                           placeholder='About you'
                           name='about'
                    />
                </div>
            </div>
        )
}
