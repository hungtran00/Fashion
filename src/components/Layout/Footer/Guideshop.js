import React from 'react';
import styles from './GuideShop.module.scss'
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

const Guideshop = () => {
    return (
        <div className={cx('guide')}>
            <div className={cx('guide__container')}>
                <h1>Trang chủ - Hướng dẫn mua hàng</h1>
                <img src="../img/guide.jpg" alt="" />
                <div className={cx('guide__container_content')}>
                    <div className={cx('guide__container_content-left')}>
                            <ul className={cx('guide__container_content-left-list')}>
                                <li className={cx('guide__container_content-left-item')}>
                                    {Lists.map((list,index)=>{
                                        return (
                                            <div key={index} className={cx('guide__container_content-left-item-item')}>
                                                <p>{list}</p>
                                            </div>
                                        )
                                    })}
                                </li>
                            </ul>
                    </div>
                    <div className={cx('guide__container_content-right')}>
                        <h1>HƯỚNG DẪN MUA HÀNG</h1>
                        <h2>Mua sắm tại IVY moda thật dễ dàng. Quý khách chỉ cần làm theo các bước sau:</h2>
                        <p>Bước 1: Chọn dòng sản phẩm (Nam/ Nữ/ Sale) rồi chọn chủng loại sản phẩm (áo sơ mi, áo thun, đầm,..)</p>
                        <p>Bước 2: Xem sản phẩm quý khách quan tâm rồi nhấp vào ảnh để phóng to và xem mọi chi tiết, kích cỡ hiện có, thành phần, mã tham chiếu và giá.</p>
                        <p>Bước 3: Chọn mặt hàng và thêm mặt hàng vào giỏ. Sau đó, quý khách có thể chọn tiếp tục mua sắm hoặc xử lý đơn hàng.</p>
                        <p>Bước 4: Nếu muốn xử lý đơn hàng, quý khách có thể thực hiện bằng cách đăng ký hoặc thanh toán với tư cách khách hàng mới.</p>
                        <p>Bước 5: Chọn phương thức giao hàng.</p>
                        <p>Bước 6: Chọn phương thức thanh toán.</p>
                        <p>Bước 7: Xác nhận đơn hàng: Quý khách sẽ nhận được email xác nhận đơn hàng.</p>
                        <p>IVY moda sẽ gửi Thông tin xác nhận đặt hàng thành công qua Tin nhắn vào số điện thoại đặt hàng và Email qua địa chỉ email của quý khách.</p>
                        <h3>Trong trường hợp quý khách muốn thay đổi địa chỉ giao hàng, số điện thoại hoặc thông tin người nhận cho đơn hàng đã đặt thì:</h3>
                        <p>TH1: Nếu đơn hàng chưa được IVY moda xử lý, bạn chỉ cần làm các bước sau:</p>
                        <p>Bước 1: Vào đường link: https://ivymoda.com/page/order_find</p>
                        <p>Bước 2: Điền Mã đơn hàng và Số điện thoại đặt đơn</p>
                        <p>Bước 3: Bấm vào: Huỷ đơn</p>
                        <p>Bước 4: Đặt lại đơn hàng mới</p>
                        <p>TH2: Nếu đơn hàng đã được IVY moda xử lý thì bạn liên hệ đến: Hotline: 02466623434 - nhánh 3 để được hỗ trợ</p>
                        <p>IVY moda rất vui vì được quý khách tin yêu!</p>


                    </div>

                </div>
                <div className={cx('guide__container_list')}>
                    <img src="../img/girl.jpg" alt="" />
                    <div className={cx('guide__container_list-right')}>
                        <h1>ĐỒNG HÀNH CÙNG IVY FASHION</h1>
                        <p>Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY Fashion. Mọi thắc mắc liên quan đến chính sách thanh toán, vui lòng liên hệ theo số thông tin bên dưới</p>
                        <button>GỌI NGAY: 0246 622 3434</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guideshop;