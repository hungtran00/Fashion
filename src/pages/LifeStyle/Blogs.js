import React from 'react';
import styles from './Blogs.module.scss'
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)
const Trend = () => {
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
                   

                </div>
                <div className={cx('life__content')}>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs1.png" alt="" />
                        <h1>TIMELESS | FW22 FASHION SHOW - VẺ ĐẸP TỎA RẠNG VƯỢT THỜI GIAN</h1>
                        <p>27/02/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs2.png" alt="" />
                        <h1>IVY moda - Tổng kết một năm 2022: “Trao sức mạnh - Nhân gắn kết</h1>
                        <p>13/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs3.png" alt="" />
                        <h1>Gợi ý 3 món bánh tự làm tại nhà cho đêm Noel không cần lò nướng</h1>
                        <p>11/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs4.png" alt="" />
                        <h1>Cách làm thiệp Noel đẹp, đơn giản ngay tại nhà</h1>
                        <p>10/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs5.png" alt="" />
                        <h1>Thương hiệu thời trang IVY moda trao tặng 1500 bộ quần áo bảo hộ cho Bệnh viện Đa khoa tỉnh Phú Thọ để phục vụ công tác phòng chống Dịch Covid-19</h1>
                        <p>10/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs6.png" alt="" />
                        <h1>Cách làm gà “tắm” nước mắm - món ngon dịp Noel cho mọi gia đình</h1>
                        <p>05/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs7.png" alt="" />
                        <h1>GLAMOUR NIGHT - BẠN XỨNG ĐÁNG ĐỂ TRỞ NÊN NỔI BẬT VÀ ĐẦY QUYẾN RŨ TRONG MỌI BỮA TIỆC</h1>
                        <p>05/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs8.png" alt="" />
                        <h1>Mẫu thiệp Giáng Sinh cực đẹp dành tặng những người thân yêu</h1>
                        <p>05/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs9.png" alt="" />
                        <h1>Những món đồ trang trí Giáng sinh đẹp bạn không thể bỏ lỡ</h1>
                        <p>04/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs10.png" alt="" />
                        <h1>Gợi ý list 13 bài hát Giáng sinh nhạc Hàn hay nhất</h1>
                        <p>04/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs11.png" alt="" />
                        <h1>Gợi ý 21 cách trang trí Giáng sinh đơn giản tại nhà</h1>
                        <p>04/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs12.png" alt="" />
                        <h1>Đêm Giáng sinh là ngày nào? Ý nghĩa về ngày Giáng sinh</h1>
                        <p>27/02/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs13.png" alt="" />
                        <h1>Ngọc Anh “Phố trong làng” gợi ý chị em sắm áo dạ cừu Merino chuẩn xu hướng mới nhất với style sang xịn mịn lại còn dễ phối đồ</h1>
                        <p>03/01/2023</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs14.png" alt="" />
                        <h1>CẢNH BÁO GIẢ MẠO IVY moda LỪA ĐẢO CHIẾM ĐOẠT TÀI SẢN</h1>
                        <p>29/12/2022</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs15.png" alt="" />
                        <h1>Những cách gói quà Giáng sinh đẹp và độc đáo</h1>
                        <p>29/12/2022</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs16.png" alt="" />
                        <h1>Cách làm bánh kem Giáng Sinh ngon và đẹp mắt</h1>
                        <p>29/12/2022</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs17.png" alt="" />
                        <h1>Gợi ý 21 bộ phim Giáng sinh hay nhất không thể bỏ lỡ</h1>
                        <p>27/12/2022</p>
                    </div>
                    <div className={cx('life__content_item')}>
                        <img src="../img/blogs18.png" alt="" />
                        <h1>Cách làm rượu vang nóng gluhwein đặc trưng của Noel</h1>
                        <p>27/12/2022</p>
                    </div>
                    
                </div>
                
            </div>
            
    );
};

export default Trend;