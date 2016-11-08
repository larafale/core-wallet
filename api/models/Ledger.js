/**
 * Ledger.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

				client: {
					model: 'client',
					required: true
				},

				user: {
					model: 'user',
					required: true
				},

				amount: {
					type: 'integer',
					required: true
				},
				
				feeValue: {
					type: 'integer',
					defaultsTo: 0
				},
				
				feeFixed: {
					type: 'integer',
					defaultsTo: 0
				},
				
				feeRate: {
					type: 'integer',
					defaultsTo: 0
				},

				srcUser: {
					model: 'user'
				},

				dstUser: {
					model: 'user'
				},

				srcAudiotel: {
					model: 'audiotel'
				},

				srcAuthor: {
					model: 'author'
				},

				srcBankaccount: {
					model: 'bankaccount'
				},

				srcCard: {
					model: 'card'
				},

				srcFee: {
					model: 'fee'
				},

				srcWallet: {
					model: 'wallet'
				},

				dstAudiotel: {
					model: 'audiotel'
				},

				dstAuthor: {
					model: 'author'
				},

				dstBankaccount: {
					model: 'bankaccount'
				},

				dstCard: {
					model: 'card'
				},

				dstFee: {
					model: 'fee'
				},

				dstWallet: {
					model: 'wallet'
				}

  }

}

