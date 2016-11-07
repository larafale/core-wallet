/**
 * Ledger.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

				clientId: {
					model: 'client',
					required: true
				},

				userId: {
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

				srcAudiotelId: {
					model: 'audiotel'
				},

				srcAuthorId: {
					model: 'author'
				},

				srcBankaccountId: {
					model: 'bankaccount'
				},

				srcCardId: {
					model: 'card'
				},

				srcFeeId: {
					model: 'fee'
				},

				srcWalletId: {
					model: 'wallet'
				},

				dstAudiotelId: {
					model: 'audiotel'
				},

				dstAuthorId: {
					model: 'author'
				},

				dstBankaccountId: {
					model: 'bankaccount'
				},

				dstCardId: {
					model: 'card'
				},

				dstFeeId: {
					model: 'fee'
				},

				dstWalletId: {
					model: 'wallet'
				}

  }

}

