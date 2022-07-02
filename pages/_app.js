import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head';
import AuthProvider from '../components/context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Head>
          <title>Concerto</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
