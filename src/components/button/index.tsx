import { MouseEvent, ReactNode } from 'react';
import { StyledButtonRow, StyledButton, StyledIcon } from './index.styles';
import type { IButton } from './types.d';

export const Button = ({
	icon,
	isDestructive = false,
	isWide = false,
	label,
	onClick,
	size = 'medium',
	variant = 'primary',
}: IButton) => {
	return (
		<StyledButton
			data-is-destructive={isDestructive}
			data-is-wide={isWide}
			onClick={(e: MouseEvent) => {
				if (onClick) onClick(e);
			}}
			data-size={size}
			data-variant={variant}
		>
			{label}
			{icon && <StyledIcon name={icon} className={icon} />}
		</StyledButton>
	);
};

export const ButtonRow = ({ children }: { children: ReactNode }) => <StyledButtonRow>{children}</StyledButtonRow>;
