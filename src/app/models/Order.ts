import { Item } from './Item';

export interface Order {
  id?: string;
  user?: string;
  items?: Item[];
}
