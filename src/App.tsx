import * as THREE from "three";

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position = 1;

const App = () => {
  return <div></div>;
};

export default App;
