export const initialState = {
    
    result: require('../src/assets/img/bg1.png')
    
}

function reducer(state = initialState, action) {
    
    if (action.id == 1) {

        result = require('../src/assets/img/bg2.png')
        return { result:JSON.stringify(result) }
    } else if (action.id == 2) {
        result = ''
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 3) {
        result = 'red'
        return { result: eval(JSON.stringify(result)) }
    }
    action;
    return state
}
export default reducer




