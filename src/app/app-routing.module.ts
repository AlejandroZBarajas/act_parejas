
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './characters-module/characters-page/characters-page.component';
import { TransformationPageComponent } from './trans/components/transformation-page/transformation-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersPageComponent },
  { path: 'transformations/:id', component: TransformationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

