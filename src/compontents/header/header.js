import {
    getScreenWidth,
    getScreenHeight
} from '../../utils/utils'

import common from '../../utils/common'

import './header.css'
import $ from 'jquery'

common()

export const getHeader = (txt) => {
    return '<div>' + txt + '</div><div class=header>当前屏幕分辨率：' + getScreenWidth() + '*' + getScreenHeight() + '</div>'
}