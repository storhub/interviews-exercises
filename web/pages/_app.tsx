import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiTheme } from "../src/MuiTheme";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo";

type Props = {
  Component: any;
  pageProps: object;
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;