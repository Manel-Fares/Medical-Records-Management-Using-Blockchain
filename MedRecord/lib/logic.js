'use strict';
/**
 * @param {org.hfn.dmp.Ajouter_Patient} Data
 * @transaction
 */

function Ajouter_Patient(Data) {
  // Get the Participant Registry
  return getParticipantRegistry('org.hfn.dmp.Patient')
      .then(function(PatientRegistry){
          var  factory = getFactory();
          var  NS =  'org.hfn.dmp';
    	  const Id_patient = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
          const  patient = factory.newResource(NS,'Patient',Id_patient); 
    	  patient.autorisation_consultation = Data.autorisation_consultation;
          patient.autorisation_Examen = Data.autorisation_Examen;  
    	  patient.Autorisation_DMP = Data.Autorisation_DMP;
          return PatientRegistry.add(patient);

      });
}

/**
 * @param {org.hfn.dmp.Ajouter_Medecin} Data
 * @transaction
 */

function Ajouter_Medecin(Data) {
  // Get the Participant Registry
  return getParticipantRegistry('org.hfn.dmp.Medecin')
      .then(function(MedecinRegistry){
          var  factory = getFactory();
          var  NS =  'org.hfn.dmp';
    	  const Id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
          const  clinicien = factory.newResource(NS,'Medecin',Id); 
          return MedecinRegistry.add(clinicien);

      });
}

/**
 * @param {org.hfn.dmp.Creer_DMP} Data
 * @transaction
 */

function Creer_DMP(Data) {
  // Get the Asset Registry
  return getAssetRegistry('org.hfn.dmp.DMP')
      .then(function(DMPRegistry){
          var  factory = getFactory();
          var  NS =  'org.hfn.dmp';
    	  const ID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
          const  DMP = factory.newResource(NS,'DMP',ID); 
         
      	  DMP.patient = Data.patient;
          DMP.adresse = Data.adresse;
          DMP.Nom = Data.Nom;
          DMP.Prenom = Data.Prenom;
    	  DMP.Email = Data.Email;
          DMP.Date_de_naissance = Data.Date_de_naissance;    
      	  DMP.Num_mobile = Data.Num_mobile;
   	  	  DMP.Allergie = Data.Allergie;
      	  DMP.groupe_sanguin = Data.groupe_sanguin;
  	      DMP.fumeur = Data.fumeur
      	  DMP.alcoolique = Data.alcoolique ;
          return DMPRegistry.add(DMP);

      });
}
 
/**
 * @param {org.hfn.dmp.Enregistrer_Consultation} Data
 * @transaction
 */

function Enregistrer_Consultation(Data) {

  return getAssetRegistry('org.hfn.dmp.Consultation')
      .then(function(ConsultationRegistry){
          var  factory = getFactory();
          var  NS =  'org.hfn.dmp';
    	  const Id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
          const  cons = factory.newResource(NS,'Consultation',Id); 
    	  cons.patient = Data.patient ;
   		  cons.medecin = Data.medecin ;
          cons.Date = Data.Date;
    	  cons.Diagnostic = Data.Diagnostic;
 	      cons.Prescription = Data.Prescription
    	  
        return  ConsultationRegistry.add(cons);
   participantRegistery.update(autoriser_Medecin.patient);
        });
  		throw "Transaction invalide";
}

/**
 * @param {org.hfn.dmp.Enregistrer_Examen} Data
 * @transaction
 */

function Enregistrer_Examen(Data) {

  return getAssetRegistry('org.hfn.dmp.Examen')
      .then(function(ExamenRegistry){
          var  factory = getFactory();
          var  NS =  'org.hfn.dmp';
    	  const Id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
          const  a = factory.newResource(NS,'Examen',Id); 
    	  a.patient = Data.patient ;
   		  a.medecin = Data.medecin ;
          a.Date = Data.Date;
    	  a.Resultat= Data.Resultat;
 	      a.Type = Data.Type;
 	      a.Nom = Data.Nom;
    	  
        return  ExamenRegistry.add(a);
        });
  		throw "Transaction invalide";
}

/**
 * @param {org.hfn.dmp.Creer_Profil_Medecin} Data
 * @transaction
 */

