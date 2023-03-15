import React from 'react';
import classNames from 'classnames/bind'
import styles from './MessageContent.module.scss'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsFillChatHeartFill} from 'react-icons/bs'

const cx = classNames.bind(styles)


const Messagecontent = () => {
    return (
        <div className={cx('message__content')}>
            <div className={cx('message__content_container')}>
                <FaFacebookMessenger className={cx('message__content-icon')}/>
                 <a href="c">Facebook Messager</a>
            </div>
            <div className={cx('message__content_container')}>
                <BsFillChatHeartFill className={cx('message__content-icon')}/>
                <a href="c">Zalo Chat</a>
            </div>
        </div>
    );
};

export default Messagecontent;