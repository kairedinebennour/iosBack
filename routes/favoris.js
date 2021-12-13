const express = require('express');
const router = express.Router();
const Favoris = require('../models/favoris');

//getting all 
router.get('/',async (req,res) =>{
try{
    const favoris = await Favoris.find()
    .populate('idProduit')
    .populate('idUser')
    .populate('idAnimal')
    res.json(favoris)

} catch(err){
    res.status(500).json({ message : err.message})
}
})
//getting one
router.get('/:id', getFavoris ,(req,res) =>{
res.send(res.panier)
})

// //creating one
 router.post('/',async (req,res) =>{
     const favori = new Favoris({
         idProduit : req.body.idProduit,
         idUser : req.body.idUser,
         idAnimal: req.body.idAnimal,
            
     })
     try{
         const newFavoris = await favoris.save()
         res.status(201).json(newFavorisl)
     }catch(err){
         res.status(400).json({message: err.message})

     }

 })

// //updating one
// //patch not put because it will update all 
// //informations instead of the info passed on router
 router.patch('/:id',getFavoris,async (req,res) =>{
   
   if(req.body.idProduit!=null){
       res.favoris.idProduit = req.body.idProduit
   }
   if(req.body.idUser!=null){
       res.favoris.idUser = req.body.idUser
   }
   if(req.body.idAnimal!=null){
       res.favoris.idAnimal = req.body.idAnimal
   }
   try{
   const updatedFavoris = await res.favoris.save()
       res.json(updatedFavoris)
     } catch (err) {
       res.status(400).json({ message: err.message })
     }
   })

//deleting one
router.delete('/:id',getFavoris,async (req,res) => {
try {
        await res.favoris.remove()
        res.json({ message: 'Deleted Favoris' })
} catch (err) {
        res.status(500).json({ message: err.message })
}
})

async function getFavoris(req, res, next) {
  let favoris
  try {
    favoris = await Favoris.findById(req.params.id)
    
    .populate('idProduit')
    .populate('idUser')
    .populate('idAnimal')
    if (favoris == null) {
      return res.status(404).json({ message: 'Cannot find favoris' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.favoris = favoris
  next()
}

module.exports = router