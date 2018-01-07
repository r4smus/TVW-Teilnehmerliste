import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { ManagementComponent } from './management/management.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { CreateMemberComponent } from './management/create-member/create-member.component';



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
    },
    {
        path: 'createMember',
        component: CreateMemberComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}