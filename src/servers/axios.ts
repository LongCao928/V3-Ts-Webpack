
import { request } from '@/utils/request'
export default {
  getData() {
    return request({
      url: '/posts',
      method: 'get'
    })
  }
}