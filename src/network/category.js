import request from "./index"
export function category1() {
  return request({
    url:"category"
  })
}
export function category2(maitKey) {
  return request({
    url:"subcategory",
    params:{
      maitKey
    }
  })

}

