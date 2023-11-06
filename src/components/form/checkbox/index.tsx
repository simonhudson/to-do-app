import React from 'react';
import { CheckboxWrap } from './index.styles';
import type { CheckboxProps } from './types';

export const Checkbox = ({ id, label, onChange, value }: CheckboxProps) => {
	const fieldId = `checkbox-${id}`;
	return (
		<CheckboxWrap>
			<input
				id={fieldId}
				name={fieldId}
				onChange={(e) => {
					if (onChange) onChange(e);
				}}
				type="checkbox"
				value={value ?? ''}
			/>
			<label htmlFor={fieldId}>{label}</label>
		</CheckboxWrap>
	);
};
