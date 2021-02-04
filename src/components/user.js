import React from 'react' 

function User(props) {
    const { isLoggedIn, name } = props
    console.log(isLoggedIn)
    if (!isLoggedIn){
    return 
}
    return(
    <p>Hello {name}. lorem ipsom alsdkfj alsdkjflasdflkj dlkas jldfj alsd lksd flas d </p>
    )
}

export default User