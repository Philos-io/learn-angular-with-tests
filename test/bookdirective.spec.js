// describe('Book Directive', function(){
//
//   var $compile, $rootScope;
//
//   beforeEach(module('bookstore'));
//   //beforeEach(module('templates/book.html'));
//
//   beforeEach(inject(function($injector){
//     $compile = $injector.get('$compile');
//     $rootScope = $injector.get('$rootScope');
//   }));
//
//   it('Should have a constructor', function(){
//
//     var scope = $rootScope.$new();
//
//     var tpl = '<book></book>';
//
//     var element = $compile(tpl)(scope);
//
//     $rootScope.$digest();
//
//     var bookController = element.controller('book');
//
//
//     expect(bookController).toBeDefined();
//
//   });
//
// });
