import type { AppContext, AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global.styled'
import App from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default App