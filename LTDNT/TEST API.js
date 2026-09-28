// Hàm lấy thông tin user 1
const getUser = async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = response.json()
    console.log(data)
 }

 // Chương trình chính
 console.log('Chào mừng người anh em đã đồng răm')
 console.log('Đang lấy dữ liệu người dùng')
 getUser()
 console.log(`Lúc rảnh tôi đếm cừu 1 + 2 + 3 = ${1 + 2 + 3}`)