import React from 'react'
import { SidebarInset, SidebarProvider } from './sidebar'
import { AppSidebar } from '../app-sidebar'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <SidebarInset>
            <Navbar/>
            <main>{children}</main>
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
