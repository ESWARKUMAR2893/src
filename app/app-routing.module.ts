import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientdataComponent } from './components/patientdata/patientdata.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AboutusComponent } from './components/aboutus/aboutus.component' ;
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OurdoctorsComponent } from './components/ourdoctors/ourdoctors.component';
import { ContactusComponent } from './components/contactus/contactus.component' ;
import { SignUpComponent } from './components/sign-up/sign-up.component' ;

const routes: Routes = [

  { path: 'faqs', component: FaqsComponent },
  { path: 'patient', component: PatientdataComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'ourdoctors', component: OurdoctorsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'sign-up', component: SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
