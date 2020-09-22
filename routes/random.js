function getRandomInRange(from, to, fixed) {

    //console.log("lat aur long   ggg kr yaar")
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;

}
  var lat = getRandomInRange(-90 ,90, 15 )
var   lng =  getRandomInRange(-180, 180, 15)

     let loc=`${lat}` +","+ `${lng}`;

     


     module.exports= {

 
     latitude:lat
     ,longitude:lng
        

    };
