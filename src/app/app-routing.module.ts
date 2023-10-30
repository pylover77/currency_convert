import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListarSimbolosComponent } from './listar-simbolos/listar-simbolos.component';
import { ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import { HistoricoConversaoComponent } from './historico-conversao/historico-conversao.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: []
  },
  {
    path:'listar-simbolos', component: ListarSimbolosComponent
  },
  {
    path:'converter-moedas', component: ConverterMoedasComponent
  },
  {
    path:'historico-conversao', component: HistoricoConversaoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
