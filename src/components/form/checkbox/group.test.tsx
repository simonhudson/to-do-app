import { CheckboxGroup } from './group';
import { screen, render, fireEvent } from '@testing-library/react';
import type { CheckboxGroupProps } from './types';

describe('CheckboxGroup', () => {
	const props: CheckboxGroupProps = {
		handleItemChange: jest.fn(),
		items: [
			{
				_id: '_id-1',
				errorText: 'error text 1',
				id: 'id-1',
				isInvalid: false,
				label: 'label 1',
				onChange: jest.fn(),
				required: false,
				value: 'value-1',
			},
			{
				_id: '_id-2',
				errorText: 'error text 2',
				id: 'id-2',
				isInvalid: false,
				label: 'label 2',
				onChange: jest.fn(),
				required: false,
				value: 'value-2',
			},
		],
		legend: 'legend value',
		required: false,
	};

	it('should render as expected', () => {
		// When
		render(<CheckboxGroup {...props} />);

		// Then
		expect(screen.getByRole('group')).toBeInTheDocument();
		expect(screen.getByText('legend value')).toBeInTheDocument();
		const checkboxes = screen.getAllByRole('checkbox');
		expect(checkboxes.length).toEqual(2);
	});
});
