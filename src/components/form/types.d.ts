export interface FormProps {
	children: ReactNode;
	onSubmit: FormEventHandler;
}
export interface FormFieldProps {
	_id: string;
	errorText?: string;
	id: string;
	isInvalid?: boolean;
	label?: string;
	onChange?: Function;
	required?: boolean;
	value?: string;
}
