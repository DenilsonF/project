var express = require('express'),
cliente = require('../modelos/cliente'),
routes = express.Router();

//...

routes.get('cliente/:id', function(req,res){
cliente.findOne({id:req.params.id}) .then((client))=>{
  res.json({
    sucess: true,
    result: usr
  })
},...);
})
routes.get('/cliente' fuction(req,res){
  cliente.find({}).the((clients)=>{
    res.json({
      sucess: true,
      result:usrs
    });
  }, (err)=> {

  });
})

routes.post('/cliente', function (req, res){
  var user = new Cliente({
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email
  });
  user.save().then((obj) =>{
    res.json({
      sucess: true
    });

  },(err) =>{
    res.json({
      sucess: false
    });
  });
})
routes.put('/cliente/:id', function(req,res){
  cliente.update({_id:req.params.id}, {$set: {
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email
  }})
  .then((obj) => {
  res.json({
    sucess: true
  });
}, (err)=> {
  retornaErro(res, err)

})

module.exports = server;
