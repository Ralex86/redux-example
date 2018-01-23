var redux = require('redux')

console.log('Starting redux example')

// need a pure function
// its a reducer => existing state => nextState with an action
// defautl state ES6 syntax



// Name reducer and action generators
// ------------------------

var nameReducer = (state = 'Anonymous', action)  => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state
    }
}

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name //ES6 feature name: name
    }
}


// Hobbies reducer and action generators
// ------------------------

var nextHobbyId = 1
var hobbiesReducer = (state = [],action ) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ]
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state
    }
}

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}

// Movies reducer and action generators
// ------------------------

var nextMovieId = 1
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state
    }
}


var addMovie = (title,genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}

// combine all the reducers below
var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
})


// devTools for chrome
var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

// subscribe to changes
// invoked every time the store changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState()

    console.log('new state', store.getState())
})
// store.subscribe return callback unsubscribe
//unsubscribe()

var currentState = store.getState()
console.log(currentState)


store.dispatch(changeName('Alexandre'))
store.dispatch(changeName('Elise'))

store.dispatch(addHobby('biking'))
store.dispatch(addMovie('LOTR','fantasy'))
store.dispatch(removeHobby(1))
store.dispatch(removeMovie(1))
//store.dispatch({
//    type: 'ADD_HOBBY',
//    hobby: 'biking'
//})

//store.dispatch({
//    type: 'ADD_MOVIE',
//    title: 'LOTR',
//    genre: 'fantasy'
//})

//store.dispatch({
//    type: 'REMOVE_MOVIE',
//    id: 1
//})
