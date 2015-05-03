var chai = require('chai'),
    expect = chai.expect,
    mapping = require('../lib/numbers_converters_factory.js');


    describe ( 'flatten factory',function(){

        var config,trnsformToRoman,initDactorAndNumber;
      
      function initWithNumber(number){
          initFactorAndNumber = {nextNumber:number,factors:[]}
      } 
         context(' no have lastEquivalence',function(){
          
              beforeEach(function(){
                  config =   [{
								  typeTranform:'fromArabicToRomanNumber',
								  equivalence :{
										         fromArabic:10,
												      toRoman:'X'
												}
					          }]
                    trnsformToRoman =  mapping(config);
                    initWithNumber(10);
              });

              it ( ' should be array with one element ',function(){
                     expect(trnsformToRoman.length).to.be.equal(1);
              });

              it ( ' fisrt element should be a toRoman function',function(){
                     trnsformToRoman[0](initFactorAndNumber)
                    expect(initFactorAndNumber['factors'][0]).to.be.equal('X');
              })

         });

         context(' exist lastEquivalences',function(){
                        beforeEach(function(){
                  config =   [{
                  typeTranform:'fromArabicToRomanNumber',
                  equivalence :{
                             fromArabic:10,
                              toRoman:'X'
                        },
                  lastEquivalence:[{
                          fromArabic:1,
                          toRoman:'I'
                           }]
                    }]
                    trnsformToRoman =  mapping(config);
                    initWithNumber(9);
              });

              it ( ' should be array with more element ',function(){
                     expect(trnsformToRoman.length).to.be.equal(2);
              });

              it ( ' second element should be a toRoman function',function(){
                     trnsformToRoman[1](initFactorAndNumber)
                    expect(initFactorAndNumber['factors'][0]).to.be.equal('IX');
              })
         })

    })