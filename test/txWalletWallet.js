require('./bootstrap.test')

var assert = require('chai').assert

describe('tx/wallet/wallet', function() {

  it('insufficient funds', function(done) {

    var tx = new Tx({
      src: { rx: new Rx('wallet', { amount: 0 }) },
      dst: { rx: new Rx('wallet', { amount: 0 }) },
      amount: 1
    })

    tx.prepare(function(err, rxs){
      assert.equal(err.message, 'insufficient funds')
      assert.isUndefined(rxs)
      assert.equal(tx.src.rx.data.amount, 0)
      assert.equal(tx.dst.rx.data.amount, 0)
      done()
    })

  })

  it('success', function(done) {
    
    var tx = new Tx({
      src: { rx: new Rx('wallet', { amount: 5 }) },
      dst: { rx: new Rx('wallet', { amount: 0 }) },
      amount: 1
    })

    tx.prepare(function(err, rxs){
      assert.equal(rxs[0].data.amount, 4)
      assert.equal(rxs[1].data.amount, 1)
      done()
    })

  })

})

