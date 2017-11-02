import {
    getDateString
} from '../utils/utils'

module.exports = {
    addNode: function (parent) {
        return parent.append('<div>子节点</div>')
    }
}