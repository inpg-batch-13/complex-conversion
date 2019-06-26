function complexConversion (text) {
  var split = text.split(',').map(function(n){
   return n.split(':')
  })

 var hasil = {}
  for (i = 0 ; i < split.length ; i++){
    
   hasil[split[i][0]] = split[i][1]  

  } 
  return hasil
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }
