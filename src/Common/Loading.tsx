import React from 'react'
import LoadingImg from '../Common/Images/Loading.gif'

// const Loading: React.FC =() => {
//   return (
//     <div id="divLoading" style={{ display: "contents", width: "100%", backgroundColor: "rgba(255,246,246,0.5)", top: "0px", left: "0px", position: "fixed", textAlign: "center", verticalAlign: "middle", zIndex: 99999 }}>
//     <div id="divLoadingImage" style={{ position: "absolute", display: "block", width: "200px", height: "200px" }}>
//       <img id="imgLoading" alt="LoadMsg" src={LoadingImg} 
//       style={{ width: "1000%", height: "100%",objectFit: "contain" }}
//       />
//     </div>
// </div>
//   )
// }

const Loading: React.FC = () => {
  return (
    <div id="divLoading"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: 'rgba(255, 246, 246, 0.5)', position: 'fixed', top: 0, left: 0, zIndex: 99999, }}
    >
      <div id="divLoadingImage"
        style={{ width: '100%', maxWidth: '120px',
        }}
      >
        <img id="imgLoading" alt="LoadMsg" src={LoadingImg} 
        style={{ width: '100%', height: 'auto', objectFit: 'contain', }}
        />
      </div>
    </div>
  );
};

export default Loading;