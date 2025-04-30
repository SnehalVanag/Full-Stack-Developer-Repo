
import jwt from 'jsonwebtoken'
 const generateToken=async ()=>{
    let token=await jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"19d"})
    return token
}
export default generateToken