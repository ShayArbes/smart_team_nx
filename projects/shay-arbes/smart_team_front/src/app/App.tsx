import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './features/global/layout/Layout';
import { CssBaseline } from '@mui/material';
import Home from './features/global/pages/Home';
import DealInfo from './features/acquisitions/pages/DealInfo';
import { IndexContextProvider } from './features/acquisitions/Context/ContextProvider';
import Deals from './features/acquisitions/pages/Deals';

import SignUp from './features/users/pages/SignUp';
import Login from './features/users/pages/Login';
import CreateDealform from './features/acquisitions/pages/CreateDealform';

function App() {
  return (
    <>
      <CssBaseline />
      <IndexContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/sign_up" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create_deal" element={<CreateDealform />} />

              <Route path="/deal_info" element={<DealInfo />} />

              <Route path="/a" element={<Deals />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </IndexContextProvider>
    </>
  );
}

export default App;
