export const initialState = {
    
    result: ': eval(JSON.stringify(result))'
    
}

function reducer(state = initialState, action) {
    
    if (action.id == 1) {

        result = '../src/assets/img/bg1.png'
        return { result: eval(JSON.stringify(result)) }
    } else if (action.id == 2) {
        result = ''
        return { result: eval(JSON.stringify(result)) }
    }
    else if (action.id == 3) {
        result = 'red'
        return { result: eval(JSON.stringify(result)) }
    }
    
    return state
}
export default reducer




