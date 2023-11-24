import { StyledIcon } from './index.styles';
import type { IconProps } from './types.d';

export const Icon = ({ name, className }: IconProps) => {
	return <StyledIcon role="img" aria-hidden="true" className={`fa-solid fa-${name} ${className}`}></StyledIcon>;
};
