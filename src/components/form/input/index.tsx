import React from 'react';
import { Label, InputField } from '@/components/form/form.styles';
import type { InputProps } from './types';

export const Input = ({ id, label, onChange, placeholder = '', type = 'text', value = '' }: InputProps) => {
	const fieldId = `input-${id}`;
	return (
		<>
			<Label htmlFor={fieldId}>{label}</Label>
			<InputField
				id={fieldId}
				name={fieldId}
				onChange={(e) => {
					if (onChange) onChange(e);
				}}
				placeholder={placeholder}
				type={type}
				value={value}
			/>
		</>
	);
};
