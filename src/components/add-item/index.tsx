import React, { useState } from 'react';
import { CheckboxGroup } from '@/components/form/checkbox/group';
import { FieldRow, Button } from '@/components/form/form.styles';
import { Form } from '@/components/form';
import { Input } from '@/components/form/input';
import type { AddItemProps } from './types';

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

export const AddItem = ({ categoriesData, handleCategoryChange, handleNameChange, nameFieldValue }: AddItemProps) => {
	const [formFieldValues, setFormFieldValues] = useState<FormFieldValues>(defaultFormFieldValues);

	const onSubmit = async (e: { preventDefault: Function }) => {
		e.preventDefault();
		const postResponse = await fetch('/api/to-do/items', {
			method: 'post',
			body: JSON.stringify({ ...formFieldValues, name: sanitizeString(formFieldValues.name) }),
		});
		setModalIsOpen(false);
		refreshData(postResponse);
	};

	return (
		<>
			<Form onSubmit={onSubmit}>
				<FieldRow>
					<Input
						errorText="Please enter a name for your item"
						description="What do you need to remember?"
						id="name"
						label="Name"
						onChange={handleNameChange}
						placeholder="(e.g. Pick up milk)"
						required={true}
						value={nameFieldValue}
					/>
				</FieldRow>
				<CheckboxGroup
					items={categoriesData}
					handleCategoryChange={handleCategoryChange}
					legend="Choose categories"
					required={true}
				/>
				<Button>Add item</Button>
			</Form>
		</>
	);
};
