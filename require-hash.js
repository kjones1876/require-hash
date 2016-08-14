const Module = require('module');

const originalRequire = Module.prototype.require;

let LOCAL_SYMBOL = '#';

Module.prototype.require = function require(..._args) {
	const args = _args.concat([]);
	if (args[0].substr(0, 1) === LOCAL_SYMBOL) {
		args[0] = `${__dirname}/../${args[0].substr(1)}`;
	}

	return originalRequire.apply(this, args);
};

module.exports = {
	updateSymbol: (symbol) => {
		LOCAL_SYMBOL = symbol;
	}
};