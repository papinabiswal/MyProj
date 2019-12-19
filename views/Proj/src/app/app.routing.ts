import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OrderAcknowledgmentComponent } from './order-acknowledgment/order-acknowledgment.component';
import { OAAmendmentComponent } from './oa-amendment/oa-amendment.component';
import { EnquiryReviewComponent } from './enquiry-review/enquiry-review.component';
import { MonitoringSalesProcessComponent } from './monitoring-sales-process/monitoring-sales-process.component';
import { ContractReviewComponent } from './contract-review/contract-review.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { OrderReviewComponent } from './order-review/order-review.component';

const routes: Routes =[
  {path :'login',component:LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'orderAcknowledgmentComponent',component: OrderAcknowledgmentComponent},
  {path: 'oAAmendmentComponent',component: OAAmendmentComponent},
  {path: 'enquiryReviewComponent',component: EnquiryReviewComponent},
  {path: 'monitoringSalesProcessComponent',component: MonitoringSalesProcessComponent},
  {path: 'contractReviewComponent',component: ContractReviewComponent},
  {path: 'enquiry',component: EnquiryComponent},
  {path: 'orderReview',component: OrderReviewComponent},
  {path :'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
