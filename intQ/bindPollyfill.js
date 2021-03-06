let obj =  {
    firstName: "Mohit",
    lastName: "Gupta"
  }
  
  function printName() {
    console.log(this.firstName + " "  + this.lastName);
  }
  
  /* Simple Bind uses*/
  let fun = printName.bind(obj);
  fun();
  
  /* Polyfill of Bind */
  
  Function.prototype.myBind = function (...args) {
    let obj = this;
    let arr = args.slice(1);
    return function() {
      obj.apply(args[0], arr);
    }
  }
  
  fun = printName.myBind(obj);
  fun();
  
  