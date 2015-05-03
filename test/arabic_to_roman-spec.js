var chai = require('chai'),
    expect = chai.expect,    
	transformationsConfig = require('../lib/single_equivalences_arabic_roman.js'),
	arabicToRoman = require('../lib/numerations_transformer.js');
   
function tansformfunction(callback){    
	return function (arrayExpect){
	        arrayExpect.forEach(function(expects){
					 it(' like '+expects[0]+' that is '+expects[1],function(){
						   expect(callback(expects[0])).to.be.equal(expects[1]);
					   });
			   });
		} 
}

describe(' Roman Numbers',function(){
	  var arabicToRomanSingle = arabicToRoman(transformationsConfig);
	     context(' Arabic to roman',function(){
		   var arabicNumberTransformTo = tansformfunction(arabicToRomanSingle);
			   arabicNumberTransformTo([[1,"I"],[5,"V"],
			                            [10,"X"],[50,'L'],
										[100,'C'],[500,'D'],
										[1000,'M'],[2,'II'],
										[3,'III'],[20,'XX'],
										[2000,'MM'],[102,'CII'],
										[35,'XXXV'],[4,'IV'],
										[9,'IX'],[29,'XXIX'],
										[40,'XL']]);
       
		 });
		
	});