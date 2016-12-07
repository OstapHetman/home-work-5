    function myFunction(a,b,c,x1,x2) {
    	var x1;
    	var x2;
    	var a = Number(prompt('Enter a:'));
		var b = Number(prompt('Enter b:'));
		var c = Number(prompt('Enter c:'));
        var d = b * b - 4 * a * c;
        var sq = Math.sqrt(d);
        if (d>0)
        {
            x1=-b-sq/2;
            x2=-b+sq/2;
            document.write('Result x1 = ' + x1, '\nResult x2 = ' +x2);
        }
        else
        {
            document.write('No results');
        }
    }
    myFunction();