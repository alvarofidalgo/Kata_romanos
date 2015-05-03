module.exports = function (fromArabic,toRoman){
	       return function(numberAndFactors){
		           var  numbertoTest = Math.floor(numberAndFactors['nextNumber']/fromArabic);		               
						  for (numberAndFactors['nextNumber'] -=numbertoTest*fromArabic;numbertoTest;numbertoTest--)
						      numberAndFactors['factors'].push(toRoman);
		   }
	 }