import type { NextApiResponse } from 'next';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from 'mongodb';
import type { ResponsePayload } from './types.d';
import type { Item } from '@/types/item';

const API_URL = `${process.env.API_DOMAIN}/api/to-do/`;

export const sendResponsePayload = (
	response: WithId<any>[] | InsertOneResult<Document> | UpdateResult<Document> | DeleteResult,
	res: NextApiResponse
) => {
	const returnPayload = (payload: ResponsePayload): void => res.json(payload);

	const payload: ResponsePayload = {
		status: httpStatusCodes.OK,
		data: response,
	};

	// console.log('payload-1---------------');
	// console.log(payload.data[1]);
	// console.log('/payload-1---------------');

	if (Array.isArray(response) && response.length > 0) {
		console.log(`>>> : ${1}`);
		payload.metadata = { count: response.length };
		if (payload.data.length) {
			console.log(`>>> : ${2}`);
			payload.data.forEach(async (item: Item) => {
				console.log(`>>> : ${3}`);
				if (item.categories && item.categories.length) {
					console.log(`>>> : ${4}`);
					const categoryValues = await getCategoryValues(item.categories.join(','));
					const categoryValueStrings: string[] = [];
					categoryValues.data.forEach((item: { value: string }) => categoryValueStrings.push(item.value));
					// delete item.categories;
					// item.categories = [];
					// categoryValues.data.forEach((itemValue: { value: string }) => {
					// 	item.categories.push(itemValue.value);
					// });
					item.foo = [...categoryValueStrings];
					console.log('item----------------');
					console.log(item);
					console.log('/item----------------');

					return returnPayload(payload);
				}
			});
		}
	}
	returnPayload(payload);
};

const doGet = async (path: string) => {
	const response = await fetch(`${API_URL}${path}`, { method: 'get' });
	const data = await response.json();
	return data;
};

const doPut = async (path: string) => {
	const response = await fetch(`${API_URL}${path}`, { method: 'put' });
	const data = await response.json();
	return data;
};

export const getItems = async () => doGet('items');
export const getCategories = async () => doGet('categories');
export const getCategoryValues = async (ids: string) => doGet(`categories/values?ids=${ids}`);
export const updateItem = async () => doPut('items');
