const express = require('express');
const router = express.Router();
const Panier = require('../models/panier');
const Animal =  require('../models/animal');
const panier = require('../models/panier');

//getting all 
router.get('/',async (req,res) =>{
try{
    const paniers = await Panier.find()
    .populate('idProduit')
    .populate('idUser')
    .populate('idAnimal')
    res.json(paniers)

} catch(err){
    res.status(500).json({ message : err.message})
}
})
//getting one
router.get('/:id', getPanier ,(req,res) =>{
res.send(res.panier)
})


//creating one
router.post('/',async (req,res) =>{
  const panier = new Panier({
    idProduit: req.body.idProduit,
    idUser: req.body.idUser,
    idAnimal: req.body.idAnimal, 
  })
  try{
      const newPanier = await panier.save()
      res.status(201).json(newPanier)
  }catch(err){
      res.status(400).json({message: err.message})

  }

})




 //updating one
 //patch not put because it will update all 
// //informations instead of the info passed on router
 router.patch('/:id',getPanier,async (req,res) =>{
   
   if(req.body.idProduit!=null){
       res.panier.idProduit = req.body.idProduit
   }
   if(req.body.idUser!=null){
       res.panier.idUser = req.body.idUser
   }
   if(req.body.idAnimal!=null){
    res.panier.idAnimal = req.body.idAnimal
}

   try{
   const updatedPanier = await res.panier.save()
       res.json(updatedPanier)
     } catch (err) {
       res.status(400).json({ message: err.message })
     }
   })

//deleting one
router.delete('/:id',getPanier,async (req,res) => {
try {
        await res.panier.remove()
        res.json({ message: 'Deleted Panier' })
} catch (err) {
        res.status(500).json({ message: err.message })
}
})

async function getPanier(req, res, next) {
  let panier
  try {
    panier = await Panier.findById(req.params.id)
    .populate('idProduit')
    .populate('idUser')
    .populate('idAnimal')
    if (panier == null) {
      return res.status(404).json({ message: 'Cannot find panier' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.panier = panier
  next()
}

module.exports = router