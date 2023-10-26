import React, { SyntheticEvent, useState } from 'react';
import { H1, H2 } from '@/theme/typography';
import type { Item } from '@/types/item';
import type { Categories } from '@/types/categories';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { getItems, getCategories } from '@/helpers/api';
import { Button, ItemsList, ItemsItem, ItemInfo, ItemName, ItemCategories, Actions } from '@/theme/styles';
import { AddItem } from '@/components/add-item';
import Modal from '@/components/modal';

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

interface FormFieldValues {
	name: string;
	categories: string[];
	isComplete: boolean;
}

const Home = ({ itemsData, categoriesData }: { itemsData: Item[]; categoriesData: Categories[] }) => {
	const defaultFormFieldValues = {
		name: '',
		categories: [],
		isComplete: false,
	};

	const [statusMessage, setStatusMessage] = useState<string>('');
	const [items, setItems] = useState<Item[]>(itemsData);
	const [formFieldValues, setFormFieldValues] = useState<FormFieldValues>(defaultFormFieldValues);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const parseCategories = (categories: string[]) => {
		const returnValue: string[] = [];
		categories.forEach((category) => {
			const data = categoriesData.find((item) => item._id === category);
			if (data) returnValue.push(data.value);
		});
		return returnValue.join(', ');
	};

	const clearFormFieldValues = () => {
		setFormFieldValues(defaultFormFieldValues);
	};

	const refreshData = async (response: Response) => {
		if (response.status === httpStatusCodes.OK) {
			const data = await getItems();
			setItems(data.data);
			clearFormFieldValues();
		} else {
			setStatusMessage('Sorry, there was an error adding your item.');
		}
	};

	const handleCategoryChange = (e: { target: { checked: boolean; value: string } }) => {
		if (e.target.checked) {
			const updatedCategories = formFieldValues.categories;
			updatedCategories.push(e.target.value);
			setFormFieldValues({
				...formFieldValues,
				categories: updatedCategories,
			});
		} else {
			const updatedCategories = formFieldValues.categories.filter((item) => item !== e.target.value);
			setFormFieldValues({
				...formFieldValues,
				categories: updatedCategories,
			});
		}
	};

	const handleNameChange = (e) => {
		setFormFieldValues({ ...formFieldValues, name: e.target.value });
	};

	const submitForm = async (e: any) => {
		e.preventDefault();
		if (formFieldValues.name) {
			const postResponse = await fetch('/api/to-do/items', {
				method: 'post',
				body: JSON.stringify(formFieldValues),
			});
			setModalIsOpen(false);
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

	const deleteItem = async (item: Item) => {
		const deleteResponse = await fetch('/api/to-do/items', {
			method: 'delete',
			body: JSON.stringify(item),
		});
		refreshData(deleteResponse);
	};

	const renderList = (items: Item[]) => (
		<ItemsList>
			{items.map((item) => {
				return (
					<ItemsItem id={`item-${item._id}`} key={`item-${item._id}`}>
						<ItemInfo>
							<ItemName>{item.name}</ItemName>
							{item.categories && <ItemCategories>{parseCategories(item.categories)}</ItemCategories>}
						</ItemInfo>
						<Actions>
							<Button onClick={() => updateItemState(item)}>
								{item.is_complete ? 'Add to To-do' : 'Complete'}
							</Button>
							<Button onClick={() => deleteItem(item)}>Delete</Button>
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
			<Button onClick={() => setModalIsOpen(true)}>Add new item</Button>
			{modalIsOpen && (
				<Modal onClose={() => setModalIsOpen(false)}>
					<AddItem
						categoriesData={categoriesData}
						handleCategoryChange={handleCategoryChange}
						handleNameChange={handleNameChange}
						nameFieldValue={formFieldValues.name}
						onSubmit={submitForm}
						statusMessage={statusMessage}
					/>
				</Modal>
			)}
		</>
	) : null;
};

export default Home;
