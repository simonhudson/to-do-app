import styled from 'styled-components';
import { spacingRem } from '@/theme/spacing';

export const CheckboxWrap = styled.div`
	label {
		margin-left: ${spacingRem.xsm};
	}
`;

export const CheckboxGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	${CheckboxWrap} {
		min-width: 25%;
		padding: ${spacingRem.sm} 0;
		text-align: left;
	}
`;
