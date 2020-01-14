export const initialState = {
    username: 'User',
}


function reducer2(state = initialState, action) {

    switch (action.type) {
        case 'chacgeName': {
            switch (action.inputName) {
                case '': {
                    username = 'User'
                    return { ...state, username }
                }
                default: {
                    username = 'User'
                    return { ...state, username }
                }
            }
        }
    }
    return state
}

export default reducer2
