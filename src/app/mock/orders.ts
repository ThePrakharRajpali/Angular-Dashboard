import { Order } from '../models/Order';
import { Item } from '../models/Item';
import { User } from '../models/User';
import { ITEMS } from './items';
import { USERS } from './users';

export const ORDERS: Order[] = [
  {
    id: 'O001',
    user: 'U001',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O002',
    user: 'U001',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O003',
    user: 'U002',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O004',
    user: 'U003',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O005',
    user: 'U005',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O006',
    user: 'U006',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O007',
    user: 'U004',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O008',
    user: 'U004',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O009',
    user: 'U002',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O010',
    user: 'U003',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
  {
    id: 'O011',
    user: 'U005',
    items: [ITEMS[0], ITEMS[1], ITEMS[2]],
  },
];
