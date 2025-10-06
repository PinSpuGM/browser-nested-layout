import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'

const ProductNavbar = ({ productMenu, setProductMenu }) => {
  
  return (
    <div>
      <div className='d-flex flex-column gap-2'>
        <Link to={'hardwares'}>
          <Button
            variant={
              productMenu === 'hardwares' ? 'success' : 'outline-success'
            }
            className='w-100'
            onClick={() => setProductMenu('hardwares')}
          >
            Hardwares
          </Button>
        </Link>
        <Link to={'softwares'}>
          <Button
            variant={
              productMenu === 'softwares' ? 'success' : 'outline-success'
            }
            className='w-100'
            onClick={() => setProductMenu('softwares')}
          >
            Softwares
          </Button>
        </Link>
        <Link to={'others'}>
          <Button
            variant={productMenu === 'others' ? 'success' : 'outline-success'}
            className='w-100'
            onClick={() => setProductMenu('others')}
          >
            Others
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProductNavbar
