import styled from 'styled-components';
import { spacingRem } from '@/theme/spacing';
import { FieldRow } from '../form.styles';

export const CheckboxWrap = styled.div`
	label {
		margin: 0 ${spacingRem.md} 0 ${spacingRem.xsm};
	}
`;

export const CheckboxGroup = styled(FieldRow)`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	${CheckboxWrap} {
		min-width: 25%;
		padding: ${spacingRem.sm} 0;
		text-align: left;
	}
`;
