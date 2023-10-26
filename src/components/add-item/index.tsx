import React from 'react';
import { FieldRow, Label, Input, Button, Fieldset, Legend } from '@/components/form/form.styles';
import type { AddItemProps } from './types';
import { Checkbox } from '@/components/form/checkbox';
import { CheckboxGroup } from '@/components/form/checkbox/index.styles';

export const AddItem = ({
	categoriesData,
	handleCategoryChange,
	handleNameChange,
	nameFieldValue,
	onSubmit,
	statusMessage,
}: AddItemProps) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				<FieldRow>
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						name="name"
						onChange={(e) => handleNameChange(e)}
						type="text"
						value={nameFieldValue}
					/>
				</FieldRow>
				<Fieldset>
					<Legend>Categories</Legend>
					<CheckboxGroup>
						{categoriesData.map((category) => {
							return (
								<Checkbox
									id={category._id}
									key={`category-${category._id}`}
									label={category.value}
									onChange={handleCategoryChange}
									value={category._id}
								/>
							);
						})}
					</CheckboxGroup>
				</Fieldset>
				<Button>Add item</Button>
			</form>
			{statusMessage && <p>{statusMessage}</p>}
		</>
	);
};

export default AddItem;
