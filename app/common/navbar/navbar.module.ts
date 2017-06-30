import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import {MODULE_ROUTES} from "./navbar.routes";

@NgModule({
    imports: [ RouterModule.forChild(MODULE_ROUTES), CommonModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})
export class NavbarModule {}