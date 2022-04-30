exports.protect=async(req,res,next)=>{
    let token;
    if(req.headers.Authorization && req.headers.Authorization.startsWith("Bearer ")){
        token=req.headers.Authorization.split(" ")[1]
        next()
    }
    return res.status(403).send("You must be logged in to access this routes")
}


//"/comments/{userId}"