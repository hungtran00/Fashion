
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { faFacebook, faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Banerbot from './Bannerbot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import Message from '../Message/Message'
import { useState } from 'react'
const cx = classNames.bind(styles)


function Footer() {
    const [isMessage,setMessage]= useState(false)

    return (
        <div className={cx('footer')}>
            <Banerbot />
            <div className={cx('footer__content')}>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>IVY FASHION</li>
                    <li className={cx('footer__item')}>
                        <p> Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                    </li>
                    <li className={cx('footer__item')}>
                        <p>Địa chỉ đăng ký: Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam</p>
                    </li>
                    <li className={cx('footer__item')}>
                        <p> Số điện thoại: 0243 205 2222/ 090 589 8683</p>
                    </li>
                    <li className={cx('footer__item')}>
                        <p> Email: cskh@ivy.com.vn </p>
                    </li>
                    <li className={cx('footer__item')}>
                        <button>HOTLINE: 0246 662 3434</button>
                    </li>

                </ul>

                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Introdution</li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/company'>
                            IVY Fashion
                        </NavLink>
                    </li>
                    {/* <li className={cx('footer__item')}>
                        <NavLink to='/recruiment'>
                            Recruiment
                        </NavLink>
                    </li> */}
                    <li className={cx('footer__item')}>
                        <NavLink to='/system-shop'>
                            System Shop
                        </NavLink>
                    </li>
                    {/* <li className={cx('footer__item')}>
                        <FontAwesomeIcon icon={faPinterest} />
                        <span>Pinterest</span>
                    </li> */}

                </ul>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Customer Service</li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/policy'>
                            Policy
                        </NavLink>
                    </li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/guide-shop'>
                             Guide shoping
                        </NavLink>
                    </li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/payment-policy'>
                            Payment Policy
                        </NavLink>
                    </li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/return-policy'>
                            Return Policy
                        </NavLink>
                    </li>
                    {/* <li className={cx('footer__item')}>Technology</li> */}

                </ul>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Customer Suport</li>
                    <li className={cx('footer__item')}>
                        <span>Shipping Unit</span>
                        <img className={cx('footer__item-img')} src="../img/1.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/2.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/3.png" alt="" />
                    </li>
                    <li className={cx('footer__item')}>
                        <span> Payment Method</span>
                        <img className={cx('footer__item-img')} src="../img/4.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/5.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/6.png" alt="" />
                    </li>

                </ul>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Download App</li>
                    <li className={cx('footer__item')}>
                        <img className={cx('footer__item-image')} src="../img/appstore.png" alt="" />
                    </li>
                    <li className={cx('footer__item')}>
                        <img className={cx('footer__item-image')} src="../img/googleplay.png" alt="" />
                    </li>                 
                </ul>


            </div>
            <div className={cx('footer__end')}>
                <p>©IVY FASHION All rights reserved</p>
                <div className={cx('footer__message')}>
                    <Message isMessage={isMessage} setMessage={setMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Footer