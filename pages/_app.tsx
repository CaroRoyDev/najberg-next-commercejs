import { Footer, Header } from 'layouts'
import { AppProps } from 'next/app'
import GlobalStyles from '../src/styles/globalStyles'

const App: React.FC = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <GlobalStyles />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
