import mongoClient from '@/db/mongoClient';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendResponsePayload } from '@/helpers/api';
import { ObjectId } from 'mongodb';
const COLLECTION_NAME = 'categories';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await mongoClient;
	const db = client.db(process.env.DB_NAME);

	const METHOD = req.method?.toLowerCase();
	switch (METHOD) {
		case 'get':
			let objectIds: ObjectId[] = [];
			if (req.query && req.query.ids) {
				const idParams = req.query.ids.split(',');
				idParams.forEach((id: string) => objectIds.push(new ObjectId(id)));
			}
			const getResponse = await db
				.collection(COLLECTION_NAME)
				.find({ _id: { $in: [...objectIds] } })
				.project({ value: 1, _id: 0 })
				.toArray();
			sendResponsePayload(getResponse, res);
			break;
	}
};

export default handler;
