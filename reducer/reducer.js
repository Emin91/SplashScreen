export const initialState = {
    result: require('../src/assets/img/default.jpg'),
    back: '#FC441B',
}

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case 'ChangeMessageBackground':
            {
                switch (color) {
                    case '1': {
                        back = '#FC441B'
                        return { ...state, back }
                    }
                    case '2': {
                        back = '#2980B9'
                        return { ...state, back }
                    }
                    case '3': {
                        back = '#2ECC71'
                        return { ...state, back }
                    }
                    case '4': {
                        back = '#2C3E50'
                        return { ...state, back }
                    }
                    case '5': {
                        back = '#F39C12'
                        return { ...state, back }
                    }
                    case '6': {
                        back = '#8E44AD'
                        return { ...state, back }
                    }
                }
            }
        case 'ChangeBackground': {
            switch (id) {
                case '7': {
                    result = require('../src/assets/img/bg1.png')
                    return { ...state, result: JSON.stringify(result) }
                }
                case '8': {
                    result = require('../src/assets/img/bg2.png')
                    return { ...state, result: JSON.stringify(result) }
                }
                case '9': {
                    result = require('../src/assets/img/bg3.png')
                    return { ...state, result: JSON.stringify(result) }
                }
                case '10': {
                    result = require('../src/assets/img/bg4.png')
                    return { ...state, result: JSON.stringify(result) }
                }
                case '11': {
                    result = require('../src/assets/img/bg5.png')
                    return { ...state, result: JSON.stringify(result) }
                }
                case '12': {
                    result = require('../src/assets/img/default.jpg')
                    return { ...state, result: JSON.stringify(result) }
                }
            }
        }
    }
    return state
}

export default reducer