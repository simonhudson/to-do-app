import styled from 'styled-components';
import { rem } from 'polished';
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

export const ItemsList = styled.ul`
	list-style: none;
`;

export const ItemsItem = styled.li`
	align-items: center;
	background: #eee;
	display: flex;
	justify-content: space-between;
	margin: 0 0 ${spacingRem.sm};
	padding: ${spacingRem.sm};
`;

export const ItemInfo = styled.div`
	max-width: 83%;
	width: 83%;
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
	display: flex;
	gap: ${spacingRem.sm};
	justify-content: flex-end;
	max-width: 17%;
	width: 17%;
`;
