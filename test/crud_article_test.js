var chai = require('chai')
var should = chai.should();
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
let server = 'localhost:3000'
let id = ''

describe('GET /article', function() {
  it('should return array of article', function(done) {
    chai.request(server)
      .get('/article')
      .end(function(err, res){
        // console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.a('array');

        done()
      })
  });
});

describe('POST /article', function() {
  it('should return json article when given value title and description', function(done) {
    chai.request(server)
      .post('/article')
      .send({ title: 'judul', content: 'ini adalah content' })
      .end(function(err, res){
        // console.log(res.body);
        res.body.title.should.equal('judul')
        res.body.content.should.equal('ini adalah content')
        id = res.body._id
        done()
      })
  });
});

describe(`GET /article/:id`, function() {
  it('should return json article', function(done) {
    chai.request(server)
    .get(`/article/${id}`)
    .end(function(err, res){

      res.body.title.should.equal('judul')
      res.body.content.should.equal('ini adalah content')
      id = res.body._id
      done()
    })
  });
});

describe(`PUT /article/:id`, function() {
  it('should return json article when update value title and description', function(done) {
    chai.request(server)
      .put(`/article/${id}`)
      .send({ title: 'judul', content: 'ini adalah content yg sudah di update' })
      .end(function (err, res) {
        // console.log("current id : ",id);
        // console.log("updated id : ",res.body._id);
        // res.body.title.should.equal('judul')
        // res.body.content.should.equal('ini adalah content yg sudah di update')
        res.body.msg.should.equal('success update')
        done()
      });
  });
});

describe('DELETE /article/:id', function() {
  it('should return json of deleted article', function(done) {
    chai.request(server)
      .delete(`/article/${id}`)
      .end(function (err, res) {
        res.body._id.should.equal(id)
        done()
      });
  });
});
