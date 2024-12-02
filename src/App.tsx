import { Routes, Route } from 'react-router-dom';

import NavigationComponent from './components/Route.Navigation.Component';
import HomeComponent from './components/Route.Home.Component';
import CookieConsent from './components/CookieConsent.Component';
import PrivacyPolicy from './components/PrivacyPolicy.Component';
import PartnersRoute from './components/Route.Partners.Component';
import ScrollToTop from './components/util.scrollToTop';

import './App.css'

function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/partners" element={<PartnersRoute />} />
        </Route>
      </Routes>
      <CookieConsent />
    </div>
  )
}

export default App
