import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global.styles';
import { Wrap, Footer } from '@/theme/layout';

interface AppProps {
	Component: FunctionComponent;
	pageProps: { [key: string]: any };
}

const now = new Date();
const REPO_URL = 'https://github.com/simonhudson/to-do-app';
const PORTFOLIO_URL = 'https://www.hellosimonhudson.com';

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
					<Footer>
						<p>
							<span>
								<Link href={REPO_URL}>{REPO_URL}</Link>
							</span>
							<span>
								&copy; {now.getFullYear()} <Link href={PORTFOLIO_URL}>Simon Hudson</Link>
							</span>
						</p>
					</Footer>
				</Wrap>
			</ThemeProvider>
		</>
	);
};

export default App;
