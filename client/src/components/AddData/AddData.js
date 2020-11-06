import React, { Component } from "react";
import "./AddData.css"

class AddData extends Component {

    constructor(props){
        super(props);
    };


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
                                <form>
                                    <div class="form-group">
                                        <label for="email">Mail client </label>
                                        <input class="form-control form-control-sm" id="email"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="type">Type d'activité </label>
                                        <input class="form-control form-control-sm" id="type"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="debut">Date de debut</label>
                                        <input class="form-control form-control-sm" id="debut"></input>
                                        <small id="adresseHelp" class="form-text text-muted">Format DD-MM-YYYY</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="fin">Date de fin</label>
                                        <input class="form-control form-control-sm" id="fin"></input>
                                        <small id="adresseHelp" class="form-text text-muted">Format DD-MM-YYYY</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="prix">Montant du contract</label>
                                        <input class="form-control form-control-sm" id="prix"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="interesse">Intéressé par d'autres missions</label>
                                        <select class="custom-select" id="validationDefault04" required>
                                            <option selected disabled value="">Choisir</option>
                                            <option>Oui</option>
                                            <option>Non</option>
                                        </select>
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