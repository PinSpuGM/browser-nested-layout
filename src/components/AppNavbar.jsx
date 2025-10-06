import { useEffect, useRef } from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppNavbar = ({ mainMenu, setMainMenu }) => {
  useEffect(() => {
    if (mainMenu === 'home') homeRef.current.click()
    else if (mainMenu === 'members') membersRef.current.click()
    else if (mainMenu === 'products') productsRef.current.click()
    else if (mainMenu === 'cartsRef') cartsRef.current.click()
    else if (mainMenu === 'aboutRef') aboutRef.current.click()
  }, [mainMenu])

  const homeRef = useRef()
  const membersRef = useRef()
  const productsRef = useRef()
  const cartsRef = useRef()
  const aboutRef = useRef()

  return (
    <div className='d-flex gap-2 justify-content-center'>
      <Link to={'/'}>
        <Button
          variant={mainMenu === 'home' ? 'primary' : 'outline-primary'}
          onClick={() => setMainMenu('home')}
          ref={homeRef}
        >
          Home
        </Button>
      </Link>
      <Link to={'/members'}>
        <Button
          variant={mainMenu === 'members' ? 'primary' : 'outline-primary'}
          onClick={() => setMainMenu('members')}
          ref={membersRef}
        >
          Members
        </Button>
      </Link>
      <Link to={'/products/hardwares'}>
        <Button
          variant={mainMenu === 'products' ? 'primary' : 'outline-primary'}
          onClick={() => setMainMenu('products')}
          ref={productsRef}
        >
          Products
        </Button>
      </Link>
      <Link to={'/carts'}>
        <Button
          variant={mainMenu === 'carts' ? 'primary' : 'outline-primary'}
          onClick={() => setMainMenu('carts')}
          ref={cartsRef}
        >
          Carts
        </Button>
      </Link>
      <Link to={'/about'}>
        <Button
          variant={mainMenu === 'about' ? 'primary' : 'outline-primary'}
          onClick={() => setMainMenu('about')}
          ref={aboutRef}
        >
          About
        </Button>
      </Link>
    </div>
  )
}

export default AppNavbar
