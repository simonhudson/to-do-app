import React from 'react';
import { Label, InputField, Description, ErrorText } from '@/components/form/form.styles';
import type { InputProps } from './types';

export const Input = ({
	errorText,
	description,
	id,
	isInvalid,
	label,
	onChange,
	placeholder = '',
	type = 'text',
	required,
	value = '',
}: InputProps) => {
	const fieldId = `input-${id}`;

	let describedByElement = isInvalid ? `error--${fieldId}` : '';
	if (description) describedByElement = describedByElement + ` description--${fieldId}`;

	return (
		<>
			<Label htmlFor={fieldId}>{label}</Label>
			{description && <Description id={`description--${fieldId}`}>{description}</Description>}
			{isInvalid && <ErrorText id={`error--${fieldId}`}>{errorText}</ErrorText>}
			<InputField
				aria-describedby={describedByElement}
				aria-invalid={isInvalid}
				aria-required={required}
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
