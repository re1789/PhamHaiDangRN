const getUser = async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1000000')
    console.log(response)
    if ( response.ok === false ) {
        console.log ( 'Không tìm thấy người dùng' )
    }
    else{
        console.log( await response.json() )
    }
 }
 getUser()