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

// Post request
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedInventory)
    })
  })

//   Delete request
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
      {_id: req.params.inventoryId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
      }
    )
  })
//   Put request
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
      { _id: req.params.inventoryID},
      req.body,
      {new: true},
      (err, updatedInventory) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedInventory)
      }
    )  
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