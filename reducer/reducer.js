export const initialState = {
    result: require('../src/assets/img/default.png'),
}

function reducer(state = initialState, action) {

    if (action.type == 'Change') {
        if (action.id == 7) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg1.png')
            return { result: JSON.stringify(result) }
        }
        else if (action.id == 8) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg2.png')
            return { result: JSON.stringify(result) }
        }
        else if (action.id == 9) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg3.png')
            return { result: JSON.stringify(result) }
        }
        else if (action.id == 10) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg4.png')
            return { result: JSON.stringify(result) }
        }
        else if (action.id == 11) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg5.png')
            return { result: JSON.stringify(result) }
        }
        else if (action.id == 12) {
            console.log('buttom is working')
            result = require('../src/assets/img/default.png')
            return { result: JSON.stringify(result) }
        }
    }
    return state
}

export default reducer




