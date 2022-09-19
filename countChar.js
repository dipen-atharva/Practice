function duplicateCount(str) {

	if(str.length > 0 ) {
		var obj = {};
		// var arr = [];
		for(let i = 0; i < str.length; i++) {
			if(obj[str[i]]){
				obj[str[i]]++;
			}else {
				obj[str[i]] = 1;
			}
		}
		// console.log(obj);	
        let result = JSON.stringify(obj).replace(/['":,{}1]+/g,"");
        console.log(result);
	}
			
}
duplicateCount("AABCDCSDSESAAA");

