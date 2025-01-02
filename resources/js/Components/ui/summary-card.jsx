import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

const SummaryCard = ({ title, icon: Icon, value }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>{title}</CardTitle>
                <Icon className='h-4 w-4 text-muted-foreground'/>
            </CardHeader>
            <CardContent>
            <div className='text-2xl font-bold'>{value}</div>
            <p className='text-xs text-muted-foreground'>+20% form last month </p>
            </CardContent>

        </Card>
    )
}

export default SummaryCard
