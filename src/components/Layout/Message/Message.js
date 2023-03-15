import React from 'react';
import classNames from 'classnames/bind'
import styles from './Message.module.scss'
import {SiGooglemessages} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import Messagecontent from './Messagecontent';


const cx = classNames.bind(styles)



const Message = (props) => {
    const {isMessage,setMessage} = props;

    

    return (
        <div className={cx('message')}>
            <SiGooglemessages onClick={()=> setMessage(!isMessage)} className={cx('message__icon')}/>
            {isMessage ? (
                
                <Messagecontent/>
                // <AiFillCloseCircle onClick={()=> setMessage(!isMessage)}/>

            ) : (
                // <SiGooglemessages/>
                <SiGooglemessages className={cx('message__none')}/>
                
            )}
            
        </div>
    );
};

export default Message;