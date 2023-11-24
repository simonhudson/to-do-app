import React, { MouseEvent } from 'react';
import { CheckboxGroup } from '@/components/form/checkbox/group';
import { FieldRow, Button } from '@/components/form/form.styles';
import { Form } from '@/components/form';
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
			<Form onSubmit={(e: MouseEvent) => onSubmit(e)}>
				<FieldRow>
					<Input
						_id="name"
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
					handleItemChange={handleCategoryChange}
					legend="Choose categories"
					required={true}
				/>
				<Button>Add item</Button>
			</Form>
		</>
	);
};
