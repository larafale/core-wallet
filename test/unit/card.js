describe('card', function() {

  it('card with invalid number should return an error', function(done){

    Card.create({ client: 1, user: 1, number: '4111111111111112', cvv: '123', expire: '11-20' }, function(err, res){
      assert.isDefined(err)
      assert.include(err.message, 'creditcard')
      done()
    })

  })

  it('create a valid card', function(done) {
  	
    Card.create({ client: 1, user: 1, number: '4111111111111111', cvv: '123', expire: '11-20' }, function(err, res){
      assert.isNull(err)
      assert.equal(res.number, '411111******1111')
      assert.isDefined(res.expireAt)
      assert.isDefined(res.alias)
      assert.isUndefined(res.cvv)
      done()
    })

  })

})

