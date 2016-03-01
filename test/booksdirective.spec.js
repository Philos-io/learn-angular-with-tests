describe('Books Directive', function(){

  var controller, $compile, $rootScope, $httpBackend;

  beforeEach(module('bookstore'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){

    $compile     = _$compile_;
    $rootScope   = _$rootScope_;
    $httpBackend = _$httpBackend_;

  }));


  it('Should have a controller', function(){
    var scope = $rootScope.$new();
    scope.books = ['JavaScript', 'Angular'];

    var tpl = '<books source="books"></books>';

    var element = $compile(tpl)(scope);

    $rootScope.$digest();

    console.log(element.find('span'));

    var controller = element.controller('books');
    var $scope = element.scope();
    console.log($scope)

    console.log(controller);

    expect(controller).toBeUndefined();
  });
});
