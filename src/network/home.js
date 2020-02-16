import {request} from './request'
export function getHomeData(){
    return request({
        url: '/headers',
        method: 'get'
    })
}