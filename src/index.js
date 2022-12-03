import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <IntlProvider locale="en">
                <App />
            </IntlProvider>
        </BrowserRouter>
    </React.StrictMode>
)
