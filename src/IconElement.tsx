import React from "react";

export default function IconElement(props: { onClick: any }) {
  return (
    <div className="svg-icon" onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
      >
        <path
          fill="#DEB887"
          d="M57,33h.64551a2.98685,2.98685,0,0,0,2.78613-1.88574l1.35547-3.3877A2.99766,2.99766,0,0,0,62,26.61523V16a3.00328,3.00328,0,0,0-3-3H57A2.994,2.994,0,0,0,54.16907,15.049l-5.33423-2.25916A4.99715,4.99715,0,0,0,44,9a4.941,4.941,0,0,0-2.48706.68854l-17.52173-7.421A2.99975,2.99975,0,0,0,21.65137,7.792L22,7.93964V29.10107A5.01441,5.01441,0,0,0,18.42383,32h-3.5166a3.00136,3.00136,0,0,0-2.25782,1.02441l-5.90625,6.751A2.99688,2.99688,0,0,0,6,41.752V55H5a3.00328,3.00328,0,0,0-3,3v1a3.00328,3.00328,0,0,0,3,3H59a3.00328,3.00328,0,0,0,3-3V58a3.00328,3.00328,0,0,0-3-3H53V54a3.00328,3.00328,0,0,0-3-3V47h2V45H50V44L47.78381,29H49V27H47.48834l-1.26269-8.54645c.089-.04474.17584-.09253.26178-.14233L54,21.49353V30A3.00328,3.00328,0,0,0,57,33ZM56,16a1.00067,1.00067,0,0,1,1-1h2a1.00067,1.00067,0,0,1,1,1V26.61523a1.0069,1.0069,0,0,1-.07129.3711l-1.35449,3.38476A.99559.99559,0,0,1,57.64551,31H57a1.00067,1.00067,0,0,1-1-1Zm-9-2a3,3,0,1,1-3-3A3.00328,3.00328,0,0,1,47,14ZM21.90039,4.63965a1.00081,1.00081,0,0,1,1.31152-.53027l16.67267,7.06134A4.96781,4.96781,0,0,0,39.1,13.0108L22.43066,5.9502A1.00144,1.00144,0,0,1,21.90039,4.63965ZM39.16522,15.21033a4.995,4.995,0,0,0,2.60852,3.24286L40.50757,27H39v2h1.21124l-2.2005,14.85352L38.00922,45H36v2h2.00659l-.00525,4H38a3.00328,3.00328,0,0,0-3,3v1H27V46h2a7,7,0,0,0,0-14H27.57617A5.01441,5.01441,0,0,0,24,29.10107V8.7868ZM25,55H13V44a1.00067,1.00067,0,0,1,1-1H24a1.00067,1.00067,0,0,1,1,1ZM23,31a3,3,0,1,1-3,3A3.00328,3.00328,0,0,1,23,31ZM8,41.752a.99782.99782,0,0,1,.248-.65918l5.90625-6.751A.99966.99966,0,0,1,14.90723,34H18a5,5,0,0,0,10,0h1a5,5,0,0,1,0,10H27a3.00328,3.00328,0,0,0-3-3H14a3.00328,3.00328,0,0,0-3,3V55H8ZM59,57a1.00067,1.00067,0,0,1,1,1v1a1.00067,1.00067,0,0,1-1,1H5a1.00067,1.00067,0,0,1-1-1V58a1.00067,1.00067,0,0,1,1-1Zm-8-3v1H37V54a1.00067,1.00067,0,0,1,1-1H50A1.00067,1.00067,0,0,1,51,54Zm-3-3H40V47h8Zm0-6.92676V45H40v-.92676L42.23315,29h3.5337ZM45.47058,27H42.52942l1.18945-8.02844c.095.00537.18488.02844.28113.02844s.18616-.02307.28113-.02844Zm2.645-10.171A4.96809,4.96809,0,0,0,48.9,14.98926L54,17.14917v2.17249Z"
        />
      </svg>
    </div>
  );
}
