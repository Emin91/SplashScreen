export const initialState = {
    username: 'User',
    result: require('../src/assets/img/default.jpg'),
    back:'#FC441B',
    
}


function reducer(state = initialState, action) {
  
    if (action.id == 7) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg1.png')
            return { ...state,result: JSON.stringify(result) }
        }
        else if (action.id == 8) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg2.png')
            return {...state, result: JSON.stringify(result) }
        }
        else if (action.id == 9) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg3.png')
            return {...state, result: JSON.stringify(result) }
        }
        else if (action.id == 10) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg4.png')
            return { ...state,result: JSON.stringify(result) }
        }
        else if (action.id == 11) {
            console.log('buttom is working')
            result = require('../src/assets/img/bg5.png')
            return {...state, result: JSON.stringify(result) }
        }
        else if (action.id == 12) {
            console.log('buttom is working')
            result = require('../src/assets/img/default.jpg')
            return { ...state,result: JSON.stringify(result) }
        }        
        else if (action.id == 1) {
            back = '#FC441B'
            return {...state, back }
        }
        else if (action.id == 2) {
            console.log('buttom is working')
            back = '#2980B9'          
            return { ...state,back }
        }
        else if (action.id == 3) {
            console.log('buttom is working')
            back = '#2ECC71'
            return { ...state,back }
        }
        else if (action.id == 4) {
            console.log('buttom is working')
            back = '#2C3E50'
            return { ...state,back }
        }
        else if (action.id == 5) {
            console.log('buttom is working')
            back = '#F39C12'
            return {...state, back}
        }
        else if (action.id == 6) {
            console.log('buttom is working')
            back = '#8E44AD'
            return {...state, back }
        }
        else if(action.inputName !==''){
            username = action.inputName
            return  { ...state, username }
        }  
        else if (action.inputName === ''){
            console.log('If srabotyal = ' + action.inputName);           
            username = 'User'            
            return  { ...state, username }
        }

    return state
}

export default reducer




