import React from 'react';
import styles from './Company.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Company = () => {
    return (
        <div className={cx('footer__company')}>
                <div className={cx('footer__company-container')}>
                    <h1>Trang chủ - Về IVY Fashion</h1>
                    <div className={cx('footer__company-container-img')}>
                        <img src="../img/CEO.jpg" alt="" /> 
                    </div>
                    <h2>
                    Giúp khách hàng tạo phong cách với tuyên ngôn thời trang Bắt đầu từ lĩnh vực thời trang công sở vào năm 2015, và vươn mình dẫn đầu phân khúc công sở nữ cao cấp tại Việt Nam. Nhưng với ý chí không ngừng vận động để thay đổi, IVY Fashion đã nhanh chóng chiếm lĩnh thị trường trong nước và trở thành thương hiệu thời trang xu hướng hàng đầu tại Việt Nam dành cho phái đẹp. Năm 2017, IVY Fashion khẳng định vị thế của mình khi là một trong những thương hiệu thời trang Việt Nam hiếm hoi có khả năng tổ chức 2 show diễn thời trang thường niên. Dự kiến đến năm 2025, thương hiệu IVY Fashion sẽ có 130 cửa hàng trên toàn quốc. IVY Fashion còn thể hiện tinh thần, phong cách, lý tưởng sống và làm việc thông qua nhiều bộ hình lý tưởng hợp tác với các nghệ sĩ tên tuổi như: Sơn Tùng, Hoa hậu Tiểu Vy, rapper Đen Vâu, ca sĩ Hoàng Thùy Linh.... Ngoài ra Năm 2022, cũng là bước đột phá trên con đường khẳng định dấu ấn thời trang của IVY bằng việc cho ra mắt thương hiệu thời trang nam hoàn toàn mới mang tên Metagent
                    </h2>
                    <div className={cx('footer__company-container-button')}>
                        <p>Landmarks</p>
                    </div>
                    <div className={cx('footer__company-container-landmarks')}>
                        <img src="../img/2005.jpg" alt="" />
                        <img src="../img/ivy.jpg" alt="" />
                        {/* <p>Founded by businessman Vu Anh</p> */}
                    </div>
                    <img src="../img/2014.jpg" alt="" />
                    <img className={cx('footer__company-container-local')} src="../img/2021.jpg" alt="" />
                    <img className={cx('footer__company-container-local')} src="../img/2022.jpg" alt="" />
                    <img className={cx('footer__company-container-local')} src="../img/for.jpg" alt="" />
                    <img className={cx('footer__company-container-local')} src="../img/img.jpg" alt="" />
                    <img className={cx('footer__company-container-local')} src="../img/sontung.jpg" alt="" />
            </div>

        </div>
    );
};

export default Company;