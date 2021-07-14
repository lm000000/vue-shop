import axios from "axios"

export default function request(data) {
  let instance=new axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
  })
  return instance(data)
}

