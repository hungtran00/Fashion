import React from 'react';
import styles from './Style.module.scss'
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)
const Style = () => {
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
                            <h1>11 cách phối đồ đi chơi Noel giúp nàng trở nên cuốn hút trong mùa Giáng sinh</h1>
                            <h2>Cuối năm là khoảng thời gian của rất nhiều lễ hội khác nhau từ Noel, Tết Dương Lịch, Tết Âm Lịch,... Những dịp lễ kể trên rất được các bạn nữ yêu thích bởi bạn có thể thỏa sức diện những bộ cánh đẹp đi chơi. Vậy các bạn có biết cách chọn phối đồ đi chơi N</h2>
                            <span>15/12/2022</span>
                        </div>
                        <div className={cx('life__content_right')}>
                            <img src="../img/style1.png" alt="" />

                        </div>
                    </div>
                    <div className={cx('life__content_title')}>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/style2.jpg" alt="" />
                            <h2>Thời tiết cuối năm đang đến gần cũng là khoảng thời gian lý tưởng để bạn thêm chút cảm hứng Thu – Đông vào tủ quần áo. Nếu yêu thích phong cách Parisian Chic, đừng bỏ qua những cách phối đồ đơn giản mà thanh lịch từ các quý cô nước Pháp.</h2>
                            <h1>Công thức diện đồ thanh lịch như quý cô Pháp</h1>
                            <p>09/08/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/style3.jpg" alt="" />
                            <h2>Phong cách Y2K cùng loạt các thiết kế vào năm 2000 đang dần hot trở lại với phong cách thời trang hiện đại ngày nay. Vậy phong cách Y2K là gì? Những món đồ biểu tượng của thời trang Y2K? Hãy cùng IVY moda tìm hiểu qua những thông tin ngay sau đây nhé!</h2>
                            <h1>Phong cách Y2K là gì? Hướng dẫn cách phối đồ chuẩn xu hướng thời trang Y2K</h1>
                            <p>21/07/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/style4.jpg" alt="" />
                            <h2>Túi xách là một trong những món phụ kiện quan trọng và không thể thiếu của phái đẹp. Một mẫu túi xách phù hợp sẽ giúp nàng trở nên ấn tượng hơn, thêm vào đó kiểu dáng túi còn thể hiện được tính cách và phong cách cá nhân của mỗi người. Vậy làm sao để chọn</h2>
                            <h1>Gợi ý 3 kiểu dáng túi “must-have” dành cho tủ đồ của nàng</h1>
                            <p>12/07/2022</p>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Style;