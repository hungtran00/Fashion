import React from 'react';
import {RiMapPinLine} from 'react-icons/ri'
import {CiMail} from 'react-icons/ci'
import {BsPhoneVibrate} from 'react-icons/bs'
import {CiHeadphones} from 'react-icons/ci'
import { useRef } from 'react';
import styles from './Contact.module.scss'
import classNames from "classnames/bind";
import emailjs from '@emailjs/browser';
// import './Contact.scss'

const cx = classNames.bind(styles)



function Contact(props) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rf9l1js', 'template_mtypnya', form.current, 'xThaqrqqYCPi8tEht')
      e.target.reset()
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
       
    };
    return (
        <div className={cx('contact')}>
            <div className={cx('contact__content')}>
                <h1>Trang chủ - Liên hệ</h1>
                <img src="../img/guide.jpg" alt="" />
                <div className={cx('contact__container')}>
                    <div className={cx('contact__container_left')}>
                        <div className={cx('contact__container_list')}>
                            <RiMapPinLine className={cx('contact__container_list-icon')}/>
                            <div className={cx('contact__container__list_map')}>
                                <h1>Địa điểm</h1>
                                <p>Tầng 14, Toà nhà Hapulico
                                <br/>
                                 Complex 24T- 85 Vũ Trọng 
                                 <br/>
                                 Phụng Quận Thanh Xuân, HN</p>
                            </div>
                        </div>
                        <div className={cx('contact__container_list')}>
                            <CiMail className={cx('contact__container_list-icon')}/>
                            <div className={cx('contact__container__list_map')}>
                                <h1>Email</h1>
                                <p>saleadmin@ivy.com.vn
                                </p>
                            </div>
                        </div>
                        <div className={cx('contact__container_list')}>
                            <BsPhoneVibrate className={cx('contact__container_list-icon')}/>
                            <div className={cx('contact__container__list_map')}>
                                <h1>Mua hàng online</h1>
                                <p>+ (84) 24 6662 3434</p>
                            </div>
                        </div>
                        <div className={cx('contact__container_list')}>
                            <CiHeadphones className={cx('contact__container_list-icon')}/>
                            <div className={cx('contact__container__list_map')}>
                                <h1>Chăm sóc khách hàng</h1>
                                <p>Email: cskh@ivy.com.vn
                                    <br/>
                                    Hotline: 0905 89 86 83
                                    <br/>
                                    Thứ Hai đến Thứ Bảy, từ 8:00 đến 17:30
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className={cx('contact__container_right')}>
                        <div className={cx('contact__container_form')}>
                            <form ref={form} onSubmit={sendEmail}>
                                <h1>Email to IVY </h1>
                                <p>We are here to help and answer any question you might have.Tell us about your issue so we can help you more quickly. We look forward to hearing from you.</p>
                                <div className={cx('contact__container_form__list')}>
                                    <input className={cx('contact__container_form__input')} type="text" name='name' placeholder='Họ và tên' required />
                                    <input className={cx('contact__container_form__input')} type="text" name='name' placeholder='Điện thoại' required />
                                </div>
                                <div className={cx('contact__container_form__list')}>
                                    <input className={cx('contact__container_form__input')} type="email" name='email' placeholder='Email' required />
                                    <input className={cx('contact__container_form__input')} type="text" name='email' placeholder='Chủ đề' required />
                                </div>
                                <textarea type="text" placeholder='Nội dung' required/>
                                <button type='submit' className={cx('contact__container_form__list_button')}>GỬI</button>
                               
                            </form>
                        </div>

                    </div>

                </div>
                <div className={cx('contact__footer')}>
                    <div className={cx('contact__footer-left')}>
                        <h1>Find us on Google Maps</h1>
                        <p>IVY moda là thương hiệu thời trang Việt Nam với mong muốn đem lại vẻ đẹp hiện đại và sự tự tin cho khách hàng, thông qua các dòng sản phẩm thời trang thể hiện cá tính và xu hướng. Một trong những “tôn chỉ” về thiết kế của IVY moda chính là sự đa dạng, với mong muốn mang đến cho người mặc những sản phẩm phù hợp nhất với ngoại hình và quan trọng hơn cả là cá tính của chính mình.</p>
                    </div>
                    <div className={cx('contact__footer-right')}>
                        <img src="../img/map.jpg" alt="" />
                    </div>
                </div>

            </div>

            
         </div>
    );
}

export default Contact;