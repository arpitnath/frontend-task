import React from 'react'
import { Navbar } from '../components'

const NavbarContainer: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Logo>
          <span
            className='iconify'
            data-icon='carbon:image-search'
            data-inline='false'></span>
        </Navbar.Logo>
        <Navbar.Title title={'Search Images'} />
      </Navbar.Container>
    </Navbar>
  )
}

export default NavbarContainer
