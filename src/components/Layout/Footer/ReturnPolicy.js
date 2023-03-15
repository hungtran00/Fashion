import React from 'react';
import styles from './Returnpolicy.module.scss'
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

const ReturnPolicy = () => {
    return (
        <div className={cx('return')}>
            <div className={cx('return__container')}>
                <h1>Trang chủ - Chính sách hoàn trả </h1>
                {/* <img src="../img/return.jpg" alt="" /> */}
                <div className={cx('return__container_content')}>
                    <div className={cx('return__container_content-left')}>
                            <ul className={cx('return__container_content-left-list')}>
                                <li className={cx('return__container_content-left-item')}>
                                    {Lists.map((list,index)=>{
                                        return (
                                            <div key={index} className={cx('return__container_content-left-item-item')}>
                                                <p>{list}</p>
                                            </div>
                                        )
                                    })}
                                </li>
                            </ul>
                    </div>
                    <div className={cx('return__container_content-right')}>
                        <h1>CHÍNH SÁCH ĐỔI HÀNG</h1>
                        <h2>1. THỜI GIAN ĐỔI TRẢ</h2>
                        <p>Thời gian đổi trả trong vòng 15 ngày kể từ ngày khách nhận được hàng.</p>
                       
                        <h2>2. ĐỊA ĐIỂM ĐỔI HÀNG</h2>
                        <p>Áp dụng tại tất cả các cửa hàng trên toàn hệ thống của IVY Fashion</p>
                        <h2>3. ĐIỀU KIỆN ĐỔI TRẢ</h2>
                        <p>- Hàng đổi phải còn nguyên nhãn mác, mã vạch, chưa qua sử dụng và có hóa đơn mua hàng nguyên vẹn kèm theo (bao gồm cả các sản phẩm chất liệu thun/len/thun len, jeans).</p>
                        <p>- Với các trường hợp đổi trả không có hóa đơn, Quý khách vui lòng quay lại showroom đã mua hàng để được hỗ trợ.</p>
                        <p>- Đơn hàng chỉ được đổi 01 lần theo đúng quy định.</p>
                        <p>- Giá trị sản phẩm đổi/trả được tính theo đơn giá trên hóa đơn mua hàng.</p>
                        <p>- IVY Fashion chỉ sử dụng “Biên lai đặt cọc” để hoàn lại tiền thừa sau khi đổi và giá trị hàng trả cho khách, không hoàn tiền mặt trong mọi trường hợp</p>
                        <p>- Nếu lỗi do nhà sản xuất, IVY sẽ chịu hoàn toàn phí ship đổi trả sản phẩm</p>
                        <h2>4. CÁC TRƯỜNG HỢP TỪ CHỐI ĐỔI TRẢ</h2>
                        <p>- Sản phẩm nằm trong chương trình đồng giá, giảm giá trên 50%</p>
                        <p>- Thời gian mua hàng quá 15 ngày.</p>
                        <p>- Nhãn mác, mã vạch không còn nguyên vẹn.</p>
                        <p>- Sản phẩm đã chỉnh sửa, đã qua sử dụng (bị bẩn, rách, hỏng, rút sợi, phai màu, có mùi hôi, mùi hóa chất khác thường) hoặc bị lỗi do những tác động bên ngoài sau khi mua, hoặc các phụ kiện/chi tiết gắn liền của sản phẩm không còn đầy đủ/hư hại.</p>
                        <p>- Sản phẩm mang nhãn IVY Secret, áo quây, áo 2 dây, các loại phụ kiện (túi xách, giày, thắt lưng…)…</p>
                        <h2>5. HƯỚNG DẪN ĐỔI HÀNG ONLINE</h2>
                        <p>Cách 1:  Đổi hàng tại kho của IVY moda.</p>
                        <h3>1. Khách hàng gửi hàng về kho với nội dung và địa chỉ:</h3>
                        <p>Nội dung ghi trên đơn hàng gửi: Đổi Size/ Màu/ Mẫu/ Lỗi – Mã IVM  123xxx – Mã sản phẩm  sang Size/ Màu/ Mã sản phẩm. (Ví dụ: Đổi Mẫu – IVM 1234567 – 17E1234 sang 22E1234 size L màu xanh)</p>
                        <h4>Khách ở Khu vực Miền Bắc và Miền Trung gửi về:</h4>
                        <span>Người nhận: Kho Online – Mã nhân viên hỗ trợ</span>
                        <span>SĐT: 024.2246.4869</span>
                        <span>Địa chỉ: Số 126 Lê Trọng Tấn, La Khê, Hà Đông, TP. Hà Nội</span>
                        <h4>Khách ở Khu vực Miền Nam gửi về:</h4>
                        <span>Người nhận: Kho Online – Mã nhân viên hỗ trợ</span>
                        <span>SĐT: 028.3636.9498</span>
                        <span>Địa chỉ: Số 1/7 đường số 33, Phường An Khánh, TP. Thủ Đức -  TP HCM.</span>
                        <p>*** Lưu ý: Đối với đơn hàng đổi do lỗi phát sinh từ nhà sản xuất IVY moda như: Sản phẩm lỗi; Giao nhầm sản phẩm;… IVY moda hỗ trợ toàn bộ phí ship vận chuyển. Khi gửi hàng, khách hàng vui lòng báo bên vận chuyển người nhận chịu phí ship.</p>
                        <h3>2. IVY moda xử lý đơn hàng đổi:</h3>
                        <p>Khi nhận được hàng gửi, IVY moda sẽ kiểm tra và gọi điện thông báo, xác nhận yêu cầu Đổi hàng và gửi lại hàng cho khách trong vòng từ 1 đến 3 ngày làm việc.</p>
                        <h3>3. KH cần hỗ trợ vui lòng liên hệ:</h3>
                        <p>- Hỗ trợ đặt đơn, tư vấn size, sản phẩm: Ấn phím 1</p>
                        <p>- Tra cứu thông tin đơn hàng: Ấn phím 2</p>
                        <p>- Các thông tin cần hỗ trợ khác: Ấn phím 3</p>
                        <p>Hoặc gửi yêu cầu qua email: cskhonline@ivy.com.vn (https://ivymoda.com/lien-he), KH cung cấp mã đơn hàng và vấn đề cần xử lý.</p>
                        <p>Nhân viên phụ trách sẽ liên hệ qua số điện thoại đặt hàng hoặc Add Zalo của khách hàng (trong giờ hành chính) để hỗ trợ xử lý</p>
                        <p>Nhân viên phụ trách sẽ liên hệ qua số điện thoại đặt hàng hoặc Add Zalo của khách hàng (trong giờ hành chính) để hỗ trợ xử lý.</p>
                        <p>Cách 2:  Đổi hàng tại Hệ thống cửa hàng của IVY moda</p>
                        <h3>1. Khách hàng đến cửa hàng IVY moda gần nhất.</h3>
                        <p>Hệ thống của hàng của IVY moda: https://ivymoda.com/page/cuahang</p>
                        <h3>2. Yêu cầu khi đổi hàng.</h3>
                        <p>KH cần mang hóa đơn và sản phẩm đổi còn nguyên tem mác đến trực tiếp cửa hàng IVY moda để đổi size/ màu/ mẫu trong vòng 5 ngày kể từ ngày nhận hàng.</p>
                        <h3>Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY moda! Mọi thắc mắc liên quan đến chính sách đổi hàng, vui lòng liên hệ 0246.662.3434</h3>


                    </div>

                </div>
                <div className={cx('return__container_list')}>
                    <img src="../img/girl.jpg" alt="" />
                    <div className={cx('return__container_list-right')}>
                        <h1>ĐỒNG HÀNH CÙNG IVY FASHION</h1>
                        <p>Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY Fashion. Mọi thắc mắc liên quan đến chính sách thanh toán, vui lòng liên hệ theo số thông tin bên dưới</p>
                        <button>GỌI NGAY: 0246 622 3434</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnPolicy;