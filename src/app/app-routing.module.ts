import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ClientesComponent } from './clientes/clientes.component';
import { JogosComponent } from './jogos/jogos.component';
import { NoticiasdosgamesComponent } from './noticiasdosgames/noticiasdosgames.component';

const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  {path: "principal", component: PrincipalComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "jogos", component: JogosComponent},
  {path: "noticiasdosgames", component: NoticiasdosgamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
