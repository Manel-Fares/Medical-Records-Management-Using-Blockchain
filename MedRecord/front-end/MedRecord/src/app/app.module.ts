/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Profil_PersonnelComponent } from './Profil_Personnel/Profil_Personnel.component';
import { DMPComponent } from './DMP/DMP.component';
import { ConsultationComponent } from './Consultation/Consultation.component';
import { ExamenComponent } from './Examen/Examen.component';

import { Personnel_MedicalComponent } from './Personnel_Medical/Personnel_Medical.component';
import { PatientComponent } from './Patient/Patient.component';

import { Autorisation_ConsultationComponent } from './Autorisation_Consultation/Autorisation_Consultation.component';
import { Autorisation_ExamenComponent } from './Autorisation_Examen/Autorisation_Examen.component';
import { Autorisation_DMPComponent } from './Autorisation_DMP/Autorisation_DMP.component';
import { Ajouter_PatientComponent } from './Ajouter_Patient/Ajouter_Patient.component';
import { Ajouter_Personnel_MedicalComponent } from './Ajouter_Personnel_Medical/Ajouter_Personnel_Medical.component';
import { Creer_DMPComponent } from './Creer_DMP/Creer_DMP.component';
import { Creer_Profil_PersonnelComponent } from './Creer_Profil_Personnel/Creer_Profil_Personnel.component';
import { Enregistrer_ConsultationComponent } from './Enregistrer_Consultation/Enregistrer_Consultation.component';
import { Enregistrer_ExamenComponent } from './Enregistrer_Examen/Enregistrer_Examen.component';
import { Retirer_Autorisation_ConsultationComponent } from './Retirer_Autorisation_Consultation/Retirer_Autorisation_Consultation.component';
import { Retirer_Autorisation_ExamenComponent } from './Retirer_Autorisation_Examen/Retirer_Autorisation_Examen.component';
import { Retirer_Autorisation_DMPComponent } from './Retirer_Autorisation_DMP/Retirer_Autorisation_DMP.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Profil_PersonnelComponent,
    DMPComponent,
    ConsultationComponent,
    ExamenComponent,
    Personnel_MedicalComponent,
    PatientComponent,
    Autorisation_ConsultationComponent,
    Autorisation_ExamenComponent,
    Autorisation_DMPComponent,
    Ajouter_PatientComponent,
    Ajouter_Personnel_MedicalComponent,
    Creer_DMPComponent,
    Creer_Profil_PersonnelComponent,
    Enregistrer_ConsultationComponent,
    Enregistrer_ExamenComponent,
    Retirer_Autorisation_ConsultationComponent,
    Retirer_Autorisation_ExamenComponent,
    Retirer_Autorisation_DMPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
