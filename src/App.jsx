import './App.css';
import React from  "react";
import GeneralPage from "./components/GeneralPage";
import ErrorBoundary from "./components/ErrorBoundary";
import {HelmetProvider} from "react-helmet-async";


export default function App() {
 const helmetContext ={};
  return (
    <main>
      <ErrorBoundary>
       <HelmetProvider context={helmetContext}>
     <GeneralPage />
         </HelmetProvider>
      </ErrorBoundary>
    </main>
  )
}
