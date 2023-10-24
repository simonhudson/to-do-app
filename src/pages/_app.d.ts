import { FunctionComponent } from 'react';

export interface AppProps {
	Component: FunctionComponent;
	pageProps: { [key: string]: any };
}
