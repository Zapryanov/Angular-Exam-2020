import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { UserService } from '../user/user.service';
import { storageServiceProvider } from './storage.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    storageServiceProvider
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
