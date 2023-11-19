import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'users',
		loadChildren: async () =>
			(await import('./features/users/users.module')).UsersModule,
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'signup',
	},
];
