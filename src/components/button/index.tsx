import { MouseEvent, ReactNode } from 'react';
import { StyledButtonRow, StyledButton } from './index.styles';
import type { IButton } from './types.d';

export const Button = ({
	href,
	isDestructive = false,
	isWide = false,
	label,
	onClick,
	opensNewTab = false,
	size = 'medium',
	variant = 'primary',
}: IButton) => {
	return (
		<StyledButton
			as={href ? 'a' : null}
			href={href || null}
			data-is-destructive={isDestructive}
			data-is-wide={isWide}
			onClick={(e: MouseEvent) => {
				if (onClick) onClick(e);
			}}
			data-size={size}
			target={href && opensNewTab ? '_blank' : null}
			data-variant={variant}
		>
			{label}
		</StyledButton>
	);
};

export const ButtonRow = ({ children }: { children: ReactNode }) => <StyledButtonRow>{children}</StyledButtonRow>;
