const says = new Map();
console.log(says.set('dog','barks'));
says.set('dog2','barks2');
says.set('dog3','barks3');
says.set('dog4','barks4');
console.log(says.get('dog'));
says.get('dog2');
says.get('dog3');
says.delete('dog4');
console.log(says.has('dog'));




const mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); 
mySet.delete('foo');
mySet.size;
console.log(mySet)

for (const item of mySet) {
  console.log(item);
}
