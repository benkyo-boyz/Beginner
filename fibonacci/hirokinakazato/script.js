// var $bef = 1, $aft = 1, $count = 15;

// for (var i=0; i<$count; i++) {
// 	$num = $bef + $aft;
// 	console.log($num);
// 	$bef = $aft;
// 	$aft = $num;
// }

function fibo(n) {
	if (n <= 0) return 1;
	return fibo(n-1) + fibo(n-2);
}

for(var i=0, count=15; i<count; i++) {
	console.log(fibo(i));
}