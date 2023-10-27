import {
	sendGetResponsePayload,
	sendPostResponsePayload,
	sendPutResponsePayload,
	sendDeleteResponsePayload,
	getItems,
	getCategories,
	updateItem,
} from './index';

const ORIGINAL_FETCH = global.fetch;
const ORIGINAL_ENV_API_DOMAIN = process.env.API_DOMAIN;

describe('Helper functions', () => {
	beforeEach(() => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve('foo'),
				status: 200,
			})
		) as jest.Mock;
		process.env.API_DOMAIN = 'http://foo.com';
	});

	afterEach(() => {
		jest.clearAllMocks();
		global.fetch = ORIGINAL_FETCH;
		process.env.API_DOMAIN = ORIGINAL_ENV_API_DOMAIN;
	});

	describe('getItems()', () => {
		it('should call fetch with expected params and return data', async () => {
			// When
			const actual = await getItems();

			// Then
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith('http://foo.com/api/to-do/items', { method: 'get' });
			expect(actual).toEqual('foo');
		});
	});
	describe('getCategories()', () => {
		it('should call fetch with expected params and return data', async () => {
			// When
			const actual = await getCategories();

			// Then
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith('http://foo.com/api/to-do/categories', { method: 'get' });
			expect(actual).toEqual('foo');
		});
	});
	describe('updateItem()', () => {
		it('should call fetch with expected params and return data', async () => {
			// When
			const actual = await updateItem();

			// Then
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith('http://foo.com/api/to-do/items', { method: 'put' });
			expect(actual).toEqual('foo');
		});
	});
});
