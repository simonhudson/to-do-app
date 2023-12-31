import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '@/theme/spacing';
import { media } from '@/theme/media';
import { palette } from '@/theme/palette';
import { BoxShadow } from '@/theme/layout';
import { Icon } from '@/components/icon';

export const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacingRem.md};
	justify-content: space-between;
	padding: ${spacingRem.default} 0;

	${media.tabletLandscape(`
		flex-direction: row;
	`)}
`;

export const ItemsList = styled.ul`
	list-style: none;
	margin: 0;

	${media.tabletLandscape(`
		width: 60%;
	`)}
`;

export const ItemsItem = styled.li`
	align-items: center;
	background: ${palette.primary.white};
	border-radius: ${spacingRem.xsm};
	box-shadow: ${BoxShadow};
	display: flex;
	justify-content: space-between;
	margin: 0 0 ${spacingRem.sm};
	padding: ${spacingRem.default};

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
	margin-top: ${spacingRem.sm};
`;

export const ItemCategoriesIcon = styled(Icon)`
	color: ${palette.primary.bodyText};
	margin-right: ${spacingRem.sm};
`;

export const Actions = styled.div`
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: ${spacingRem.sm};
	justify-content: flex-end;
	margin-left: ${spacingRem.default};
	max-width: ${rem(50)};
	min-width: ${rem(50)};
	width: ${rem(50)};

	${media.phoneLandscape(`
		flex-direction: row;
		max-width: ${rem(110)};
		min-width: ${rem(110)};
		width: ${rem(110)};
	`)}
`;
