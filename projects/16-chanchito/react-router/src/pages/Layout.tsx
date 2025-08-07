import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

function Layout({}: Props) {
    return (
      <>
        <div className='navbar'>
            <NavLink className={({isActive})=>isActive ? "enabled" : "disabled"} to="/">Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
        </div>
          <Outlet></Outlet>
      </>
  )
}

export default Layout