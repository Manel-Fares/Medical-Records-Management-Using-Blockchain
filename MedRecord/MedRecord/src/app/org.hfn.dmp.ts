import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.hfn.dmp{
   export class Medecin extends Participant {
      ID_Medecin: string;
   }
   export class Patient extends Participant {
      ID_Patient: string;
      autorisation_consultation: string[];
      autorisation_Examen: string[];
      Autorisation_DMP: string[];
   }
   export abstract class Profil extends Asset {
      ID: string;
      Nom: string;
      Prenom: string;
      Date_de_naissance: string;
      adresse: string;
      Num_mobile: string;
      Email: string;
   }
   export class Profil_Medecin extends Profil {
      medecin: Medecin;
      department: string;
      specialite: string;
   }
   export class DMP extends Profil {
      patient: Patient;
      Allergie: string[];
      groupe_sanguin: string;
      fumeur: boolean;
      alcoolique: boolean;
   }
   export abstract class Historique extends Asset {
      ID: string;
      patient: Patient;
      medecin: Medecin;
      Date: string;
   }
   export class Consultation extends Historique {
      Diagnostic: string;
      Prescription: string;
   }
   export class Examen extends Historique {
      Type: string;
      Nom: string;
      Resultat: string;
   }
   export abstract class Autorisation extends Transaction {
      patient: Patient;
      medecin: string;
   }
   export class Autorisation_Consultation extends Autorisation {
      Acces: string;
   }
   export class Autorisation_Examen extends Autorisation {
      type: string;
   }
   export class Autorisation_DMP extends Autorisation {
   }
   export class Ajouter_Patient extends Transaction {
      autorisation_consultation: string[];
      autorisation_Examen: string[];
      Autorisation_DMP: string[];
   }
   export class Ajouter_Medecin extends Transaction {
   }
   export class Creer_DMP extends Transaction {
      patient: Patient;
      Nom: string;
      Prenom: string;
      Email: string;
      Date_de_naissance: string;
      adresse: string;
      Num_mobile: string;
      Allergie: string[];
      groupe_sanguin: string;
      fumeur: boolean;
      alcoolique: boolean;
   }
   export class Creer_Profil_Medecin extends Transaction {
      medecin: Medecin;
      Nom: string;
      Prenom: string;
      Email: string;
      Date_de_naissance: string;
      adresse: string;
      Num_mobile: string;
      department: string;
      specialite: string;
   }
   export class Enregistrer_Consultation extends Transaction {
      patient: Patient;
      medecin: Medecin;
      Date: string;
      Diagnostic: string;
      Prescription: string;
   }
   export class Enregistrer_Examen extends Transaction {
      patient: Patient;
      medecin: Medecin;
      Date: string;
      Type: string;
      Nom: string;
      Resultat: string;
   }
   export abstract class Retirer_autorisation extends Transaction {
      patient: Patient;
      medecin: string;
   }
   export class Retirer_Autorisation_Consultation extends Retirer_autorisation {
   }
   export class Retirer_Autorisation_Examen extends Retirer_autorisation {
   }
   export class Retirer_Autorisation_DMP extends Retirer_autorisation {
   }
// }
