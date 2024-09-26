const { render } = require('ejs')
const bcrypt = require('bcrypt')
const Signup = require('../models/Signup')
const saltRound =10;

function loginpage(req,res){
  try{
    res.render('login')
  }catch(err){
    console.log(err)
  }
}
function signuppage(req,res){
   try{
    res.render('signup')
   }catch(err){
    console.log(err)
   }
}

async function signupSubmit(req,res){
 try{
       let hashedPassword = bcrypt.hashSync(req.body.password, saltRound)
       console.log(hashedPassword)
       let customer = await new Signup(req.body)
       console.log(customer)
       customer.password = hashedPassword
       await customer.save()
       res.render('login')
 }catch(err){
    console.log(err)
 }
}


module.exports={loginpage,signuppage,signupSubmit}