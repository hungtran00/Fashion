import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../reducers/product/productSlice"
import styles from './ProductDetail.module.scss'
import classNames from "classnames/bind"
import { addToCart } from "../../reducers/cart/cartSlice"

const cx = classNames.bind(styles)

function ProductDetail() {
    const colors =
    [
        "Black",
        "Blue",
        "Gray",
        "Pink",
        "White"
    ]
const sizes =
    [
        "S",
        "M",
        "L"

    ]
    const [colorIndex, setColorIndex] = useState(0)
    const [sizeIndex, setSizeIndex] = useState(0)
    const params = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)

    // const cart = useSelector(state => state.cart)
    const [cartQuanlity, setCartQuanlity] = useState(1)
    useEffect(() => {
        dispatch(getProduct())

    }, [])

    const handleAddToCart = (product, quanlity) => {
        sessionStorage.setItem('quantity', quanlity)
        dispatch(addToCart(product))
    }
    // const className = {`${colorIndex === index ? `product__color-selected` : `product__color-${color}`}`}
    return (
        <div className={cx("product")}>
            {
                product.data.map(item => {
                    if (item._id === params.id)
                        return (<Fragment key={item._id} >
                            <div className={cx('product__img')}>
                                <img src={require(`../../../public/img/product/${item.img}`)} />
                            </div>
                            <div className={cx("product__description")}>
                                <div className={cx('product__title')}>{item.name}</div>
                                <div className={cx('product__price-list')}>
                                    <div className={cx('product__price')}>${item.price}.00</div>
                                    <span>$1000.00</span>
                                </div>
                                <div className={cx('product__detail')}>{item.detail}</div>
                                <p>Color</p>
                                <div className={cx('product__color')}>
                                    {colors.map((color,index)=>{
                                        return (
                                            <div className={cx('product__color_item')}> 
                                                <button key={index} className={cx(colorIndex === index ? 'product__color-selected' : `product__color-${color}`)} onClick={()=> setColorIndex(index)}>
                                                    {color}
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p>Size</p>
                                <div className={cx('product__size')}>
                                    {sizes.map((size,index)=>{
                                        return (
                                            <div className={cx('product__size_item')}>
                                                <button key={index} className={cx(sizeIndex === index ? 'product__size-selected' : `product__size-${size}`)} onClick={()=> setSizeIndex(index)}>
                                                    {size}
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                <div className={cx('product__service')}>
                                    <input type="number" value={cartQuanlity} min="1" max="1000" onChange={(e) => setCartQuanlity(parseInt(e.target.value))} />
                                    <button onClick={() => handleAddToCart(item, cartQuanlity)}>ADD TO CART</button>
                                </div>

                                <div className={cx('product__category')}>Category:<span>{item.category}</span></div>
                            </div>
                        </Fragment>)
                })
            }

        </div >)
}
export default ProductDetail