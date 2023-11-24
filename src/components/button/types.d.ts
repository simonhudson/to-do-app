import { MouseEvent } from 'react';

export interface IButton {
	href?: string;
	isDestructive?: boolean;
	isWide?: boolean;
	label: string;
	onClick?: (e: MouseEvent<FormControl>) => void;
	opensNewTab?: boolean;
	size?: 'small' | 'medium' | 'large' | 'x-large';
	variant?: 'primary' | 'secondary' | 'tertiary';
}
