import React from "react"
import styles from './LifeStyle.module.scss'
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import News from "./News";




const cx = classNames.bind(styles)


function LifeStyle() {
    return (
        <div>
            <News/>

        </div>
            
        )
}
export default LifeStyle;