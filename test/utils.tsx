import React, { ReactNode } from 'react';
import { render as doRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';

export const render = (childToRender: ReactNode) => {
	return doRender(<ThemeProvider theme={theme}>{childToRender}</ThemeProvider>);
};
