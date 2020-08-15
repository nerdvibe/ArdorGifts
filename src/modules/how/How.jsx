import React  from "react";
import AnimationsWrapper from "../animationWrapper/AnimationWrapper";

export default function How() {
  return (
    <div className="container has-text-centered">
      <AnimationsWrapper>
        <div className="columns">
          <div className="column is-8 is-offset-2 has-text-left">
            <h1 className="title top35 has-text-primary">What is a paper wallet?</h1>
            <p>
              One of the most exciting things you can do with crypto is to
              store them to a piece of paper.
            </p>
            <p>
              First of all, the first rule of crypto-club is: Your keys — Your
              Ardor, Not your keys — Not your Ardor.
            </p>
            <p>
              In the most specific sense, an Ardor paper wallet is a document
              containing all of the data necessary to access a the wallet from
              Ardor Official Wallet or Ardor Lite wallet (mobile).
              <br />
            </p>
            <h2 className="title top35 has-text-primary">
              What are the benefits of having a paper wallet?
            </h2>
            <p>
              A paper wallet can be generated offline, making sure that the passphrase has never been exposed to the internet
              and allows you to have a copy of your copy literally on a piece of paper
            </p>
            <h2 className="title top35 has-text-primary">
              What can I do with a paper wallet?
            </h2>
            <p>
              With an Ardor paper wallet you can store you Ardor passphrase away
              of a computer. If the paper wallet is stored properly then this
              might be considered an extra layer of security in storing your
              passphrase
            </p>
            <p>
              Another use case of a paper wallet is to gift it to friends for
              example for Christmas. Let&apos;s say you want to give 10 ARDR
              to John, but John doesn&apos;t know how to create an ARDR wallet.
              You could create an ARDR Paper Wallet for John, send some ARDR to
              the generated address and then gift the paper wallet to him.
            </p>
            <h2 className="title top35 has-text-primary">
              Is this application communicating with any server?
            </h2>
            <p>
              No, Ardor Gifts is running only in your browser. This means
              that when you visit Ardor Gifts you are downloading the
              application in your browser and is running it locally. No data
              is transmitted to any server and there is no tracking/analytics
              software in place. In order to verify this, you can analyze on{" "}
              <a
                href="https://github.com/tomyum-code/Ardor Gifts/releases"
                className="underlined"
              >
                {" "}Github{" "}
              </a>{" "}
              the source code. In order to avoid any doubts, downloading the
              software from Github and running it offline is encouraged.
            </p>
            <h2 className="title top35 has-text-primary">
              How do I generate the paper wallet offline?
            </h2>
            <p>
              The code of{" "}
              Ardor Gifts{" "}
              is open source. You can improve it and submit a PR to the
              repository. If you need assistance, feel free to contact
              Tom Yum on the Ardor's Slack Chat.
            </p>
            <p>
              The safest way to generate a wallet is{" "}
              <a
                href="https://github.com/tomyum-code/Ardor Gifts/releases"
                className="underlined"
              >
                to download the application here
              </a>, transfer it into an usb drive, start an offline linux
              distribution, and open the index.html.
            </p>
            <p>
              If you don&apos;t want to bother to use an offline linux
              distribution, you can just download{" "}
              <a
                href="https://github.com/tomyum-code/Ardor Gifts/releases"
                className="underlined"
              >
                ArdorGifts.zip from here
              </a>, unzip it and execute the index.html. There is no need to
              be connected to internet while running the ArdorGifts app.
            </p>
          </div>
        </div>
      </AnimationsWrapper>
    </div>
  );
}
