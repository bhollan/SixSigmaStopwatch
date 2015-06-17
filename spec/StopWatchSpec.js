
//This should check the basic functionality of each method of the stopwatch (start, stop, split...)
describe("The StopWatch", function() {
	
	var stopwatch;
	stopwatch = new StopWatch();
	
	beforeEach(function () {
		stopwatch = new StopWatch();
	});
	
	it("should be defined", function(){
		expect(stopwatch).toBeDefined();
	});
	
	it("should run when started", function(){
		stopwatch.start();
		expect(stopwatch.running).toBe(true);
		expect(stopwatch.splits.length).toEqual(1);
		expect(stopwatch.systemTimes[0]/Date.now()).toBeCloseTo(1);
	});
	
	it("should take split times", function(){
		stopwatch.start();
		stopwatch.addSplit();
		stopwatch.addSplit();
		
		expect(stopwatch.splits.length).toBe(3);
		expect(stopwatch.systemTimes.length).toBe(3);
	});
		
	it("should stop", function(){
		stopwatch.start();
		stopwatch.stop();

		expect(stopwatch.running).toBeFalsy();
		expect(stopwatch.systemTimes[1]/stopwatch.systemTimes[0]).toBeCloseTo(1);
	});
	
	it("should reset", function(){
		stopwatch.start();
		stopwatch.addSplit();
		stopwatch.stop();
		stopwatch.reset();
		
		expect(stopwatch.running).toBeFalsy();
		expect(stopwatch.splits).toEqual([]);
	});
	
	it("should remove user-determined-invalid splits",function(){
		stopwatch.start();
		stopwatch.addSplit();
		stopwatch.addSplit();
		stopwatch.addSplit();
		stopwatch.addSplit();
		stopwatch.addSplit();
		stopwatch.stop();
		
		stopwatch.remove([1]);
		stopwatch.remove([3]);
		
		expect(stopwatch.splits.length).toEqual(5);
		expect(stopwatch.splits[6]).toBeUndefined();
	});
	
});

//This should check all the calculation methods on a factor-generated test vector
describe("The Calculations", function() {
	
	var stopwatch;
	stopwatch = new StopWatch();
	var zig; 
	zig = new Ziggy();
	
	beforeEach(function () {
		stopwatch = new StopWatch();
		zig = new Ziggy();
		zig.buildZiggy();
		
	});
	
    it("should create a test array", function() {
		expect(zig.points.length).toEqual(100);
	});
    
	it("should import a test array", function(){
		stopwatch.importTestArray([2,4,4,4,5,5,7,9]);
		expect(stopwatch.splits.length).toEqual(8);
	});
	
	it("should calculate the mean", function(){
        stopwatch.importTestArray([2,4,4,4,5,5,7,9]);
        stopwatch.reset();
		expect(stopwatch.mean).toEqual(0.000);
	});
	
});


