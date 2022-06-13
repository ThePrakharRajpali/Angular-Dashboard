import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent as UsersIndexComponent } from './components/users/index/index.component';
import { AddComponent as UsersAddComponent } from './components/users/add/add.component';
import { DetailsComponent as UsersDetailsComponent } from './components/users/details/details.component';
import { IndexComponent as ItemsIndexComponent } from './components/items/index/index.component';
import { AddComponent as ItemsAddComponent } from './components/items/add/add.component';
import { IndexComponent as OrdersIndexComponent } from './components/orders/index/index.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent },
  { path: 'users/add', component: UsersAddComponent },
  { path: 'users/:id', component: UsersDetailsComponent },
  { path: 'items', component: ItemsIndexComponent },
  { path: 'items/add', component: ItemsAddComponent },
  { path: 'orders', component: OrdersIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
