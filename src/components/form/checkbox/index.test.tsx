import { Checkbox } from './index';
import { screen, render, fireEvent } from '@testing-library/react';
import type { CheckboxProps } from './types';

describe('Checkbox', () => {
	const props: CheckboxProps = {
		id: 'id-1',
		label: 'Some label',
		value: 'value-1',
	};

	it('should render as expected', () => {
		// When
		render(<Checkbox {...props} />);

		// Then
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveAttribute('id', 'checkbox-id-1');
		expect(checkbox).toHaveAttribute('name', 'checkbox-id-1');
		expect(checkbox).toHaveAttribute('type', 'checkbox');
		expect(screen.getByDisplayValue('value-1')).toBeInTheDocument();
		expect(screen.getByLabelText('Some label')).toBeInTheDocument();
	});

	it('onChange event', () => {
		// Given
		const newProps = { ...props };
		newProps.onChange = jest.fn();
		render(<Checkbox {...newProps} />);

		// When
		fireEvent.click(screen.getByRole('checkbox'));

		// Then
		expect(newProps.onChange).toHaveBeenCalledTimes(1);
	});
});
