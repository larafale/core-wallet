require('./bootstrap.test')

var assert = require('chai').assert
  , Tx = require('../api/services/Tx')


describe('txManager', function() {

  describe('wallet to wallet', function() {

    it('should not allow transfer 1€ from wallet A to wallet B', function(done) {

      var tx = new Tx()

      tx.srcRx = Wallet.instantiate({ amount: 0 })
      tx.dstRx = Wallet.instantiate({ amount: 5 })
      tx.srcUsr 

      tx.transfer(1, function(err, txs){
        assert.equal(err.message, '1')
        done()
      })
    })

    it('should transfer 1€ from wallet A to wallet B', function(done) {
      var tx = new Tx()

      tx.srcRx = Wallet.instantiate({ amount: 1 })
      tx.dstRx = Wallet.instantiate({ amount: 5 })

      tx.transfer(1, function(err, txs){
        assert.isNull(err, '1')
        done()
      })
    })

  })

})