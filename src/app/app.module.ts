import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent as UsersIndexComponent } from './components/users/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent as UsersCardComponent } from './components/users/card/card.component';
import { IndexComponent as ItemsIndexComponent } from './components/items/index/index.component';
import { AddComponent as UsersAddComponent } from './components/users/add/add.component';
import { DetailsComponent as UsersDetailsComponent } from './components/users/details/details.component';
import { CardComponent as ItemsCardComponent } from './components/items/card/card.component';
import { AddComponent as ItemsAddComponent } from './components/items/add/add.component';
import { IndexComponent as OrdersIndexComponent } from './components/orders/index/index.component';
import { CardComponent } from './components/orders/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersIndexComponent,
    UsersCardComponent,
    ItemsIndexComponent,
    UsersAddComponent,
    UsersDetailsComponent,
    ItemsCardComponent,
    ItemsAddComponent,
    OrdersIndexComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
