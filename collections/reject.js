var _ = require('underscore');
var result;

result = _.reject([3,4,5,6,7,8,9], function(num){return num%2 == 0;});
console.log(result);

var objAry = [{name: "Mario",  type:"human" , role:"hero"   },
              {name: "Troopa", type:"turtle", role:"monster"},
              {name: "Koopa",  type:"turtle", role:"monster"},
              {name: "Luigi",  type:"human" , role:"hero"   },
              {name: "Shy Guy",type:"human",  role:"monster"}];
result = _.reject(objAry,{type:"human" , role:"hero"});
console.log(result);