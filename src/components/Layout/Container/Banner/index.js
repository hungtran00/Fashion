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
        "https://pubcdn.ivymoda.com/files/news/2023/04/04/e6040ccd4851b499d0f2685dce521b54.jpg",
        "https://pubcdn.ivymoda.com/files/news/2023/03/06/dd8cd9fb84343609f1dfb9a5a7c96609.jpg",
        "https://pubcdn.ivymoda.com/files/news/2023/03/06/63de1b697d785a9f15c3bef27024e165.jpg",
        "https://pubcdn.ivymoda.com/files/news/2023/03/02/0df19551f0ae0598381bce05ea115d8a.jpg",
        "https://pubcdn.ivymoda.com/files/news/2023/04/05/7249e100ac1616a3fa09a35ad4dd41e7.jpg"
        
    ]
    
    const [crr, setCrr] = useState(0)

    const Next = () => {
        setCrr(crr === images.length - 1 ? 0 : crr + 1)
    }
    

    const Prev = () => {
    setCrr(crr === 0 ? images.length - 1 : crr - 1)
    }
    
    const Nextslider = (idex) => {
        setCrr(idex)
    }
    return (
        <div className={cx('bannertop')}>
            <div className={cx('bannertop__img')}>
                {images.map((image,index)=>{
                    return (
                        <div key={index} className={cx('bannertop__item')}>
                            {index === crr && ( 
                                <img src={image} alt="" />
                            )}
                        </div>
                    )
                })}
            </div>
            <div className={cx('bannertop__list')}>
                {images.map((item,idex) => {
                    return (
                        <div className={cx('bannertop__list_item')} key={idex} onClick={() => Nextslider(idex)}>
                            <div className={cx(crr === idex ? 'bannertop__list_item_red' : 'bannertop__list_item_black')}>
                                .
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={cx('bannertop__container')}>
                {/* <button onClick={scrollToProduct} className={cx('bannertop__button')}>SHOP NOW</button> */}
            </div>
            <div className={cx('btnLeft')}>
                <BsArrowLeft onClick={Prev} />
            </div>
            <div className={cx('btnRight')}>
                <BsArrowRight onClick={Next}/>
            </div>
           
        </div>

    )
}
export default Banner