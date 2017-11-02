import './greet.css'

import {
	getDateString
} from '../../utils/utils'

import $ from 'jquery'

$(function () {
	$('#app').append('<div class=greet>现在时间是：' + getDateString() + '</div>')

	$('#app').append('<a href=two.html>打开</a>')
})