import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '@/theme/spacing';
import { palette } from '@/theme/palette';

export const StyledForm = styled.form`
	background: #f5f5f5;
	border-radius: ${spacingRem.sm};
	padding: ${spacingRem.md};
	text-align: left;
`;

export const FieldRow = styled.div`
	padding: 0 0 ${spacingRem.md};
`;

export const Label = styled.label`
	display: block;
	font-weight: bold;
	padding: 0 0 ${spacingRem.xsm};
`;

export const InputField = styled.input`
	border: 1px solid ${palette.primary.grey};
	border-radius: ${spacingRem.xsm};
	padding: ${spacingRem.default};
	width: 90%;

	&[aria-invalid='true'] {
		border: 2px solid red;
	}
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

export const Description = styled.span`
	display: block;
	font-size: ${rem(13)};
	font-weight: normal;
	padding: 0 0 ${spacingRem.xsm};
`;

export const ErrorText = styled.span`
	color: red;
	display: block;
	padding: 0 0 ${spacingRem.xsm};
`;
