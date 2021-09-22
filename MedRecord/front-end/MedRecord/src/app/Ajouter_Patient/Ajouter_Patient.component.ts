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
import { Ajouter_PatientService } from './Ajouter_Patient.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-ajouter_patient',
  templateUrl: './Ajouter_Patient.component.html',
  styleUrls: ['./Ajouter_Patient.component.css'],
  providers: [Ajouter_PatientService]
})
export class Ajouter_PatientComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  autorisation_consultation = new FormControl('', Validators.required);
  autorisation_Examen = new FormControl('', Validators.required);
  Autorisation_DMP = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceAjouter_Patient: Ajouter_PatientService, fb: FormBuilder) {
    this.myForm = fb.group({
      autorisation_consultation: this.autorisation_consultation,
      autorisation_Examen: this.autorisation_Examen,
      Autorisation_DMP: this.Autorisation_DMP,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceAjouter_Patient.getAll()
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
      $class: 'org.hfn.dmp.Ajouter_Patient',
      'autorisation_consultation': this.autorisation_consultation.value,
      'autorisation_Examen': this.autorisation_Examen.value,
      'Autorisation_DMP': this.Autorisation_DMP.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'autorisation_consultation': null,
      'autorisation_Examen': null,
      'Autorisation_DMP': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.serviceAjouter_Patient.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'autorisation_consultation': null,
        'autorisation_Examen': null,
        'Autorisation_DMP': null,
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
      $class: 'org.hfn.dmp.Ajouter_Patient',
      'autorisation_consultation': this.autorisation_consultation.value,
      'autorisation_Examen': this.autorisation_Examen.value,
      'Autorisation_DMP': this.Autorisation_DMP.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceAjouter_Patient.updateTransaction(form.get('transactionId').value, this.Transaction)
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

    return this.serviceAjouter_Patient.deleteTransaction(this.currentId)
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

    return this.serviceAjouter_Patient.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'autorisation_consultation': null,
        'autorisation_Examen': null,
        'Autorisation_DMP': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.autorisation_consultation) {
        formObject.autorisation_consultation = result.autorisation_consultation;
      } else {
        formObject.autorisation_consultation = null;
      }

      if (result.autorisation_Examen) {
        formObject.autorisation_Examen = result.autorisation_Examen;
      } else {
        formObject.autorisation_Examen = null;
      }

      if (result.Autorisation_DMP) {
        formObject.Autorisation_DMP = result.Autorisation_DMP;
      } else {
        formObject.Autorisation_DMP = null;
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
      'autorisation_consultation': null,
      'autorisation_Examen': null,
      'Autorisation_DMP': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
