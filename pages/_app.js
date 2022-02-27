import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Login from '../components/Login'


export default function App({ Component, pageProps }) {
  console.log(pageProps.session);
  return (
      <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
      </SessionProvider>
  )
}



