import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Pages/main/main.component';
import { PayTransactionComponent } from './Pages/transaction/pay-transaction/pay-transaction.component';
import { ReceiveTransactionComponent } from './Pages/transaction/receive-transaction/receive-transaction.component';
import { HelpComponent } from './Pages/help/help.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { PageNotFoundComponent } from './Pages/error/page-not-found/page-not-found.component';
import { TransactionComponent } from './Pages/transaction/transaction.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent},
    { path: 'pay', component: PayTransactionComponent},
    { path: 'receive', component: ReceiveTransactionComponent},
    { path: 'help', component: HelpComponent},
    { path: 'careers', component: CareersComponent},
    { path: 'transaction', component: TransactionComponent},
    { path: '**', component: PageNotFoundComponent}

];

@NgModule({
       imports: [
           RouterModule.forRoot(appRoutes),
       ],
       exports: [ RouterModule]
})
export class AppRoutingModule{
    
}
