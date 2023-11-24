import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global.styles';
import { Wrap } from '@/theme/layout';
interface AppProps {
	Component: FunctionComponent;
	pageProps: { [key: string]: any };
}

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>To-do App</title>
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
