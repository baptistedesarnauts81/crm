const list_tables = [
    "client",
    "contact",
    "contrat",
    "livrable",
    "mission",
    "saisie_temps",
    "consultant"
];
const databaseName = "crm_db";


const client = [
    ["airbus", "00227481400100", "22 Rue des avions, Toulouse", undefined],
    ["thales", "38329011400100", undefined, undefined],
    ["hermes", "33849481400100", "38 Rue de l'arbre sec, Lyon", undefined],
    ["danone", "99047481400100", "43 Rue du docteur alberic pont, Lyon", undefined],
    ["michelin", "23457481400100", "43 rue du docteur alberic pont, Lyon", undefined],
    ["orange", "89927481400100", "43 rue du docteur alberic pont, Lyon", undefined],
    ["sfr", "38347482134100", "43 rue du docteur alberic pont, Lyon", undefined],
    ["vinci", "33957481400100", "43 rue du docteur alberic pont, Lyon", undefined]
];

const contact = [
    ["jean_DUPONT", "airbus", "jean@airbus.com", undefined, "très gentil"],
    ["jeanne_KIRK", "airbus", "jeanne@airbus.com", undefined, undefined],
    ["patrice_MIAM", "thales", "patrice.miam@thales.com", undefined, undefined],
    ["yves_BONDI", "hermes", "yves@hermes.com", undefined, undefined],
    ["jade_PETER", "danone", "jade@danone.com", undefined, undefined],
    ["julien_VERDUN", "michelin", "julien@michelin.com", undefined, "désagréable"],
    ["leonidas_PETER", "orange", "leonidas@orange.com", undefined, undefined],
    ["anne_RAOULT", "sfr", "anne@sfr.com", "0681234536", undefined],
    ["marie_TANON", "vinci", "marie@vinci.com", undefined, undefined]
];

const contrat = [
    ["airbus", "1AIRBUS", "2020-02-08", "2020-04-03", 100, 100, undefined],
    ["thales", "1THALES", "2020-02-08", "2020-06-02", 34, 23, undefined],
    ["hermes", "1HERMES", "2020-03-08", "2020-04-09", 60, 12, undefined],
    ["danone", "1DANONE", "2020-02-01", "2020-02-08", 32, 678, undefined],
    ["michelin", "1MICHELIN", "2020-07-10", "2020-08-12", 32, 345, undefined],
    ["orange", "1ORANGE", "2020-09-12", "2020-12-12", 56, 320, undefined],
    ["sfr", "1SFR", "2020-10-10", "2020-10-12", 32, 100, undefined],
    ["vinci", "1VINCI", "2020-03-08", "2020-05-10", 4, 10, undefined]
];

const livrable = [
    ["1AIRBUS", "base de données", 90, undefined, undefined, undefined, undefined],
    ["1AIRBUS", "site web", 10, undefined, undefined, undefined, undefined],
    ["1THALES", "code powerBI", 30, undefined, undefined, undefined, undefined],
    ["1THALES", "powerBI validation", 4, undefined, undefined, undefined, undefined],
    ["1HERMES", "code powerbi", 56, undefined, undefined, undefined, undefined],
    ["1HERMES", "indicateurs", 4, undefined, undefined, undefined, undefined],
    ["1DANONE", "document pdf", 32, undefined, undefined, undefined, undefined],
    ["1MICHELIN", "code python", 32, undefined, undefined, undefined, undefined],
    ["1ORANGE", "code python", 56, undefined, undefined, undefined, undefined],
    ["1SFR", "base de donnees", 32, undefined, undefined, undefined, undefined],
    ["1VINCI", "document pdf", 3, undefined, undefined, undefined, undefined]
];

const mission = [
    ["1AIRBUS", "crm", "AIBUS_MISSION_1", 100, undefined, undefined],
    ["1THALES", "analyse business", "THALES_MISSION_1", 90, undefined, undefined],
    ["1HERMES", "analyse business", "HERMES_MISSION_1", 60, undefined, undefined],
    ["1DANONE", "etude de marche", "DANONE_MISSION_1", 32, undefined, undefined],
    ["1MICHELIN", "regression linéaire", "MICHELIN_MISSION_1", 32, undefined, undefined],
    ["1ORANGE", "exploration de donnees", "ORANGE_MISSION_1", 56, undefined, undefined],
    ["1SFR", "stockage de donnees", "SFR_MISSION_1", 32, undefined, undefined],
    ["1VINCI", "etude de marche", "VINCI_MISSION_1", 3, undefined, undefined]
];

const consultant = [
    ["paul.lefevre@consul.fr", "paul_LEFEVRE","senior", undefined, undefined],
    ["fabienne.loic@air.com", "fabienne_LOIC","senior", undefined, undefined],
    ["fred.marki@gmail.com", "fred_MARKI","junior", undefined, undefined],
    ["anna.elior@hotmail.fr", "anna_ELIOR","senior", undefined, undefined]
];

const saisie_temps = [
    ["AIBUS_MISSION_1", 100, "paul.lefevre@consul.fr", "2020-02-03", 9,undefined, undefined],
    ["THALES_MISSION_1", 101, "fabienne.loic@air.com", "2020-03-04", 9, undefined, undefined],
    ["HERMES_MISSION_1", 102,"fred.marki@gmail.com", "2020-04-05", 9,undefined, undefined],
    ["DANONE_MISSION_1", 103,"anna.elior@hotmail.fr", "2020-05-06", 9,undefined, undefined],
];

module.exports = {
    list_tables,
    databaseName,
    client, 
    contact,
    contrat,
    livrable, 
    mission, 
    consultant,
    saisie_temps
  };