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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for MedRecord', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be MedRecord', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('MedRecord');
    })
  });

  it('network-name should be medrecord@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('medrecord@0.0.1.bna');
    });
  });

  it('navbar-brand should be MedRecord',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('MedRecord');
    });
  });

  
    it('Profil_Medecin component should be loadable',() => {
      page.navigateTo('/Profil_Medecin');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Profil_Medecin');
      });
    });

    it('Profil_Medecin table should have 11 columns',() => {
      page.navigateTo('/Profil_Medecin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });
  
    it('DMP component should be loadable',() => {
      page.navigateTo('/DMP');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DMP');
      });
    });

    it('DMP table should have 13 columns',() => {
      page.navigateTo('/DMP');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(13); // Addition of 1 for 'Action' column
      });
    });
  
    it('Consultation component should be loadable',() => {
      page.navigateTo('/Consultation');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Consultation');
      });
    });

    it('Consultation table should have 7 columns',() => {
      page.navigateTo('/Consultation');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('Examen component should be loadable',() => {
      page.navigateTo('/Examen');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Examen');
      });
    });

    it('Examen table should have 8 columns',() => {
      page.navigateTo('/Examen');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Medecin component should be loadable',() => {
      page.navigateTo('/Medecin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Medecin');
      });
    });

    it('Medecin table should have 2 columns',() => {
      page.navigateTo('/Medecin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(2); // Addition of 1 for 'Action' column
      });
    });
  
    it('Patient component should be loadable',() => {
      page.navigateTo('/Patient');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Patient');
      });
    });

    it('Patient table should have 5 columns',() => {
      page.navigateTo('/Patient');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Autorisation_Consultation component should be loadable',() => {
      page.navigateTo('/Autorisation_Consultation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Autorisation_Consultation');
      });
    });
  
    it('Autorisation_Examen component should be loadable',() => {
      page.navigateTo('/Autorisation_Examen');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Autorisation_Examen');
      });
    });
  
    it('Autorisation_DMP component should be loadable',() => {
      page.navigateTo('/Autorisation_DMP');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Autorisation_DMP');
      });
    });
  
    it('Ajouter_Patient component should be loadable',() => {
      page.navigateTo('/Ajouter_Patient');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Ajouter_Patient');
      });
    });
  
    it('Ajouter_Medecin component should be loadable',() => {
      page.navigateTo('/Ajouter_Medecin');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Ajouter_Medecin');
      });
    });
  
    it('Creer_DMP component should be loadable',() => {
      page.navigateTo('/Creer_DMP');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Creer_DMP');
      });
    });
  
    it('Creer_Profil_Medecin component should be loadable',() => {
      page.navigateTo('/Creer_Profil_Medecin');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Creer_Profil_Medecin');
      });
    });
  
    it('Enregistrer_Consultation component should be loadable',() => {
      page.navigateTo('/Enregistrer_Consultation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Enregistrer_Consultation');
      });
    });
  
    it('Enregistrer_Examen component should be loadable',() => {
      page.navigateTo('/Enregistrer_Examen');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Enregistrer_Examen');
      });
    });
  
    it('Retirer_Autorisation_Consultation component should be loadable',() => {
      page.navigateTo('/Retirer_Autorisation_Consultation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Retirer_Autorisation_Consultation');
      });
    });
  
    it('Retirer_Autorisation_Examen component should be loadable',() => {
      page.navigateTo('/Retirer_Autorisation_Examen');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Retirer_Autorisation_Examen');
      });
    });
  
    it('Retirer_Autorisation_DMP component should be loadable',() => {
      page.navigateTo('/Retirer_Autorisation_DMP');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Retirer_Autorisation_DMP');
      });
    });
  

});