import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { NavUser } from '../nav-user'

const user={
    id:1,
    name:'admin',
    email:'admin@admin.com',
    avatar:'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
}
const Navbar = () => {
    return (
        <header className='sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-16 px-3'>
            <SidebarTrigger />
            <div className="ml-auto">
                <NavUser user={user}/>
            </div>

        </header>
    )
}

export default Navbar
