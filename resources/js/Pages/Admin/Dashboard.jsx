import { Button } from '@/Components/ui/button'
import DatePicker from '@/Components/ui/date-picker'
import Layout from '@/Components/ui/Layout'
import Chart from '@/Components/ui/chart';
import SummaryCard from '@/Components/ui/summary-card'
import { Activity, CreditCard, DollarSign, Filter, icons, User } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import RecentSales from '@/Components/ui/recent-sales';
import { Head } from '@inertiajs/react';

const summaryData = [
    {id:1, title: "Total Revenue", icon: DollarSign, value: '$45,345.45' },
    {id:2, title: "Subscriptions", icon: User, value: '$45,345.45' },
    {id:3, title: "Sales", icon: CreditCard, value: '+45,434' },
    {id:4, title: "Active Now", icon: Activity, value: '+434' },

]
const Dashboard = () => {
    return (

        <Layout>
            <Head title='Dashboard' />
            <div className='p-5 flex items-end justify-between mb-7'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <div className='flex items-center gap-2'>
                    <DatePicker />
                    <Button>
                        <Filter className='2-4 h-4 mr-1' />Filter
                    </Button>
                </div>
            </div>

            <div className="p-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {summaryData.map((item) => (
                    <SummaryCard
                        key={item.id} // Use unique id as key
                        title={item.title}
                        icon={item.icon}
                        value={item.value}
                    />
                ))}
            </div>
            <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Chart />
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>
                            you made 256 Sales this month
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentSales/>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}

export default Dashboard
