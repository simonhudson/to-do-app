import React from 'react';
import { Checkbox } from './index';
import { CheckboxGroupWrap } from '@/components/form/checkbox/index.styles';
import { Fieldset, Legend } from '@/components/form/form.styles';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export const CheckboxGroup = ({ required, handleItemChange, legend, items }: CheckboxGroupProps) => {
	return (
		<Fieldset>
			<Legend>{legend}</Legend>
			<CheckboxGroupWrap>
				{items.map((item: CheckboxProps) => {
					return (
						<Checkbox
							_id={item._id}
							id={item._id}
							key={`category-${item._id}`}
							label={item.value}
							onChange={handleItemChange}
							value={item._id}
						/>
					);
				})}
			</CheckboxGroupWrap>
		</Fieldset>
	);
};
