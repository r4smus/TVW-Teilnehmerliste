import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { ManagementComponent } from './management/management.component';



const routes: Routes = [
    {
        path: '',
        component: MemberListComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}