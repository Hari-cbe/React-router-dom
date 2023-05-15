import './App.css';
import {createBrowserRouter, Route, Link, createRoutesFromElements,RouterProvider} from 'react-router-dom';

// Pages
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import {Faq }from './Pages/Help/Faq';
import {Contact }from './Pages/Help/Contact';
import {Careers, loaderConst} from './Pages/Careers';
import { NotFound } from './Pages/404error';

// Layouts
import { RootLayout } from './Layouts/RootLayout';
import { HelpLayout } from './Layouts/HelpLayout';
import { CareerLayout } from './Layouts/CareerLayout';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='career' element={<CareerLayout/>}>
          <Route index element={<Careers/>} loader={loaderConst}/>
        </Route>
        <Route path='help' element={<HelpLayout/>}>
            <Route path='faq' element={<Faq />}/>
            <Route path='contact' element={<Contact />}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
