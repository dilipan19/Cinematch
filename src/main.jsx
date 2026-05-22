import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'; // MUST be after bootstrap to override it
import App from './App.jsx'
import { SmartTVProvider } from './context/SmartTVContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SmartTVProvider>
          <App />
        </SmartTVProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

