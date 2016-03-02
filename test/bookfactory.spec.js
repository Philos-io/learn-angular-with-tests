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
      data: [
        {
          id: 8988,
          author: 'M. Henry',
          title: 'JavaScript Rocks!',
          price: 12,
          description: 'JavaScript Rocks really!',
          url: 'src/assets/images/javascript.png'
        },
        {
          id: 8976,
          author: 'M. Martine',
          title: 'React Rocks!',
          price: 15,
          description: 'React Rocks really!',
          url: 'src/assets/images/react.png'
        }
      ]
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

    describe('Book', ()=>{
      it('Should have an id, description, title, author, price and url', ()=>{
        bookFactory.getBooks()
          .then((response)=>{
            let book = response.data[0];
            expect(book.id).toBeDefined();
            expect(book.author).toBeDefined();
            expect(book.title).toBeDefined();
            expect(book.price).toBeDefined();
            expect(book.description).toBeDefined();
            expect(book.url).toBeDefined();
          });

        $httpBackend.flush();
      });
    });
  });
});
