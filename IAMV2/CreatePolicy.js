import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const policy_document = {
    "Version" : "2012-10-17" , 
    "Statement" : [
            {
                "Effect": "Allow" , 
                "Action" : "*" ,
                "Resource":"*"
            }
    ]
   
}


const params = {
    PolicyDocument: JSON.stringify(policy_document) , 
    PolicyName: 'ritikpolicy' , 
    Description : "this is my policy"
} 


IAM.createPolicy(params , (err , data )=>{
   if(err){
    console.log(err)
   }

   else{
    console.log("policy created" , data )
   }
})
