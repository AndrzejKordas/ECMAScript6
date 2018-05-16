let a="globalna";
function fu1(){
let b="lokana fu1";
	
	function fu2(){
    let c="localna fu2";

		function fu3(){
			let d = "lokalna fu3";

			console.log(a);
			console.log(b);
			console.log(c);
			console.log(d);

		}
	}

}