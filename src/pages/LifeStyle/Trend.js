import React from 'react';
import styles from './Trend.module.scss'
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
                    <div className={cx('life__content')}>
                        <div className={cx('life__content_left')}>
                            <p>STORY</p>
                            <h1>Ngọc Anh “Phố trong làng” gợi ý chị em sắm áo dạ cừu Merino chuẩn xu hướng mới nhất với style sang xịn mịn lại còn dễ phối đồ</h1>
                            <h2>Năm nay Tết đến sớm, cảm giác thời điểm cuối năm công suất phải tất bật hơn hẳn mọi năm. Mới Noel vài hôm là đã phải sắm sửa đồ đẹp cho một năm mới ấm áp và may mắn. Nàng y tá xinh đẹp Ngọc Anh của “Phố trong làng” không ngại bật mí cho hội chị em chiếc á</h2>
                            <span>03/01/2023</span>
                        </div>
                        <div className={cx('life__content_right')}>
                            <img src="../img/trend1.png" alt="" />

                        </div>
                    </div>
                    <div className={cx('life__content_dark')}>
                        {/* <span>NEW ARRIVAL</span> */}
                        <div className={cx('life__content_dark_list')}>
                            <img src="../img/trend2.jpg" alt="" />
                            <h2>Đầm tweet phối nơ là thiết kế kiểu đầm ôm dáng qua đầu gối được nhà mốt IVY ưng ý nhất với phần tay dài cùng cổ nơ tạo kiểu đồng thời cũng là điểm nhấn khiến cho phong cách của bạn trở nên nổi bật hơn giữa chốn đông người</h2>
                            <h1>DARIA DRESS - ĐẦM TWEET PHỐI NƠ</h1>
                            <p>03/11/2022</p>
                        </div>
                        <div className={cx('life__content_dark_list')}>
                            <img src="../img/trend3.jpg" alt="" />
                            <h2>Adela Set thuộc BTS Timeless và được trình diễn trong show thời trang Fall Winter 2022. Không chỉ đẹp từ thiết kế đến chất liệu, set đồ còn mang tính ứng dụng cao, phù hợp cho các cô nàng diện nơi công sở và đi sự kiện</h2>
                            <h1>ADELA SET</h1>
                            <p>03/11/2022</p>
                        </div>
                        <div className={cx('life__content_dark_list')}>
                            <img src="../img/trend4.jpg" alt="" />
                            <h2>Áo khoác và chân váy dễ dàng tách lẻ set giúp nàng thỏa sức mix&match với nhiều items khác nhau. Vào những ngày 'không biết mặc gì' nàng chỉ cần diện nguyên set là đã đủ thu hút mọi ánh nhìn</h2>
                            <h1>SOPHIA SET - SET ÁO TWEET PHỐI NƠ VÀ CHÂN VÁY</h1>
                            <p>03/11/2022</p>
                        </div>
                    </div>
                    <div className={cx('life__content')}>
                        <div className={cx('life__content_right')}>
                            <img src="../img/trend5.jpg" alt="" />
                        </div>
                        <div className={cx('life__content_left')}>
                            <p>STORY</p>
                            <h1 className={cx('life__content_left_title')}>Đi đám cưới mặc gì? Cách lựa chọn trang phục phù hợp dành cho nàng</h1>
                            <h2 className={cx('life__content_left_desc')}> Mùa cưới đến, không ít nàng băn khoăn vì không biết lựa chọn mẫu đầm dự tiệc sao cho nổi bật mà không “át vía cô dâu”. IVY sẽ chỉ bạn cách chọn trang phục phù hợp mà vẫn thật xinh đẹp nhé!</h2>
                            <p>21/07/2022</p>
                        </div>
                    </div>
                    <div className={cx('life__content_title')}>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/trend6.jpg" alt="" />
                            <h2>Khi nắng hạ đang đến gần cũng là thời điểm nhiều cô gái bắt đầu tìm kiếm những bộ cánh thật “ăn ý” với các chuyến du lịch “lên núi - xuống biển” của bản thân</h2>
                            <h1>MÙA HÈ BẤT TẬN VỚI XU HƯỚNG THỜI TRANG DU LỊCH</h1>
                            <p>21/06/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/trend7.jpg" alt="" />
                            <h2>Cùng IVY moda khám phá những mẫu quần jean xanh đang nổi đình nổi đám hiện nay và cùng đón đầu xu hướng mùa hè bằng những gợi ý quần jean nữ đẹp nhất qua bài viết dưới đây nhé!</h2>
                            <h1>9 mẫu quần jean xanh đón đầu xu hướng mùa Hè 2022</h1>
                            <p>06/07/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/trend8.jpg" alt="" />
                            <h2>Vải satin là một trong những chất vải có nguồn gốc lâu đời nhất, một trong những loại vải được sử dụng nhiều nhất trong may mặc và chiếm được sự yêu thích của người tiêu dùng, gắn liền với sự sang trọng, tinh tế. Vậy vải satin là gì? Sự khác biệt giữa các</h2>
                            <h1>Vải satin là gì? Nguồn gốc, ưu nhược điểm của vải satin</h1>
                            <p>18/03/2022</p>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Trend;