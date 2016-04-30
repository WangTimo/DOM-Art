/*function stripeTables(){
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName('table');
	var odd,rows;
	for (var i=0; i<tables.length; i++){
		odd = false;
		rows = tables[i].getElementsByTagName('tr');
		for (var j=0; j<rows.length; j++){
			if (odd == true){
				rows[j].style.backgroundColor = '#fdc';     //对比
				odd = false;
			}else{
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);
*/

//改进版本，通过调用addclass实现同样效果
function stripeTables(){
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName('table');
	var odd,rows;
	for (var i=0; i<tables.length; i++){
		odd = false;
		rows = tables[i].getElementsByTagName('tr');
		for (var j=0; j<rows.length; j++){
			if (odd == true){
				addClass (rows[j],"newcss");      
				odd = false;
			}else{
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);
