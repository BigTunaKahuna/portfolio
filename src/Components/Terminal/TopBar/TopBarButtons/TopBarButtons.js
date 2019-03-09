import React from "react";

import styles from "./TopBarButtons.module.css";

const Buttons = props => {
  return (
    <div className={styles.TopBarButtons}>
      <button className={styles.Button_}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.0"
          height="10.0"
          viewBox="0 0 3.0694478 3.0694478"
          id="svg8"
        >
          <g id="layer1" transform="translate(-71.644 -69.254)">
            <path
              d="M 71.689951,71.797655 H 74.67242"
              id="path1406"
              fill="none"
              stroke="#000"
              strokeWidth="0.5"
            />
          </g>
        </svg>
      </button>
      <button className={styles.ButtonO}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.5"
          height="10.5"
          viewBox="0 0 3.0694478 3.0694478"
          id="svg8"
        >
          <rect
            y="0.104"
            x="0.099"
            height="2.87"
            width="2.873"
            id="rect4520"
            fillOpacity="0"
            stroke="#000"
            strokeWidth="0.55"
          />
        </svg>
      </button>
      <button className={styles.ButtonX}>
        <svg
          xmlns="http://purl.org/dc/elements/1.1/"
          viewBox="0 0 3.0694478 3.0694478"
          height="10.0"
          width="10.0"
        >
          <g transform="translate(-71.643718,-69.253716)">
            <text
              transform="scale(1.1029932,0.90662391)"
              y="79.739395"
              x="64.803322"
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "4.57137537px",
                lineHeight: "1.25",
                fontFamily: "sans-serif",
                letterSpacing: 0,
                wordSpacing: 0,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.2",
                strokeMiterlimit: 4,
                strokeDasharray: "none"
              }}
              xmlSpace="preserve"
            >
              <tspan
                style={{
                  lineHeight: "1.25",
                  strokeWidth: "0.2",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none"
                }}
                y="79.939395"
                x="64.803322"
              >
                X
              </tspan>
            </text>
            <text
              y="65.273933"
              x="76.204002"
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "10.58333302px",
                lineHeight: "1.25",
                fontFamily: "sans-serif",
                letterSpacing: 0,
                wordSpacing: 0,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.25000000"
              }}
              xmlSpace="preserve"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Buttons;
