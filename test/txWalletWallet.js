require('./bootstrap.test')

var assert = require('chai').assert

describe('tx/wallet/wallet', function() {

  it('insufficient funds', function(done) {

    var tx = new Tx({
      src: { rx: new Rx('wallet', { amount: 0, user: { firstName: 'bob', lastName: 'batard'  } }) },
      dst: { rx: new Rx('wallet', { amount: 0, user: { firstName: 'louis', lastName: 'grellet' } }) },
      amount: 1,
      client: { id: 1 }
    })

    tx.prepare(function(err){
      assert.equal(err.message, 'insufficient funds')
      assert.equal(tx.src.rx.data.amount, 0)
      assert.equal(tx.dst.rx.data.amount, 0)
      done()
    })

  })

  it('missing last name', function(done) {

    var tx = new Tx({
      src: { rx: new Rx('wallet', { amount: 5, user: { firstName: 'bob' } }) },
      dst: { rx: new Rx('wallet', { amount: 0, user: { firstName: 'louis', lastName: 'grellet' } }) },
      amount: 1,
      client: { id: 1 }
    })

    tx.prepare(function(err){
      assert.equal(err.message, 'user must have a last name')
      assert.equal(tx.src.rx.data.amount, 5)
      assert.equal(tx.dst.rx.data.amount, 0)
      done()
    })

  })

  it('success', function(done) {
    
    var tx = new Tx({
      src: { rx: new Rx('wallet', { amount: 5, user: { firstName: 'bob', lastName: 'batard' } }) },
      dst: { rx: new Rx('wallet', { amount: 0, user: { firstName: 'louis', lastName: 'grellet' } }) },
      amount: 1,
      client: { id: 1 }
    })

    tx.prepare(function(err){
      assert.equal(tx.src.rx.data.amount, 4)
      assert.equal(tx.dst.rx.data.amount, 1)
      done()
    })

  })

})

