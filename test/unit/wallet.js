// require('../bootstrap.test')

var assert = require('chai').assert

describe('wallet', function() {

  it('wallet cannot be created without client', function(done) {

    Wallet.create({ user: 1 }, function(err, res){
      assert.isUndefined(res)
      assert.equal(err.code, 'E_VALIDATION')
      assert.include(err.message, 'client')
      done()
    })

  })

  it('wallet created with amount should be set to 0€', function(done) {

    Wallet.create({ user: 1, client: 1, amount: 1 }, function(err, res){
      assert.isNull(err)
      assert.equal(res.amount, 0)
      done(err)
    })

  })

})

