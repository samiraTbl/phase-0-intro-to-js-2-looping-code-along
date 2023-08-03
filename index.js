
function writeCards(arr, evt)
{const narr=[]
for (let i=0;i<arr.length;i++)
{
    narr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
}
return narr
}
function countDown(num)
{
    let i =num; // the initialization moves OUTSIDE the body of the loop!
  while (i>=0) {
    console.log(i);
    i--; // the iteration moves INSIDE the body of the loop!
  }
}
countDown(5)