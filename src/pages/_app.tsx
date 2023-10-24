import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global.styles';
import { Wrap } from '@/theme/layout';
import type { AppProps } from './_app.d';

const App = ({ Component, pageProps }: AppProps) => {
	pageProps.holdingMode = process?.env?.HOLDING_MODE?.toLowerCase() === 'true';

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>{process.env.CLUB_NAME}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Wrap>
					<main>
						<Component {...pageProps} />
					</main>
				</Wrap>
			</ThemeProvider>
		</>
	);
};

export default App;
