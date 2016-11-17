describe('author', function() {

  it('creating a valid card shoud create an author', function(done) {
  	async.waterfall([
      
      function(cb){
        Card.create({ client: 1, user: 1, number: '4111111111111111', cvv: '123', expire: '11-20' }, cb)
      },

      function(card, cb){
        Author.findOneByAlias(card.alias, function(err, author){
          assert.isNull(err)
          assert.isDefined(author)
          assert.isDefined(author.alias)
          assert.equal(author.client, 1)
          assert.equal(author.user, 1)
          assert.equal(author.amount, 100)
          done()
        })
      },

      function(card, cb){
        Card.findOneByAlias(card.alias, function(err, card){
          assert.isNull(err)
          assert.isDefined(card)
          assert.isDefined(card.alias)
          assert.equal(card.client, 1)
          assert.equal(card.user, 1)
          assert.equal(card.amount, 0)
          done()
        })
      }

    ], done)

  })

})

