import { Outlet } from 'react-router-dom'

import AppNavbar from '../components/AppNavbar'

const AppLayout = ({mainMenu, setMainMenu}) => {

  return (
    <>
      <AppNavbar mainMenu={mainMenu} setMainMenu={setMainMenu} />
      <div
        className='mt-2 border border-black rounded-2 p-2 bg-primary-subtle'
        style={{ height: '300px' }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
