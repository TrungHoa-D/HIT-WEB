var arr =[3,2,4];
var ans =[];
var target=6;
for(let i=0;i<arr.length-1;i++)
    for(let j=i+1;j<arr.length;j++)
        if(arr[i]+arr[j]==target) {
            ans.push(i);
            ans.push(j);
            break;
        }
console.log(ans);