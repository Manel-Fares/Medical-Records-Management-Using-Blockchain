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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../data.service';
import { Retirer_Autorisation_ConsultationComponent } from './Retirer_Autorisation_Consultation.component';
import {Retirer_Autorisation_ConsultationService} from './Retirer_Autorisation_Consultation.service';

describe('Retirer_Autorisation_ConsultationComponent', () => {
  let component: Retirer_Autorisation_ConsultationComponent;
  let fixture: ComponentFixture<Retirer_Autorisation_ConsultationComponent>;

  let mockRetirer_Autorisation_ConsultationService;
  let mockDataService

  beforeEach(async(() => {

    mockRetirer_Autorisation_ConsultationService = sinon.createStubInstance(Retirer_Autorisation_ConsultationService);
    mockRetirer_Autorisation_ConsultationService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ Retirer_Autorisation_ConsultationComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: Retirer_Autorisation_ConsultationService, useValue: mockRetirer_Autorisation_ConsultationService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(Retirer_Autorisation_ConsultationComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

