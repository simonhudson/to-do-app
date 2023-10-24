import type { NextApiResponse } from 'next';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { InsertOneResult, WithId } from 'mongodb';

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
