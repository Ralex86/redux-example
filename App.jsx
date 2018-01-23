import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//import io from 'socket.io-client'
import 'whatwg-fetch'

// local assets
import styles from './app.css'


class App extends React.Component{
    render(){
        return(
            <div className={styles.main}>
                Hello world !
            </div>
        )
    }
}


ReactDOM.render((
    <App/>
), document.getElementById('app'))

require('./redux-example.jsx')
