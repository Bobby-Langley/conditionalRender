import React from 'react' 
import User from './user'

class Dummy extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false 
        }

    }
    render() {
        if(!this.state.isLoggedIn){
            return (
                <>
                    <h1>Good bye, loser</h1>
                    <button 
                    onClick={() => this.setState ({isLoggedIn: true})}
                    >Login</button>
                </>
            )

        }
        return (
            <>
                <h1>Hello Guest</h1>
                <button 
                onClick={() => this.setState ({isLoggedIn: false})}
                >Logout</button>
                <User 
                isLoggedIn={this.state.isLoggedIn}
                name= {'Bobby'}
                />
            </>
        )
    }
}

export default Dummy