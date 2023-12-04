import {api} from '../helper/apiHelper'

export const getTodo = (header: boolean): Promise<any> => {
  return api
    .get<TodoQueryResponse>('/todos/1', header)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error)
    })
}
