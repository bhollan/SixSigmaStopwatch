
//This should test the output of the constructed Ziggurat
describe("The Ziggurat", function(){
		
	var zig = 0;
	
	beforeEach(function () {
		zig = new Ziggy();
		zig.buildZiggy();
	});
	
	afterEach(function() {
		zig.points.sort();
		console.log(zig);
	});
	
	it("should be defined", function(){
		expect(zig).toBeDefined();
	});
	
	it("should have default factors",function(){
		expect(zig.mean).toEqual(12);
		expect(zig.widthA).toEqual(2);
		expect(zig.widthB).toEqual(8);
		expect(zig.numberOfLayers).toEqual(8);
		expect(zig.population).toEqual(100);
		
	});
	
	it("should be re-factorable",function(){
		zig.widthB = 4;
		zig.buildZiggy();
		zig.points.sort();
		expect(zig.points[zig.points.length - 1]).toBeLessThan(zig.mean + (zig.widthB)/2);
	});
	
	it("should change shape when re-built",function(){
		expect(zig.points.length).toEqual(100);
		zig.population = 300;
		zig.buildZiggy();
		console.log(zig);
		expect(zig.points.length).toEqual(300);
	});
	
});

