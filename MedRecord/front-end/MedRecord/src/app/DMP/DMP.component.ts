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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DMPService } from './DMP.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dmp',
  templateUrl: './DMP.component.html',
  styleUrls: ['./DMP.component.css'],
  providers: [DMPService]
})
export class DMPComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  patient = new FormControl('', Validators.required);
  Allergie = new FormControl('', Validators.required);
  groupe_sanguin = new FormControl('', Validators.required);
  fumeur = new FormControl('', Validators.required);
  alcoolique = new FormControl('', Validators.required);
  ID = new FormControl('', Validators.required);
  Nom = new FormControl('', Validators.required);
  Prenom = new FormControl('', Validators.required);
  Date_de_naissance = new FormControl('', Validators.required);
  adresse = new FormControl('', Validators.required);
  Num_mobile = new FormControl('', Validators.required);
  Email = new FormControl('', Validators.required);

  constructor(public serviceDMP: DMPService, fb: FormBuilder) {
    this.myForm = fb.group({
      patient: this.patient,
      Allergie: this.Allergie,
      groupe_sanguin: this.groupe_sanguin,
      fumeur: this.fumeur,
      alcoolique: this.alcoolique,
      ID: this.ID,
      Nom: this.Nom,
      Prenom: this.Prenom,
      Date_de_naissance: this.Date_de_naissance,
      adresse: this.adresse,
      Num_mobile: this.Num_mobile,
      Email: this.Email
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceDMP.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.hfn.dmp.DMP',
      'patient': this.patient.value,
      'Allergie': this.Allergie.value,
      'groupe_sanguin': this.groupe_sanguin.value,
      'fumeur': this.fumeur.value,
      'alcoolique': this.alcoolique.value,
      'ID': this.ID.value,
      'Nom': this.Nom.value,
      'Prenom': this.Prenom.value,
      'Date_de_naissance': this.Date_de_naissance.value,
      'adresse': this.adresse.value,
      'Num_mobile': this.Num_mobile.value,
      'Email': this.Email.value
    };

    this.myForm.setValue({
      'patient': null,
      'Allergie': null,
      'groupe_sanguin': null,
      'fumeur': null,
      'alcoolique': null,
      'ID': null,
      'Nom': null,
      'Prenom': null,
      'Date_de_naissance': null,
      'adresse': null,
      'Num_mobile': null,
      'Email': null
    });

    return this.serviceDMP.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'patient': null,
        'Allergie': null,
        'groupe_sanguin': null,
        'fumeur': null,
        'alcoolique': null,
        'ID': null,
        'Nom': null,
        'Prenom': null,
        'Date_de_naissance': null,
        'adresse': null,
        'Num_mobile': null,
        'Email': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.hfn.dmp.DMP',
      'patient': this.patient.value,
      'Allergie': this.Allergie.value,
      'groupe_sanguin': this.groupe_sanguin.value,
      'fumeur': this.fumeur.value,
      'alcoolique': this.alcoolique.value,
      'Nom': this.Nom.value,
      'Prenom': this.Prenom.value,
      'Date_de_naissance': this.Date_de_naissance.value,
      'adresse': this.adresse.value,
      'Num_mobile': this.Num_mobile.value,
      'Email': this.Email.value
    };

    return this.serviceDMP.updateAsset(form.get('ID').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceDMP.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceDMP.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'patient': null,
        'Allergie': null,
        'groupe_sanguin': null,
        'fumeur': null,
        'alcoolique': null,
        'ID': null,
        'Nom': null,
        'Prenom': null,
        'Date_de_naissance': null,
        'adresse': null,
        'Num_mobile': null,
        'Email': null
      };

      if (result.patient) {
        formObject.patient = result.patient;
      } else {
        formObject.patient = null;
      }

      if (result.Allergie) {
        formObject.Allergie = result.Allergie;
      } else {
        formObject.Allergie = null;
      }

      if (result.groupe_sanguin) {
        formObject.groupe_sanguin = result.groupe_sanguin;
      } else {
        formObject.groupe_sanguin = null;
      }

      if (result.fumeur) {
        formObject.fumeur = result.fumeur;
      } else {
        formObject.fumeur = null;
      }

      if (result.alcoolique) {
        formObject.alcoolique = result.alcoolique;
      } else {
        formObject.alcoolique = null;
      }

      if (result.ID) {
        formObject.ID = result.ID;
      } else {
        formObject.ID = null;
      }

      if (result.Nom) {
        formObject.Nom = result.Nom;
      } else {
        formObject.Nom = null;
      }

      if (result.Prenom) {
        formObject.Prenom = result.Prenom;
      } else {
        formObject.Prenom = null;
      }

      if (result.Date_de_naissance) {
        formObject.Date_de_naissance = result.Date_de_naissance;
      } else {
        formObject.Date_de_naissance = null;
      }

      if (result.adresse) {
        formObject.adresse = result.adresse;
      } else {
        formObject.adresse = null;
      }

      if (result.Num_mobile) {
        formObject.Num_mobile = result.Num_mobile;
      } else {
        formObject.Num_mobile = null;
      }

      if (result.Email) {
        formObject.Email = result.Email;
      } else {
        formObject.Email = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'patient': null,
      'Allergie': null,
      'groupe_sanguin': null,
      'fumeur': null,
      'alcoolique': null,
      'ID': null,
      'Nom': null,
      'Prenom': null,
      'Date_de_naissance': null,
      'adresse': null,
      'Num_mobile': null,
      'Email': null
      });
  }

}
