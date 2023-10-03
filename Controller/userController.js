let userModel = require("../Model/userSchema");
let response = {
    data : "",
    message: "success",
    code : 200
}
const userController = {
    // reading QueryData URL/Data through Query
    "userHome" : function(req,res){
       
       console.log(req.query);
        let data = {
            Id : req.query.id,
            Name : req.query.name
        }
        response.data = data;
        res.send(response)


    },
    "about" : function(req,res){
        // reading Params url? Data Through Params
        response.data = req.params.details

        res.send(response)
    },
    "aboutPost" : (req,res)=>{
        // Reading Post Data From Body
        let name = req.body.name;
        let emailId = req.body.email;
        let data = {
            name : name,
            emailId : emailId
        }
        response.data = data;
        
        res.send(response)
    },
    "header" : (req,res)=>{
        console.log(req.headers);
        
        response.data = req.headers.authorization
        res.send(response)
    },
    "getAllUser" : (req,res)=>{
        userModel.find({})
        .then((allUser)=>{
            response.data = allUser;
            res.send(response)
       
        }).catch((error)=>{
            response.data = error;
            res.send(response)
        })
      

    },
    "getParticularUser" : (req,res)=>{

        userModel.find({"_id" : req.params.userId})
        .then((allUser)=>{
            response.data = allUser;
            res.send(response)
       
        }).catch((error)=>{
            response.data = error;
            res.send(response)
        })

    },
    "saveUser" : (req,res)=>{
        
            let saveData = {
                "userName" :  req.body.userName,
                "password" : req.body.password,
                "address" : req.body.address,
                "emailId" : req.body.emailId,
                "mobileNo" : req.body.mobileNo
            }
            const user = new userModel(saveData);
            user.save()   
            response.data = saveData;
            res.send(response)
       
    },
    "updateUser" : (req,res)=>{
        let updateData = {
            "userName" :  req.body.userName,
            "password" : req.body.password,
            "address" : req.body.address,
            "emailId" : req.body.emailId,
            "mobileNo" : req.body.mobileNo
        }
        userModel.findOneAndUpdate({"_id":req.params.userId},updateData)
        .then((userUpdated)=>{
            response.data = userUpdated;
            res.send(response)
        }).catch((error)=>{
            response.data = error;
            res.send(response)
        })
    },

}
/*
exports.text =  function test(req,res){
    console.log(req.headers);
        
    response.data = {"My Headers" : req.headers.authorization }
    res.send(response)

}

exports.text1 =  function test(){

}
*/

module.exports = userController; 