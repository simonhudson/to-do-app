import mongoClient from '@/db/mongoClient';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendGetResponsePayload, sendPostResponsePayload, sendPutResponsePayload } from '@/helpers/api';
import { ObjectId } from 'mongodb';
const COLLECTION_NAME = 'items';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await mongoClient;
	const db = client.db(process.env.DB_NAME);

	const METHOD = req.method?.toLowerCase();
	switch (METHOD) {
		case 'get':
			const getResponse = await db.collection(COLLECTION_NAME).find({}).sort({}).toArray();
			sendGetResponsePayload(getResponse, res);
			break;
		case 'post':
			const postBody = JSON.parse(req.body);
			const postResponse = await db.collection(COLLECTION_NAME).insertOne(postBody);
			sendPostResponsePayload(postResponse, res);
			break;
		case 'put':
			const putBody = JSON.parse(req.body);
			const query = { _id: new ObjectId(putBody._id) };
			const newValues = {
				$set: {
					name: putBody.name,
					is_complete: putBody.is_complete,
					categories: putBody.categories,
				},
			};
			const putResponse = await db.collection(COLLECTION_NAME).updateOne(query, newValues);
			sendPutResponsePayload(putResponse, res);
			break;
	}
};

export default handler;
