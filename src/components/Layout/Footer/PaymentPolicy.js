import React from 'react';
import styles from './Paymentpolicy.module.scss'
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

const PaymentPolicy = () => {
    return (
        <div className={cx('payment')}>
            <div className={cx('payment__container')}>
                <h1>Trang chủ - Chính sách thanh toán </h1>
                <img src="../img/payment.jpg" alt="" />
                <div className={cx('payment__container_content')}>
                    <div className={cx('payment__container_content-left')}>
                            <ul className={cx('payment__container_content-left-list')}>
                                <li className={cx('payment__container_content-left-item')}>
                                    {Lists.map((list,index)=>{
                                        return (
                                            <div key={index} className={cx('payment__container_content-left-item-item')}>
                                                <p>{list}</p>
                                            </div>
                                        )
                                    })}
                                </li>
                            </ul>
                    </div>
                    <div className={cx('payment__container_content-right')}>
                        <h1>CHÍNH SÁCH THANH TOÁN</h1>
                        <h2>Có 2 hình thức thanh toán khi mua hàng online tại IVY Fashion</h2>
                        <p>Hình thức thu tiền tận nơi (COD) : Khách hàng sẽ thanh toán tiền khi nhận hàng và thanh toán tiền hàng và cước phí vận chuyển cho nhân viên chuyển phát.</p>
                       
                        <h2>Question and answer</h2>
                        <h2>Tại sao thẻ tín dụng của tôi có thể bị từ chối?</h2>
                        <p>Thẻ tín dụng của quý khách có thể bị từ chối vì bất kỳ lý do nào sau đây:</p>
                        <p>- Thẻ có thể đã hết hạn. Kiểm tra xem thẻ của quý khách còn hiệu lực không.</p>
                        <p>- Quý khách có thể đã đạt đến hạn mức tín dụng. Liên hệ với ngân hàng để kiểm tra xem quý khách có vượt quá giới hạn mua hàng được ủy quyền không.</p>
                        <p>- Quý khách có thể đã nhập thông tin nào đó không chính xác. Kiểm tra xem quý khách đã điền đúng tất cả các trường bắt buộc chưa.</p>
                        <h3>Tôi có thể đưa thông tin chi tiết của công ty mình vào hóa đơn không?</h3>
                        <p>- Có. Chỉ cần nhấp vào tùy chọn doanh nghiệp trong thông tin chi tiết cá nhân rồi điền thông tin thuế mà chúng tôi yêu cầu.</p>
                        <h3>Có an toàn khi sử dụng thẻ tín dụng của tôi trên trang web không?</h3>
                        <p>- Đúng, các dữ liệu được truyền đi bằng cách mã hóa theo giao thức SSL. Đối với việc thanh toán bằng thẻ tín dụng và thẻ ghi nợ, yêu cầu phải nhập số CVV (Card Verification Value, Mã Xác thực Thẻ), là mã số in trên thẻ được sử dụng như một biện pháp bảo mật trong các giao dịch thương mại điện tử.</p>
                       


                    </div>

                </div>
                <div className={cx('payment__container_list')}>
                    <img src="../img/girl.jpg" alt="" />
                    <div className={cx('payment__container_list-right')}>
                        <h1>ĐỒNG HÀNH CÙNG IVY FASHION</h1>
                        <p>Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY Fashion. Mọi thắc mắc liên quan đến chính sách thanh toán, vui lòng liên hệ theo số thông tin bên dưới</p>
                        <button>GỌI NGAY: 0246 622 3434</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPolicy;