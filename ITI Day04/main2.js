function a() {
    function b() {
      console.log(myvar);
    }
    console.log(myvar);
    var myvar = 2;
    b();
  }
  a();
  console.log(myvar)


  //After Hoisting

  function a() {
    var myvar;
    function b() {
      console.log(myvar);
    }
    var myvar = 2;
    console.log(myvar);
    b();
  }
  a();
  console.log(myvar);