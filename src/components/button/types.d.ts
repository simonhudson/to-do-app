import { MouseEvent } from 'react';

export interface IButton {
	isDestructive?: boolean;
	isWide?: boolean;
	label: string;
	onClick?: (e: MouseEvent<FormControl>) => void;
	size?: 'small' | 'medium' | 'large' | 'x-large';
	variant?: 'primary' | 'secondary' | 'tertiary';
}
