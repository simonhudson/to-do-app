import React, { SyntheticEvent, useState } from 'react';
import { H1, H2 } from '@/theme/typography';
import type { Item } from '@/types/item';
import { httpStatusCodes } from '@/constants/httpStatusCodes';

export const getServerSideProps = async () => {
	try {
		const response = await fetch(`${process.env.API_DOMAIN}/api/to-do/items`);
		const data = await response.json();
		return {
			props: {
				data: data.data,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

const Home = ({ data }: { data: Item[] }) => {
	const [statusMessage, setStatusMessage] = useState<string | undefined>();
	const [items, setItems] = useState<Item[]>(data);
	const [completeItems, setCompleteItems] = useState<Item[]>(data.filter((item) => item.is_complete));
	const [inputValue, setInputValue] = useState<string>('');

	const handleResponse = async (response: Response) => {
		if (response.status === httpStatusCodes.OK) {
			const response = await fetch('/api/to-do/items');
			const data = await response.json();
			setItems(data.data);
			setStatusMessage('Item added successfully.');
			setInputValue('');
		} else {
			setStatusMessage('Sorry, there was an error adding your item.');
		}
	};

	const submitForm = async (e: any) => {
		e.preventDefault();
		const newValue = e.target[0].value;
		if (newValue) {
			const updatedData = {
				name: newValue,
				is_complete: false,
			};
			const postResponse = await fetch('/api/to-do/items', {
				method: 'post',
				body: JSON.stringify(updatedData),
			});
			handleResponse(postResponse);
		} else {
			setStatusMessage('Please enter a Name for your item.');
		}
	};

	return (
		<>
			<H1>To-do</H1>
			<ul>
				{items.map((item) => {
					return (
						<li id={`item-${item._id}`} key={`item-${item._id}`}>
							{item.name}
						</li>
					);
				})}
			</ul>
			<H2>Complete</H2>
			<ul>
				{completeItems.map((item) => {
					return (
						<li id={`item-${item._id}`} key={`item-${item._id}`}>
							{item.name}
						</li>
					);
				})}
			</ul>
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input
					value={inputValue}
					type="text"
					id="name"
					name="name"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button>Add item</button>
			</form>
			{statusMessage && <p>{statusMessage}</p>}
		</>
	);
};

export default Home;
