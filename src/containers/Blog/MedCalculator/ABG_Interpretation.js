import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ABG_Interpretation extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            ccr: 0,
            eGFR: 0,
            kgValue : 0,
            ageValue : 0,
            creValue : 0,
            gender: "male"
         };
        }

    handleIncCCr = () => {
        if(this.state.gender=="male"){
            this.setState(state => ({ 
                ccr: ((140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2), 
                eGFR: (175*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue, -0.203)).toFixed(2)
            }))
        }
        else{
            this.setState(state => ({ 
                ccr: (0.85*(140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2), 
                eGFR: (0.742*175*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue, -0.203)).toFixed(2)
            }))
        }
        };
    //CCr: [[140 - age(yr)]*weight(kg)]/[72*serum Cr(mg/dL)] 
    //186 x (Creatinine/88.4)-1.154 x (Age)-0.203 

    handleChangeKg = (e) => this.setState({kgValue: e.target.value});
    handleChangeAge = (e) => this.setState({ageValue: e.target.value});
    handleChangeCre = (e) => this.setState({creValue: e.target.value});
    changeGender = (e) => this.setState({gender: e.target.value});

    render() {
        return (
            <div>
                <h2>ABG Interpretator </h2>
                <label> pH<input type="number" value={this.state.kgValue} onChange={this.handleChangeKg}/></label>
                <label> PaO2<input type="number" value={this.state.ageValue} onChange={this.handleChangeAge}/></label>
                <label> PaCO2<input type="number" value={this.state.creValue} onChange={this.handleChangeCre}/></label>
                <label> BE<input type="number" value={this.state.creValue} onChange={this.handleChangeCre}/></label>
                <label> Na<input type="number" value={this.state.creValue} onChange={this.handleChangeCre}/></label>
                <span>
                    <button onClick={this.handleIncCCr}>calculate</button>
                </span>
                <h3>Diagnosis {this.state.ccr}mg/dl</h3>
                <h3>eGFR: {this.state.eGFR}mg/dl</h3>
            </div>
        );
    }
}
