import mcd from '../Assets/TableImages/MCD.png'
import tesla from '../Assets/TableImages/tesla.png'
export const orders = [
  {
    id: 1,
    logo: mcd,
    brandName: 'MCdonalds',
    title: 'Big mac Jumbo',
    activeOrders: 34,
    amount: 345,
    date: 1685718283177,
    placedOn: '2023-06-19',

    status: 'pending',
  },
  {
    id: 2,
    logo: tesla,
    brandName: 'Tesla',
    title: 'Big mac Jumbo',
    activeOrders: 45,
    amount: 675,
    placedOn: '2023-06-18',
    date: 1685718267329,
    status: 'delivered',
  },
  {
    id: 3,
    logo: mcd,
    brandName: 'MCdonalds',
    title: 'Big mac Jumbo',
    activeOrders: 134,
    amount: 1345,
    placedOn: '2023-06-17',
    date: 1685718235833,
    status: 'confirmed',
  },
]
