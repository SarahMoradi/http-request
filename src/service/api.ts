import { api } from "../helper/apiHelper";

export const getTodo = (): Promise<any> => {
	return api
		.get('/todos/1').then(d=> d);
		
};