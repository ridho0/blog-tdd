// var chai = require('chai')
// var should = chai.should();
// var chaiHttp = require('chai-http');
//
// chai.use(chaiHttp);
// let server = 'localhost:3000'
// let id = ''
//
// describe('GET /user', function() {
//   it('should return array of user', function(done) {
//     chai.request(server)
//       .get('/user')
//       .end(function(err, res){
//         // console.log(res.body);
//         res.should.have.status(200);
//         res.body.should.be.a('array');
//
//         done()
//       })
//   });
// });
//
// describe('POST /user', function() {
//   it('should return json user when given value title and description', function(done) {
//     chai.request(server)
//       .post('/user')
//       .send({ title: '123', content: 'ini adalah content' })
//       .end(function(err, res){
//         // console.log(res.body);
//         res.body.title.should.equal('123')
//         res.body.content.should.equal('ini adalah content')
//         id = res.body._id
//         done()
//       })
//   });
// });
//
// describe(`GET /user/:id`, function() {
//   it('should return json user', function(done) {
//     chai.request(server)
//     .get(`/user/${id}`)
//     .end(function(err, res){
//       // console.log(res.body);
//       res.body.title.should.equal('123')
//       res.body.content.should.equal('ini adalah content')
//       id = res.body._id
//       done()
//     })
//   });
// });
//
// describe(`PUT /user/:id`, function() {
//   it('should return json user when update value title and description', function(done) {
//     chai.request(server)
//       .put(`/user/${id}`)
//       .send({ title: '123', content: 'ini adalah content yg sudah di update' })
//       .end(function (err, res) {
//         // console.log(res.body);
//         res.body.title.should.equal('123')
//         res.body.content.should.equal('ini adalah content yg sudah di update')
//         done()
//       });
//   });
// });
//
// describe('DELETE /user/:id', function() {
//   it('should return json of deleted user', function(done) {
//     chai.request(server)
//       .delete(`/user/${id}`)
//       .end(function (err, res) {
//         res.body._id.should.equal(id)
//         done()
//       });
//   });
// });
