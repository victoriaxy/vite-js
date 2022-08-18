/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 18:52:48
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 18:52:56
 * @FilePath: \epidvue\vite-js\src\service\api\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from '@/service/http'

const loginApi = {
    login(params){
        return http.post('/login', params)
    }

}
export default loginApi