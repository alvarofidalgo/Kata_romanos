var toRomanNumber = require('./arabic_roman_converter.js');


var canvertersMapper ={fromArabicToRomanNumber:function(equivalence){
                                     return toRomanNumber(equivalence.fromArabic,equivalence.toRoman)
                        }     
                      }
                      				  
function sortByMaxValue(config){
   return config.sort(function(firsrt,second){
       return second.equivalence.fromArabic - firsrt.equivalence.fromArabic;   
   })
}

function buildToRomans(orderConfig){
      return orderConfig.map(createTransformByEquivalences)
}

function flatten(mappedArray){
    var newMappedArray = [];
         return mappedArray.reduce(function(newMappedArray,elementMapped){
                          return newMappedArray.concat(elementMapped);
         })
}

function createTransformByEquivalences (mapped){
        return [canvertersMapper[mapped.typeTranform](mapped.equivalence)]
                 .concat(createTransformsByLastEquivalence(mapped.typeTranform,
                                             mapped.equivalence,
                                             mapped.lastEquivalence)) 
}

function createTransformsByLastEquivalence(typeTransform,origilalEquivalence,lastEquivalences){
   lastEquivalences = lastEquivalences||[];
    return lastEquivalences.map(function(equivalence){
            var newEquivalence = {fromArabic:origilalEquivalence.fromArabic-equivalence.fromArabic,
                                  toRoman:equivalence.toRoman+origilalEquivalence.toRoman
                                  }
              return canvertersMapper[typeTransform](newEquivalence);
    })
}
module.exports = function(config){

                 return flatten(buildToRomans(sortByMaxValue(config)));
				}
