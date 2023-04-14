//your JS code here. If required.
function nonrepeat(s) {
	let arr = [];
    for(let i=0;i<26;i++){
        arr.push(0);
    }
    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-97]++;
    }
    let ans = null;
    for(let i=0;i<s.length;i++){
        if(arr[s.charCodeAt(i)-97]==1) ans = s.charAt(i);
    }
    return ans;
}
let s = prompt("Enter a string");
alert(nonrepeat(s));