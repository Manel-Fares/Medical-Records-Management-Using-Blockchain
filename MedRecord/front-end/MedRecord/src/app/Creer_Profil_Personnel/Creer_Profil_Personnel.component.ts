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
import { Creer_Profil_PersonnelService } from './Creer_Profil_Personnel.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-creer_profil_personnel',
  templateUrl: './Creer_Profil_Personnel.component.html',
  styleUrls: ['./Creer_Profil_Personnel.component.css'],
  providers: [Creer_Profil_PersonnelService]
})
export class Creer_Profil_PersonnelComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  personnel_medical = new FormControl('', Validators.required);
  Nom = new FormControl('', Validators.required);
  Prenom = new FormControl('', Validators.required);
  Email = new FormControl('', Validators.required);
  Date_de_naissance = new FormControl('', Validators.required);
  adresse = new FormControl('', Validators.required);
  Num_mobile = new FormControl('', Validators.required);
  department = new FormControl('', Validators.required);
  grade = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceCreer_Profil_Personnel: Creer_Profil_PersonnelService, fb: FormBuilder) {
    this.myForm = fb.group({
      personnel_medical: this.personnel_medical,
      Nom: this.Nom,
      Prenom: this.Prenom,
      Email: this.Email,
      Date_de_naissance: this.Date_de_naissance,
      adresse: this.adresse,
      Num_mobile: this.Num_mobile,
      department: this.department,
      grade: this.grade,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCreer_Profil_Personnel.getAll()
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
      $class: 'org.hfn.dmp.Creer_Profil_Personnel',
      'personnel_medical': this.personnel_medical.value,
      'Nom': this.Nom.value,
      'Prenom': this.Prenom.value,
      'Email': this.Email.value,
      'Date_de_naissance': this.Date_de_naissance.value,
      'adresse': this.adresse.value,
      'Num_mobile': this.Num_mobile.value,
      'department': this.department.value,
      'grade': this.grade.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'personnel_medical': null,
      'Nom': null,
      'Prenom': null,
      'Email': null,
      'Date_de_naissance': null,
      'adresse': null,
      'Num_mobile': null,
      'department': null,
      'grade': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.serviceCreer_Profil_Personnel.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'personnel_medical': null,
        'Nom': null,
        'Prenom': null,
        'Email': null,
        'Date_de_naissance': null,
        'adresse': null,
        'Num_mobile': null,
        'department': null,
        'grade': null,
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
      $class: 'org.hfn.dmp.Creer_Profil_Personnel',
      'personnel_medical': this.personnel_medical.value,
      'Nom': this.Nom.value,
      'Prenom': this.Prenom.value,
      'Email': this.Email.value,
      'Date_de_naissance': this.Date_de_naissance.value,
      'adresse': this.adresse.value,
      'Num_mobile': this.Num_mobile.value,
      'department': this.department.value,
      'grade': this.grade.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceCreer_Profil_Personnel.updateTransaction(form.get('transactionId').value, this.Transaction)
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

    return this.serviceCreer_Profil_Personnel.deleteTransaction(this.currentId)
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

    return this.serviceCreer_Profil_Personnel.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'personnel_medical': null,
        'Nom': null,
        'Prenom': null,
        'Email': null,
        'Date_de_naissance': null,
        'adresse': null,
        'Num_mobile': null,
        'department': null,
        'grade': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.personnel_medical) {
        formObject.personnel_medical = result.personnel_medical;
      } else {
        formObject.personnel_medical = null;
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

      if (result.department) {
        formObject.department = result.department;
      } else {
        formObject.department = null;
      }

      if (result.grade) {
        formObject.grade = result.grade;
      } else {
        formObject.grade = null;
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
      'personnel_medical': null,
      'Nom': null,
      'Prenom': null,
      'Email': null,
      'Date_de_naissance': null,
      'adresse': null,
      'Num_mobile': null,
      'department': null,
      'grade': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}