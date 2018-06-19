import "babel-polyfill";
import Person from './person-controller';

const hello = async function() {
  console.log('hello');
}
hello();
Person.hello();
console.log('sample test');
