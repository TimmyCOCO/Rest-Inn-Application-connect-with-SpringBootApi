import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"

import PropertyListPage from "./pages/PropertyListPage"
import PropertyTypePage from './pages/PropertyTypePage'

import PropertyDescPage from './pages/PropertyDescPage'


function App() {

  // Functions

  return (
    <div>

      <BrowserRouter>
        <Header>
          <Routes>

            <Route exact path='/' element={<HomePage />} />
            <Route path='/SignUp' element={<SignUpPage />} />
            <Route path='/SignIn' element={<SignInPage />} />

            {/* display all properties */}
            <Route exact path='/PropertyList' element={<PropertyListPage />} />

            {/* display the specific type of properties */}
            <Route path='/PropertyType/:type' element={<PropertyTypePage />} />
            
            <Route path="/PropertyDesc/:id" element={<PropertyDescPage />} />

          </Routes>
        </Header>
      </BrowserRouter>

    </div >
  );
}

export default App;
