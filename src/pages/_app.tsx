import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { ThemeProvider as ThemeUIProvider } from "theme-ui"
import theme from "@styles/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <ThemeUIProvider theme={theme}>
              <Component {...pageProps} />
          </ThemeUIProvider>
      </ThemeProvider>
      )
}
