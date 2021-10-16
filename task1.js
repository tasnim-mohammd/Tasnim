class Person {
    talk() {
      return 'Talking';
    }
  }
  
  const me = new Person();
  const you = new Person();
  me.talk(); 
  you.talk(); 
  
  Person.prototype.talk = function () {
    return 'New and improved Talking';
  }; 
  
  

  function Person() {};
  Person.prototype.talk = function () {
    return 'Talking';
  }
  
  const me = new Person();
  const you = new Person();
  me.talk(); 
  you.talk(); 
  
  
