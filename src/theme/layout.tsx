import styled from 'styled-components';
import { rem } from 'polished';
import { media } from './media';
import { Breakpoints } from './breakpoints';
import { palette } from './palette';
import { spacingRem } from './spacing';

export const Wrap = styled.div`
	margin: 0 auto;
	padding: ${spacingRem.default} 0;
	width: 90%;

	&:first-of-type {
		height: 100%;
	}

	${media.tabletLandscape(`
		width: ${rem(Breakpoints.tabletLandscape + 'px')};
	`)};

	${media.desktop(`
		width: ${rem(Breakpoints.desktop + 'px')};
	`)};
`;

export const Footer = styled.footer`
	font-size: ${rem(13)};
	padding: ${spacingRem.default} 0 0;

	span {
		display: block;
	}
`;

export const BoxShadow = `0 0 5px #ddd`;

export const VisuallyHidden = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	color: ${palette.primary.white};
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;
