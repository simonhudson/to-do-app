import { Breakpoints } from './breakpoints';

const applyStyles = (viewportWidth: number, styles: string): string =>
	`@media (min-width: ${viewportWidth}px) { ${styles} }`;

type Media = {
	[key in
		| 'phonePortrait'
		| 'phoneLandscape'
		| 'tabletPortrait'
		| 'tabletLandscape'
		| 'desktop'
		| 'prefersReducedMotion']: (string: string) => string;
};

export const media: Media = {
	phonePortrait: (styles: string) => applyStyles(Breakpoints.phonePortrait, styles),
	phoneLandscape: (styles: string) => applyStyles(Breakpoints.phoneLandscape, styles),
	tabletPortrait: (styles: string) => applyStyles(Breakpoints.tabletPortrait, styles),
	tabletLandscape: (styles: string) => applyStyles(Breakpoints.tabletLandscape, styles),
	desktop: (styles: string) => applyStyles(Breakpoints.desktop, styles),
	prefersReducedMotion: (styles: string) => `@media (prefers-reduced-motion: reduce) { ${styles} }`,
};
