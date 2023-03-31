import React from 'react';
import styles from './Knowledge.module.scss'
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)

const Knowledge = () => {
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
                                <NavLink to='lifestyle/style'>

                                    <p className={cx('life__container_content_item_list')}>PHONG CÁCH</p>
                                </NavLink>
                            </li>
                            <li className={cx('life__container_content_item')}>
                                <NavLink to='lifestyle/blogs'>

                                    <p className={cx('life__container_content_item_list')}>BLOG CHIA SẺ</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('life__content')}>
                        <div className={cx('life__content_left')}>
                            <p>STORY</p>
                            <h1>Merino Wool - một trong ba loại len cao cấp nhất thế giới để tạo ra các kiệt tác mùa đông</h1>
                            <h2>Vào mùa đông, đồ len luôn là sản phẩm để giữ ấm thượng thừa. Tuy vậy, có vô vàn chất liệu len khác nhau. Vậy loại len nào là tốt nhất? Cùng IVY moda tìm hiểu thêm về chất lượng len và sản phẩm cao cấp mà chúng ta đang lựa chọn sử dụng trong mùa lạnh này.</h2>
                            <span>14/12/2022</span>
                        </div>
                        <div className={cx('life__content_right')}>
                            <img src="../img/know1.jpg" alt="" />

                        </div>
                    </div>
                    <div className={cx('life__content_title')}>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/know2.jpg" alt="" />
                            <h2>Bàn về việc chọn màu sắc quần áo sao cho phù hợp với làn da, đa số mọi người đều cho rằng da ngăm hợp màu tối, da trắng dễ phối màu. Quan niệm như vậy đã thực sự đúng? Trên thực tế, để quyết định màu sắc trang phục phù hợp, chúng ta cần xác định rõ sắc tố</h2>
                            <h1>Sắc tố da của bạn là gì? Bí kíp phối màu trang phục cho từng sắc tố da</h1>
                            <p>15/07/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/know3.jpg" alt="" />
                            <h2>Vải bông là gì? Đây là câu hỏi được nhiều người thắc mắc. Bên cạnh đó ưu nhược điểm và ứng dụng của loại vải này cũng được nhiều người quan tâm. Vì thế IVY moda sẽ giới thiệu cho bạn ưu nhược điểm của loại vải này, cách nhận biết vải cotton và gợi ý một s</h2>
                            <h1>Vải Bông là gì? Các loại vải bông được sử dụng trong trang phục hàng ngày</h1>
                            <p>06/07/2022</p>
                        </div>
                        <div className={cx('life__content_title_list')}>
                            <img src="../img/know4.jpg" alt="" />
                            <h2>Vải satin là một trong những chất vải có nguồn gốc lâu đời nhất, một trong những loại vải được sử dụng nhiều nhất trong may mặc và chiếm được sự yêu thích của người tiêu dùng, gắn liền với sự sang trọng, tinh tế. Vậy vải satin là gì? Sự khác biệt giữa các</h2>
                            <h1>Vải satin là gì? Nguồn gốc, ưu nhược điểm của vải satin</h1>
                            <p>18/03/2022</p>
                        </div>
                    </div>
                    <div className={cx('life__content')}>
                        <div className={cx('life__content_right')}>
                            <img src="../img/news2.jpg" alt="" />
                        </div>
                        <div className={cx('life__content_left')}>
                            <p>STORY</p>
                            <h1 className={cx('life__content_left_title')}>Góc nhìn xu hướng thời trang 2022 qua BST Mơ nhuộm nắng của IVY moda</h1>
                            <h2 className={cx('life__content_left_desc')}>Đón đầu xu hướng thời trang Xuân - Hè năm nay được nhà thiết kế IVY moda mở đầu bằng BST Mơ nhuộm nắng</h2>
                            <p>18/03/2022</p>
                        </div>
                    </div>
                    
                    

                </div>
            </div>
    );
};

export default Knowledge;