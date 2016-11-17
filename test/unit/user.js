describe('user', function() {

  it('user cannot be created without client', function(done) {
  	
    User.create({ firstName: 'bob1', lastName: 'batard', phone: '0660718983' }, function(err, res){
      assert.isUndefined(res)
      assert.equal(err.code, 'E_VALIDATION')
      assert.include(err.message, 'client')
      done()
    })

  })

  it('valid user', function(done) {

    User.create({ firstName: 'bob', lastName: 'batard', phone: '0660718983', client : 1 }, function(err, res){
      assert.isNull(err)
      assert.isDefined(res)
      assert.equal(res.nationality, 'fr')
      done()
    })

  })

})

