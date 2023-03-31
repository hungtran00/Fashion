import styles from './Bannerbot.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
import {SiInstagram} from 'react-icons/si'

const cx = classNames.bind(styles)

function Banerbot() {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner__twitter')}>
                <div className={cx('banner__content')}>
                    <div className={cx('twitter__overlay')}></div>
                    <div className={cx('banner__innercontent')}>
                        <SiInstagram/>
                        <a href="https://www.instagram.com/ivy_moda/" target='_blank'>INSTAGRAM</a>
                    </div>
                </div>
            </div>
            <div className={cx('banner__facebook')}>
                <div className={cx('banner__content')}>
                    <div className={cx('facebook__overlay')}></div>
                    <div className={cx('banner__innercontent')}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <a href="https://www.facebook.com/thoitrangivymoda/" target='_blank'>FACEBOOK</a>
                    </div>
                </div>
            </div>
            <div className={cx('banner__pinterest')}>
                <div className={cx('banner__content')}>
                    <div className={cx('pinterest__overlay')}></div>
                    <div className={cx('banner__innercontent')}>
                        <FontAwesomeIcon icon={faPinterest} />
                        <a href="https://www.pinterest.com/ivymoda/_saved/" target='_blank'>PINTEREST</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banerbot