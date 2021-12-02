let arr =[26,15,21,19,6]
let sum=0;
let sumDividedBy4=0;
for(i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum);
sumDividedBy4=sum%4;
console.log(sumDividedBy4);


///////////////Question 2////////////////////////////////

fetch('https://www.balldontlie.io/api/v1/teams')
.then(response=>response.json())
.then(data=> console.log(data))
.catch(error=>console.log(err))

///////////////////////////////////////////////////
