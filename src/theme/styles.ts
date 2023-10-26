import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '@/theme/spacing';
import { palette } from '@/theme/palette';
import { media } from '@/theme/media';

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

export const ItemsList = styled.ul`
	list-style: none;
`;

export const ItemsItem = styled.li`
	align-items: center;
	background: #eee;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 0 ${spacingRem.sm};
	padding: ${spacingRem.sm};

	${media.tabletPortrait(`
		flex-direction: row;
	`)}
`;

export const ItemInfo = styled.div`
	align-self: flex-start;
	padding: 0 0 ${spacingRem.sm};

	${media.tabletPortrait(`
	align-self: auto;
		padding: 0;
	`)}
`;

export const ItemName = styled.span`
	display: block;
	font-weight: bold;
`;

export const ItemCategories = styled.span`
	display: block;
	font-size: ${rem(14)};
`;

export const Actions = styled.div`
	align-self: flex-start;
	display: flex;
	gap: ${spacingRem.sm};
	justify-content: flex-end;
`;

export const Fieldset = styled.fieldset``;

export const Legend = styled.legend`
	font-weight: bold;
`;
