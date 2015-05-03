var romansNumbersMap = require('./numbers_converters_factory.js');
/* var toRomanNumber = require('./arabic_roman_converter.js');
 



 var   romansNumbersMap = [calculateRoman(1000,'M'),calculateRoman(500,'D'),
                           calculateRoman(100,'C'),calculateRoman(50,'L'),
                           calculateRoman (10,'X',[{fromArabic:1,toRoman:'I'}]),
                           calculateRoman(5,'V'),calculateRoman(4,'IV'),calculateRoman(1,'I')];




 function calculateRoman (fromArabic,toRoman,lasts){
        lasts = lasts||[];
		var last1 = lasts.map(function(equivalence){
              return toRomanNumber(fromArabic-equivalence.fromArabic,equivalence.toRoman+toRoman);
		})
	    var a = [toRomanNumber(fromArabic,toRoman)].concat(last1);
	    return a;
}*/

 function notEspecialNumber(numberAndFactors,callback){		
		callback(numberAndFactors);		
		return numberAndFactors;
 }

 module.exports = function (config){	
						return function (number){
							 return romansNumbersMap(config).reduce(notEspecialNumber,
							                            {nextNumber:number,factors:[]}).factors.join('');
						}
	             }