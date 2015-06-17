function StopWatch() {
	
};

StopWatch.prototype.splits = [];

StopWatch.prototype.running = false;

StopWatch.prototype.start = function () {
	//because we're capturing split times, and we're
	//giving the user the option to remove on, we have 
	//to keep track of absolute time, AND each delta
	//if the user deletes a point, we will have to 
	//recalculate time(s).
	
	if (this.running === true) { //start() called as a split time
		this.addSplit();
		return;
	};
	if (this.splits.length >= 2) { //start() called having been stopped
		this.addSplit();
		this.running = true;
		return;
	};
	if (this.splits.length == 0) { //start() called with clean timer (page loaded / stopwatch reset)
		this.splits = [0];
		this.systemTimes = [Date.now()];
		this.running = true;
		return;
	};
	console.log("nothing");
	//These conditions exclude splits.length == 1, but running will always be true in that case
};

StopWatch.prototype.stop = function() {			
		this.addSplit();
		this.running = false;
};

StopWatch.prototype.addSplit = function() {
	
	//no split times if the stopwatch isn't running
	if (this.running !== true) {return;};

	//push 'now' and the calculated split time
	this.systemTimes.push(Date.now());
	this.splits.push(this.systemTimes[this.systemTimes.length - 1] - this.systemTimes[this.systemTimes.length - 2]);
};

StopWatch.prototype.sumTotal 	= 0;
StopWatch.prototype.mean 		= 0;
StopWatch.prototype.mode		= 0;
StopWatch.prototype.median		= 0;
StopWatch.prototype.stddev		= 0;
StopWatch.prototype.variance	= 0;
StopWatch.prototype.min			= 0;
StopWatch.prototype.max			= 0;
StopWatch.prototype.range		= 0;
StopWatch.prototype.perMinute	= 0;

StopWatch.prototype.systemTimes = [];

StopWatch.prototype.remove = function(index) {

	if (index < this.splits.length && this.splits.length > 2) {

		this.splits.splice(index,1);
		this.systemTimes.splice(index,1);

	};
};

StopWatch.prototype.reset = function() {
	this.splits = [];
	this.systemTimes = [];
	this.running = false;

//	Define all statistics we want to access in all the methods
	this.sumTotal 	= 0;
	this.mean 		= 0;
	this.mode		= 0;
	this.median		= 0;
	this.stddev		= 0;
	this.variance	= 0;
	this.min		= 0;
    this.max	    = 0;
	this.range		= 0;
	this.perMinute	= 0;

};

StopWatch.prototype.calculateMean = function() {
	//always safe for div/zero
	this.mean = (this.sumTotal)/(this.splits.length);

};

StopWatch.prototype.calculateRange = function() {
	this.min = this.max - this.min;
};

StopWatch.prototype.importTestArray = function (TArry) {
	this.splits = TArry;
};