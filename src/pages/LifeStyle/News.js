import React from 'react';
import styles from './News.module.scss'
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../reducers/product/productSlice'
import Loading from '../../pages/Loading'
import { Link } from 'react-router-dom'
import { addToCart } from '../../reducers/cart/cartSlice'
const cx = classNames.bind(styles)


const News = () => {
   
    return (
        <div className={cx('life')}>
                <div className={cx('life__container')}>
                    <p>Trang chủ - Tin tức</p>
                    <div className={cx('life__container_content')}>
                        <h1>LIFESTYLE</h1>
                        <ul className={cx('life__container_content_list')}>
                            <li className={cx('life__container_content_item')}>
                                <NavLink to='/lifestyle/news'>
                                    
                                    <p className={cx('life__container_content_item_list')}>TIN TỨC</p>
                                </NavLink>
                            </li>
                            <li className={cx('life__container_content_item')}>
                                <NavLink to='/lifestyle/knowledge'>
                                    
                                    <p className={cx('life__container_content_item_list')}>KIẾN THỨC</p>
                                </NavLink>
                            </li>
                            <li className={cx('life__container_content_item')}>
                                <NavLink to='/lifestyle/trend'>

                                    <p className={cx('life__container_content_item_list')}>XU HƯỚNG</p>
                                </NavLink>
                            </li>
                            <li className={cx('life__container_content_item')}>
                                <NavLink to='/lifestyle/style'>

                                    <p className={cx('life__container_content_item_list')}>PHONG CÁCH</p>
                                </NavLink>
                            </li>
                            <li className={cx('life__container_content_item')}>
                                <NavLink to='/lifestyle/blogs'>

                                    <p className={cx('life__container_content_item_list')}>BLOG CHIA SẺ</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('life__content')}>
                        <div className={cx('life__content_left')}>
                            <p>STORY</p>
                            <h1>IVY moda - Tổng kết một năm 2022: “Trao sức mạnh - Nhân gắn kết</h1>
                            <h2>Trải qua gần hai thập kỷ, thương hiệu thời trang hàng đầu Việt Nam IVY moda, dưới sự điều hành của thế hệ F1 - CEO 9x Nguyễn Lê Vũ Linh đã có cho mình những định hướng mới mẻ, phù hợp hơn với vị thế hiện tại của doanh nghiệp.</h2>
                            <span>13/01/2023</span>
                        </div>
                        <div className={cx('life__content_right')}>
                            <img src="../img/news.png" alt="" />

                        </div>
                    </div>
                    <div className={cx('life__content')}>
                        <div className={cx('life__content_right')}>
                            <img src="../img/news2.jpg" alt="" />
                        </div>
                        <div className={cx('life__content_left')}>
                            <p>STORY</p>
                            <h1 className={cx('life__content_left_title')}>PREMIUM COLLECTION: MERINO WOOL - LOẠI LEN THƯỢNG HẠNG BẬC NHẤT THẾ GIỚI</h1>
                            <h2 className={cx('life__content_left_desc')}>100% LÔNG CỪU TINH KHIẾT ĐƯỢC CHỨNG NHẬN BỞI THE WOOLMARK COMPANY - Tổ chức uy tín hàng đầu về thẩm định nguồn gốc & kiểm soát chất lượng.</h2>
                            <p>02/12/2022</p>
                        </div>
                    </div>
                    <div className={cx('life__content_title')}>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/news3.jpg" alt="" />
                            <h2>Với Châu Gia, các thiết kế là cộng hưởng của hơi thở truyền thống quý giá qua những họa tiết thêu tay kì công và tỉ mỉ, cùng với đó là sự bay bổng về phom dáng, đường xếp nếp mềm mại đầy xu hướng giúp nàng khoe nét yêu kiều một cách đầy tình tứ.</h2>
                            <h1>CHÂU GIA - CUỐN HÚT NHƯ NGỌC QUÝ CÙNG CỐT CÁCH CAO SANG, ĐÀI CÁC TRONG TẤM ÁO DÀI IVY moda</h1>
                            <p>22/11/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/news4.jpg" alt="" />
                            <h2>Mùa Thu/Đông 2022, IVY moda không ngừng tiến bước khi trình làng các thiết kế len/jeans mang phiên bản hoàn toàn mới, dẫn đầu xu hướng thông qua những chi tiết, họa tiết, chất liệu...cao cấp & thịnh hành nhất.</h2>
                            <h1>FEELIN' CLASSY - ĐÓN ĐẦU XU HƯỚNG THỜI TRANG VÀ BẬT CHẾ ĐỘ ẤM ÁP</h1>
                            <p>15/11/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/news5.jpg" alt="" />
                            <h2>Là sự kiện bùng nổ nhất mùa Thu/Đông 2022, IVY moda ra mắt bộ sưu tập TIMELESS kết hợp sản xuất cùng tạp chí L'Officiel đẳng cấp thế giới với hơn 100 năm lịch sử. Các thiết kế được lấy cảm hứng từ phong cách thời trang Academia, cộng hưởng với những ý tưởng</h2>
                            <h1>TIMELESS | FALL/WINTER 2022 COLLECTION - VẺ ĐẸP TỎA RẠNG VƯỢT THỜI GIAN</h1>
                            <p>08/10/2022</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default News;