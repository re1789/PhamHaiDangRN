const phuongxa=[
    {ma: '29', ten: 'Bình Đông'},
    {ma: '75', ten: 'Bình Hòa'},
    {ma: '61', ten: 'Chí Linh'},
    {ma: '79', ten: 'Hải Vân'},
    {ma: '48', ten: 'Linh Xuân'},
    {ma: '92', ten: 'Phước Long'},
    {ma: '93', ten: 'Tân Phú'},
    {ma: '94', ten: 'Tân Thới'},
]
// for (i = 0; i < phuongxa.length; i++) {
//     console.log(phuongxa[i].ten)
// }
phuongxa.map((value, index) => {
    console.log(value.ten)
})