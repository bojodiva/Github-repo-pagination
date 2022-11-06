import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {HelmetProvider} from "react-helmet-async"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <React.StrictMode>
        <HelmetProvider>
		    <App />
        </HelmetProvider>
      </React.StrictMode>
    </BrowserRouter>
	</React.StrictMode>
)