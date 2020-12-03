import React, { Component } from "react";
import "./AddData.css";
import axios from "axios";

class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom_societe: undefined,
      siret: undefined,
      adresse_societe: undefined,
      commentaire: undefined,
      nom: undefined,
      prenom: undefined,
      email: undefined,
      tel: undefined,
      no_contrat: undefined,
      date_debut: undefined,
      date_livraison: undefined,
      montant: undefined,
      nb_heures: undefined,
      nom_livrable: undefined,
      nb_heures_attribuees: undefined,
      type: undefined,
      nom_mission: undefined,
      date_fin_prevue: undefined,
      date_saisie: undefined,
      experience: undefined,
      charge_disponible: undefined,
      etat_avancement: undefined,
      all_clients: undefined,
      all_contrats: undefined,
      contrat_condition: undefined,
      id_mission: undefined,
      all_mail: undefined,
    };
    this.get_clients();
    this.get_contrats();
    this.get_mail();
  }

  enregister_nouveau_client = () => {
    const info = {
      nom_societe: this.state.nom_societe,
      siret: this.state.siret,
      adresse_societe: this.state.adresse_societe,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouveau_client", { info });
  };

  enregister_nouveau_contact = () => {
    const info = {
      nom_prenom: [this.state.nom, this.state.prenom].join("_"),
      nom_societe: this.state.nom_societe,
      mail: this.state.email,
      tel: this.state.tel,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouveau_contact", { info });
  };

  enregister_nouveau_contrat = () => {
    const info = {
      no_contrat: this.state.no_contrat,
      nom_societe: this.state.nom_societe,
      date_debut: this.state.date_debut,
      date_livraison: this.state.date_livraison,
      montant: this.state.montant,
      nb_heures: this.state.nb_heures,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouveau_contrat", { info });
  };

  enregister_nouveau_livrable = () => {
    const info = {
      no_contrat: this.state.no_contrat,
      nom_livrable: this.state.nom_livrable,
      nb_heures_attribuees: this.state.nb_heures_attribuees,
      type: this.state.type,
      date_livraison: this.state.date_livraison,
      montant: this.state.montant,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouveau_livrable", { info });
  };

  enregister_nouvelle_mission = () => {
    const info = {
      no_contrat: this.state.no_contrat,
      nom_mission: this.state.nom_mission,
      nb_heures_attribuees: this.state.nb_heures_attribuees,
      type: this.state.type,
      date_fin_prevue: this.state.date_fin_prevue,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouvelle_mission", { info });
  };
  enregister_nouvelle_saisie = () => {
    const info = {
      nom_mission: this.state.nom_mission,
      id_mission: this.state.id_mission,
      mail: this.state.mail,
      date_saisie: this.state.date_saisie,
      nb_heures: this.state.nb_heures,
      etat_avancement: this.state.etat_avancement,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouvelle_saisie", { info });
  };

  enregister_nouveau_consultant = () => {
    const info = {
      nom_prenom: [this.state.nom, this.state.prenom].join("_"),
      mail: this.state.mail,
      experience: this.state.experience,
      charge_disponible: this.state.charge_disponible,
      commentaire: this.state.commentaire,
    };
    axios.post("http://localhost:3001/api/nouveau_consultant", { info });
  };

  get_clients = () => {
    const sql_query = "SELECT * from client";
    axios
      .get("http://localhost:3001/api/get_data", {
        params: { query: sql_query },
      })
      .then((res) => {
        let all_clients = res.data.map((item, index) => {
          return <option value={item.nom_societe}>{item.nom_societe}</option>;
        });
        this.setState({ all_clients });
      });
  };

  get_contrats = () => {
    const sql_query = "SELECT * from contrat";
    axios
      .get("http://localhost:3001/api/get_data", {
        params: { query: sql_query },
      })
      .then((res) => {
        let all_contrats = res.data.map((item, index) => {
          return <option value={item.no_contrat}>{item.no_contrat}</option>;
        });
        this.setState({ all_contrats });
      });
  };

  get_contrat_condition = (client) => {
    axios
      .get("http://localhost:3001/api/get_contrat_condition", {
        params: { client: client },
      })
      .then((res) => {
        let contrat_condition = res.data.map((item, index) => {
          return <option value={item.no_contrat}>{item.no_contrat}</option>;
        });
        this.setState({ contrat_condition });
      });
  };

  get_mission = (contrat) => {
    axios
      .get("http://localhost:3001/api/get_mission", {
        params: { contrat: contrat },
      })
      .then((res) => {
        let mission_names = res.data.map((item, index) => {
          return <option value={item.id_mission}>{item.nom_mission}</option>;
        });
        this.setState({ mission_names });
      });
  };

  get_mail = () => {
    const sql_query = "SELECT * from consultant";
    axios
      .get("http://localhost:3001/api/get_data", {
        params: { query: sql_query },
      })
      .then((res) => {
        let all_mail = res.data.map((item, index) => {
          return <option value={item.mail}>{item.mail}</option>;
        });
        this.setState({ all_mail });
      });
  };

  render() {
    return (
      <div class="container">
        <h1 class="display-3">Ajouter des données</h1>
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Nouveau client
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group ">
                    <label for="validationCustom01">Nom de la société</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationCustom01"
                      required
                      onChange={(e) => {
                        this.setState({
                          nom_societe: e.target.value.toLowerCase(),
                        });
                      }}
                    ></input>
                  </div>
                  <div class="form-group ">
                    <label for="validationCustom02">Numéro SIRET </label>
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="validationCustom02"
                      required
                      onChange={(e) => {
                        this.setState({ siret: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group ">
                    <label for="validationCustom02">
                      Adresse de la société{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationCustom02"
                      onChange={(e) => {
                        this.setState({ adresse_societe: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group ">
                    <label for="validationCustom02">Commentaire </label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationCustom02"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                  </div>
                  {/* <div class="form-group ">
                                        <label for="validationCustom03">Adresse de la société </label>
                                        <select class="custom-select" id="validationDefault03" onChange={(e)=>{
                                            this.setState({ adresse_societe : e.target.value})
                                        }}>
                                            <option selected disabled value="">Choisir</option>
                                            <option value="prise de contact">prise de contact</option>
                                            <option value="mission courte">mission courte</option>
                                            <option value="mission longue">mission longue</option>
                                            <option value="echange telephonique">echange telephonique</option>
                                            <option value="pechange visio">echange visio</option>
                                            <option value="demande ponctuelle">demande ponctuelle</option>
                                        </select>
                                        <div class="invalid-feedback">Veuillez choisir un Type</div>
                                    </div> */}
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouveau_client}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Nouveau contact
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="validationCustom01">Nom</label>
                    <input
                      class="form-control form-control-sm"
                      id="validationCustom01"
                      required
                      onChange={(e) => {
                        this.setState({ nom: e.target.value.toUpperCase() });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom02">Prénom</label>
                    <input
                      class="form-control form-control-sm"
                      id="validationCustom02"
                      required
                      onChange={(e) => {
                        this.setState({ prenom: e.target.value.toLowerCase() });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom03">Nom de la société</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      onChange={(e) => {
                        this.setState({ nom_societe: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.all_clients}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom04">Email</label>
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="validationCustom04"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom05">Numero de téléphone</label>
                    <input
                      class="form-control form-control-sm"
                      id="validationCustom05"
                      onChange={(e) => {
                        this.setState({ tel: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouveau_contact}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Nouveau contrat
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="validationCustom01">N° de contrat</label>
                    <input
                      class="form-control form-control-sm"
                      id="validationCustom01"
                      required
                      onChange={(e) => {
                        this.setState({
                          no_contrat: e.target.value.toUpperCase(),
                        });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom03">Nom de la société</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      required
                      onChange={(e) => {
                        this.setState({ nom_societe: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.all_clients}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom03">Date de début</label>
                    <input
                      class="form-control form-control-sm"
                      id="validationCustom03"
                      required
                      onChange={(e) => {
                        this.setState({ date_debut: e.target.value });
                      }}
                      pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
                    ></input>
                    <small class="form-text text-muted">
                      Format YYYY-MM-DD
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom04">Date de livraison</label>
                    <input
                      class="form-control form-control-sm"
                      id="validationCustom04"
                      required
                      onChange={(e) => {
                        this.setState({ date_livraison: e.target.value });
                      }}
                      pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
                    ></input>
                    <small class="form-text text-muted">
                      Format YYYY-MM-DD
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom04">Montant</label>
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="validationCustom04"
                      required
                      onChange={(e) => {
                        this.setState({ montant: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom05">Nombre d'heures</label>
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="validationCustom05"
                      required
                      onChange={(e) => {
                        this.setState({ nb_heures: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouveau_contrat}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Nouveau livrable
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="nom">Numéro de contrat</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      onChange={(e) => {
                        this.setState({ no_contrat: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.all_contrats}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="siret">Nom du livrable</label>
                    <input
                      class="form-control form-control-sm"
                      id="siret"
                      required
                      onChange={(e) => {
                        this.setState({ nom_livrable: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="adresse">Nombre d'heure attribuées</label>
                    <input
                      class="form-control form-control-sm"
                      id="adresse"
                      required
                      onChange={(e) => {
                        this.setState({ nb_heures_attribuees: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>Type</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ type: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Date de livraison</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ date_livraison: e.target.value });
                      }}
                      pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
                    ></input>
                    <small class="form-text text-muted">
                      Format YYYY-MM-DD
                    </small>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Montant</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ montant: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouveau_livrable}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Nouvelle mission
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="nom">Numéro de contrat</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      required
                      onChange={(e) => {
                        this.setState({ no_contrat: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.all_contrats}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="siret">Nom de la mission</label>
                    <input
                      class="form-control form-control-sm"
                      id="siret"
                      required
                      onChange={(e) => {
                        this.setState({ nom_mission: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="adresse">Nombre d'heure attribuées</label>
                    <input
                      class="form-control form-control-sm"
                      id="adresse"
                      required
                      onChange={(e) => {
                        this.setState({ nb_heures_attribuees: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>Type</label>
                    <input
                      class="form-control form-control-sm"
                      required
                      onChange={(e) => {
                        this.setState({ type: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>Date prévisionnelle de fin de mission</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ date_fin_prevue: e.target.value });
                      }}
                      pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
                    ></input>
                    <small class="form-text text-muted">
                      Format YYYY-MM-DD
                    </small>
                    <small class="form-text text-muted">Falcultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouvelle_mission}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingSix">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Saisie des temps
                </button>
              </h2>
            </div>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="validationCustom03">Nom de la société</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      onChange={(e) => {
                        this.get_contrat_condition(e.target.value);
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.all_clients}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="validationCustom03">Nunémro du contrat</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      onChange={(e) => {
                        this.get_mission(e.target.value);
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.contrat_condition}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="siret">Email du consultant</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      onChange={(e) => {
                        this.setState({ mail: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.all_mail}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="siret">Nom de la mission</label>
                    <select
                      class="custom-select"
                      id="validationDefault03"
                      onChange={(e) => {
                        this.setState({ id_mission: e.target.value });

                        this.setState({
                          nom_mission:
                            e.target.options[e.target.selectedIndex].text,
                        });
                      }}
                    >
                      <option selected disabled value="">
                        Choisir
                      </option>
                      {this.state.mission_names}
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Date de la saisie</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ date_saisie: e.target.value });
                      }}
                      pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
                    ></input>
                    <small class="form-text text-muted">
                      Format YYYY-MM-DD
                    </small>
                  </div>
                  <div class="form-group">
                    <label>Nombre d'heures</label>
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ nb_heures: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label>Etat d'avancement</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ etat_avancement: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouvelle_saisie}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingSeven">
              <h2 class="mb-0">
                <button
                  class="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Nouveau consultant
                </button>
              </h2>
            </div>
            <div
              id="collapseSeven"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="nom">Nom</label>
                    <input
                      class="form-control form-control-sm"
                      id="nom"
                      required
                      onChange={(e) => {
                        this.setState({ nom: e.target.value.toUpperCase() });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="nom">Prénom</label>
                    <input
                      class="form-control form-control-sm"
                      id="nom"
                      required
                      onChange={(e) => {
                        this.setState({ prenom: e.target.value.toLowerCase() });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="siret">Expérience</label>
                    <input
                      class="form-control form-control-sm"
                      id="siret"
                      required
                      onChange={(e) => {
                        this.setState({ experience: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="siret">Adresse mail</label>
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="siret"
                      required
                      onChange={(e) => {
                        this.setState({ mail: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="siret">Disponibilité</label>
                    <input
                      class="form-control form-control-sm"
                      id="siret"
                      onChange={(e) => {
                        this.setState({ charge_disponible: e.target.value });
                      }}
                    ></input>

                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <input
                      class="form-control form-control-sm"
                      onChange={(e) => {
                        this.setState({ commentaire: e.target.value });
                      }}
                    ></input>
                    <small class="form-text text-muted">Facultatif</small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.enregister_nouveau_consultant}
                  >
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddData;
