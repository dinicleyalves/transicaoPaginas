(function inittrans() 
    {
  var params =  //All params are optional, you can just assign {} 
  { 
      "navB" : "slide reverse", //Effect for navigation button, leave it empty to disable it
      "but" : true,       //Flag to enable transitions on button, false by default
      "cBa" : onTransitionFinished // function() { alert("Done!"); }  //callback function
    };
    new ft(params);
  })();

  function onTransitionFinished()
  {
  //Do anything you want 
}