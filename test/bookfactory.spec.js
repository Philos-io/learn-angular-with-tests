describe('BookFactory', () => {

  let url = '/api/books';

  var bookFactoryDefinition = function($http){
    let books = [];

    function getBooks(){
      return $http.get(url)
              .then((response)=>{
                return response.data;
              });
    }

    function getBook(){}

    return {
      getBooks: getBooks,
      getBook: getBook
    };
  }

  beforeEach(module('bookstore'));

  angular.module('bookstore')
    .factory('bookFactory', bookFactoryDefinition);

  let bookFactory, $httpBackend;

  beforeEach(inject(($injector) => {
    bookFactory = $injector.get('bookFactory');
    $httpBackend = $injector.get('$httpBackend');

    let response = {
      data: ['JavaScript', 'Angular']
    };

    $httpBackend.expectGET(url).respond(response);
  }));

  it('Should have a getAll function', () => {
    expect(bookFactory.getBooks).toBeDefined();
  });

  it('Should have a getBook function', () => {
    expect(bookFactory.getBook).toBeDefined();
  });

  describe('getBooks function', () =>{
    it('Should retrieve all the books', ()=>{
      bookFactory.getBooks()
        .then((response)=>{
          expect(response.data.length).toEqual(2);
        });
      $httpBackend.flush();
    });
  });
});
