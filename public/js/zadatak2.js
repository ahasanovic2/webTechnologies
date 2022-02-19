var reportTesta1 = `
{
  "stats": {
  "suites": 2,
  "tests": 2,
  "passes": 2,
  "pending": 0,
  "failures": 0,
  "start": "2021-11-05T15:00:26.343Z",
  "end": "2021-11-05T15:00:26.352Z",
  "duration": 9
  },
  "tests": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
  ],
  "pending": [],
  "failures": [],
  "passes": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
  ]
}`;

var reportTesta2 = `
{
  "stats": {
  "suites": 3,
  "tests": 3,
  "passes": 1,
  "pending": 0,
  "failures": 2,
  "start": "2021-11-05T15:00:26.343Z",
  "end": "2021-11-05T15:00:26.352Z",
  "duration": 9
  },
  "tests": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 5,5",
    "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
  ],
  "pending": [],
  "failures": [
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ],
  "passes": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
  ]
}`;

var reportTesta3 = `
  {
  "stats": {
  "suites": 3,
  "tests": 3,
  "passes": 2,
  "pending": 0,
  "failures": 1,
  "start": "2021-11-05T15:00:26.343Z",
  "end": "2021-11-05T15:00:26.352Z",
  "duration": 9
  },
  "tests": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 5,5",
    "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
  ],
  "pending": [],
  "failures": [
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ],
  "passes": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 5,5",
    "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
  ]
  }`;

  var reportTesta4 = `
  {
    "stats": {
    "suites": 3,
    "tests": 3,
    "passes": 0,
    "pending": 0,
    "failures": 3,
    "start": "2021-11-05T15:00:26.343Z",
    "end": "2021-11-05T15:00:26.352Z",
    "duration": 9
    },
    "tests": [
    {
      "title": "should draw 3 rows when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    ],
    "pending": [],
    "failures": [
      {
        "title": "should draw 3 rows when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 5,5",
        "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
    ],
    "passes": []
  }`;

  var reportTesta5 = `
  {
    "stats": {
    "suites": 3,
    "tests": 3,
    "passes": 0,
    "pending": 0,
    "failures": 3,
    "start": "2021-11-05T15:00:26.343Z",
    "end": "2021-11-05T15:00:26.352Z",
    "duration": 9
    },
    "tests": [
    {
      "title": "should draw 3 rows when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    ],
    "pending": [],
    "failures": [
      {
        "title": "should draw 3 rows when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 5,5",
        "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
    ],
    "passes": []
  }`;

  var reportTesta6 = `
  {
    "tests": [
    {
      "title": "should draw 3 rows when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    ],
    "pending": [],
    "failures": [
      {
        "title": "should draw 3 rows when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 5,5",
        "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
    ],
    "passes": []
  }`;

  var reportTesta7 = `
  {
    "stats": {
    "suites": 3,
    "tests": 3,
    "passes": 0,
    "pending": 1,
    "failures": 2,
    "start": "2021-11-05T15:00:26.343Z",
    "end": "2021-11-05T15:00:26.352Z",
    "duration": 9
    },
    "tests": [
    {
      "title": "should draw 3 rows when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    ],
    "pending": [
    {
      "title": "should draw 2 columns in row 2 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
    ],
    "failures": [
      {
        "title": "should draw 3 rows when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "should draw 2 columns in row 2 when parameter are 2,3",
        "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
    ],
    "passes": []
  }`;
let assert = chai.assert;
describe ('TestoviParser', function() {
  describe ('Funkcija dajTacnost', function() {
    it('Test metode dajTacnost - svi testovi su uspjesni', function() {
        assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta1)),'{"tacnost":"100%","greske":[]}');
    });

    it('Test metode dajTacnost - jedan uspjesan, dva neuspjesna', function() {
        assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta2)),'{"tacnost":"33.3%","greske":["Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3","Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3"]}');
    });

    it('Test metode dajTacnost - dva uspjesna, jedan neuspjesan', function() {
        assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta3)),'{"tacnost":"66.7%","greske":["Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3"]}');
    });

    it('Test metode dajTacnost - svi neuspjesni', function() {
      assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta4)),'{"tacnost":"0%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3","Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3","Tabela crtaj() should draw 3 columns in row 2 when parameter are 2,3"]}');
    });

    it('Test metode dajTacnost - nepravilan JSON (fali zarez u testovima)', function() {
        assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta5)),'{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
    });

    it('Test metode dajTacnost - nepravilan JSON (fali atribut stats)', function() {
        assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta6)),'{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
    });
    it('Test metode dajTacnost - postoje neizvršeni testovi', function() {
        assert.equal(JSON.stringify(TestoviParser.dajTacnost(reportTesta7)),'{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
    });
  });
});