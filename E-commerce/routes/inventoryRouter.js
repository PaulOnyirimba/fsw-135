const express = require('express');
const inventoryRouter = express.Router();
// const { v4: uuidv4 } = require('uuid');
const Inventory = require('../models/inventory.js')


// let inventory = [
//     {title: 'Navy Blue Zipper Jacket', genre: 'Sweater'},
//     {title: 'Light Wash Denim Jeans', genre: 'Jeans' },
//     {title: 'Coffee Brown Blazer', genre: 'Jacket' },
//     {title: 'Indigo Blue Denim Jacket', genre: 'Jacket' },
// ];

// get request
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventory) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(inventory)
  })
})
// inventoryRouter.get('/', (req, res) => {
//     res.send(inventory)
// });

// inventoryRouter.get('/:inventoryId', (req, res) => {
// const inventoryId = req.params.inventoryId;
// const singularInventory = inventory.find(inventory => inventory._id === inventoryId);

// res.send(singularInventory);
// })

// inventoryRouter.get('/search/genre', (req, res) => {
//     const inventoryGenre = req.query.genre;
//     const filteredInventory = inventory.filter(inventory => inventory.genre === InventoryId);

//     res.send(filteredInventory)
// })

// inventoryRouter.post('/', (req, res) => {
//     const newInventory = req.body;
//     newInventory._id = uuidv4();
//     inventory.push(newInventory);

//     console.log(inventory)
//     res.send(newInventory);
// })

// inventoryRouter.delete('/:InventoryId', (req, res) => {
//     const inventoryId = req.params.inventoryId;
//     const inventoryIndex = inventory.findIndex(inventory => inventory._id === inventoryId);
//     inventory.splice(inventoryIndex, 1);

//     res.send('Resource successfully deleted!')
// })

// inventoryRouter.put('/:inventoryId', (req, res) => {
//     const inventoryId = req.params.inventoryId;
//     const inventoryIndex = inventory.findIndex(inventory => inventory._id === inventoryId);
//     const updatedInventoryResource = Object.assign(inventory[inventoryIndex], req.body);

//     res.send('Resource successfully updated')
// })


module.exports = inventoryRouter;