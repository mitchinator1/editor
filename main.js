var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 700/650, 0.1, 1000 );
var canvas = document.getElementById("input");
var ctx = canvas.getContext('2d');

console.log("6:16");

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 700, 650 );
renderer.shadowMapType = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

var grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
var i, j;
var group = new THREE.Group();

for (i = 0; i < grid.length; i += 1) {
  for (j = 0; j < grid[i].length; j += 1) {
    
    grid[i][j] = new THREE.Mesh(geometry, material);
    grid[i][j].position.x = j * 2;
    grid[i][j].position.y = (grid.length - 1 - i) * 2;
    
    //scene.add(grid[i][j]);
    group.add(grid[i][j]);
    
  }
}

scene.add(group);

var planeGeo = new THREE.PlaneGeometry(50, 50, 1);
var planeMat = new THREE.MeshLambertMaterial({ color: 0xdddddd });
var plane = new THREE.Mesh(planeGeo, planeMat);
plane.receiveShadow = true;
scene.add( plane );

plane.position.x = 19;
plane.position.y = 19;
plane.position.z = -1;

camera.position.z = 29;
camera.position.x = 19;
camera.position.y = 19;

var pointLight = new THREE.PointLight(0xffffff, 1, 140);
pointLight.position.set(20, 20, 30);
var ambientLight = new THREE.AmbientLight(0x888888);
scene.add( pointLight, ambientLight );

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var render = function () {
  
    requestAnimationFrame( render );

    renderer.render(scene, camera);
  
};

requestAnimationFrame(render);
