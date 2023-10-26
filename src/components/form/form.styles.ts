import styled from 'styled-components';
import { spacingRem } from '@/theme/spacing';
import { palette } from '@/theme/palette';

export const FieldRow = styled.div`
	padding: 0 0 ${spacingRem.sm};
`;

export const Label = styled.label`
	display: block;
	font-weight: bold;
`;

export const Input = styled.input`
	border: 1px solid ${palette.primary.grey};
	border-radius: ${spacingRem.xsm};
	padding: ${spacingRem.sm};
`;

export const Button = styled.button`
	background: ${palette.primary.brand};
	border: 0;
	border-radius: ${spacingRem.xsm};
	color: ${palette.primary.white};
	font-weight: bold;
	padding: ${spacingRem.sm};
`;

export const Fieldset = styled.fieldset``;

export const Legend = styled.legend`
	font-weight: bold;
`;
