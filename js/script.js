const cubes = new Zdog.Illustration({

     element:'.cubes',
     resize:'fullscreen',
     zoom:2,
     dragRotate: true,
     onDragStart: function( pointer ) {
        console.log('the pointer',pointer);
      },
      onDragMove: function( pointer, moveX, moveY ) {
        console.log(`Drag moved ${moveX}, ${moveY}`);
      }
});

const cubeOne = new Zdog.Box({

     addTo:cubes,
     width:200,
     height:200,
     depth:200,
     stroke:10,
     fill:true,
     leftFace:'#rgba(221, 170, 0, 0.4)',
     rightFace:'rgba(238, 102, 34, 0.4)',
     topFace:'rgba(238, 221, 0, 0.4)',
     bottomFace:'#rgba(102, 51, 102, 0.4)',
    

});

new Zdog.Shape({

    path: [
        { x:  0, y: -8 },
        { x:  8, y:  8 },
        { x: -8, y:  8 },
      ],
      translate: { z: 10 },
      color: '#E62',
      stroke: 3,
      fill: true,
})

cubeOne.copyGraph({
    translate: { z: 300 },
    color: '#C25',

})






function animateCubes(){

    cubes.updateRenderGraph();
    requestAnimationFrame(animateCubes)
}

animateCubes();


// const TAU = Zdog.TAU;

// let illo = new Zdog.Illustration({
//   element: '.zdog-canvas',
//   dragRotate: true,
// });

// new Zdog.Box({
//   addTo: illo,
//   width: 120,
//   height: 100,
//   depth: 80,
//   rotate: { x: -TAU/8, y: TAU/8 },
//   stroke: false,
//   color: '#EA0',
//   rearFace: '#636',
//   leftFace: '#636',
//   bottomFace: '#636',
// });

// function animate() {
//   illo.updateRenderGraph();
//   requestAnimationFrame( animate );
// }

// animate();