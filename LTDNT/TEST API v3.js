const getData = async () => { 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1000000');
        if ( response.ok === false ) {
            throw new Error (`Lỗi HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    }
    catch ( error ) {
        console.error ( `Có lỗi xảy ra: `, error )
    }
 }
 getData()