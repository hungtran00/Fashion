import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import { useState } from 'react'
const cx = classNames.bind(styles)
function Banner() {
    const scrollToProduct = () => {
        var screenHeight = window.innerHeight
        window.scrollTo(0, screenHeight)
    }
    const images = [
        "https://pubcdn.ivymoda.com/files/news/2023/03/06/63de1b697d785a9f15c3bef27024e165.jpg",
        "https://pubcdn.ivymoda.com/files/news/2023/03/06/dd8cd9fb84343609f1dfb9a5a7c96609.jpg",
        "https://pubcdn.ivymoda.com/files/news/2023/03/02/0df19551f0ae0598381bce05ea115d8a.jpg"
        
    ]
    const [curentIndex, setCurentIndex] = useState(0)
    const Next = ()=>{
        // const isFirtslide = curentIndex === 0;
        // const newIndex = isFirtslide ? images.length - 1 : curentIndex - 1;
        // setCurentIndex(newIndex)
       setCurentIndex((curentIndex)=> (curentIndex === images.length - 1 ? 0 : curentIndex + 1))
        
    }

    const Prev = ()=> {
        // const isLastslide = curentIndex === images.length - 1;
        // const newIndex = isLastslide ? 0 : curentIndex + 1;
        // setCurentIndex(newIndex)
    //    setCurentIndex((curentIndex)=> (curentIndex === 0 ? images.length - 1 : curentIndex - 1))
    }
    
    return (
        <div className={cx('bannertop')}>
            <div className={cx('bannertop__img')}>
                {images.map((image,index)=>{
                    return (
                        <div key={index} className={cx('bannertop__item')}>
                            <img src={image} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className={cx('bannertop__container')}>
                <div className={cx('bannertop__title')}>
                    Welcome
                </div>
                <div className={cx('bannertop__content')}>
                  
                </div>
                <button onClick={scrollToProduct} className={cx('bannertop__button')}>SHOP NOW</button>
            </div>
            <div className={cx('btnLeft')}>
                <BsArrowLeft onClick={Prev}/>
            </div>
            <div className={cx('btnRight')}>
                <BsArrowRight onClick={Next}/>
            </div>

        </div>

    )
}
export default Banner