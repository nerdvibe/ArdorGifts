import React, { Component } from "react";

// TODO: Refactor to use React Hooks
class Toolbar extends Component {
setMessage = e => {
let max_message = false;
let message = e.target.value;
const length_max_message = this.props.themes[this.props.themeName]
.message_length;
message = message.substring(0, length_max_message);
if (message.length >= length_max_message) max_message = true;

this.props.setMessage(message, max_message);
};

renderSecondaryToolbar = () => {
if (this.props.showInsert)
return (
<div >
  <div className="columns is-centered">
    <div className="column is-two-fifths ">
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control">
              <label htmlFor="message-input">
                {" "}<i className="fa fa-address-card fa-fw" aria-hidden="true" />{" "}
                Address:
              </label>
              <input className="input message-input" type="text" placeholder="Add an address" onChange={e=>
              this.props.setAddress(e)}
              />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="column is-two-fifths ">
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control">
              <label htmlFor="message-input">
                {" "}<i className="fa fa-key fa-fw" aria-hidden="true" />{" "}
                Passphrase:
              </label>
              <input className="input message-input" type="text" placeholder="Add a passphrase" onChange={e=>
              this.props.setPassphrase(e)}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

render() {
return (
<div className="tools has-text-right bottom20 hide-print fade-in">
  <div className="columns is-centered">
    <div className={"column " +(this.props.custom?' is-one-fifths':' is-two-fifths')}>
      <div className="has-text-left" style={{fontWeight:'bold'}}>
        <icon className="fas fa-pencil-alt"></icon> {" "} 
        Write a message
      </div>
      <input className="input message-input" type="text" placeholder="Add an address" 
                      onChange={e => this.setMessage(e)}
      />
    </div>
    <div className={"column " +(this.props.custom?' is-one-fifths':' is-two-fifths')}>
      <div className="has-text-left" style={{fontWeight:'bold'}}>
        <icon className="fas fa-palette"></icon> {" "} 
        Select a style
      </div>
      <div class="select full-frame">
        <select onChange={this.props.changeTheme} style={{width:'100%'}}>
          {Object.keys(this.props.themes).map(theme => {
            return (
              <option
                key={theme}
                value={theme}
                selected={this.props.themeName === theme}
              >
                {" "}{this.props.themes[theme].label}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
    <div className="column fade-in is-one-fifths" style={{display: this.props.custom?'block':'none'}}>
      <div className="has-text-left" style={{fontWeight:'bold'}}>
        <icon className="fas fa-palette"></icon> {" "} 
        Select a color
      </div>
      <div class="select full-frame">
        <select onChange={this.props.setColor} style={{width:'100%'}}>
          {Object.keys(this.props.colors).map(theme => {
            return (
              <option
                key={theme}
                value={theme}
              >
                {" "}{theme}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  </div>
  {this.renderSecondaryToolbar()}

  <div className="columns is-centered">
    <div className="column is-two-fifths" style={{padding:'25px'}}>
      <div className="columns">
        <div className="column big-button-orange clickable" onClick={this.props.createWallet}  >
          <div className="columns">
            <div className="column is-one-fifths">
              <i className="fa fa-redo" style={{fontSize:'50px'}}></i>
            </div>
            <div className="column is-four-fifths is-vcentered">
              <div className="button-title-left" style={{paddingTop:'10px'}}>
                Generate new wallet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="column is-two-fifths" style={{padding:'25px'}}>
      <div className="columns">
        <div className="column big-button clickable" onClick={window.print} style={{marginTop:0}}>
          <div className="columns">
            <div className="column is-one-fifths">
              <i className="fa fa-check" style={{fontSize:'50px'}}></i>
            </div>
            <div className="column is-four-fifths is-vcentered">
              <div className="button-title-left" style={{paddingTop:'10px'}}>
                Proceed to print
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
}

export default Toolbar;