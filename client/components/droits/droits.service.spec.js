'use strict';

/* global _ */

describe('Service: droits', function () {

  // load the service's module
  beforeEach(module('impactApp'));

  // instantiate service
  var service;
  beforeEach(inject(function (DroitService) {
    service = DroitService;
  }));

  it('should return an empty array when called on an empty form', function () {
    // given
    var answers = {contexte: {}};

    // when
    var result = service.compute(answers);

    // then
    expect(result).toEqual([]);
  });

  it('should filter tauxIncapacite', function() {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 51,
        contestationTaux: 'stable'
      }
    };

    // then
    expect(service.getFiltreTaux(answers)).toBe(true);
  });

  it('should filter tauxIncapacite', function() {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 49,
        contestationTaux: 'aggrave'
      }
    };

    // then
    expect(service.getFiltreTaux(answers)).toBe(true);
  });

  it('should not filter tauxIncapacite', function() {
    // given
    var answers = {
      contexte: {
        nouveauDossier: true,
        connaisTaux: true,
        tauxIncapacite: 49,
        contestationTaux: 'aggrave'
      }
    };

    // then
    expect(service.getFiltreTaux(answers)).toBe(true);
  });

  it('should not filter tauxIncapacite', function() {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 49,
        contestationTaux: 'stable'
      }
    };

    // then
    expect(service.getFiltreTaux(answers)).toBe(false);
  });

  it('should not filter tauxIncapacite', function() {
    // given
    var answers = {};

    // then
    expect(service.getFiltreTaux(answers)).toBe(true);
  });

  it('should not filter tauxIncapacite', function() {
    // given
    var answers = {contexte: {}};

    // then
    expect(service.getFiltreTaux(answers)).toBe(true);
  });
});

describe('Service: droits || AEEH', function () {

  // load the service's module
  beforeEach(module('impactApp'));

  // instantiate service
  var service;
  var constants;
  beforeEach(inject(function (DroitService, droits) {
    service = DroitService;
    constants = droits;
  }));

  it('should return aeeh', function () {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 51,
        contestationTaux: 'stable',
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsVie: {
          hygiene: true
        },
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).toContain('aeeh');
  });

  it('should return aeeh', function () {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 51,
        contestationTaux: 'aggrave',
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsVie: {
          hygiene: true
        },
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).toContain('aeeh');
  });

  it('should return aeeh', function () {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 49,
        contestationTaux: 'aggrave',
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsVie: {
          hygiene: true
        },
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).toContain('aeeh');
  });

  it('should not return aeeh', function () {
    // given
    var answers = {
      contexte: {
        nouveauDossier: false,
        connaisTaux: true,
        tauxIncapacite: 51,
        contestationTaux: 'ameliore',
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsVie: {
          hygiene: true
        },
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).not.toContain('aeeh');
  });

  it('should return aeeh', function () {
    // given
    var answers = {
      contexte: {
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsSocial: {
          securite: true,
          loisirs: true,
          citoyen: true
        },
        besoinsVie: {
          budget: true,
          courses: true,
          cuisine: true,
          menage: true,
          sante: true
        },
        // Attente d’une aide financière pour des dépenses liées à votre handicap
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).toContain('aeeh');
  });


  it('should not return aeeh', function () {
    // given
    var answers = {
      contexte: {
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsSocial: {
          securite: true,
          loisirs: true,
          citoyen: true
        },
        besoinsVie: {
          budget: true,
          courses: false,
          cuisine: true,
          menage: true,
          sante: true
        },
        // Attente d’une aide financière pour des dépenses liées à votre handicap
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).not.toContain('aeeh');
  });
});

describe('Service: droits || AAH', function () {

  // load the service's module
  beforeEach(module('impactApp'));

  // instantiate service
  var service;
  var constants;
  beforeEach(inject(function (DroitService, droits) {
    service = DroitService;
    constants = droits;
  }));

  it('should not return aah because the user is a child', function () {
    // given
    var answers = {
      contexte: {
        // Age < 20 ans
        dateNaissance: new Date(2003,11,7)
      },
      vieQuotidienne: {
        besoinsSocial: {
          securite: true,
          loisirs: true,
          citoyen: true
        },
        besoinsVie: {
          budget: true,
          courses: false,
          cuisine: true,
          menage: true,
          sante: true
        },
        // Attente d’une aide financière pour des dépenses liées à votre handicap
        attentesTypeAide: {
          financierHandicap: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).not.toContain('aah');
  });

  it('should return aah', function () {
    // given
    var answers = {
      contexte: {
        // Age < 20 ans
        dateNaissance: new Date(1973,11,7)
      },
      vieQuotidienne: {
        besoinsVie: {
          courant: true,
          hygiene: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).toContain('aah');
  });

  it('should return aah', function () {
    // given
    var answers = {
      contexte: {
        // Age < 20 ans
        dateNaissance: new Date(1973,11,7)
      },
      vieQuotidienne: {
        besoinsSocial: {
          securite: true,
          loisirs: true,
          citoyen: true
        },
        besoinsVie: {
          courant: true,
          budget: true,
          courses: true,
          cuisine: true,
          menage: true,
          sante: true
        }
      }
    };

    // when
    var result = service.compute(answers);
    var idResult = _.pluck(result, 'id');

    // then
    expect(idResult).toContain('aah');
  });
});


describe('Service: droits || Renouvellement', function () {

  // load the service's module
  beforeEach(module('impactApp'));

  // instantiate service
  var service;
  var constants;
  beforeEach(inject(function (DroitService, droits) {
    service = DroitService;
    constants = droits;
  }));

  it('should return renouvellement of aah', function () {
    // given
    var answers = {
      vieQuotidienne: {
        mesPrestations:[
          {
            id:'aah',
            label:'AAH',
            date:'2014-09-08T22:00:00.000Z',
            type:'presta-finances',
            description:'L\'allocation aux adultes handicapés (AAH) est versée, sous conditions de ressources, aux adultes déclarés handicapés afin de leur assurer un revenu minimum.'
          }
        ]
      }
    };

    // when
    var result = service.compute(answers);

    // then
    expect(result.length).toBe(1);
    var expectedResult = result[0];
    expect(expectedResult.renouvellement).toBe(true);
    expect(expectedResult.descRenouvellement).toBe('* Etude du renouvellement de votre droit se terminant le 09/09/2014.');
  });
});