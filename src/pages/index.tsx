import React, { useState } from 'react';
import { H1 } from '@/theme/typography';
import { httpStatusCodes } from '@/constants/httpStatusCodes';
import { getItems, getCategories } from '@/helpers/api';
import {
	InnerWrapper,
	ItemsList,
	ItemsItem,
	ItemInfo,
	ItemName,
	ItemCategories,
	ItemCategoriesIcon,
	Actions,
} from '@/theme/styles';
import { AddItem } from '@/components/add-item';
import { sanitizeString } from '@/helpers/sanitizeString';
import { ButtonRow, Button } from '@/components/button';

import type { Item } from '@/types/item';
import type { Category } from '@/types/category';

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
	is_complete: boolean;
}

const defaultFormFieldValues: FormFieldValues = {
	name: '',
	categories: [],
	is_complete: false,
};

const INCOMPLETE = 'incomplete';
const COMPLETE = 'complete';

const Home = ({ itemsData, categoriesData }: { itemsData: Item[]; categoriesData: Category[] }) => {
	const [statusMessage, setStatusMessage] = useState<string>('');
	const [items, setItems] = useState<Item[]>(itemsData);
	const [formFieldValues, setFormFieldValues] = useState<FormFieldValues>(defaultFormFieldValues);
	const [currentView, setCurrentView] = useState<'incomplete' | 'complete'>(INCOMPLETE);

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

	const handleNameChange = (e: { target: { value: string } }) => {
		setFormFieldValues({ ...formFieldValues, name: e.target.value });
	};

	const submitForm = async (e: { preventDefault: Function }) => {
		e.preventDefault();
		const postResponse = await fetch('/api/to-do/items', {
			method: 'post',
			body: JSON.stringify({ ...formFieldValues, name: sanitizeString(formFieldValues.name) }),
		});
		refreshData(postResponse);
		setCurrentView(INCOMPLETE);
	};

	const updateItem = async (item: Item, deleteItem = false) => {
		const method = deleteItem ? 'delete' : 'put';
		const body = deleteItem ? JSON.stringify(item) : JSON.stringify({ ...item, is_complete: !item.is_complete });
		const response = await fetch('/api/to-do/items', { method, body });
		refreshData(response);
	};

	const renderList = () => {
		const filteredItems =
			currentView === INCOMPLETE
				? items.filter((item) => !item.is_complete)
				: items.filter((item) => item.is_complete);
		return (
			<ItemsList>
				{filteredItems.map((item) => {
					return (
						<ItemsItem id={`item-${item._id}`} key={`item-${item._id}`}>
							<ItemInfo>
								<ItemName>{item.name}</ItemName>
								{item.categoryValues && (
									<ItemCategories>
										<ItemCategoriesIcon name="tag" />
										{item.categoryValues.join(', ')}
									</ItemCategories>
								)}
							</ItemInfo>
							<Actions>
								<Button
									icon={`${item.is_complete ? 'list' : 'check'}`}
									onClick={() => updateItem(item)}
									label={item.is_complete ? 'To-do' : 'Done'}
									size="small"
								/>
								<Button
									icon="trash"
									onClick={() => updateItem(item, true)}
									label="Delete"
									isDestructive={true}
									size="small"
								/>
							</Actions>
						</ItemsItem>
					);
				})}
			</ItemsList>
		);
	};

	return itemsData ? (
		<>
			<ButtonRow>
				<Button
					onClick={() => setCurrentView(INCOMPLETE)}
					label={`To-do (${items.filter((item) => !item.is_complete).length})`}
				/>
				<Button
					onClick={() => setCurrentView(COMPLETE)}
					label={`Done (${items.filter((item) => item.is_complete).length})`}
				/>
			</ButtonRow>
			<InnerWrapper>
				{renderList()}
				<AddItem
					categoriesData={categoriesData}
					handleCategoryChange={handleCategoryChange}
					handleNameChange={handleNameChange}
					nameFieldValue={formFieldValues.name}
					onSubmit={submitForm}
				/>
			</InnerWrapper>
		</>
	) : null;
};

export default Home;
