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
import { Enregistrer_ExamenComponent } from './Enregistrer_Examen.component';
import {Enregistrer_ExamenService} from './Enregistrer_Examen.service';

describe('Enregistrer_ExamenComponent', () => {
  let component: Enregistrer_ExamenComponent;
  let fixture: ComponentFixture<Enregistrer_ExamenComponent>;

  let mockEnregistrer_ExamenService;
  let mockDataService

  beforeEach(async(() => {

    mockEnregistrer_ExamenService = sinon.createStubInstance(Enregistrer_ExamenService);
    mockEnregistrer_ExamenService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ Enregistrer_ExamenComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: Enregistrer_ExamenService, useValue: mockEnregistrer_ExamenService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(Enregistrer_ExamenComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

