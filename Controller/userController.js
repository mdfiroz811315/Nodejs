let response = {
    data : "",
    message: "success",
    code : 200
}
const userController = {
    // reading Data through Query
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
        // reading Data Through Params
        response.data = req.params.details

        res.send(response)
    },
    "aboutPost" : (req,res)=>{
        // Reading Data From Body
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
    }

}
module.exports = userController; 