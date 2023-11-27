import { Form } from './index';
import { screen, render } from '@testing-library/react';
import type { FormProps } from './types';

describe('Form', () => {
	const props: FormProps = {
		children: <div>foo</div>,
		onSubmit: jest.fn(),
	};

	it('should render as expected', () => {
		// When
		render(<Form {...props} />);

		// Then
		expect(screen.getByRole('form')).toBeInTheDocument();
		expect(screen.getByText('foo')).toBeInTheDocument();
	});
});
