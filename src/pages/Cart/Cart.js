import styles from './Cart.module.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteToCart, updateTocart } from '../../reducers/cart/cartSlice';
import { Link, NavLink } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
const cx = classNames.bind(styles);
function Cart() {
    const dispatch = useDispatch()
    const handleUpdateCart = (product, action) => {
        sessionStorage.setItem('action', action)
        dispatch(updateTocart(product))
    }

    const cart = useSelector(state => state.cart)

    return (<div className={cx('cart')}>
        <div className={cx('cart__title')}>GIỎ HÀNG</div>
        <div className={cx('cart__container')}>
            <div className={cx('cart__content')}>

                <ul className={cx('cart__label')}>
                    <li></li>
                    <li>SẢN PHẨM</li>
                    <li>GIÁ</li>
                    <li>SỐ LƯỢNG</li>
                    <li>TỔNG</li>
                </ul>
                {
                    cart.cartItem.length === 0 ?
                        <div className={cx('cart__empty')}>
                            <span>Your cart is empty go</span>
                            <Link to='/shop'>SHOP NOW</Link>
                        </div>
                        : cart.cartItem.map(item => {
                            if (cart.cartItem.length !== 0)
                                return (
                                    <ul key={item._id} className={cx('cart__item')}>
                                        <li className={cx('cart__img')}>
                                            <img src={require(`../../../public/img/product/${item.img}`)} />
                                        </li>
                                        <li className={cx('cart__name')}>{item.name}</li>
                                        <li className={cx('cart__price')}>${item.price}.00</li>
                                        <li className={cx('cart__quanlity')}>
                                            <button onClick={() => handleUpdateCart(item, false)}>-</button>
                                            {item.cartQuanlity}
                                            <button onClick={() => handleUpdateCart(item, true)}>+</button>
                                        </li>
                                        <li className={cx('cart__subtotal')}>${parseInt(item.price) * parseInt(item.cartQuanlity)}.00</li>
                                        <li className={cx('cart__clear')}>
                                            <span onClick={() => {
                                                dispatch(deleteToCart(item))
                                            }}><AiOutlineDelete/></span>
                                        </li>
                                    </ul>)

                        })
                }

            </div>
            <div className={cx('cart__contentReponsive')}>
                {
                    cart.cartItem.length === 0 ?
                        <div className={cx('cart__empty')}>
                            <span>Your cart is empty go</span>
                            <Link to='/shop'>SHOP NOW</Link>
                        </div>
                        : cart.cartItem.map(item => {
                            if (cart.cartItem.length !== 0)
                                return (
                                    <ul key={item._id} className={cx('cartRepon__item')}>
                                        <li className={cx('cartRepon__img')}>
                                            <img src={require(`../../../public/img/product/${item.img}`)} />
                                            <span className={cx('cart__name')}>{item.name}</span>
                                        </li>
                                        <li className={cx('cartRepon__quanlity')}>
                                            <span>SỐ LƯỢNG</span>
                                            <div className={cx('cartRepon__service')} >
                                                <button onClick={() => handleUpdateCart(item, false)}>-</button>
                                                {item.cartQuanlity}
                                                <button onClick={() => handleUpdateCart(item, true)}>+</button>
                                            </div>


                                        </li>
                                        <li className={cx('cartRepon__price')}>
                                            <span>GIÁ</span>
                                            <span>${item.price}.00</span>
                                        </li>

                                        <li className={cx('cartRepon__subtotal')}>
                                            <span>TỔNG</span>
                                            <span>${parseInt(item.price) * parseInt(item.cartQuanlity)}.00</span>
                                        </li>
                                        <li className={cx('cartRepon__clear')}>
                                            <span onClick={() => {
                                                dispatch(deleteToCart(item))
                                            }}><AiOutlineDelete/></span>
                                        </li>
                                    </ul>)

                        })
                }


            </div>
            <div className={cx('cart__address')}>
                <p>Chọn hình thức giao hàng</p>
                <div className={cx('cart__address_list')}>
                    <input type="radio" />
                    <span>Nhận hàng tại chi nhánh</span>
                </div>
                <div className={cx('cart__address_list')}>
                    <input type="radio" />
                    <span>Giao hàng tại địa chỉ người nhận</span>
                </div>
            </div>
            <div className={cx('cart__info')}>
                <h1>Thông tin người mua hàng</h1>
                <div className={cx('cart__info_customer')}>
                    <div className={cx('cart__info_customer_list')}>
                        <h2>Tên</h2>
                        <input type="text" placeholder='Họ và tên' required />
                    </div>
                    <div className={cx('cart__info_customer_list')}>
                        <h2>Số điện thoại</h2>
                        <input type="text" placeholder='Số điện thoại' required />
                    </div>
                </div>
                <h3>Địa chỉ</h3>
                <input type="text" placeholder='Nhập địa chỉ' />
                <div className={cx('cart__info_customer')}>
                    <div className={cx('cart__info_customer_list')}>
                        <h2>Tỉnh/ Thành phố</h2>
                        <select name="" id="" placeholder='Chọn Tỉnh/ Thành phố Quận/ Huyện' required>
                            
                            <option value="">Hà Tĩnh</option>
                            <option value="">Nghệ An</option>
                            <option value="">Quảng Bình</option>
                            <option value="">Huế</option>
                            
                        </select>
                    </div>
                    <div className={cx('cart__info_customer_list')}>
                        <h2>Phường/ Xã</h2>
                        <select name="" id="" placeholder='Chọn Phường/ Xã' required>
                            
                            <option value="">Thạch Hà</option>
                            <option value="">Kỳ Anh</option>
                            <option value="">Vinh</option>

                        </select>
                    </div>
                </div>
                <h3>Ghi chú</h3>
                <input type="text" placeholder='Lưu ý cho người bán' required/>
            </div>

            <div className={cx('cart__service')}>
                <div className={cx('cart__service_button')}>
                    <BsArrowLeft className={cx('cart__service_icon')}/>
                    <NavLink to='/shop'>
                        <a href="">TIẾP TỤC MUA HÀNG</a>
                    </NavLink>
                </div>

                <div>
                    <span>${
                        cart.cartItem.reduce((sum, item) => {
                            return sum + (parseInt(item.price) * parseInt(item.cartQuanlity))
                        }, 0)
                    }.00</span>
                    <button onClick={() => {
                        const isLogin = sessionStorage.getItem('isLogin')
                        if (isLogin && isLogin === 'true') {
                            dispatch(clearCart())
                            Swal.fire({
                                icon: 'success',
                                title: 'Check out success...',
                                text: '!',
                            })
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'You need Login!',
                            })
                        }

                    }}>ĐẶT HÀNG</button>
                </div>

            </div>
        </div>
    </div >)
}
export default Cart