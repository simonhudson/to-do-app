import React, { useState } from 'react';
import { H1, H2 } from '@/theme/typography';
import type { Item } from '@/types/item';
import type { Categories } from '@/types/categories';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { getItems, getCategories } from '@/helpers/api';
import {
	FieldRow,
	Label,
	Input,
	Button,
	ItemsList,
	ItemsItem,
	ItemInfo,
	ItemName,
	ItemCategories,
	Actions,
} from './styles';

export const getServerSideProps = async () => {
	try {
		const items = await getItems();
		const categories = await getCategories();
		return {
			props: {
				itemsData: items.data,
				categoriesData: categories.data,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

const Home = ({ itemsData, categoriesData }: { itemsData: Item[]; categoriesData: Categories[] }) => {
	const [statusMessage, setStatusMessage] = useState<string | undefined>();
	const [items, setItems] = useState<Item[]>(itemsData);
	const [inputValue, setInputValue] = useState<string>('');

	const refreshData = async (response: Response) => {
		if (response.status === httpStatusCodes.OK) {
			const data = await getItems();
			setItems(data.data);
			setStatusMessage('Item added successfully.');
			setInputValue('');
		} else {
			setStatusMessage('Sorry, there was an error adding your item.');
		}
	};

	const submitForm = async (e: any) => {
		e.preventDefault();
		const nameValue = e.target[0].value;
		if (nameValue) {
			const updatedData = {
				name: nameValue,
				is_complete: false,
			};
			const postResponse = await fetch('/api/to-do/items', {
				method: 'post',
				body: JSON.stringify(updatedData),
			});
			refreshData(postResponse);
		} else {
			setStatusMessage('Please enter a Name for your item.');
		}
	};

	const updateItemState = async (item: Item) => {
		const putResponse = await fetch('/api/to-do/items', {
			method: 'put',
			body: JSON.stringify({
				...item,
				is_complete: !item.is_complete,
			}),
		});
		refreshData(putResponse);
	};

	const renderList = (items: Item[]) => (
		<ItemsList>
			{items.map((item) => {
				return (
					<ItemsItem id={`item-${item._id}`} key={`item-${item._id}`}>
						<ItemInfo>
							<ItemName>{item.name}</ItemName>
							{item.categories && <ItemCategories>{item.categories.join(', ')}</ItemCategories>}
						</ItemInfo>
						<Actions>
							<Button onClick={() => updateItemState(item)}>
								{item.is_complete ? 'Add to To-do' : 'Complete'}
							</Button>
							<Button>Delete</Button>
						</Actions>
					</ItemsItem>
				);
			})}
		</ItemsList>
	);

	const renderIncompleteList = () => renderList(items.filter((item) => !item.is_complete));
	const renderCompleteList = () => renderList(items.filter((item) => item.is_complete));

	return itemsData ? (
		<>
			<H1>To-do</H1>
			{renderIncompleteList()}
			<H2>Complete</H2>
			{renderCompleteList()}
			<form onSubmit={submitForm}>
				<FieldRow>
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						name="name"
						onChange={(e) => setInputValue(e.target.value)}
						type="text"
						value={inputValue}
					/>
				</FieldRow>
				<FieldRow>
					<Label htmlFor="categories">Categories</Label>
					{categoriesData.map((category) => {
						return (
							<FieldRow key={`categories-${category._id}`}>
								<input
									id={`categories-${category._id}`}
									name={`categories-${category._id}`}
									type="checkbox"
									value={category.value}
								/>
								<label htmlFor={`categories-${category._id}`}>{category.value}</label>
							</FieldRow>
						);
					})}
				</FieldRow>
				<Button>Add item</Button>
			</form>
			{statusMessage && <p>{statusMessage}</p>}
		</>
	) : null;
};

export default Home;
