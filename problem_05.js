function resultReport(marks) {
    if (Array.isArray(marks)) {
        let obj = {
            finalScore: 0,
            pass: 0,
            fail: 0,
        }
        let passCount=0;
        let failCount=0;
        let sum=0;

        for(let i=0; i<marks.length; i++){
            sum+=marks[i];
            if(marks[i]>=40){
                passCount++;
            }else{
                failCount++;
            }
        }
        if(marks.length===0){
            obj.finalScore=0;
        }else{
            obj.finalScore=Math.round(sum/marks.length);
        }
        obj.pass=passCount;
        obj.fail=failCount;
        return obj;
    } else {
        return "Invalid";
    }
}


const x=resultReport([]);
console.log(x);