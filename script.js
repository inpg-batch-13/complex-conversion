function complexConversion (text) {
  var data = text.split(',')
  var result = {}
  
  for (var i = 0; i < data.length; i++) {
    var item = data[i].split(':')
    // var key = item[0];
    // var value = item[1];
    result[item[0]] = item[1]
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
