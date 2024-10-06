import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Resources/fonts/walsheim/GTWalsheimPro-Medium.ttf';
import './Resources/fonts/walsheim/GTWalsheimPro-Regular.ttf';
import './Resources/fonts/walsheim/GTWalsheimPro-Light.ttf';
import './Resources/fonts/walsheim/GTWalsheimPro-Bold.ttf';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/link-context';

const httpLink = createHttpLink({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/cm1rg4a9a03vx07vyrnwfmbbk/master',
});

// Step 2: Set up authorization header with token
const authLink = setContext(() => {
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3Mjc4NDgwNzEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtMXJnNGE5YTAzdngwN3Z5cm53Zm1iYmsvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI0MjJiYWUwZC1jZjAzLTQ1NjQtYTk4MS1hYTc2OTBlODkwYmYiLCJqdGkiOiJja2c4MzVvYXByNGZpMDF3ZTk4amw3ODB0In0.QTAHeJymUsadsshA2dmha0Hwteguh1gAgYVF6-grU3H_GF2GmohCuYtkvsbjmsp2seji_ZhtwC_2i8XGD-8WkQEMaILwK-6FbIj5Npgy54yVdNm04_gmNu7VDpQn1pLVbGhRCiJ9UxXw3pDC3TLbnYCnMUwUvMB30Z-xQ3___nVzQWyOGjH5sPkWZp6uPiIYKK0pAeQS29oWd8cslrefpH_R0aSMNykJlUP-bRFNKt7GqH4pMRDZj0OUd_OEQlbEkvpmVnTubx8tP9SlUL2tyW--YYHp0nKS860hXz-nbimrHnQVrBzJ3fTi3XAY76E0to78iFeXIVGQwWFRIvdeRvlXEssZVRsOv7lA5czMJVd2Vv7KE09o6W9uuPxXbYGJISxTMyrGy6_vEPSvT3bMcWwdawpOAYuswypSSNAVs5V-ojlFgvclnuTlhgYji0W4Ol3ConJ7B1sTVpvCr-N-m55MNaK3eWQv7DTiot_6UZT4iR8MI1b7y0337U9VyZJ5-uoeVhcvxEOjH3NiygbO2StOXwtBCG82SCNXXk7GkHloI-gyLzjs1yTJ0fMh7PHHjR32mkWdLLddjgqgSdijJ28lAbb-getkIDdaajFHm1nbEIlGp_Tc1dH5vSu-1iIiMCp9vjzvbQVU5VYc-M9MBZLtkY9svV2yuzdSXxFlvOw'; // Replace with your actual token
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Step 3: Create the Apollo Client and chain the authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
