import 'es6-promise'

import {
    getHeader
} from '../compontents/header/header'

import $ from 'jquery'

import '../compontents/greet/greet'

$(function () {
    $('#app').append(getHeader('第一个页面')).click(function () {
        // require.ensure([], function () {
        //     var a = require('./a')
        //     console.log(a.addNode($('#app')))
        // })
        import ('./a').then((a) => {
            a.addNode($('#app'))
        })
    })
})