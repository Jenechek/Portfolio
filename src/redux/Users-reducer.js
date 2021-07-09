import logo from './imagies/logo.jpg'
const Follow = 'Follow'
const UnFollow = 'UnFollow'

let initialState = {
    users: [
        { id: 1, ava: logo, name: 'Jenia', lastName: 'Lubsky', follow: true, status: 'I\'m fine...', location: { coutry: 'Russia', city: 'Bryansk' } },
        { id: 2, ava: logo, name: 'Ya', lastName: 'Da', follow: true, status: 'I\'m not fine...', location: { coutry: 'Russia', city: 'Moskou' } },
        { id: 3, ava: logo ,name: 'Ya', lastName: 'Net', follow: false, status: 'I\'m very fine...', location: { coutry: 'Russia', city: 'St. Petersburg' } },
        { id: 4, ava: logo ,name: 'Pidora', lastName: 'Otvet', follow: false, status: 'I\'m so fine...', location: { coutry: 'Russia', city: 'Voronej' } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        case UnFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        default: 
            return state;
    }
}

export const followAC = (userId) => (
    {type: Follow, userId}
)
export const unFollowAC = (userId) => (
    {type: UnFollow, userId}
)

export default usersReducer;