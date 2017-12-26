import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { ManagementComponent } from './management/management.component';
import { AddTrainingComponent } from './add-training/add-training.component';



const routes: Routes = [
    {
        path: '',
        component: MemberListComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'addTraining',
        component: AddTrainingComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}