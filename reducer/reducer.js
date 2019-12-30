export const initialState = {
    
    result: require('../src/assets/img/default.png')
    
}

function reducer(state = initialState, action) {
    
    if (action.id == 1) {
        result = '#FC441B'
        return { result:JSON.stringify(result) }
    } else if (action.id == 2) {
        result = '#2980B9'
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 3) {
        result = '#2ECC71'
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 4) {
        result = '#2C3E50'
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 5) {
        result = '#F39C12'
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 6) {
        result = '#8E44AD'
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 7) {
        result = require('../src/assets/img/bg1.png')
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 8) {
        result = require('../src/assets/img/bg2.png')
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 9) {
        result = require('../src/assets/img/bg3.png')
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 10) {
        result = require('../src/assets/img/bg4.png')
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 11) {
        result = require('../src/assets/img/bg5.png')
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 12) {
        result = require('../src/assets/img/default.png')
        return { result: eval(JSON.stringify(result)) }
    }
    

    return state
}
export default reducer




