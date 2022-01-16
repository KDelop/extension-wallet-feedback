export interface AppData {
    id: string
    title: string
    description: string
    user_amount: number
    image: string
    details: Detail
    type: string
    link: string
    activities: Array<Activity>
}

interface Detail {
    overview: string
    company_link: string
}

interface Activity {
    user_id: string
    description: string
    timestamp: Date
}