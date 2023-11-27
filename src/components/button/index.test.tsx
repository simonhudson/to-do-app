import { Button } from './index';
import { screen, render, fireEvent } from '@testing-library/react';
import { getTagName } from '../../../test/utils';
import type { IButton } from './types';

const baseProps: IButton = {
	label: 'My Button',
};

describe('Button', () => {
	it('should render as expected', () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getAllByRole('button').length).toEqual(1);
		expect(screen.getByText('My Button')).toBeInTheDocument();
		expect(getTagName(screen.getByText('My Button'))).toEqual('button');
	});

	it('should render as icon only', () => {
		// Given
		const props = { ...baseProps };
		props.iconOnly = true;

		// When
		initialise(props);

		// Then
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getAllByRole('button').length).toEqual(1);
		expect(screen.getByLabelText('My Button')).toBeInTheDocument();
		expect(getTagName(screen.getByLabelText('My Button'))).toEqual('button');
	});

	it('should fire onClick event', () => {
		// Given
		const props = { ...baseProps };
		props.onClick = jest.fn();
		initialise(props);

		// When
		fireEvent.click(screen.getByText('My Button'));

		// Then
		expect(props.onClick).toHaveBeenCalledTimes(1);
	});
});

const initialise = (props = baseProps) => render(<Button {...props} />);