function Creer_Profil_Medecin(Data) {
  // Get the Asset Registry
  return getAssetRegistry('org.hfn.dmp.Medecin')
      .then(function(Profil_Medecin){
          var  factory = getFactory();
          var  NS =  'org.hfn.dmp';
    	  const ID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
          const  profil = factory.newResource(NS,'Profil_Medecin',ID); 
          profil.adresse = Data.adresse;
          profil.Nom = Data.Nom;
          profil.Prenom = Data.Prenom;
    	  profil.Email = Data.Email;
          profil.Date_de_naissance = Data.Date_de_naissance;    
    	  profil.Num_mobile = Data.Num_mobile;
   		  profil.department = Data.department;
  	      profil.specialite = Data.specialite
  		  profil.medecin = Data.medecin;
          return Profil_Medecin.add(profil);

      });
}

/**
 * @param {org.hfn.dmp.Autorisation_Consultation} autoriser_Medecin
 * @transaction
 */

function Autorisation_Consultation(autoriser_Medecin){
  
  		return getParticipantRegistry('org.hfn.dmp.Patient').then(function(participantRegistery){
			autoriser_Medecin.patient.autorisation_consultation
              .push(autoriser_Medecin.medecin,autoriser_Medecin.Acces); 
  			return participantRegistery.update(autoriser_Medecin.patient);
        });
  		throw "Transaction invalide";
}


/**
 * @param {org.hfn.dmp.Autorisation_DMP} autoriser_Medecin
 * @transaction
 */

function Autorisation_DMP(autoriser_Medecin){
  
  		return getParticipantRegistry('org.hfn.dmp.Patient').then(function(participantRegistery){
			autoriser_Medecin.patient.Autorisation_DMP.push(autoriser_Medecin.medecin); 
  			return participantRegistery.update(autoriser_Medecin.patient);
        });
  		throw "Transaction invalide";
}


/**
 * @param {org.hfn.dmp.Autorisation_Examen} autoriser_Medecin
 * @transaction
 */

function Autorisation_Examen(autoriser_Medecin){
  
  		return getParticipantRegistry('org.hfn.dmp.Patient').then(function(participantRegistery){
			autoriser_Medecin.patient.autorisation_Examen
              .push(autoriser_Medecin.medecin,autoriser_Medecin.type);
         
  			return participantRegistery.update(autoriser_Medecin.patient);
        });
  		throw "Transaction invalide";
}

/**
 * @param {org.hfn.dmp.Retirer_Autorisation_Consultation} retirer_Permission
 * @transaction
 */

function Retirer_Autorisation_Consultation(retirer_Permission){
  
  		var liste = retirer_Permission.patient.autorisation_consultation;
 		var indice = liste.indexOf(retirer_Permission.medecin);
      
  		return getParticipantRegistry('org.hfn.dmp.Patient').then(function(participantRegistery){
			retirer_Permission.patient.autorisation_consultation.splice(indice,2);
  			return participantRegistery.update(retirer_Permission.patient);
        });
  		throw "Transaction invalide";
}

/**
 * @param {org.hfn.dmp.Retirer_Autorisation_Examen} retirer_Permission
 * @transaction
 */

function Retirer_Autorisation_Examen(retirer_Permission){
  
  		var liste = retirer_Permission.patient.autorisation_Examen;
 		var indice = liste.indexOf(retirer_Permission.medecin);
      
  		return getParticipantRegistry('org.hfn.dmp.Patient').then(function(participantRegistery){
			retirer_Permission.patient.autorisation_Examen.splice(indice,2);
  			return participantRegistery.update(retirer_Permission.patient);
        });
  		throw "Transaction invalide";
}

/**
 * @param {org.hfn.dmp.Retirer_Autorisation_DMP} retirer_Permission
 * @transaction
 */

function Retirer_Autorisation_DMP(retirer_Permission){
  
  		var liste = retirer_Permission.patient.Autorisation_DMP;
 		var indice = liste.indexOf(retirer_Permission.medecin);
      
  		return getParticipantRegistry('org.hfn.dmp.Patient').then(function(participantRegistery){
			retirer_Permission.patient.Autorisation_DMP.splice(indice,1);
  			return participantRegistery.update(retirer_Permission.patient);
        });
  		throw "Transaction invalide";
}
  