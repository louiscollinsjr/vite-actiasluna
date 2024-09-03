import { Routes, Route } from 'react-router-dom';

import NavigationComponent from './components/Route.Navigation.Component';
import HomeComponent from './components/Route.Home.Component';
import CookieConsent from './components/CookieConsent.Component';
import PrivacyPolicy from './components/PrivacyPolicy.Component';

import './App.css'

function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
      <CookieConsent />
    </div>
  )
}

export default App
