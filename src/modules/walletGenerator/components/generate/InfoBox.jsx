import React, { Component } from "react";

// TODO: Refactor to use React Hooks
class InfoBox extends Component {
  renderExtraBox = wallet => {
    if (wallet.address && wallet.passphrase) {
      return (
        <div className="text-container has-text-left" >
           <p>
             <strong>Send the funds to this address: (Public)</strong> <br />
             {wallet.address}
           </p>
           <p className="top20">
             <strong>Access the funds with this passphrase: (Do not share this information with
             anybody) </strong> <br />
             {wallet.passphrase}
           </p>
         </div>
       );
     }
   };

  render() {
    let wallet = { ...this.props.wallet };

    if (!wallet || !wallet.address)
      wallet = {
        address: "_________________________________________"
      };

    return (
      <div className="columns is-centered ">
        <div className="column is-four-fifths">
          <div className="">
            <div className="text-container has-text-left info-box notification-topped">
              <h1 className="title is-8 has-text-dark">What to do now?</h1>
              <p className="">
                This is a real wallet. You can use it for yourself in order to store
                your Ardor or you top it up and gift it to a friend.<br />
                Now you can access this wallet with Ardor Wallet Desktop by entering the 12
                words passphrase. The balance of this wallet is ________________
                Ardor. You will need to send some ARDR to the address{" "}
                <span className={"has-background-warning-light"}> {wallet.address}</span> (e.g. from an exchange) in order to make it show in
                the block explorer.
                <br />
                <br />
                <strong>Never ever give anybody your passphrase</strong>. Whoever
                has this passphrase can access the Ardor contained in this wallet.
                Make sure that you store this paper wallet carefully and you make a
                backup of it. If you lose these credentials there is no way to get
                them back.
                <br />
                <br />
                Now you can print this wallet, save it as pdf and store it for
                yourself or eventually gift it to one of your friends.
                <br />
                <br />
              </p>
            </div>
            {this.renderExtraBox(wallet)}
            <div className="text-container has-text-left info-box notification-topped hide-print">
              <h1 className="title is-8 has-text-dark">Disclaimer</h1>
              <p className="">
                By using this software you accept the terms and conditions. This
                software is provided "as is", without warranty of any kind, express
                or implied, including but not limited to the warranties of
                merchantability, fitness for a particular purpose and
                noninfringement. in no event shall the authors or copyright holders
                be liable for any claim, damages or other liability, whether in an
                action of contract, tort or otherwise, arising from, out of or in
                connection with the software or the use or other dealings in the
                software.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBox;
