function getTriangleArea(a, h) {
  if (a>0 && h>0) {
	return a*h/2;
  } 
    console.log('Błędne dane');
  }
console.log( getTriangleArea(10,6) )
var triangle1Area = getTriangleArea(130, 15);
var triangle2Area = getTriangleArea(10, 105);
var triangle3Area = getTriangleArea(105, 15);
console.log('Pola trojkatow to : ' + triangle1Area + ', ' + triangle2Area + ', ' + triangle3Area );
