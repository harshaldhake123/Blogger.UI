import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'signup',
        loadChildren: async () =>
            (await import('./signup/signup.module')).SignupModule,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signup',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
