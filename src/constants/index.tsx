import type { InavigationType } from '@ttype';
export const navigation: InavigationType[] = [
    {
        path: "/",
        title: "Dashboard",
        icon: "bi bi-ui-checks-grid",
        role: ["admin", "employee"]
    },
    {
        path: "/orders",
        title: "New Order",
        icon: "bi bi-cart-check-fill",
        role: ["admin", "employee"]
    },
    {
        path: "/leads",
        title: "Leads",
        icon: "bi bi-people-fill",
        role: ["admin", "employee"]
    },
    
    
    {
        path: "/order-completed",
        title: "New Completed",
        icon: "bi bi-check-circle-fill",
        role: ["admin", "employee"]
    },
    {
        path: "/orders-cenceld",
        title: "New Conceled",
        icon: "bi bi-x-circle-fill",
        role: ["admin", "employee"]
    },
];
export const statCard = [
    {
        title: "Leads",
        number: 3125,
        icon:"bi bi-fire",
        color: "#88D66C"
    },
    {
        title: "New Order",
        number: 3125,
        icon: "bi bi-cart-check-fill",
        color: "#F6EFBD"
    },
    {
        title: "New Completed",
        number: 1355,
        icon: "bi bi-check-circle-fill",
        color:"#C0EBA6"
    },
    {
        title: "New Conceled",
        number: 2525,
        icon: "bi bi-x-circle-fill",
        color: "#FF8A8A"
    },
    {
        title: "Employees",
        number: 2525,
        icon: "bi bi-people-fill",
        color: "#78B7D0"
    },
    
]

export const getData = () => {
    return [
        { quarter: "January", year: 2024, month: 1, totalPrice: 15200 },
        { quarter: "February", year: 2024, month: 2, totalPrice: 14300 },
        { quarter: "March", year: 2024, month: 3, totalPrice: 16000 },
        { quarter: "April", year: 2024, month: 4, totalPrice: 15750 },
        { quarter: "May", year: 2024, month: 5, totalPrice: 14900 },
        { quarter: "June", year: 2024, month: 6, totalPrice: 16500 },
        { quarter: "July", year: 2024, month: 7, totalPrice: 15500 },
        { quarter: "August", year: 2024, month: 8, totalPrice: 16800 },
        { quarter: "September", year: 2024, month: 9, totalPrice: 14000 },
        { quarter: "October", year: 2024, month: 10, totalPrice: 17200 },
        { quarter: "November", year: 2024, month: 11, totalPrice: 15050 },
        { quarter: "December", year: 2024, month: 12, totalPrice: 15800 }
      ]
      
}

export const partnerTypes = [
    {
        label: 'UZUM',
        value: 'UZUM',
        key: 'UZUM'
    },
    {
        label: 'ALIF',
        value: 'ALIF',
        key: 'ALIF'
    },
    {
        label: 'OPEN CARD',
        value: 'OPEN CARD',
        key: 'OPEN CARD'
    },
    {
        label: 'ZOOD PAY',
        value: 'ZOOD PAY',
        key: 'ZOOD PAY'
    },
]