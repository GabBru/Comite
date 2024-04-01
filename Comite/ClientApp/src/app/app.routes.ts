import { Routes } from '@angular/router';
import { CreateComponent } from './frames/create/create.component';
import { ComitedosComponent } from './frames/comitedos/comitedos.component';
import { EditComponent } from './frames/edit/edit.component';
import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'edit', component: EditComponent },
    { path: 'comitedos', component: ComitedosComponent, canActivate: [AuthenticatedGuard] },
    { path: '', component: ComitedosComponent },
    { path: '**', component: PageNotFoundComponent }
];
