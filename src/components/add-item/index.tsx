import React from 'react';
import { FieldRow, Button, Fieldset, Legend } from '@/components/form/form.styles';
import type { AddItemProps } from './types';
import { Checkbox } from '@/components/form/checkbox';
import { Input } from '@/components/form/input';
import { CheckboxGroup } from '@/components/form/checkbox/index.styles';
import { Form } from '@/components/form/form.styles';

export const AddItem = ({
	categoriesData,
	handleCategoryChange,
	handleNameChange,
	isInvalid = {},
	nameFieldValue,
	onSubmit,
}: AddItemProps) => {
	return (
		<>
			<Form onSubmit={onSubmit}>
				<FieldRow>
					<Input
						errorText="Please enter a name for your item"
						description="(e.g. Pick up milk)"
						id="name"
						isInvalid={isInvalid.name}
						label="Name"
						onChange={handleNameChange}
						required={true}
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
			</Form>
		</>
	);
};
