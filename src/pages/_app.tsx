import "../styles/globals.css"
import type { AppProps } from "next/app"
import {
    defaultTheme,
    ThemeProvider,
    Preflight,
} from "@xstyled/styled-components"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Preflight />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
