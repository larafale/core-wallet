require('./bootstrap.test')

var assert = require('chai').assert

describe('tx/wallet/wallet', function() {
	/**
	 * Test File: Testing HelloController
	 * File location: test/controllers/HelloController.spec.js
	 */
	var sinon = require('sinon')

	describe('The Hello Controller', function() {  
	  describe('when we invoke the index action', function() {
	    it('should return hello world message', function() {

	      // Mocking res.send() method by using a sinon spy
	      var send = sinon.spy();

	      // Executes controller action
	      Card.create(null, {
	        'send': send
	      });

	      // Asserts send() method was called and that it was called
	      // with the correct arguments: 'Hello World'
	      assert.isTrue(send.called);
	      assert.isTrue(send.calledWith('Hello World'));
	    });
	  });
	});

  // it('invalid number', function(done) {

  // })

  // it('valid card', function(done) {
  //   var rx = new Rx({
  //     src: { rx: new Rx('wallet', { amount: 0, user: { firstName: 'bob', lastName: 'batard'  } }) },
  //     dst: { rx: new Rx('wallet', { amount: 0, user: { firstName: 'louis', lastName: 'grellet' } }) },
  //     amount: 1
  //   })

  //   tx.prepare(function(err){
  //     assert.equal(err.message, 'insufficient funds')
  //     assert.equal(tx.src.rx.data.amount, 0)
  //     assert.equal(tx.dst.rx.data.amount, 0)
  //     done()
  //   })

  // })

})

