import { StyledForm } from '@/components/form/form.styles';
import type { FormProps } from './types';

export const Form = ({ children, onSubmit }: FormProps) => {
	return (
		<StyledForm aria-label="form" onSubmit={onSubmit}>
			{children}
		</StyledForm>
	);
};
