import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { store } from './app/store'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <IntlProvider locale="en">
                    <App />
                </IntlProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
