// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ')
// })

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

interface Lengthy {
  length: number;
}

const mergedObj = merge({ name: 'Dan', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
  return `Value: ${obj[key]}`
}

extractAndConvert({name: 'Dan'}, 'name')