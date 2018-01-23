var redux = require('redux')
var actions = require('./actions/index.jsx')
var store = require('./store/configureStore.jsx').configure()

console.log('Starting redux example')

var unsubscribe = store.subscribe(() => {
    var state = store.getState()

    console.log('new state', store.getState())

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = "Loading..."
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = `<a href="${state.map.url}"  target="_blank">View Location</a>`
    }
})
// store.subscribe return callback unsubscribe
//unsubscribe()

var currentState = store.getState()

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Alexandre'))
store.dispatch(actions.changeName('Elise'))

store.dispatch(actions.addHobby('biking'))
store.dispatch(actions.addMovie('LOTR','fantasy'))
store.dispatch(actions.removeHobby(1))
store.dispatch(actions.removeMovie(1))


