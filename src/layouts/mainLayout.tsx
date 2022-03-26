import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { Header, SideNav, Footer } from '../components'

interface ILayoutChildren {
  children: ReactElement
}

const MainLayout: React.FC<ILayoutChildren> = ({ children }) => {
  const [isOpenSideNav, setIsOpenSideNav] = useState<boolean>(false);

  const handleClickMenu = () => {
    setIsOpenSideNav(!isOpenSideNav)
  }

  return (
    <>
      {
        isOpenSideNav && <SideNav handleClickMenu={handleClickMenu} />
      }
      <Header handleClickMenu={handleClickMenu} />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout