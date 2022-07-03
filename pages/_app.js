import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import AuthProvider from '../components/context/AuthContext';
import { Suspense } from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<Suspense fallback={<h1>NO U 🍔</h1>}>
			<AuthProvider>
				<Layout>
					<Head>
						<title>Concerto</title>
					</Head>
					<Component {...pageProps} />
				</Layout>
			</AuthProvider>
		</Suspense>
	);
}

export default MyApp;
