import moment from 'moment'

export const getScreenHeight = () => {
	return document.documentElement.clientHeight
}

export const getScreenWidth = () => {
	return document.documentElement.clientWidth
}

export const getDateString = () => moment().locale('zh-cn').format('LLLL')