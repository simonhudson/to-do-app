import { ReactNode, FormEventHandler } from 'react';
import { StyledForm } from '@/components/form/form.styles';

interface FormProps {
	children: ReactNode;
	onSubmit: FormEventHandler;
}
export const Form = ({ children, onSubmit }: FormProps) => {
	return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
