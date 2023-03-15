import React from 'react';
import styles from './Systemshop.module.scss'
import classNames from 'classnames/bind'
import {MdOutlineNavigateNext} from 'react-icons/md'

const cx = classNames.bind(styles)

const Lists = ["Đà Nẵng", "Gia Lai", "Hà Tĩnh", "Hội An", "Huế", "Nghệ An", "Nha Trang", "Phú Yên", "Quảng Ngãi", "Quy Nhơn"]
const SystemShop = () => {
    return (
        <div className={cx('footer__system')}>
            <div className={cx('footer__system-container')}>
                <h1>Trang chủ - Danh sách cửa hàng</h1>
                <img src="../img/system.jpg" alt="" />
                <p>SHOP SYSTEM</p>
                <div className={cx('footer__system-container-list')}>
                    <a className={cx('footer__system-container-list-active')} href="#">Miền Bắc</a>
                    <a href="#">Miền Trung</a>
                    <a href="#">Miền Nam</a>
                </div>
                <div className={cx('footer__system-content')}>
                    <div className={cx('footer__system-content-list')}>
                        <h1>Cửa hàng Miền Trung</h1>
                        <input type="text" placeholder='Tìm của hàng' />
                        <ul className={cx('footer__system-content-left')}>
                            <li className={cx('footer__system-content-left-item')}>
                                {Lists.map((list,index)=>{
                                    return (
                                        <div key={index} className={cx('footer__system-content-left-item-item')}>
                                            <p>{list}</p>
                                            <MdOutlineNavigateNext className={cx('footer__system-content-left-item-item-icon')}/>
                                        </div>
                                    )
                                })}
                                
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer__system-content-map')}>
                        <img src="../img/map.jpg" alt="" />
                        <h1>Chính sách vận chuyển</h1>
                        <p>Nội thành Hà Nội, TP Hồ Chí Minh: đồng giá 25k</p>
                        <p>Đơn đi tỉnh gần (Khoảng cách đến HN/HCM 100km): đồng giá 33k</p>
                        <p>Đơn đi tỉnh gần (Khoảng cách đến HN/HCM 100 km): đồng giá 38k</p>
                        <p>Giảm 50% phí vận chuyển cho đơn hàng có từ 3 sản phẩm</p>
                        <h1>Chính sách miễn phí vận chuyển</h1>
                        <p>Miễn phí vận chuyển cho đơn hàng có giá trị từ 1,000,000đ khi thanh toán trực tuyến OnePay qua thẻ ATM nội địa, thẻ quốc tế hoặc ví Momo</p>
                        <p>Miễn phí vận chuyển cho đơn hàng có giá trị từ 2,000,000đ</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SystemShop;