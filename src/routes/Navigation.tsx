import { BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React Logo' />
                <ul>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''  } >Home</NavLink>
                    {/* <NavLink to="/home" >Home</NavLink> */}
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''  } >About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''  } >Users</NavLink>
                </li>
            </ul>
            </nav>
            <Routes>
                <Route path='about' element={<h1>About Page</h1>}></Route>
                <Route path='users' element={<h1>Users Page</h1>}></Route>
                <Route path='home' element={<h1>Home Page</h1>}></Route>

                <Route path='/*' element={ <Navigate to='/home' replace></Navigate>}></Route>
                
            </Routes>
            
        </div>
    </BrowserRouter>
  )
}
