import React from 'react';
import styles from './Policy.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Lists = [
    "Về IVY Fashion",
    "Chính sách thẻ thành viên",
    "Bảo hành trọn đời",
    "Chính sách đổi trả",
    "Hệ thống cửa hàng",
    "Q&A"
]

const Policy = () => {
    return (
        <div className={cx('policy')}>
            <div className={cx('policy__container')}>
                <h1>Trang chủ - Chính sách điều khoản</h1>
                <img src="../img/policy.png" alt="" />
                <div className={cx('policy__container_content')}>
                    <div className={cx('policy__container_content-left')}>
                        <ul className={cx('policy__container_content-left-list')}>
                            <li className={cx('policy__container_content-left-item')}>
                                {Lists.map((list,index)=>{
                                    return (
                                        <div key={index} className={cx('policy__container_content-left-item-item')}>
                                            <p>{list}</p>
                                        </div>
                                    )
                                })}
                            </li>
                        </ul>

                    </div>
                    <div className={cx('policy__container_content-right')}>
                        <h1>CHÍNH SÁCH ĐIỀU KHOẢN SỬ DỤNG</h1>
                        <h2>1. IVYMODA.COM LÀ WEBSITE CỦA THƯƠNG HIỆU THỜI TRANG IVY MODA</h2>
                        <p>IVYmoda.com là kênh mua sắm và hỗ trợ đắc lực công tác chăm sóc Khách Hàng của Thương hiệu thời trang IVY moda;</p>
                        <p>Kể từ khi ra mắt vào cuối năm 2021, IVYmoda.com đã - đang và sẽ không ngừng cải tiến và nâng cấp để ngày một hoàn thiện tính năng, thân thiện nhất với Khách Hàng.</p>
                        <h2>2. CHÍNH SÁCH THẺ THÀNH VIÊN ONLINE</h2>
                        <h2>2.1 THẺ BẠC / SILVER</h2>
                        <h2>ĐIỀU KIỆN</h2>
                        <p>Khách hàng có tổng giá trị hóa đơn từ: 12.000.000 VNĐ trong 01 năm kể từ ngày bắt đầu sử dụng thẻ</p>
                        <p>Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 12.000.000 VNĐ trong 01 năm tiếp theo sử dụng thẻ</p>
                        <p>Điều kiện nâng hạng thẻ VÀNG/GOLD MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 23.000.00 VNĐ kể từ ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP</p>
                        <h2>QUYỀN LỢI</h2>
                        <p>Giảm 10% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ</p>
                        <p>Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP vào các dịp lễ đặc biệt.</p>
                        <p>Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…</p>
                        <h2>2.2 THẺ VÀNG / GOLD</h2>
                        <h2>ĐIỀU KIỆN</h2>
                        <p>Khách hàng có tổng giá trị mua hàng từ 35.000.000 VNĐ trong 01 năm Hoặc Khách hàng có tổng giá trị mua hàng từ: 23.000.000 VNĐ trong vòng 01 năm kể từ ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP</p>
                        <p>Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 35.000.000 VNĐ trong 01 năm tiếp theo sử dụng thẻ</p>
                        <p>Điều kiện nâng hạng thẻ KIM CƯƠNG/DIAMOND MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 25.000.000 VNĐ trong 01 năm kể từ ngày đạt hạng thẻ VÀNG/GOLD MEMBERSHIP</p>
                        <h2>QUYỀN LỢI</h2>
                        <p>Giảm 20% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ</p>
                        <p>Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP vào các dịp lễ đặc biệt.</p>
                        <p>Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty – Spa, Nhà hàng, Tạp chí…</p>
                        <h2>2.3 ĐIỀU KHOẢN SỬ DỤNG THẺ THÀNH VIÊN ONLINE</h2>
                        <h2>ĐIỀU KIỆN</h2>
                        <p>Khách hàng có tổng giá trị mua hàng từ 60.000.000 VNĐ trong 01 năm Hoặc Khách hàng có tổng giá trị mua hàng từ: 25.000.000 VNĐ trong vòng 01 năm kể từ ngày đạt hạng thẻ VÀNG/GOLD MEMBERSHIP</p>
                        <p>Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 60.000.000 VNĐ trong 01 năm kể từ ngày đạt hạng thẻ KIM CƯƠNG/DIAMOND MEMBERSHIP</p>
                        <h2>QUYỀN LỢI</h2>
                        <p>Giảm 30% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ. Ngoài Chiết khấu thẻ, Khách hàng được giảm giá thêm 5% khi mua hàng trong chương trình giảm giá 30%</p>
                        <p>Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP vào các dịp lễ đặc biệt.</p>
                        <p>Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…</p>
                        <h2>3. ĐIỀU KHOẢN SỬ DỤNG THẺ THÀNH VIÊN ONLINE</h2>
                        <p>Thẻ có giá trị duy nhất đối với chủ thẻ. Không được phép sang nhượng hay cho mượn thẻ dưới mọi hình thức;</p>
                        <p>Vui lòng xuất trình thẻ khi thanh toán để tích lũy điểm và áp dụng chiết khấu của thẻ</p>
                        <p>Chiết khấu thẻ chỉ được áp dụng với hàng nguyên giá;</p>
                        <p>Điểm tích lũy của chủ thẻ (tương ứng với giá trị mua hàng) sẽ được quy đổi thành các phần quà có giá trị, duy trì và nâng hạng thẻ;</p>
                        <p>Thẻ có giá trị sử dụng trong vòng 01 năm kể từ ngày đăng ký, đạt hạng thẻ, gia hạn hoặc nâng hạng thẻ;</p>
                        <p>Thẻ được áp được áp dụng cho tất cả hình thức mua hàng tại cửa hàng và mua hàng online, không bao gồm các đại lý;</p>
                        <p>Thẻ này do IVY moda phát hành và là tài sản của IVY moda. IVY moda có quyền từ chối sử dụng, tạm khóa, đình chỉ thẻ trong một số trường hợp mà không cần báo trước tới khách hàng.</p>
                        <p>Việc Khách Hàng truy cập hoặc thực hiện giao dịch trên Website: ivymoda.com và Ứng dụng di động của IVY moda được hiểu là Khách Hàng đã đọc, hiểu và đồng ý tuân thủ Chính Sách và Điều khoản sử dụng thẻ thành viên (”Chính sách và Điều khoản“), kể cả các phiên bản sửa đổi, bổ sung của Chính Sách và Điều khoản. Phiên bản sửa đổi, bổ sung Chính Sách và Điều khoản này (nếu có) sẽ có hiệu lực ngay khi được cập nhật chính thức trên Website và Ứng dụng và không cần phải thông báo trước, khi Khách Hàng truy cập và thực hiện giao dịch với IVY moda sau khi thay đổi Chính sách và Điều Khoản mới có hiệu lực, có nghĩa là Khách Hàng chấp nhận với những thay đổi đó. Một lần nữa, IVY moda lưu ý: Khách Hàng vui lòng cập nhật thường xuyên hoặc đọc kỹ lại Chính sách và Điều khoản trước khi thực hiện giao dịch.</p>
                        
                        
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Policy;