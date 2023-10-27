import type { NextApiResponse } from 'next';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from 'mongodb';

export const sendGetResponsePayload = (response: WithId<any>[], res: NextApiResponse) => {
	const responsePayload = {
		status: response.length > 0 ? httpStatusCodes.OK : httpStatusCodes.NOT_FOUND,
		metadata: { count: response.length },
		data: response,
	};
	res.json(responsePayload);
};

export const sendPostResponsePayload = (response: InsertOneResult<Document>, res: NextApiResponse) => {
	const responsePayload = {
		status: response.acknowledged ? httpStatusCodes.OK : httpStatusCodes.NOT_FOUND,
		data: response,
	};
	res.json(responsePayload);
};

export const sendPutResponsePayload = (response: UpdateResult<Document>, res: NextApiResponse) => {
	const responsePayload = {
		status: response.acknowledged ? httpStatusCodes.OK : httpStatusCodes.NOT_FOUND,
		data: response,
	};
	res.json(responsePayload);
};

export const sendDeleteResponsePayload = (response: DeleteResult, res: NextApiResponse) => {
	const responsePayload = {
		status: response.acknowledged ? httpStatusCodes.OK : httpStatusCodes.NOT_FOUND,
		data: response,
	};
	res.json(responsePayload);
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
