import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmaTransfComponent } from './confirma-transf/confirma-transf.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PaginaExtratoComponent } from './PaginaExtrato/PaginaExtrato.component';
import { PaginaHomeComponent } from './PaginaHome/PaginaHome.component';
import { PaginaLoginComponent } from './PaginaLogin/PaginaLogin.component';
import { PaginaTransferenciaComponent } from './PaginaTransferencia/PaginaTransferencia.component';
import { EstaLogadoGuard } from './shared/guards/logado/esta-logado.guard';
import { TransferenciaSucessoComponent } from './transferencia-sucesso/transferencia-sucesso.component';
import { TransferenciaValorComponent } from './transferencia-valor/transferencia-valor.component';
import { TransferindoComponent } from './transferindo/transferindo.component';
import { NaoEstaLogadoGuard } from './shared/guards/nao-logado/nao-esta-logado.guard';

const routes: Routes = [{
    path: 'login',
    component: PaginaLoginComponent,
    canActivate: [NaoEstaLogadoGuard],
}, {
    path: 'home',
    component:  PaginaHomeComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'transferencia',
    component: PaginaTransferenciaComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'confirmatransferencia',
    component: ConfirmaTransfComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'trasferenciaValor',
    component: TransferenciaValorComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'trasferindo',
    component: TransferindoComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'trasferSucesso',
    component: TransferenciaSucessoComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'extrato',
    component: PaginaExtratoComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
}, {
    path: '**',
    component: NaoEncontradoComponent,
}];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
