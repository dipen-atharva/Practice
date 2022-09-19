function duplicateCount(str) {

	if(str.length > 0 ) {

		var final = "";

		for(let i = 0; i < str.length; i++) {
			var count = 1 ;

			while (i+1 < str.length && str.charAt(i) == str.charAt(i + 1)) {
				i++;
				count++;
			}
			if ( count == 1 ) {
				final += str.charAt(i) ;
			} else {
				final += str.charAt(i) + count ;
			}
		}
	console.log(final);
	}		
}

duplicateCount("AAABCCCFDAA");

