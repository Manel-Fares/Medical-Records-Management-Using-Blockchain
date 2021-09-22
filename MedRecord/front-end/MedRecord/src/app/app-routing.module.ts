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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Profil_Personnel', component: Profil_PersonnelComponent },
  { path: 'DMP', component: DMPComponent },
  { path: 'Consultation', component: ConsultationComponent },
  { path: 'Examen', component: ExamenComponent },
  { path: 'Personnel_Medical', component: Personnel_MedicalComponent },
  { path: 'Patient', component: PatientComponent },
  { path: 'Autorisation_Consultation', component: Autorisation_ConsultationComponent },
  { path: 'Autorisation_Examen', component: Autorisation_ExamenComponent },
  { path: 'Autorisation_DMP', component: Autorisation_DMPComponent },
  { path: 'Ajouter_Patient', component: Ajouter_PatientComponent },
  { path: 'Ajouter_Personnel_Medical', component: Ajouter_Personnel_MedicalComponent },
  { path: 'Creer_DMP', component: Creer_DMPComponent },
  { path: 'Creer_Profil_Personnel', component: Creer_Profil_PersonnelComponent },
  { path: 'Enregistrer_Consultation', component: Enregistrer_ConsultationComponent },
  { path: 'Enregistrer_Examen', component: Enregistrer_ExamenComponent },
  { path: 'Retirer_Autorisation_Consultation', component: Retirer_Autorisation_ConsultationComponent },
  { path: 'Retirer_Autorisation_Examen', component: Retirer_Autorisation_ExamenComponent },
  { path: 'Retirer_Autorisation_DMP', component: Retirer_Autorisation_DMPComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
