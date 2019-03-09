import React, { Component } from "react";

import styles from "./MainWindow.module.css";
import Typist from "react-typist";

class MainWindow extends Component {
  state = { renderMsg1: false, renderMsg2: false };

  onMessage1Typed = () => {
    this.setState({ renderMsg1: true });
  };

  onMessage2Typed = () => {
    this.setState({ renderMsg2: true });
  };

  render() {
    return (
      <div className={styles.MainWindow}>
        <div className={styles.Wrapper}>
          <div className={styles.MainWindow__user}>
            <p>root@user:/#</p>
          </div>
          <div className={styles.MainWindow__text}>
            <Typist
              onTypingDone={this.onMessage1Typed}
              avgTypingSpeed={30}
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0, blink: true }}
            >
              <span>Welcome to my page!</span>
            </Typist>
          </div>
        </div>
        {this.state.renderMsg1 ? (
          <div className={styles.Wrapper}>
            <div className={styles.MainWindow__user}>
              <p>root@user:/#</p>
            </div>
            <div className={styles.MainWindow__text}>
              <Typist
                startDelay={175}
                avgTypingSpeed={30}
                onTypingDone={this.onMessage2Typed}
                cursor={{
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                  blink: true
                }}
              >
                <Typist.Delay ms={500} />
                <span> Here you can check all my work!</span>
              </Typist>
            </div>
          </div>
        ) : null}

        {this.state.renderMsg2 ? (
          <div className={styles.Wrapper}>
            <div className={styles.MainWindow__user}>
              <p>root@user:/#</p>
            </div>
            <div className={styles.MainWindow__text}>
              <Typist cursor={{ hideWhenDone: false }} />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MainWindow;
