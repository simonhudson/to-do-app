import { FormEventHandler } from 'react';
import { Categories } from '@/types/categories';

export interface AddItemProps {
	categoriesData: Categories[];
	handleCategoryChange: Function;
	handleNameChange: Function;
	nameFieldValue: string;
	onSubmit: FormEventHandler;
	statusMessage: string;
}
