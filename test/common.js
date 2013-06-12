var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;

global.requireWithCoverage = function (libName) {
	if (process.env.MONGOOSE_MIDDLEWARE_COVERAGE) {
		require('../lib-cov/' + libName + '.js');
	}

	require('../lib/' + libName + '.js');
};

global.chai = require('chai');
global.kitteh = mongoose.model(
	'kittehs',
	new Schema({
		birthday : { type : Date, default : Date.now },
		description : {
			color : String,
			isFurreh : Boolean
		},
		name : String
	})
);
global.should = chai.should();