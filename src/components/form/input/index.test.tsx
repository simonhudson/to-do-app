import { Input } from './index';
import { screen, render, fireEvent, act } from '@testing-library/react';
import type { InputProps } from './types';

describe('Input', () => {
	const props: InputProps = {
		id: 'id-1',
		label: 'Some label',
		onChange: jest.fn(),
		placeholder: 'Placeholder text',
		value: 'value-1',
	};

	it('should render as expected', () => {
		// When
		render(<Input {...props} />);

		// Then
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('id', 'input-id-1');
		expect(input).toHaveAttribute('name', 'input-id-1');
		expect(input).toHaveAttribute('type', 'text');
		expect(screen.getByDisplayValue('value-1')).toBeInTheDocument();
		expect(screen.getByText('Some label')).toBeInTheDocument();
	});

	it('should handle onChange event', () => {
		// Given
		render(<Input {...props} />);

		// When
		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'new value' } });

		// Then
		expect(props.onChange).toHaveBeenCalledTimes(1);
	});

	it('should render specified input type', () => {
		// When
		const newProps = { ...props };
		newProps.type = 'number';
		render(<Input {...newProps} />);

		// Then
		expect(screen.getByLabelText('Some label')).toHaveAttribute('type', 'number');
	});

	it('should render description', () => {
		// When
		const newProps = { ...props };
		newProps.description = 'This is a description';
		render(<Input {...newProps} />);

		// Then
		expect(screen.getByText('This is a description')).toBeInTheDocument();
		expect(screen.getByLabelText('Some label')).toHaveAttribute('aria-describedby', 'description--input-id-1');
	});

	it('should render invalid state for required field', () => {
		// Given
		const newProps = { ...props };
		newProps.description = 'This is a description';
		newProps.errorText = 'This is an error';
		newProps.required = true;
		delete newProps.value;
		render(<Input {...newProps} />);
		screen.getByLabelText('Some label').focus();

		// When
		act(() => {
			screen.getByLabelText('Some label').blur();
		});

		// Then
		expect(screen.getByText('This is an error')).toBeInTheDocument();
		expect(screen.getByLabelText('Some label')).toHaveAttribute(
			'aria-describedby',
			'error--input-id-1 description--input-id-1'
		);
		expect(screen.getByLabelText('Some label')).toHaveAttribute('aria-invalid', 'true');
	});
});
