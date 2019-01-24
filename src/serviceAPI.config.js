const BASEURL = "https://www.easy-mock.com/mock/5c35a72fce7b4303bd93fc2c/mydata/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL + 'goods',
    registerUser:`${LOCALURL}user/register`,
    login:LOCALURL+'user/login',   //用户注册接口
    getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo'
    // getGoodsInfo:BASEURL + 'getGoodsInfo',
}
module.exports = URL;