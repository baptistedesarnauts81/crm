import React, { Component } from "react";
import "./AddData.css";
import axios from "axios";

class AddData extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : undefined,
            fname : undefined,
            type : undefined,
            date_beg : undefined,
            date_end : undefined,
            price : undefined,
            interested : undefined,
            comm : undefined
        };
    };
    
    submit_action = () =>{
        const info = {
            nom_premon : [this.state.name, this.state.fname].join(" "),
            type : this.state.type,
            date_debut : this.state.date_beg,
            date_fin : this.state.date_end,
            montant : this.state.price,
            interet : this.state.interested,
            commentaire : this.state.comm
        };
        axios.post("http://localhost:3001/insert_action", { info }).then(res=>{
            alert(res)
        });
    }


    render(){
        

        return(
            <div class = "container">
                <h1 class="display-3">Ajouter des données</h1>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Nouvelle activité 
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <form >
                                    <div class="form-group was-validated">
                                        <label for="validationCustom01">Nom </label>
                                        <input type="text" class="form-control form-control-sm" id="validationCustom01" required onChange={(e)=>{
                                            this.setState({name : e.target.value})
                                        }}></input>
                                        <div class="invalid-feedback">Veuillez rentrer un nom</div>
                                    </div>
                                    <div class="form-group was-validated">
                                        <label for="validationCustom02">Prenom </label>
                                        <input type="text" class="form-control form-control-sm" id="validationCustom02" required onChange={(e)=>{
                                            this.setState({fname : e.target.value})
                                        }}></input>
                                        <div class="invalid-feedback">Veuillez rentrer un prenom</div>
                                    </div>
                                    <div class="form-group was-validated">
                                        <label for="validationCustom03">Type d'activité </label>
                                        <select class="custom-select" id="validationDefault03" required onChange={(e)=>{
                                            this.setState({ type : e.target.value})
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
                                    </div>
                                    <div class="form-group was-validated">
                                        <label for="validationCustom04">Date de debut</label>
                                        <input class="form-control form-control-sm" id="validationCustom02" required chonChange={(e)=>{
                                            this.setState({date_beg : e.target.value})
                                        }} pattern = "[0-9]{4}[ -][0-9]{2}[ -][0-9]{2}"></input>
                                        <small id="adresseHelp" class="form-text text-muted">Format YYYY-MM-DD</small>
                                        <div class="invalid-feedback">Veuillez rentrer une date de début</div>
                                    </div>
                                    <div class="form-group">
                                        <label for="fin">Date de fin</label>
                                        <input class="form-control form-control-sm" id="fin" onChange={(e)=>{
                                            this.setState({date_end : e.target.value})
                                        }}></input>
                                        <small id="adresseHelp" class="form-text text-muted">Format YYYY-MM-DD</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="prix">Montant du contract</label>
                                        <input class="form-control form-control-sm" id="prix" onChange={(e)=>{
                                            this.setState({price : e.target.value})
                                        }}></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="interesse">Intéressé par d'autres missions</label>
                                        <select class="custom-select" id="validationDefault04" onChange={(e)=>{
                                            this.setState({interested : e.target.value})
                                        }}>
                                            <option selected disabled value="">Choisir</option>
                                            <option value = "TRUE">Oui</option>
                                            <option value = "FALSE">Non</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="commentaire">Commentaire</label>
                                        <input class="form-control form-control-sm" id="commentaire" onChange={(e)=>{
                                            this.setState({comm : e.target.value})
                                        }}></input>
                                        <small id="commentaireHelp" class="form-text text-muted">Falcultatif</small>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={this.submit_action}>Enregistrer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Nouveau contact
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="nom">Nom</label>
                                        <input class="form-control form-control-sm" id="nom"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="prenom">Prenom</label>
                                        <input class="form-control form-control-sm" id="prenom"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="nom_societe">Nom de la société</label>
                                        <input class="form-control form-control-sm" id="nom_societe"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="id_societe">ID de la societe</label>
                                        <input class="form-control form-control-sm" id="id_societe"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input class="form-control form-control-sm" id="email"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="ntel">Numero de téléphone</label>
                                        <input class="form-control form-control-sm" id="ntel"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="adresse">Addresse</label>
                                        <input class="form-control form-control-sm" id="adresse"></input>
                                        <small id="adresseHelp" class="form-text text-muted">Falcultatif</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="commentaire">Commentaire</label>
                                        <input class="form-control form-control-sm" id="commentaire"></input>
                                        <small id="commentaireHelp" class="form-text text-muted">Falcultatif</small>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Nouvelle société
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="nom">Nom de société</label>
                                        <input class="form-control form-control-sm" id="nom"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="raison">Raison sociale</label>
                                        <input class="form-control form-control-sm" id="raison"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="siret">N°SIRET</label>
                                        <input class="form-control form-control-sm" id="siret"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="adresse">Addresse</label>
                                        <input class="form-control form-control-sm" id="adresse"></input>
                                        <small id="adresseHelp" class="form-text text-muted">Falcultatif</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="commentaire">Commentaire</label>
                                        <input class="form-control form-control-sm" id="commentaire"></input>
                                        <small id="commentaireHelp" class="form-text text-muted">Falcultatif</small>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
};

export default AddData