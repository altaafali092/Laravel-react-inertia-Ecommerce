import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const sales = [
    {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        paidAmount: "100.00",
        avatar: "AJ",
    },
    {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        paidAmount: "100.00",
        avatar: "AJ",
    },
    {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        paidAmount: "100.00",
        avatar: "AJ",
    },
    {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        paidAmount: "100.00",
        avatar: "AJ",
    },
    {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        paidAmount: "100.00",
        avatar: "AJ",
    },

]
const RecentSales = () => {
    return (
        <div className='space-y-8'>
            {sales.map((sale) => (
                <div key={sale.name} className='flex items-center'>
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="" alt="" />
                        <AvatarFallback>{sale.avatar}</AvatarFallback>
                    </Avatar>
                    <div className='ml-4 space-y-1'>
                        <p className='font-medium leading-none'>{sale.name}</p>
                        <p className='text-muted-foreground'>{sale.email}</p>
                    </div>
                    <div className='ml-auto font-medium'>
                        ${sale.paidAmount}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default RecentSales
