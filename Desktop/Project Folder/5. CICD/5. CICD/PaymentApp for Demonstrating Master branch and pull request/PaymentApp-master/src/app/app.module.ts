import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { MainComponent } from './Pages/main/main.component';
import { TransactionComponent } from './Pages/transaction/transaction.component';
import { PayTransactionComponent } from './Pages/transaction/pay-transaction/pay-transaction.component';
import { ReceiveTransactionComponent } from './Pages/transaction/receive-transaction/receive-transaction.component';
import { PaymentOptionsComponent } from './Pages/transaction/pay-transaction/payment-options/payment-options.component';
import { PaymentDetailsComponent } from './Pages/transaction/pay-transaction/payment-details/payment-details.component';
import { PaymentTypeComponent } from './Pages/transaction/pay-transaction/payment-options/payment-type/payment-type.component';
import { paymentService } from './Services/payment.service'
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './Components/filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HelpComponent } from './Pages/help/help.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { JobsProfiles } from './Shared/JobsProfiles.model';
import { AvailableJobsService } from './Services/availableJobs.service';
import { PageNotFoundComponent } from './Pages/error/page-not-found/page-not-found.component';
import { ErrorComponent } from './Pages/error/error.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TransactionComponent,
    PayTransactionComponent,
    ReceiveTransactionComponent,
    PaymentOptionsComponent,
    PaymentDetailsComponent,
    PaymentTypeComponent,
    FilterComponent,
    HelpComponent,
    CareersComponent,
    PageNotFoundComponent,
    ErrorComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    paymentService,
    AvailableJobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
