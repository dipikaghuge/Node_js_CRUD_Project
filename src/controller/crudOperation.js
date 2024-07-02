const User = require("../model/User");

exports.addUser= async(req,res) =>{
   try{
      const {name,email,city,mobile}=req.body;
      const addUsers = new User({
         name:name,
         email:email,
         city:city,
         mobile: mobile
      });
  
      const savedUser = await addUsers.save();
          if(savedUser){
              return res.status(200).json({
                status:true,
                message:'User added',
                data:savedUser
              });
          }
  
          return res.status(200).json({
              status:false,
              message:'something wents wrongs',
          })
  
         }catch(error){
            return res.status(500).json({
                status:false,
                error:error.tostring()
            })
      }
  }

  exports.updateUser = async (req, res) => {
   try {
       const { Id } = req.params;
       const {name, email}= req.body;
       const records = await User.findByIdAndUpdate({_id: Id},
            {$set: {name: name, email: email}},{new: true});
       if (records) {
           return res.status(200).json({
               status: true,
               data: records
           });
       }
       return res.status(200).json({
         status: false,
         error: 'User data not found'
     });
 } catch (error) {
     return res.status(200).json({
         status: false,
         error: error.toString()
     });
 }
};

exports.deleteUser = async (req, res) => {
    try {
        const { Id } = req.params;
        const records = await User.findOneAndDelete({_id: Id});
        if (!records) {
            return res.status(200).json({
                status: true,
                data: records
            });
        }
        return res.status(200).json({
          status: false,
          error: 'User data not found'
      });
  } catch (error) {
      return res.status(200).json({
          status: false,
          error: error.toString()
      });
  }
 };
 
 exports.findUser = async (req, res) => {
    try {
        const { Id } = req.params;
        const records = await User.findOne(Id);
        if (records) {
            return res.status(200).json({
                status: true,
                data: records
            });
        } else {
            return res.status(404).json({
                status: false,
                error: 'User data not found'
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.toString()
        });
    }
};

