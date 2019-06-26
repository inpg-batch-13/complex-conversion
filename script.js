function complexConversion (text) {
  // Your code here
 var split = text.split(',')
 var result = {}
  

  for (var i = 0; i < split.length ; i++) {
    var splitted = split[i].split(':')
    result[splitted[0]] = splitted[1]

  }
  
return result

}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }
