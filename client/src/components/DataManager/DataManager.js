import React, { Component } from "react";
import "./DataManager.css";
import axios from "axios";
import Table from "../Tools/Table"


class DataManager extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : false,
            tableData : null
        };
    };

    getClientData = () => {
        const sql_query = "SELECT * FROM client"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) =>{
            
            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{item.nom_societe}</td>
                        <td>{item.siret}</td>
                        <td>{item.adresse}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createClientTable();
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }

    getContratData = () => {
        const sql_query = "SELECT * FROM contrat"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) => {

            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{item.no_contrat}</td>
                        <td>{item.nom_societe}</td>
                        <td>{item.date_debut}</td>
                        <td>{item.date_livraison}</td>
                        <td>{item.montant}</td>
                        <td>{item.nb_heures}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createContratTable();
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }

    getContactData = () => {
        const sql_query = "SELECT * FROM contact"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) => {

            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{item.id_contact}</th>
                        <td>{item.nom_prenom}</td>
                        <td>{item.nom_societe}</td>
                        <td>{item.mail}</td>
                        <td>{item.tel}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createContactTable()
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }

    getLivrableData = () => {
        const sql_query = "SELECT * FROM livrable"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) => {

            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{item.id_livrable}</th>
                        <td>{item.no_contrat}</td>
                        <td>{item.nom_livrable}</td>
                        <td>{item.nb_heures_attribuees}</td>
                        <td>{item.type}</td>
                        <td>{item.date_livraison}</td>
                        <td>{item.montant}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createLivrableTable()
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }

    getMissionData = () => {
        const sql_query = "SELECT * FROM mission"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) => {

            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{item.id_mission}</th>
                        <td>{item.no_contrat}</td>
                        <td>{item.type}</td>
                        <td>{item.nom_mission}</td>
                        <td>{item.nb_heures_attribuees}</td>
                        <td>{item.date_fin_prevue}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createMissionTable()
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }
    getConsultantData = () => {
        const sql_query = "SELECT * FROM consultant"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) => {

            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{item.mail}</td>
                        <td>{item.nom_prenom}</td>
                        <td>{item.experience}</td>
                        <td>{item.charge_disponible}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createConsultantTable()
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }
    getSaisieData = () => {
        const sql_query = "SELECT * FROM saisie_temps"
        axios.get("http://localhost:3001/api/get_data", {params : {query : sql_query}}).then((response) => {

            let data = response.data.map((item, index) => {
                return(
                    <tr key={index}>
                        <th scope="row">{item.id_saisie}</th>
                        <td>{item.nom_prenom}</td>
                        <td>{item.nom_mission}</td>
                        <td>{item.id_mission}</td>
                        <td>{item.mail}</td>
                        <td>{item.date_saisie}</td>
                        <td>{item.nb_heures}</td>
                        <td>{item.etat_avancement}</td>
                        <td>{item.commentaire}</td>
                    </tr>
                )
            });
            this.setState({data});
            this.createSaisieTable()
        }).catch((err)=>{
            console.log(err);
            this.setState({data : false})
        })
    }

    createClientTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Nom de la société", "Siret", "Adresse", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }
    createContratTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Numéro de contrat", "Nom de la Société", "Date de début", "Date de livraison", "Montant", "Nombre d'heures", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }
    createContactTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Nom et prénom", "Nom de la Société", "Mail", "Téléphone", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }
    createLivrableTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Numéro de contrat", "Nom du livrable", "Nombre d'heures attribuées", "Type", "Date de livraison", "Montant", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }
    createMissionTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Numéro de contrat", "Type", "Nom de la mission", "Nombre d'heures attribuées", "Date de fin prévue", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }
    createConsultantTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Mail", "Nom et Prénom", "Expérience", "Charge disponible", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }
    createSaisieTable = () => {
        let tableData;

        tableData = (<Table 
            listHeaders={["Nom et prénom", "Nom de la mission", "Id de la mission", "Mail", "Date de saisie", "Nombre d'heures", "Etat d'avancement", "Commentaire"]}
            listItems={this.state.data}/>
        )
        this.setState({tableData})
    }



    render (){

        return (
            <div class = "container">
                <h1> Gérer les données </h1>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" onChange={(e)=>{
                        const val = e.target.value
                        if (val === "client"){
                            this.getClientData();
                        }else if (val === "contrat"){
                            this.getContratData();
                        }else if (val ==="contact"){
                            this.getContactData();
                        }else if (val ==="livrable"){
                            this.getLivrableData();
                        }else if (val ==="mission"){
                            this.getMissionData();
                        }else if (val ==="consultant"){
                            this.getConsultantData();
                        }else if (val ==="saisie_temps"){
                            this.getSaisieData();
                        }
                    }}>
                        <option selected value="none">Choose...</option>
                        <option value="client">Client</option>
                        <option value="contact">Contact</option>
                        <option value="contrat">Contrat</option>
                        <option value="livrable">Livrable</option>
                        <option value="mission">Mission</option>
                        <option value="consultant">Consultant</option>
                        <option value="saisie_temps">Saisie de temps</option>
                    </select>
                </div>
                <div>{this.state.tableData}</div>
                

                

            </div>
        )
    }

};


export default DataManager