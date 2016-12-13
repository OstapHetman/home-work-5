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
            x1=-b-sq/(2*a);
            x2=-b+sq/(2*a);
            document.write('Result x1 = ' + x1+ ';', ' Result x2 = ' +x2 + ';');
        }
        else
        {
            document.write('No results');
        }
        document.write ('<br />');
        document.write('Quadratic equation will look like: ' + a+'x<sup>2</sup>+'+b+'x+'+c+'=0'+'.');
    }
    myFunction();
  