import React from 'react';
import Icon from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('Icon', () => {
	it(`should render as expected`, () => {
		// Given
		const props = {
			type: 'solid',
			name: 'foo',
			className: 'bar',
		};
		// When
		initialise(props);

		// Then
		const icon = screen.getByRole('img', { hidden: true });
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveClass('fas fa-foo bar');
		expect(icon).toHaveAttribute('aria-hidden', 'true');
	});

	const initialise = (props) => render(<Icon type={props.type} name={props.name} className={props.className} />);
});
