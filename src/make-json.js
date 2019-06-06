// Note: this file is primarily for me to not write JSON by hand
const fs = require('fs');

const scene = {
  scenes: [
    {
      sky: {
        id: 'sky',
        color: '#6EBAA7',
        // CSS classes on inventory
      },
      isDefault: true,
      assets: [
        {
          src: './assets/applePie.obj',
          id: 'pie'
        },
        {
          src: './assets/carpet.png',
          id: 'carpet'
        },
        {
          src: './assets/applePie.mtl',
          id: 'pie-mtl'
        },
        {
          src: './assets/key.obj',
          id: 'key'
        },
        {
          src: './assets/wall.jpg',
          id: 'wall'
        },
        {
          src: './assets/key.mtl',
          id: 'key-mtl'
        },
        {
          src: './assets/chest.obj',
          id: 'chest'
        },
        {
          src: './assets/chest.mtl',
          id: 'chest-mtl'
        },
        {
          src: './assets/coin.obj',
          id: 'coin'
        },
        {
          src: './assets/coin.mtl',
          id: 'coin-mtl'
        },
        {
          src: './assets/person.obj',
          id: 'person'
        },
        {
          src: './assets/models/plant/CoffeePlant.obj',
          id: 'plant'
        },
        {
          src: './assets/models/plant/CoffeePlant.mtl',
          id: 'plant-mtl'
        },
        {
          src: './assets/models/light/model.obj',
          id: 'light'
        },
        {
          src: './assets/models/light/materials.mtl',
          id: 'light-mtl'
        },
        {
          src: './assets/models/desk/Desk.obj',
          id: 'desk'
        },
        {
          src: './assets/models/desk/Desk.mtl',
          id: 'desk-mtl'
        },
      ],
      entities: [
        // {
        //   position: {
        //     x: 0,
        //     y: 0,
        //     z: 0,
        //   },
        //   geometry: 'primitive: sphere',
        //   material: 'color: #4444FF',
        //   physics: 'static-body',
        // },
        {
          primitiveType: 'a-plane',
          position: '0 0 -4',
          width: 100,
          height: 100,
          src: '#carpet',
          repeat: '15 15',
          rotation: '-90 0 0',
          'static-body': '',
        },
        {
          primitiveType: 'a-box',
          position: '25 0 0',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          depth: '50'
        },
        {
          primitiveType: 'a-box',
          position: '-25 0 0',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          depth: '50'
        },
        {
          primitiveType: 'a-box',
          position: '0 0 25',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          width: '50'
        },
        {
          primitiveType: 'a-box',
          position: '0 10 0',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          width: '50',
          depth: '50'
        },
        {
          position: '22 0 22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          position: '-22 0 22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          position: '21 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '20, 0, 20',
          'obj-model': 'mtl: #desk; obj: #desk-mtl',
          'static-body': '',
          scale: '5, 5, 5'
        },
        {
          position: '22 0 -22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          position: '-22 0 -22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          primitiveType: 'a-box',
          position: '0 0 -25',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          width: '50'
        },
        {
          primitiveType: 'a-key',
          position: '2 1 -2',
          'obj-model': 'mtl: #key-mtl; obj: #key;',
          scale: '.025, .025, .025',
          'dynamic-body': 'mass: 1, shape: box',
          unlocksentity: '123'
        },
        {
          position: '-7, 3, -2',
          'obj-model': 'obj: #person',
          'static-body': '',
          npc: 'name: Daisy; questid: 2'
        },
        {
          primitiveType: 'a-coin',
          position: '3, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          primitiveType: 'a-coin',
          position: '5, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          primitiveType: 'a-coin',
          position: '7, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          primitiveType: 'a-coin',
          position: '9, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          primitiveType: 'a-chest',
          position: '5 .5 -3',
          islocked: true,
          contents: '{"name":"Apple Pie"*"description":"A delicious piece of freshly baked pie"*"thumbnail": "https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/pie.png?alt=media&token=4afa56e5-ade9-4d0f-bdd3-201469b02788"},{"name":"Apple Pie"*"description":"A delicious piece of freshly baked pie"*"thumbnail": "https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/pie.png?alt=media&token=4afa56e5-ade9-4d0f-bdd3-201469b02788"}',
          id: '123'
        },
        {
          primitiveType: 'a-entity',
          position: '-2 1 3',
          'dynamic-body': 'shape: box; mass: 0',
          spin: '',
          'obj-model': 'mtl: #pie-mtl; obj: #pie',
          scale: '.25, .25, .25',
          collectable: 'name: Apple Pie; description: A delicious piece of freshly baked pie; thumbnail: https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/pie.png?alt=media&token=4afa56e5-ade9-4d0f-bdd3-201469b02788'
        },
        {
          primitiveType: 'a-box',
          position: {
            x: 0,
            y: 5,
            z: -2,
          },
          height: 1,
          width: 1,
          // 'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: 2; shape: box;',
          // scale: '.0025, .0025, .0025',
          collectable: 'name: boxy; description: a box; thumbnail: ./assets/boxy.png',
        },
        {
          primitiveType: 'a-box',
          position: {
            x: 0,
            y: 0.4,
            z: -5,
          },
          height: 1,
          width: 1,
          // 'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: 2; shape: box;',
          // scale: '.0025, .0025, .0025',
          collectable: 'name: another box; description: some other box',
        },
        {
          primitiveType: 'a-box',
          position: {
            x: 0,
            y: 0.4,
            z: -8,
          },
          height: 1,
          width: 1,
          // 'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: 2; shape: box;',
          // scale: '.0025, .0025, .0025',
          collectable: 'name: box 3; description: a third box',
        }
      ],
    },
  ],
};
fs.writeFile('./src/scene.json', JSON.stringify(scene), (err) => {
  if (err) {
    console.error('There was a problem writing to the file ', err);
  } else { console.log('JSON Written!'); }
});
