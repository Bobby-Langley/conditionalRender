import React from 'react' 
import {Link} from 'react-router-dom'

function User(props) {
    const { isLoggedIn, name } = props
    console.log(isLoggedIn)
    if (!isLoggedIn){
    return null
}
    return(
        <>
    <p>Hello {name}. lorem ipsom alsdkfj alsdkjflasdflkj dlkas jldfj alsd lksd flas d </p>
    <Link style={{  color: 'white' }} to="/"> Home </Link>
    </>
    )
}

export default User