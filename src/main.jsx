
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals.js'
import { AppProvider } from './context/Productcontex.jsx';
import { FilterContextProvider } from './context/FilterContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const id = process.env.REACT_APP_ID;
root.render(
  <Auth0Provider
    domain="dev-hbnzldkcl4n1c5gs.us.auth0.com"
    clientId="l3ZPa0XTJzLFEhW2K6boNz711LvOMLWA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
        <FilterContextProvider>
          <CartProvider>
           <App />
          </CartProvider>
        </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
)

reportWebVitals()
