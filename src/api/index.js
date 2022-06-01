import ApiManager from '../api/ApiManager'
const apiManager = ApiManager.getApiHost("", "");
//admin-auth-center/login         用户登录
export function userLogin(data) {
    return apiManager.post('https://jfvideo4-dev.zgpajf.com.cn' + "/admin-auth-center/system/login", data)
}