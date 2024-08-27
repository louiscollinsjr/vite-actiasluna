import { Routes, Route } from 'react-router-dom';

import NavigationComponent from './components/Route.Navigation.Component';
import HomeComponent from './components/Route.Home.Component';

import './App.css'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index element={<HomeComponent />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
