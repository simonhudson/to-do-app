import type { NextApiResponse } from 'next';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from 'mongodb';
import type { ResponsePayload } from './types.d';

export const sendResponsePayload = (
	response: WithId<any>[] | InsertOneResult<Document> | UpdateResult<Document> | DeleteResult,
	res: NextApiResponse
) => {
	const payload: ResponsePayload = {
		status: httpStatusCodes.OK,
		data: response,
	};

	if (Array.isArray(response) && response.length > 0) payload.metadata = { count: response.length };
	res.json(payload);
};

const doGet = async (path: string) => {
	const response = await fetch(`${process.env.API_DOMAIN}/api/to-do/${path}`, { method: 'get' });
	const data = await response.json();
	return data;
};

const doPut = async (path: string) => {
	const response = await fetch(`${process.env.API_DOMAIN}/api/to-do/${path}`, { method: 'put' });
	const data = await response.json();
	return data;
};

export const getItems = async () => doGet('items');
export const getCategories = async () => doGet('categories');
export const updateItem = async () => doPut('items');
