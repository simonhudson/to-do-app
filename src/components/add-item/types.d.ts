import { FormEventHandler } from 'react';
import { Category } from '@/types/category';

export interface AddItemProps {
	categoriesData: Categories[];
	handleCategoryChange: Function;
	handleNameChange: Function;
	nameFieldValue: string;
	onSubmit: FormEventHandler;
}
