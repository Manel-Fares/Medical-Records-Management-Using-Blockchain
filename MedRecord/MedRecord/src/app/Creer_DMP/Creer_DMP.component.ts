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
import { Creer_DMPService } from './Creer_DMP.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-creer_dmp',
  templateUrl: './Creer_DMP.component.html',
  styleUrls: ['./Creer_DMP.component.css'],
  providers: [Creer_DMPService]
})
export class Creer_DMPComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  patient = new FormControl('', Validators.required);
  Nom = new FormControl('', Validators.required);
  Prenom = new FormControl('', Validators.required);
  Email = new FormControl('', Validators.required);
  Date_de_naissance = new FormControl('', Validators.required);
  adresse = new FormControl('', Validators.required);
  Num_mobile = new FormControl('', Validators.required);
  Allergie = new FormControl('', Validators.required);
  groupe_sanguin = new FormControl('', Validators.required);
  fumeur = new FormControl('', Validators.required);
  alcoolique = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceCreer_DMP: Creer_DMPService, fb: FormBuilder) {
    this.myForm = fb.group({
      patient: this.patient,
      Nom: this.Nom,
      Prenom: this.Prenom,
      Email: this.Email,
      Date_de_naissance: this.Date_de_naissance,
      adresse: this.adresse,
      Num_mobile: this.Num_mobile,
      Allergie: this.Allergie,
      groupe_sanguin: this.groupe_sanguin,
      fumeur: this.fumeur,
      alcoolique: this.alcoolique,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCreer_DMP.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
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
   * @param {String} name - the name of the transaction field to update
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
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org.hfn.dmp.Creer_DMP',
      'patient': this.patient.value,
      'Nom': this.Nom.value,
      'Prenom': this.Prenom.value,
      'Email': this.Email.value,
      'Date_de_naissance': this.Date_de_naissance.value,
      'adresse': this.adresse.value,
      'Num_mobile': this.Num_mobile.value,
      'Allergie': this.Allergie.value,
      'groupe_sanguin': this.groupe_sanguin.value,
      'fumeur': this.fumeur.value,
      'alcoolique': this.alcoolique.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'patient': null,
      'Nom': null,
      'Prenom': null,
      'Email': null,
      'Date_de_naissance': null,
      'adresse': null,
      'Num_mobile': null,
      'Allergie': null,
      'groupe_sanguin': null,
      'fumeur': null,
      'alcoolique': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.serviceCreer_DMP.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'patient': null,
        'Nom': null,
        'Prenom': null,
        'Email': null,
        'Date_de_naissance': null,
        'adresse': null,
        'Num_mobile': null,
        'Allergie': null,
        'groupe_sanguin': null,
        'fumeur': null,
        'alcoolique': null,
        'transactionId': null,
        'timestamp': null
      });
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

  updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org.hfn.dmp.Creer_DMP',
      'patient': this.patient.value,
      'Nom': this.Nom.value,
      'Prenom': this.Prenom.value,
      'Email': this.Email.value,
      'Date_de_naissance': this.Date_de_naissance.value,
      'adresse': this.adresse.value,
      'Num_mobile': this.Num_mobile.value,
      'Allergie': this.Allergie.value,
      'groupe_sanguin': this.groupe_sanguin.value,
      'fumeur': this.fumeur.value,
      'alcoolique': this.alcoolique.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceCreer_DMP.updateTransaction(form.get('transactionId').value, this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
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

  deleteTransaction(): Promise<any> {

    return this.serviceCreer_DMP.deleteTransaction(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
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

    return this.serviceCreer_DMP.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'patient': null,
        'Nom': null,
        'Prenom': null,
        'Email': null,
        'Date_de_naissance': null,
        'adresse': null,
        'Num_mobile': null,
        'Allergie': null,
        'groupe_sanguin': null,
        'fumeur': null,
        'alcoolique': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.patient) {
        formObject.patient = result.patient;
      } else {
        formObject.patient = null;
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

      if (result.Email) {
        formObject.Email = result.Email;
      } else {
        formObject.Email = null;
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

      if (result.transactionId) {
        formObject.transactionId = result.transactionId;
      } else {
        formObject.transactionId = null;
      }

      if (result.timestamp) {
        formObject.timestamp = result.timestamp;
      } else {
        formObject.timestamp = null;
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
      'Nom': null,
      'Prenom': null,
      'Email': null,
      'Date_de_naissance': null,
      'adresse': null,
      'Num_mobile': null,
      'Allergie': null,
      'groupe_sanguin': null,
      'fumeur': null,
      'alcoolique': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
