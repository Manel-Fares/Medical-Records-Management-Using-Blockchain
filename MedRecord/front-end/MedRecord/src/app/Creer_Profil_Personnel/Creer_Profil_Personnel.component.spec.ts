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
import { Creer_Profil_PersonnelComponent } from './Creer_Profil_Personnel.component';
import {Creer_Profil_PersonnelService} from './Creer_Profil_Personnel.service';

describe('Creer_Profil_PersonnelComponent', () => {
  let component: Creer_Profil_PersonnelComponent;
  let fixture: ComponentFixture<Creer_Profil_PersonnelComponent>;

  let mockCreer_Profil_PersonnelService;
  let mockDataService

  beforeEach(async(() => {

    mockCreer_Profil_PersonnelService = sinon.createStubInstance(Creer_Profil_PersonnelService);
    mockCreer_Profil_PersonnelService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ Creer_Profil_PersonnelComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: Creer_Profil_PersonnelService, useValue: mockCreer_Profil_PersonnelService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(Creer_Profil_PersonnelComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

