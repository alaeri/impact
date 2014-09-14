'use strict';

/* jshint multistr: true */

angular.module('impactApp').constant('contexte', [
  {
    model: 'estRepresentant',
    titleDefault: 'Pour qui faites vous cette demande ?',
    type: 'radio',
    answers: [
      {
        labelDefault: 'Pour vous',
        value: false,
        documents: [{category: 'obligatoire', id: 'carteIdentite'}]
      },
      {
        labelDefault: 'Pour une autre personne',
        value: true,
        detailUrl: 'components/detail/personne.html',
        documents: [{category: 'obligatoire', id: 'carteIdentite'}, {category: 'obligatoire', id: 'carteIdentiteRepresentant'}],
      }
    ]
  },
  {
    model: 'codePostal',
    titleDefault: 'Quel est votre code postal ?',
    titleRep: 'Quel est le code postal de <%= name %>?',
    type: 'text'
  },
  {
    model: 'nouveauDossier',
    titleDefault: 'Est-ce votre premier dossier ?',
    titleRep: 'Est-ce son premier dossier ?',
    type: 'radio',
    answers: [
      {
        labelDefault: 'Oui',
        value: true
      },
      {
        labelDefault: 'Non',
        value: false
      }
    ]
  },
  {
    model: 'numDossier',
    titleDefault: 'Connaissez-vous votre numéro de dossier ?',
    titleRep: 'Connaissez-vous son numéro de dossier ?',
    answers: [
      {
        labelDefault: 'Oui',
        value: true,
        detailModel: 'numeroDossier',
        detailUrl: 'components/detail/precisez.html',
        detailLabel: 'Numéro'
      },
      {
        labelDefault: 'Non',
        value: false
      }
    ],
  },
  {
    model: 'raison',
    type: 'checkbox',
    titleDefault: 'Quelle est la raison de votre renouvellement ?',
    titleRep: 'Quelle est la raison de son renouvellement ?',
    answers: [
      {
        labelDefault: 'Vous arrivez à la fin de vos droits',
        labelRep: '<%= name %> arrive à la fin de ses droits',
        model: 'finDeVosDroits'
      },
      {
        labelDefault: 'Votre situation a changé',
        labelRep: 'Sa situation a changé',
        model: 'changementDeSituation'
      }
    ]
  },
  {
    model: 'dateNaissance',
    type: 'text',
    titleDefault: 'Quelle est votre date de naissance ?',
    titleRep: 'Quelle est sa date de naissance ?',
    section: 'contexte'
  },
  {
    model: 'urgences',
    titleDefault: 'Vous trouvez-vous dans une des situations suivantes ?',
    titleRep: 'Se trouve-t-il dans une des situations suivantes ?',
    answers:
    [
      {
        labelDefault: 'Vous n\'arrivez plus à vivre chez vous',
        labelRep: '<%= pronoun %> n\'arrive plus à vivre à domicile',
        model: 'domicile',
        detail: true,
        detailModel: 'urgences_domicile',
        detailUrl: 'components/detail/precisez_big.html',
        placeholder: 'Expliquez la difficulté'
      },
      {
        labelDefault: 'Votre établissement ne peux plus vous acceuillir et vous ne pouvez pas retourner chez vous',
        labelRep: 'Son établissement ne peux plus l\'acceuillir et <%= pronoun %> ne peut pas retourner chez <%= pronounTonic %>',
        model: 'etablissement',
        detail: true,
        detailModel: 'urgences_etablissement',
        detailUrl: 'components/detail/precisez_big.html',
        placeholder: 'Expliquez la difficulté'
      },
      {
        labelDefault: 'Votre école ne peux plus vous acceuillir',
        labelRep: 'Son école ne peux plus l\'acceuillir',
        detail: true,
        detailModel: 'urgences_ecole',
        detailUrl: 'components/detail/precisez_big.html',
        placeholder: 'Expliquez la difficulté',
        model: 'ecole'
      },
      {
        labelDefault: 'Vous risquez de perdre votre travail',
        labelRep: '<%= pronoun %> risque de perdre son travail',
        detail: true,
        detailModel: 'urgences_travail',
        detailUrl: 'components/detail/precisez_big.html',
        placeholder: 'Expliquez la difficulté',
        model: 'travail'
      },
      {
        labelDefault: 'Vous commencez bientôt une nouvelle formation',
        labelRep: '<%= pronoun %> commence bientôt une nouvelle formation',
        detailModel: 'urgences_formation',
        detailUrl: 'components/detail/precisez_date.html',
        detailLabel: 'Date d\'entrée prévue',
        model: 'formation'
      }
    ]
  }
]);