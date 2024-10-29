exports.logTime = (req, res, next)=>{
    console.log('The time is: '+Date.now());
    next();
}