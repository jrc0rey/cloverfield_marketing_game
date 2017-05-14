// console.log('3d working')

var camera, scene, renderer;


var canvas = document.querySelector('.box');

camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);


camera.position.set(0,0,70);


scene = new THREE.Scene();
scene.background = new THREE.Color( 0x282A36 );

renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true});
renderer.setSize(90,90);

canvas.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(20,20,20);

var material = new THREE.MeshBasicMaterial({
	color: 0xFFFFFF,
	wireframe: true
});

var cube = new THREE.Mesh(geometry, material)

scene.add(cube)

function render(){
	cube.rotation.x += 0.03
	cube.rotation.y -= 0.03

	renderer.render(scene,camera)
	requestAnimationFrame(render)

}

render()
