import request from "./index"

export function fun1() {
  return request({
    url:'home/multidata',
  })
}
export function fun2(type,page) {
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}