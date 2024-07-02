const Employee = require("../model/Employee");

exports.addEmployee = async(req,res) =>{
   try{
      const {name,city,salary,designation,phoneno,age}=req.body;
      const addUser = new Employee({
         name:name,
         city:city,
         salary:salary,
         designation: designation,
         phoneno:phoneno,
         age:age,
      });
  

      const savedEmployee = await addUser.save();
          if(savedEmployee){
              return res.status(200).json({
                status:true,
                message:'Account created.',
                data:savedEmployee,
              });
          }
  
          return res.status(200).json({
              status:false,
              message:'something wents wrongs',
          })
  
  
         }catch(error){
            return res.status(500).json({
                status:false,
                error:error.tostring(),
            })
      }
  }

  exports.updateEmployee = async (req, res) => {
   try {
       const { Id } = req.params;
       const {name, city}= req.body;
       const record = await Employee.findByIdAndUpdate({_id: Id},
            {$set: {name: name, city: city}},{new: true});
       if (record) {
           return res.status(200).json({
               status: true,
               data: record
           });
       }
       return res.status(200).json({
         status: false,
         error: 'Employee not found!'
     });
 } catch (error) {
     return res.status(200).json({
         status: false,
         error: error.toString()
     });
 }
};















/*
exports.function1 = (req, res) => {
  const {data} = req.body;
   //const {city} = req.params;
   //const {salary} = req.query;
   let a=[];
   data.forEach((item) => {
      a.push({'email':item.email})
   });
   return res.status(200).json({
      status:true,
      msg: 'msg passing',
      data:a
      
      //city:city,
      //id:id,
      //salary:salary
   });
   //let sum=0;
   /*no.forEach(n => {
      sum=sum+n
      console.log(n);
   });*/
   /*if(!no){
      return res.status(200).json({
         status:false,
         error: 'number is require',
      });
   }
   return res.status(200).json({
      status:false,
      no:no
   });
*/
//}
//no=[1,2,3,4,5]
//sum=15
