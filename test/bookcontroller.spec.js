describe('Controller', function(){

  function BookController($scope, $location){
    $scope.books = ['JavaScript', 'Angular'];
    console.log($scope, this);
  }

  beforeEach(module('bookstore'));

  var $controller, $scope= {books: []};

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;

    console.log($controller);

    $controller(BookController, {$scope: $scope}, {names: []});

    console.log($scope);

  }));

  it('should have a list a books', function(){
    expect($scope.books.length).toEqual(2);
  });
});
