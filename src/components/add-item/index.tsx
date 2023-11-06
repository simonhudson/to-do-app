import React from 'react';
import { CheckboxGroup } from '@/components/form/checkbox/group';
import { FieldRow, Button } from '@/components/form/form.styles';
import { Form } from '@/components/form/form.styles';
import { Input } from '@/components/form/input';
import type { AddItemProps } from './types';

export const AddItem = ({
	categoriesData,
	handleCategoryChange,
	handleNameChange,
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
						label="Name"
						onChange={handleNameChange}
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
