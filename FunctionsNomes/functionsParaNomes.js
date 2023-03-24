//Primeiro método
//Usando a set
var Person = function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    
    this.setAge = function (age) {
      this.age = age;
    };
    
    this.toString = function () {
      return ["Teste 1 Hello! meu nome é ", this.firstName, " ", this.lastName, " E eu tenho ", this.age, " anos."].join("");
    };
  };
  
  var gab = new Person("Gabriel", "Odorcik", 19);
  console.log(gab.toString());
  
  //Segundo método
  
  var Person = function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
  };
  
  // prototype é um excelente método se você necessita de várias chamadas
  Person.prototype.setAge = function (age) {
    this.age = age;
  };
  
  Person.prototype.toString = function () {
    return ["Teste 2 Hello! meu nome é ", this.firstName, " ", this.lastName, " E eu tenho ", this.age, " anos."].join("");
  };
  
  var gab = new Person("Gabriel", "Odorcik", 19);
  console.log(gab.toString());
  
  //herança
  var Developer = function (firstname, lastname, age, skills) {
    Person.call(this, firstname, lastname, age);
    this.skills = skills;
  };
  
  Developer.prototype.setAge = function (age) {
    Person.prototype.setAge.call(this, age); 
  }
  
  Developer.prototype.toString = function () {
    return ["Teste 3 Olá, meu nome é ", this.firstName, " ", this.lastName, " e eu tenho ", this.age, " anos e tenho como skills ", this.skills].join("");
  };

  var gab = new Developer("Gabriel", "Odorcik", 19, " Javascript e Python.");
  console.log(gab.toString());
  
  // fazendo uso de métodos privados, e invertendo os nomes, explorando o set e get
   
  var Person = function (firstname, lastname, age) {
    
    var _firstName = firstname;
    var _lastName = lastname;
    var _age = age;
    
    this.setFirstname = function (firstname) {
        _firstName = firstname;
    }

    this.getFirstname = function () {
        return _firstName;
    }

    this.setLastname = function (lastname) {
        _lastName = lastname;
    }

    this.getLastname = function () {
        return _lastName;
    }

    this.setAge = function (age) {
        _age = age;
    };
    
    this.getAge = function () {
        return _age;
    };
    
    this.toString = function () {
        return ["Teste 4 Hello! meu nome é ", _firstName, " ", _lastName, " E eu tenho ", _age, " anos."].join("");
    };

  };
  
  var gab = new Person("Gabriel", "Odorcik", 10);
  gab.setAge(19);
  gab.setFirstname("Odorcik");
  gab.setLastname("Gabriel");
  console.log(gab.toString());

  