class First {
  hello(phrase){
    phrase = `Hi, I'm the parent method.`;
    console.log(phrase);
    
  }
}

class Second extends First {
  hello(phrase) {
    super.hello(phrase);
    console.log(`And I'm the child method!`);
    
  }
}

const father = new First();
const son = new Second();

son.hello();

