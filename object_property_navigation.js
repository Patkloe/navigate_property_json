function decouv(){
 var tovoir = { val1:'a', val2:'b',val3:'c'};
  //var i = " ";
  for(var j in tovoir)  // navigate in the property of a json object
    {
      //i = i + j;
      console.log(tovoir[j]);
    }
}
decouv();
