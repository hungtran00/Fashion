
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
                    <li className={cx('footer__title')}>Giới thiệu</li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/company'>
                            Về IVY Fashion
                        </NavLink>
                    </li>
                    {/* <li className={cx('footer__item')}>
                        <NavLink to='/recruiment'>
                            Recruiment
                        </NavLink>
                    </li> */}
                    <li className={cx('footer__item')}>
                        <NavLink to='/system-shop'>
                            Hệ thống cửa hàng
                        </NavLink>
                    </li>
                    {/* <li className={cx('footer__item')}>
                        <FontAwesomeIcon icon={faPinterest} />
                        <span>Pinterest</span>
                    </li> */}

                </ul>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Dịch vụ khách hàng</li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/policy'>
                            Chính sách điều khoản
                        </NavLink>
                    </li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/guide-shop'>
                             Hướng dẫn mua hàng
                        </NavLink>
                    </li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/payment-policy'>
                            Chính sách thanh toán
                        </NavLink>
                    </li>
                    <li className={cx('footer__item')}>
                        <NavLink to='/return-policy'>
                            Chính sách đổi trả
                        </NavLink>
                    </li>
                    {/* <li className={cx('footer__item')}>Technology</li> */}

                </ul>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Vận chuyển</li>
                    <li className={cx('footer__item')}>
                        <span>Đơn vị vận chuyển</span>
                        <img className={cx('footer__item-img')} src="../img/1.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/2.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/3.png" alt="" />
                    </li>
                    <li className={cx('footer__item')}>
                        <span>Phương thức thanh toán</span>
                        <img className={cx('footer__item-img')} src="../img/4.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/5.png" alt="" />
                        <img className={cx('footer__item-img')} src="../img/6.png" alt="" />
                    </li>

                </ul>
                <ul className={cx('footer__list')}>
                    <li className={cx('footer__title')}>Download App</li>
                    <li className={cx('footer__item')}>
                        <a href="https://apps.apple.com/app/id1430094474?fbclid=IwAR3xAzj-xTmtj35aQUB8KhTLk1zFgyw2zssisSyn9qkRA6w4fgt6kI7j8Q8" target="_blank">

                            <img className={cx('footer__item-image')} src="../img/appstore.png" alt="" />
                        </a>
                    </li>
                    <li className={cx('footer__item')}>
                        <a href="https://play.google.com/store/apps/details?id=com.ivymoda.app&fbclid=IwAR2Ki0MhC0MdCSEqmnP9BUNLhKg7ZresCBqA8BfRkPBBswJ99-YNqOX4cL8" target="_blank">
                            <img className={cx('footer__item-image')} src="../img/googleplay.png" alt="" />

                        </a>
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