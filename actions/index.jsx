import 'whatwg-fetch'

export var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
}

export var completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}

export var fetchLocation = () => {
    return (dispatch, getState) => {

        dispatch(startLocationFetch())

        var obj = {
            method: 'GET',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'X-Token': '' 
            }
        }

        fetch('MYB API', obj)
            .then(res => res.json())
            .then(me => {
                console.log(me.data.latitude,me.data.longitude)
                var loc = `${me.data.latitude},${me.data.longitude}`
                var baseUrl = 'http://maps.google.com?q='

                dispatch(completeLocationFetch(baseUrl + loc))
            })
            .catch(err => console.log(err))

    }
}


export var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name //ES6 feature name: name
    }
}

export var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}

export var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}

export var addMovie = (title,genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}

export var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }    
}
