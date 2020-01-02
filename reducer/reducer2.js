export const initialState = {
    back: '10'
}

function reducer2 (state = initialState, action) {
    if (action.type == 'ChangeColor') {
        if (action.color == 1) {
            console.log("Button working")
            back = '#FC441B'
            return { back: JSON.stringify(back) }
        }
        else if (action.color == 2) {
            console.log('buttom is working')
            back = '#2980B9'
            return { back: JSON.stringify(back) }
        }
        else if (action.color == 3) {
            console.log('buttom is working')
            back = '#2ECC71'
            return { back: JSON.stringify(back) }
        }
        else if (action.color == 4) {
            console.log('buttom is working')
            back = '#2C3E50'
            return { back: JSON.stringify(back) }
        }
        else if (action.color == 5) {
            console.log('buttom is working')
            back = '#F39C12'
            return { back: JSON.stringify(back) }
        }
        else if (action.color == 6) {
            console.log('buttom is working')
            back = '#8E44AD'
            return { back: JSON.stringify(back) }
        }
    }
    return state
}
export default reducer2
