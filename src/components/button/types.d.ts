import { MouseEvent } from 'react';

export interface IButton {
	icon?: string;
	isDestructive?: boolean;
	isWide?: boolean;
	label: string;
	onClick?: (e: MouseEvent<FormControl>) => void;
	size?: 'small' | 'medium' | 'large' | 'x-large';
	variant?: 'primary' | 'secondary' | 'tertiary';
}
