import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    Scope: "Local" ,
    // Scope : "All"
}

IAM.listPolicies(params , (err , data )=> {
    if (err){
        console.log (err)
    }
    else{
        console.log("policy lis is here " , data )
    }
})