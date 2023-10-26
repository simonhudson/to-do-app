import React from 'react';
import { FieldRow, Label, Input, Button, Fieldset, Legend } from '@/theme/styles';
import { AddItemProps } from './types';

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
					{categoriesData.map((category) => {
						return (
							<React.Fragment key={`categories-${category._id}`}>
								<input
									id={`categories-${category._id}`}
									name={`categories-${category._id}`}
									onChange={(e) => handleCategoryChange(e)}
									type="checkbox"
									value={category._id}
								/>
								<label htmlFor={`categories-${category._id}`}>{category.value}</label>
							</React.Fragment>
						);
					})}
				</Fieldset>
				<Button>Add item</Button>
			</form>
			{statusMessage && <p>{statusMessage}</p>}
		</>
	);
};

export default AddItem;
