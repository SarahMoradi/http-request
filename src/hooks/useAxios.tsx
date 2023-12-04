import axios from 'axios'

export const useAxios = (url: string, header?: boolean) => {
  if (header) {
    return axios
      .get(url, {
        headers: {
            "Authorization": "Bearer AAA",
        },
      })
      .then((res) => res)
  } else {
    return axios.get(url).then((res) => res)
  }
}
