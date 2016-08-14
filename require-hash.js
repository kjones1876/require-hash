const stackTrace = require('stack-trace');
const finder = require('find-package-json');
const path = require('path');
const Module = require('module');

const originalRequire = Module.prototype.require;

let LOCAL_SYMBOL = '#';

function callerPath() {
	return path.dirname(stackTrace.get()[4].getFileName());
}

function packagePath() {
	return path.dirname(finder(callerPath()).next().value.__path);
}

Module.prototype.require = function require(..._args) {
	const args = _args.concat([]);
	if (args[0].substr(0, 1) === LOCAL_SYMBOL) {
		args[0] = `${packagePath()}/${args[0].substr(1)}`;
	}

	return originalRequire.apply(this, args);
};

module.exports = {
	updateSymbol: (symbol) => {
		LOCAL_SYMBOL = symbol;
	}
};
