var _ = require('underscore');
var result;

result = _.filter([3,4,5,6,7,8,9], function(num){return num%2 == 0;});
console.log(result);

var objAry = [{name: "Mario",  type:"human" },
              {name: "Troopa", type:"turtle"},
              {name: "Koopa",  type:"turtle"},
              {name: "Luigi",  type:"human" }];
result = _.find(objAry,function(obj){return obj.type == 'turtle';});
console.log(result.length);