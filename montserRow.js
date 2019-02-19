(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.OCCNFD0 = function() {
	this.initialize(img.OCCNFD0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.circle_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak5E6QiDiBAAi5QAAi3CDiCQCCiDC3AAQC4AACCCDQCDCCAAC3QAAC5iDCBQiCCDi4AAQi3AAiCiDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle_2, new cjs.Rectangle(-44.5,-44.5,89,89), null);


(lib.icon_time_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5C7QgagDgKgCQgUgFgOgLIAAgGIAHgMQAEgHABgFQAGgsAOgfQARglAegYQg4gvgLhcQgBgFgEgGIgHgMIAAgGIASgJQALgFAHgBQBNgHAzABQAaAAA0AMQAMADABAFQABAEgHALQgDAGAAAEQgIBfg7AxQAfAYARAlQAOAgAFAsQABALACADQAHANgCAEQgBAEgOAFIgTAFQgpAIgwAAQgdAAgggDgAAHAsQA9AsAUAvQABADAIAIIAEgCIgEgeQgIgkgNgWQgQgcgcgQQgMgIABgFQAAgGALgHQAdgQAVgpQAWgqgFghQhhAShjgSIAEAfQAJAmAOAXQASAcAeAPQAIAEgBAHQgBAGgJAEQghARgSAmQgVAqADAmQAJgFABgFQALgbAXgYQARgSAdgWIAFgBQAEAAACABgAgCgRIgggdQBIgSAngpQgXAxgwAnIgEABQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBg");
	this.shape.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_time_over, new cjs.Rectangle(-13.1,-19.1,25.5,38.1), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.start_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B7B91").s().p("Ehj/AuGMAAAhcLMDH/AAAMAAABcLg");
	this.shape.setTransform(640,295);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.start_BG, new cjs.Rectangle(0,0,1280,590), null);


(lib.star_bw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1.1,0,0,8).p("AjTgwICTgWIBAiKIBCCKICSAWIhpBrIAYCYIiDhIIiCBIIAZiYg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAACKIiCBIIAYiYIhphrICSgWIBBiKIBCCKICSAWIhqBrIAZCYg");
	this.shape_1.setTransform(-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_bw, new cjs.Rectangle(-22.4,-22.2,44.4,44.1), null);


(lib.icon_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.1,0,0,8).p("AjTgwICTgWIBAiKIBCCKICSAWIhpBrIAYCYIiDhIIiCBIIAZiYg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC000").s().p("AAACKIiCBIIAZiYIhqhrICSgWIBBiKIBCCKICSAWIhqBrIAZCYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_star, new cjs.Rectangle(-22.2,-22.1,44.4,44.1), null);


(lib.screen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-146.75,-111,293.5,222,15.3);
	this.shape.setTransform(0,-115.5,1.032,0.942);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1749F").s().rr(-146.75,-111,293.5,222,15.3);
	this.shape_1.setTransform(0,-115.5,1.032,1.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_1, new cjs.Rectangle(-151.3,-230.9,302.7,231), null);


(lib.screen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE699").s().rr(-146.75,-111,293.5,222,15.3);
	this.shape.setTransform(0,0,1.032,0.942);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC100").s().rr(-146.75,-111,293.5,222,15.3);
	this.shape_1.setTransform(0,0,1.032,1.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_2, new cjs.Rectangle(-151.3,-115.5,302.7,231), null);


(lib.screen_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-146.75,-111,293.5,222,15.3);
	this.shape.setTransform(0,-115.5,1.032,0.942);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25ACE3").s().rr(-146.75,-111,293.5,222,15.3);
	this.shape_1.setTransform(0,-115.5,1.032,1.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_0, new cjs.Rectangle(-151.3,-230.9,302.7,231), null);


(lib.wrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.6)").s().p("AAACQIidCdIiQiOICfifIifidICQiQICdCfICeifICPCQIieCdICeCfIiPCOg");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wrong, new cjs.Rectangle(-30.1,-30.6,60.3,60.3), null);


(lib.btnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#828B92").s().rr(-79.4,-25.95,158.8,51.9,13.6);
	this.shape.setTransform(70,19.1,0.882,0.736);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnd, new cjs.Rectangle(0,0,140,38.2), null);


(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#182A33").ss(2).p("AC7AAQAAhMg3g4Qg3g2hNAAQhMAAg4A2Qg2A4AABMQAABNA2A3QAUAUAXANQAoAWAxAAQAxAAApgWQAWgNAUgUQA3g3AAhNg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182A33").s().p("AgxCBQgegBAAggIAAi+QAAgiAfAAQAaAAAAAiIAAC+QAAAhgYAAIgDAAgAAjB6QgIgIAAgOIAAjGQAAgOAIgIQAHgJAMABQAMABAHAHQAHAJAAAOIAADEQAAAOgIAJQgGAHgNAAQgMAAgGgHg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pause_btn, new cjs.Rectangle(-20.8,-19.6,40.7,39.5), null);


(lib.icon_pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AC7AAQAAhMg3g4Qg3g2hNAAQhMAAg4A2Qg2A4AABMQAABNA2A3QA3A3BNAAQBNAAA3g3QA3g3AAhNg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxCBQgegBAAggIAAi+QAAgiAfAAQAaAAAAAiIAAC+QAAAhgYAAIgDAAgAAjB6QgIgIAAgOIAAjGQAAgOAIgIQAHgJAMABQAMABAHAHQAHAJAAAOIAADEQAAAOgIAJQgGAHgNAAQgMAAgGgHg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_pause, new cjs.Rectangle(-19.6,-19.6,39.5,39.5), null);


(lib.sound_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#182A33").ss(2,1,1).p("AC7AAQAABNg3A3Qg3A3hNAAQhNAAg3g3Qg2g3AAhNQAAhMA2g3QA3g3BNAAQBNAAA3A3QA3A3AABMg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182A33").s().p("AgVAwIg9AAIAAhdIA7AAIBqg/IAADZg");
	this.shape_1.setTransform(-1.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#182A33").ss(2,1,1).p("AC7AAQAABFgsA0QgCABgBACQgEAEgEAEQgDADgCACQgCACgCACQg0AuhHAAQhNAAg3g3Qg2g3AAhNQAAhGAtg0QACgCACgCQACgCADgDQAEgEAEgDQACgCACgCQAzgsBFAAQBNAAA3A3QA3A3AABMg");
	this.shape_2.setTransform(0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB+CRIgCgCIg2g1IiDiDIhPhOIgFgGIgBgBIABgCIARgRIABAAQAAgBABAAQAAAAAAABQAAAAAAAAQABAAAAAAIAGAGIgEADIAEgDIBdBdIBgBgIBKBJIgDAEIADgEIACACIABACIAAABIgRARIgCACIgCgCgAB8CPIAEgDIAAAAIANgNIAAAAIkIkHIgEgEIgNANIAEAEIgEAEIAEgEIEIEHIgEADgACACMgACQB7gAiIh7gAh3iLg");
	this.shape_3.setTransform(0,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#182A33").s().p("AB/CMIkHkHIgEgDIANgOIAEAFIgIAGIgFAGIAFgGIAIgGIEIEGIgIAIIgGAFIAGgFIAIgIIAAAAIgNANgACNB/gAgiA1Ig+AAIAAheIAjAAICDCDIAAAYgAgbguIBhg6IAACagAh7iHg");
	this.shape_4.setTransform(0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-19.6,39.5,39.5);


(lib.circle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(59,123,145,0.008)").s().p("Ak5E6QiDiBAAi5QAAi3CDiCQCCiDC3AAQC4AACCCDQCDCCAAC3QAAC5iDCBQiCCDi4AAQi3AAiCiDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(67,121,145,0.051)").s().p("Ak6E6QiCiBAAi5QAAi3CCiDQCDiCC3AAQC4AACDCCQCCCDAAC3QAAC5iCCBQiDCDi4AAQi3AAiDiDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(75,119,145,0.094)").s().p("Ak6E7QiCiCAAi5QAAi3CCiDQCDiCC3AAQC4AACDCCQCCCDAAC3QAAC5iCCCQiDCCi4AAQi3AAiDiCg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(82,117,146,0.137)").s().p("Ak6E7QiCiCAAi5QAAi3CCiDQCDiCC3AAQC4AACDCCQCCCDABC3QgBC5iCCCQiDCDi4AAQi3AAiDiDg");
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(90,115,146,0.18)").s().p("Ak6E7QiCiCAAi5QAAi3CCiDQCDiCC3AAQC4AACDCCQCCCDABC3QgBC5iCCCQiDCCi4ABQi3gBiDiCg");
	this.shape_4.setTransform(0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(98,113,146,0.224)").s().p("Ak6E7QiDiCAAi5QAAi3CDiDQCDiDC3AAQC4AACDCDQCDCDAAC3QAAC5iDCCQiDCDi4AAQi3AAiDiDg");
	this.shape_5.setTransform(0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(106,112,146,0.267)").s().p("Ak6E7QiDiCAAi5QAAi3CDiDQCCiDC4AAQC4AACDCDQCDCDAAC3QAAC5iDCCQiDCDi4AAQi4AAiCiDg");
	this.shape_6.setTransform(0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(113,110,147,0.31)").s().p("Ak6E7QiDiBAAi6QAAi4CDiCQCCiDC4AAQC5AACDCDQCCCCAAC4QAAC6iCCBQiDCDi5AAQi4AAiCiDg");
	this.shape_7.setTransform(0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(121,108,147,0.353)").s().p("Ak6E7QiDiCAAi5QAAi4CDiCQCCiDC4AAQC4AACDCDQCDCCAAC4QAAC5iDCCQiDCDi4AAQi4AAiCiDg");
	this.shape_8.setTransform(0.1,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(129,106,147,0.396)").s().p("Ak6E7QiDiBAAi6QAAi3CDiDQCDiDC3AAQC5AACDCDQCCCDAAC3QAAC6iCCBQiDCDi5AAQi3AAiDiDg");
	this.shape_9.setTransform(0.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(137,104,147,0.439)").s().p("Ak7E7QiDiCABi5QgBi3CDiEQCEiDC3ABQC5gBCCCDQCECEAAC3QAAC5iECCQiCCEi5AAQi3AAiEiEg");
	this.shape_10.setTransform(0.2,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(145,102,147,0.482)").s().p("Ak7E7QiDiCAAi5QAAi3CDiEQCDiDC4ABQC5gBCDCDQCDCEAAC3QAAC5iDCCQiDCEi5AAQi4AAiDiEg");
	this.shape_11.setTransform(0.2,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(152,100,148,0.525)").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC6iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_12.setTransform(0.2,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(160,98,148,0.569)").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC6iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_13.setTransform(0.2,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(168,96,148,0.612)").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC6iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_14.setTransform(0.2,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(176,94,148,0.655)").s().p("Ak7E8QiDiCAAi5QAAi4CDiEQCDiDC4AAQC5AACDCDQCDCEAAC4QAAC5iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_15.setTransform(0.2,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(184,92,148,0.698)").s().p("Ak8E8QiDiCABi6QgBi4CDiDQCEiDC4AAQC5AACDCDQCECDAAC4QAAC6iECCQiDCDi5AAQi4AAiEiDg");
	this.shape_16.setTransform(0.3,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(191,90,149,0.741)").s().p("Ak8E8QiDiCABi6QgBi4CDiEQCEiDC4ABQC5gBCDCDQCDCEABC4QgBC6iDCCQiDCEi5AAQi4AAiEiEg");
	this.shape_17.setTransform(0.3,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(199,89,149,0.784)").s().p("Ak7E8QiEiCAAi6QAAi4CEiDQCDiDC4AAQC5AACDCDQCECDAAC4QAAC6iECCQiDCDi5ABQi4gBiDiDg");
	this.shape_18.setTransform(0.3,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(207,87,149,0.827)").s().p("Ak7E8QiEiCAAi6QAAi4CEiDQCDiEC4AAQC5AACECEQCDCDAAC4QAAC6iDCCQiECEi5AAQi4AAiDiEg");
	this.shape_19.setTransform(0.3,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(215,85,149,0.871)").s().p("Ak7E9QiEiDAAi6QAAi4CEiDQCDiEC4AAQC5AACECEQCDCDAAC4QAAC6iDCDQiECDi5AAQi4AAiDiDg");
	this.shape_20.setTransform(0.3,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(222,83,150,0.914)").s().p("Ak8E9QiDiDAAi6QAAi4CDiDQCEiEC4AAQC5AACECEQCDCDAAC4QAAC6iDCDQiECDi5AAQi4AAiEiDg");
	this.shape_21.setTransform(0.3,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(230,81,150,0.957)").s().p("Ak8E9QiDiCAAi6QAAi5CDiDQCEiEC4AAQC6AACDCEQCDCDAAC5QAAC6iDCCQiDCDi6AAQi4AAiEiDg");
	this.shape_22.setTransform(0.3,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE4F96").s().p("Ak8E9QiDiDAAi6QAAi4CDiEQCDiDC5AAQC5AACECDQCECEgBC4QABC6iECDQiECDi5AAQi5AAiDiDg");
	this.shape_23.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-44.5,89,89);


(lib.circle_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(59,123,145,0.008)").s().p("Ak6E6QiCiBAAi5QAAi3CCiCQCDiDC3AAQC4AACDCDQCCCCAAC3QAAC5iCCBQiDCDi4AAQi3AAiDiDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(59,123,145,0.051)").s().p("Ak6E6QiCiBAAi5QAAi3CCiDQCCiCC4AAQC4AACDCCQCDCDAAC3QAAC5iDCBQiDCDi4AAQi4AAiCiDg");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(59,123,145,0.094)").s().p("Ak6E7QiCiCAAi5QAAi3CCiDQCCiCC4AAQC4AACDCCQCCCDABC3QgBC5iCCCQiDCCi4AAQi4AAiCiCg");
	this.shape_2.setTransform(0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(59,123,145,0.137)").s().p("Ak6E7QiDiCAAi5QAAi3CDiDQCDiCC3AAQC4AACDCCQCDCDAAC3QAAC5iDCCQiDCDi4AAQi3AAiDiDg");
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(59,123,145,0.18)").s().p("Ak6E7QiDiCAAi5QAAi3CDiDQCDiCC3AAQC5AACCCCQCDCDAAC3QAAC5iDCCQiCCCi5ABQi3gBiDiCg");
	this.shape_4.setTransform(0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(59,123,145,0.224)").s().p("Ak6E7QiDiCAAi5QAAi3CDiDQCCiDC4AAQC4AACDCDQCDCDAAC3QAAC5iDCCQiDCDi4AAQi4AAiCiDg");
	this.shape_5.setTransform(0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(59,123,145,0.267)").s().p("Ak6E7QiDiCAAi5QAAi3CDiDQCCiDC4AAQC5AACDCDQCCCDAAC3QAAC5iCCCQiDCDi5AAQi4AAiCiDg");
	this.shape_6.setTransform(0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(59,123,145,0.31)").s().p("Ak6E7QiDiBAAi6QAAi4CDiCQCCiDC4AAQC5AACCCDQCDCCAAC4QAAC6iDCBQiCCDi5AAQi4AAiCiDg");
	this.shape_7.setTransform(0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(59,123,145,0.353)").s().p("Ak7E7QiDiCABi5QgBi4CDiCQCDiDC4AAQC5AACCCDQCECCAAC4QAAC5iECCQiCCDi5AAQi4AAiDiDg");
	this.shape_8.setTransform(0.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(59,123,145,0.396)").s().p("Ak7E7QiDiBABi6QgBi3CDiDQCEiDC3AAQC5AACCCDQCECDAAC3QAAC6iECBQiCCDi5AAQi3AAiEiDg");
	this.shape_9.setTransform(0.2,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(59,123,145,0.439)").s().p("Ak7E7QiDiCAAi5QAAi3CDiEQCDiDC4ABQC5gBCDCDQCDCEAAC3QAAC5iDCCQiDCEi5AAQi4AAiDiEg");
	this.shape_10.setTransform(0.2,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(59,123,145,0.482)").s().p("Ak7E7QiDiCAAi5QAAi3CDiEQCDiDC4ABQC5gBCDCDQCDCEAAC3QAAC5iDCCQiDCEi5AAQi4AAiDiEg");
	this.shape_11.setTransform(0.2,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(59,123,145,0.525)").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC6iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_12.setTransform(0.2,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(59,123,145,0.569)").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC6iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_13.setTransform(0.2,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(59,123,145,0.612)").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC6iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_14.setTransform(0.2,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(59,123,145,0.655)").s().p("Ak7E8QiDiCAAi5QAAi4CDiEQCDiDC4AAQC5AACDCDQCDCEAAC4QAAC5iDCCQiDCDi5AAQi4AAiDiDg");
	this.shape_15.setTransform(0.2,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(59,123,145,0.698)").s().p("Ak8E8QiDiCABi6QgBi4CDiDQCEiDC4AAQC5AACDCDQCDCDABC4QgBC6iDCCQiDCDi5AAQi4AAiEiDg");
	this.shape_16.setTransform(0.3,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(59,123,145,0.741)").s().p("Ak8E8QiDiCAAi6QAAi4CDiEQCEiDC4ABQC5gBCDCDQCECEAAC4QAAC6iECCQiDCEi5AAQi4AAiEiEg");
	this.shape_17.setTransform(0.3,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(59,123,145,0.784)").s().p("Ak7E8QiEiCAAi6QAAi4CEiDQCDiDC4AAQC5AACECDQCDCDAAC4QAAC6iDCCQiECDi5ABQi4gBiDiDg");
	this.shape_18.setTransform(0.3,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(59,123,145,0.827)").s().p("Ak7E8QiEiCAAi6QAAi4CEiDQCDiEC4AAQC5AACECEQCDCDAAC4QAAC6iDCCQiECEi5AAQi4AAiDiEg");
	this.shape_19.setTransform(0.3,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(59,123,145,0.871)").s().p("Ak7E9QiEiDAAi6QAAi4CEiDQCDiEC4AAQC6AACDCEQCDCDAAC4QAAC6iDCDQiDCDi6AAQi4AAiDiDg");
	this.shape_20.setTransform(0.3,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(59,123,145,0.914)").s().p("Ak8E9QiDiDAAi6QAAi4CDiDQCEiEC4AAQC5AACECEQCDCDAAC4QAAC6iDCDQiECDi5AAQi4AAiEiDg");
	this.shape_21.setTransform(0.3,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(59,123,145,0.957)").s().p("Ak8E9QiDiCAAi6QAAi5CDiDQCEiEC4AAQC6AACDCEQCDCDAAC5QAAC6iDCCQiDCDi6AAQi4AAiEiDg");
	this.shape_22.setTransform(0.3,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3B7B91").s().p("Ak8E9QiDiDAAi6QAAi4CDiEQCDiDC5AAQC5AACECDQCECEgBC4QABC6iECDQiECDi5AAQi5AAiDiDg");
	this.shape_23.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-44.5,89.1,89);


(lib.logo_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36AEE3").s().p("ACcHxIA+tWIjaItIiVp9IhFOmIiAAAIBng1IAAt7IhWgwIDMAAIB4HjIDwnjIBwAAIhYAwIAAN+IBYAyg");
	this.shape.setTransform(34.7,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF739D").s().p("AAaHxIBxhFIj9lIIghGNIh+AAIBjg1IAAt7IhUgwIC4AAQCEAABRBPQBUBQAACCQAABshDBPQhABQhuAcIDAFYIBkBAgAhxBKIAUABQBpABBAhTQBBhUAAiMQAAh0g1g8Qg0g/hhAAIgJAAg");
	this.shape_1.setTransform(349,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD400").s().p("AOqGOQg4hmAAijQAAidA5hnQA4hmBUAAQBVAAA6BmQA4BlAACfQAACmg4BkQg3BmhYAAQhVAAg4hngAPhh2QgcBRAACZQAACtAcBaQAeBYA4AAQA5AAAdhaQAehZAAisQAAiagehQQgdhPg5AAQg4AAgeBPgAg8GTQg7hhAAikQAAifA8hrQA8hpBWAAQBNAAA6BbQA9BaAAB+IAAArIk9AAQAAC+AeBPQAfBLBJAAQAvAAAlg6QAmg+AkiEIAAERIgghiQgeA+geAYQgiAbgnAAQhgAAg5higAAAh7QgcBJgGCSIDkAAIAAgsQgBhxgdhEQgdhDgwAAQg5AAgeBJgAnkG6Qgqg4AAh3QABhHAIhcQAHhQAShdIhLAAIg/B6IAAkMIBBB4IBMAAQAfiMAThMQARhNAQg+IhrgyIEaAAIiFA0QgXB8gNBVQgOBigFAuICGAAIA/h4IAAEIIg/h2IiIAAQgHA5gGBTQgFBaAABIQAAB9AWA6QAVA1AzAAQAzAAAng8QApg8Ahh9IAAD7IgchZQggA8gjAcQgkAbgxAAQhTAAgog7gAvNHUQgpggglhHIggB9IAAk+QAhCNA3BNQA0BPBAAAQA5AAAUgiQAYgiAAhRQAAhRgYgsQgWgsg4ggIgGgDQithjABhsQAAgtAbghIAEgGQAIgIAJgGQAugoBIAAQAxAAAeAUQAfAUAdA1IAchZIAAEGQgah5gkg6Qglg6g1AAQgwAAgaAcQgaAcAAA0QAABwCxBrIAKAGQA2AgAaAtQAZArgBA/QAABWg0AwQgyAzhXAAQg2AAgsghgEggrAGOQg3hmAAijQAAidA5hnQA4hmBVAAQBUAAA5BmQA4BlAACfQAACmg3BkQg3BmhXAAQhWAAg5hngA/zh2QgcBRAACZQAACtAcBaQAdBYA4AAQA4AAAehaQAehZAAisQAAiagchQQgehPg6AAQg4AAgdBPgAcwHqIh9oNIh0INIibAAIBtgzIifpbIhog2IC1AAIBxJsIByoFIhlgyIDuAAIhlAxIB4ILIBkpxIDBAAIhyA1IiUJcIBrAzgA19HqQBKhQAghaQAhhfAAiJQAAiQgehHQgdhHg8AAQg7AAgwBnQgxBmAACQQAABVAJBRQAIBYASBVIjGAAIBog1IAApeIhogxICYAAIAGC3QAZheAsgyQArgyA2AAQBVAAA6BdQA6BbAACQQAABnghBRQghBThKBJICKAzg");
	this.shape_2.setTransform(290.3,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_open, new cjs.Rectangle(0,5,505,100.4), null);


(lib.icon_full_Board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AC7AAQAAhMg3g4Qg3g2hNAAQhMAAg4A2Qg2A4AABMQAABNA2A3QA3A3BNAAQBNAAA3g3QA3g3AAhNg");
	this.shape.setTransform(-0.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhiAiQgNAAgJgKQgIgKAAgOQABgPAIgKQAJgJAOAAIDDAAQAPAAAIAKQAHAJAAAPQAAAQgHAIQgIAKgNAAIhkABIhjgBg");
	this.shape_1.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_full_Board, new cjs.Rectangle(-19.9,-19.6,39.5,39.5), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D1621").s().p("AgyhIQgRhDgFhDQAGBAARBAQAkCOBWCJIgBAGQhViJgliOg");
	this.shape.setTransform(7.5,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#891620").s().p("AgxhAIAAgFQAtBFA2BBIgBAFQg3hCgrhEg");
	this.shape_1.setTransform(19.8,63.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#851520").s().p("AgwgwIABgFQAvA2AwAvIAAAHQg0g0gsgzg");
	this.shape_2.setTransform(29.6,75.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#81141F").s().p("AgwgnIABgGQAuAsAyApIgBAGQg3gugpgng");
	this.shape_3.setTransform(39.2,84.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D141E").s().p("AgygiIABgGQAvAnA1AlIgBAFQgzgkgxgng");
	this.shape_4.setTransform(49.1,92.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7A131D").s().p("Ag1gfIABgGQAzAkA3AiIgBAFQg3ghgzgkg");
	this.shape_5.setTransform(59.5,100.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#76131C").s().p("AAOAMIhHgpIABgFQAjAWAkATIArAXIgBAGg");
	this.shape_6.setTransform(70.6,107.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72121B").s().p("Ag+gbIABgFQA+AgA9AcIAAAFQg5gZhDgjg");
	this.shape_7.setTransform(82.5,113.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E111A").s().p("AhEgZIABgFQBDAeBFAaIgBAFQhEgZhEgfg");
	this.shape_8.setTransform(95.6,119.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6A1119").s().p("AhPgXIABgGQBSAeBMAXIgBAGQhPgZhPgcg");
	this.shape_9.setTransform(110.3,124.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#671018").s().p("AhmgWIABgGQBpAfBjAVIgBAFQhogWhkgdg");
	this.shape_10.setTransform(128.5,130.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#631017").s().p("AtJB9IABgFQHeBmHEhOQHQhREgj2IgBAGQkgD2nQBQQjDAjjKAAQkGAAkPg7g");
	this.shape_11.setTransform(222.8,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0.3,15.5,306.7,123.4), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#631017").s().p("AjfLnIhUgHIhVgMIimgkIhUgaIhPgcQg9gYgZgMIhsg4IhDgnQg/gqgggYQgyglg0gwIgwgtQgtgwgdghIg8hOQCVC2CuANQBjAIBPgsQA+ghBFhEQByhwBcimIALgVQARgeAfhIQAdhDAVghQAHgNA5gsQApgigCgqQAAgJgYgJQHhBrHJhOQHVhQEij4IhBD0QhVEdhpDYQiHEViaCEIh8BfQgxAhgWAMQgWAOgvAZIg/AfQhHAegtARIhJAWQhBASgkAHIhOAPIhdAMIhRAFIhXACg");
	this.shape.setTransform(172.4,175.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671018").s().p("AiwLnIhVgHIhUgMIingkIhTgaIhQgcQg8gYgZgMIhsg4IhDgnQg/gqgggYQgyglg1gwIgwgtQgsgwgdghIhYh0IhChsIA0BOQBfBzB5ALQBcAIBJgwQBVg3AtgvQBIhLBUiaQAVgrALgRQARgbAggiQAkgmASgUQA+hIAIhFQAAgDgDgEIgFgIQIICiIMhAQIWhDFDkUIhBD0QhVEdhpDYQiHEViaCEIh8BfQgyAhgVAMQgXAOguAZIhAAfQhGAeguARIhIAWQhBASgkAHIhPAPIhcAMIhRAFIhYACg");
	this.shape_1.setTransform(167.7,175.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A1119").s().p("AiULnIhVgHIhUgMIingkIhTgaIhQgcQg8gYgZgMIhsg4IhDgnQg/gqgggYQgyglg1gwIgwgtQgsgwgdghIhyicIgzhXIgrhXQCSEIDPhxQAsgYAugtQBVhWBpilICrkQIAAgHIgBgGQEMBpEmAqQEfAqEXgZQEZgYDvhXQD2hbCuiVIhBD0QhVEdhpDYQiHEViaCEIh8BfQgyAhgVAMQgXAOguAZIhAAfQhGAeguARIhIAWQhBASgkAHIhPAPIhcAMIhSAFIhXACgA2ahoIgBgCIgBgDIABADIABACIAAAAg");
	this.shape_2.setTransform(164.9,175.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E111A").s().p("Ah3LnIhVgHIhUgMIingkIhUgaIhPgcQg8gYgZgMIhsg4IhEgnQg+gqgggYQgyglg1gwIgwgtQgtgwgcghIhzicIgyhXIhPirIgYg9IAbA/QCdEjEelHQCPikByjmQETCBE5A6QEwA5EtgQQEvgSEBhZQEKhcC5ieIhBD0QhWEdhoDYQiHEVibCEIh7BfQgyAhgVAMQgXAOgvAZIg/AfQhGAeguARIhJAWQhAASgkAHIhPAPIhcAMIhSAFIhXACg");
	this.shape_3.setTransform(162.1,175.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72121B").s().p("AhhLnIhVgHIhUgMIingkIhUgaIhPgcQg8gYgZgMIhtg4IhDgnQg/gqgfgYQgzglg0gwIgwgtQgtgwgdghIhyicIgzhXIg+iDIg/ixIAQAjQA1BhBPAOQAnAGAegNQBwhIBtigIBZiGQA0hQAqgxQEZCaFLBNQE+BJFDgJQFCgIEUhaQEeheDEinIhCD0QhVEdhpDYQiHEViaCEIh7BfQgyAhgVAMQgXAOgvAZIg/AfQhGAeguARIhJAWQhBASgkAHIhOAPIhdAMIhSAFIhWACgA26lFIAAgCIgCgFIACAHIAAAAgA29lOIgSgzIASAzIABACg");
	this.shape_4.setTransform(159.9,175.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76131C").s().p("AhPLpIhVgHIhUgMIingkIhUgaIhPgcQg8gYgZgMIhtg4IhDgnQg/gqgfgYQgzglg0gwIgwgtQgtgwgdghIhyicIgzhXIhgjXIhNkBIgJgnIABACQAkCPBFArQAjAUAcgHQBDgaA2g7QAkgnAwhPQA5hbAYggQAyhAA6ghQArAdA4AfQEaCeFMBOQFBBMFFgHQFFgJEXhZQEgheDFioIhCD0QhVEdhpDXQiHEWiaCEIh7BfQgyAhgVAMQgXAOgvAZIg/AfQhGAeguARIhJAWQhBASgkAHIhOAPIhdAMIhSAFIhXACg");
	this.shape_5.setTransform(158.1,175.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A131D").s().p("Ag+MOIhVgHIhUgMIingkIhUgaIhPgcQg8gYgZgMIhsg4IhEgnQg+gqgggYQgyglg1gwIgwgtQgtgwgcghIhzicIgyhYIhgjWIhCjVIgrjQQAhBnAUAbQAeAqA9gLQA/gKArgyQAageAjhKQAlhLAZgeQAqgzA+gMQBiBJBuA9QEZCeFMBOQFBBMFGgHQFEgJEXhZQEhheDEioIhBD0QhWEdhoDXQiHEWibCEIh7BfQgyAhgVAMQgXAOgvAZIg/AfQhGAeguARIhJAWQhAASgkAHIhPAPIhcAMIhSAFIhYACgA3mpmIAAgBIgMg/IAMA/IAAABIAAAAg");
	this.shape_6.setTransform(156.4,171.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D141E").s().p("AgxNIIhVgIIhUgLIingkIhUgaIhPgcQg8gZgZgLIhtg4IhDgoQg/gqgfgXQgzglg0gwIgwguQgtgwgdghIhyicIgzhYIhgjWIhNkAIgThZIglkIIAGAdQAkCFBDABQArAAAwg0QBvh3AqgjQAbgWATABQCHB1CvBjQEaCeFMBOQFBBLFFgHQFFgIEXhaQEghdDFipIhCD1QhVEdhpDWQiHEWiaCFIh7BeQgyAhgVAMQgXAOgvAaIg/AeQhGAeguARIhJAXQhBASgkAHIhOAOIhdAMIhSAFIhXACgA3yrpIAAgCIgNhfIANBfIAAACIAAAAg");
	this.shape_7.setTransform(155.1,165.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81141F").s().p("AgrPHIhUgIIhVgLIimgkIhUgaIhPgcQg9gZgZgLIhsg4IhDgoQg/gqgggXQgyglg0gwIgwguQgtgwgdghIhyicIgzhYIhgjWIhNkAIgbiEIgtlrIgKjRIANCYQAJA/AiAxQARAYAQAMQAhAFAfgVQAPgKAiglQAggfAVgLQAggPAnANQCoCuDxCIQEZCeFNBOQFBBLFFgHQFFgIEXhaQEghdDEipIhBD1QhVEchpDXQiHEWiaCFIh8BeQgxAhgWAMQgWAOgvAaIg/AeQhHAegtARIhJAXQhBASgkAHIhOAOIhdAMIhSAFIhXACg");
	this.shape_8.setTransform(154.4,153);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#851520").s().p("AgrRLIhVgHIhUgMIingkIhUgaIhPgcQg8gZgZgLIhsg4IhEgnQg+gqgggYQgyglg1gwIgwguQgtgvgcghIhzicIgyhYIhgjXIhOkAIgbiEIgfjUIgWkmIgBklQAEB+AJAzQAQBbAxAcQAZANAygGQAzgHAYANQC8DyE/CzQEZCeFMBOQFBBMFGgIQFEgIEXhaQEhhdDEipIhBD1QhWEchoDXQiHEXibCEIh7BfQgyAhgVAMQgXAOgvAZIg/AfQhGAdguARIhJAXQhAASgkAHIhPAPIhcALIhSAGIhYABgA4FwoIAAglIAAAlIAAAAg");
	this.shape_9.setTransform(154.5,139.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#891620").s().p("AgsTPIhUgHIhVgMIimgkIhUgaIhPgcQg9gYgZgMIhsg4IhDgnQg/gqgggYQgyglg0gwIgwgtQgtgwgdghIhyicIgzhYIhgjXIhNkAIgbiDIggjVIgVklIAAltIAKihIABgWIADgwIgDAwIgBAWQgGB6ALAsQANA3BbCbQBYCmCZCUQCeCYDXB4QEZCeFNBNQFBBMFFgHQFFgJEXhZQEghdDEioIhBD0QhVEchpDYQiHEWiaCEIh8BfQgxAhgWAMQgWAOgvAZIg/AfQhHAegtARIhJAWQhBASgkAHIhOAPIhdAMIhSAFIhXACg");
	this.shape_10.setTransform(154.5,126.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#891620").s().p("AikTGQj4gijQhhQjXhkijiTQh9hwhViEQhXiFg7iNQhukIgrlIQglkbACkwQABjIASi4QgTESCwEMQC/EhFyDPQEZCeFNBNQFABMFGgIQFFgIEWhaQEhhcDEipIhBD1QhVEchpDXQiHEXiaCEQiyCUi1BNQi1BNjrAbQhNAJhTAAQhtAAh3gQg");
	this.shape_11.setTransform(154.3,126.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,2.5,308.7,247.7), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#631017").s().p("AjiLhIingTIhTgQIhTgVIhSgYIhVgfIhvgxIhKgnQg3gggbgSQgYgPg7grIg8gwQgugpgWgWQgTgSgsgvQgRgTgogxIgVgcQBkB+CCApQCNArCChHQCahUDGlHQBjikBGiXIgMgMQHcBpHFhNQHQhPEgj3QgaBzguCYQhSELhkDMQiGEUiZCDIhGA4QgrAggZAQIhGAsIg1AdQg3Abg7AaIhAAYQgdAKhGAUIhJARIhaAQIhPAKIhVAGIhSABIhUgDg");
	this.shape.setTransform(171.2,173.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671018").s().p("AiwLhIingTIhSgQIhUgVIhSgYIhVgfIhugxIhLgnQg3gggbgSQgYgPg7grIg8gwIhVhPIgugxIgegiIgvg8IgjgyQgfgugYgpIgLgUQBpCtCJAZQBZAQBXguQBCgjAwguQBUhSBWicQAVglBbh7QBIhhAXhJQABgDgBgFIgBgJQIECgIGhAQIRhBFAkTQgaBzguCYQhSELhkDMQiGEUiZCDIhGA4QgqAggZAQIhHAsIg1AdQg3Abg6AaIhBAYQgcAKhHAUIhJARIhaAQIhOAKIhWAGIhRABIhVgDg");
	this.shape_1.setTransform(166.2,173.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A1119").s().p("AiVLhIingTIhSgQIhUgVIhSgYIhVgfIhugxIhLgnQg3gggbgSQgYgPg7grIg8gwIhVhPIgugxIgegiIgvg8IgjgyIgeguIgZgpIgthVIgPgfQBkDBCPgVQB2gSCNigQCii6CAkLQEJBoEjApQEdApEUgYQEXgYDrhXQD1haCsiUQgaBzguCYQhSELhkDMQiGEUiZCDIhGA4QgqAggZAQIhHAsIg1AdQg3Abg6AaIhBAYQgcAKhHAUIhJARIhaAQIhOAKIhXAGIhQABIhVgDgA2JhdIgFgKIAFAKIAAAAg");
	this.shape_2.setTransform(163.5,173.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E111A").s().p("Ah7LhIingTIhSgQIhUgVIhSgYIhVgfIhugxIhLgnQg3gggbgSQgYgPg7grIg8gwIhVhPIgugxIgegiIgvg8IgjgyIgeguIhGh+IgVgrIgSgpQgVgygMgiQBACjBtARQA9AKBVgrQCAhBBjixIBNiTQAvhWAsg0QERCAE2A5QEtA4EqgQQEsgRD/hZQEHhbC3idQgaBzguCYQhSELhkDMQiGEUiZCDIhGA4QgqAggZAQIhHAsIg1AdQg3Abg6AaIhBAYQgcAKhHAUIhJARIhaAQIhOAKIhXAGIhQABIhVgDg");
	this.shape_3.setTransform(160.9,173.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72121B").s().p("AhiLhIingTIhTgQIhTgVIhSgYIhVgfIhvgxIhKgnQg3gggbgSQgYgPg7grIg8gwIhVhPIgugxIgegiIgvg8IgjgyIgeguIhGh+IgVgrIgzh9QgMgfgRg1IgVhDQAzCcBTAnQA1AYA5gaQBHghA2hDQAkgtAvhZQA2hpAXgiQAwhJA8goQEWCYFHBLQE8BJE/gIQFAgJERhZQEbhdDCimQgaBzguCYQhSELhkDMQiGEUiZCDIhGA4QgrAggZAQIhGAsIg1AdQg3Abg7AaIhAAYQgdAKhGAUIhJARIhaAQIhPAKIhWAGIhRABIhUgDg");
	this.shape_4.setTransform(158.4,173.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76131C").s().p("AhTLiIimgTIhTgQIhUgUIhRgZIhVgfIhvgxIhKgnQg3gggcgSQgXgPg8grIg7gvIhWhPIgugyIgegiIgug7IgkgzIgeguIhGh9IgUgrIhDioIg9jUIAAgCIgEgSQAfB5A9ArQAhAYAcgFQBDgZA2g4QAngoAwhKQBChnAOgSQAwhBA0gkIAMgDQAUACAeAWIAvAiQEXCcFKBOQE9BLFCgIQFDgHEUhaQEdhcDDinQgZBzgvCXQhSELhjDMQiHEViYCCIhHA5QgqAfgZARIhHArIg1AeQg3Aag6AaIhAAYQgdAKhGAUIhJASIhbAQIhOAJIhXAGIhRABIhUgDg");
	this.shape_5.setTransform(156.9,173.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A131D").s().p("Ag/MHIingTIhTgQIhTgUIhSgZIhVgfIhvgxIhKgnQg3gggbgSQgYgPg7grIg8gvIhVhPIgugyIgegiIgvg8IgjgyIgeguIhGh+IgVgrIhDinIg8jVIgKgrIgJgrIgRhZIgIg0QAbCTAtAyQAgAjArgJQA8gNAtgtQAggeAlg/QAwhPAPgUQAog0AvgXIAOgBIBgBCIBtBBQEWCdFKBNQE+BMFCgIQFCgHEUhaQEehcDDinQgaBzguCXQhSELhkDLQiGEViZCDIhGA5QgrAfgZARIhGArIg1AdQg3Abg7AaIhAAYQgdAKhGAUIhJASIhaAQIhPAJIhWAGIhSABIhTgDg");
	this.shape_6.setTransform(154.9,170.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D141E").s().p("AgzM9IingUIhSgPIhUgVIhSgYIhVggIhugwIhLgoQg3gggbgRQgYgPg7gsIg8gvIhVhPIgugxIgegjIgvg7IgjgyIgeguIhGh/IgVgqIgSgpIhLjTIgiiAIgKgrIgnjfQgKhLgGhEIgDgdQAPCOAlA9QAVAgAVAEQBaAHBLhdQAmgzAWgXQAjgpAngOIAPADQAuAoAaATQAbAUBiBDIBtBCQEXCcFJBOQE+BLFCgIQFCgHEVhaQEdhbDDioQgaBzguCXQhSELhkDLQiGEWiZCDIhGA4QgqAggZAQIhHArIg1AeQg3Aag6AaIhBAYQgcALhHATIhJASIhaAQIhOAJIhXAHIhRABIhUgDg");
	this.shape_7.setTransform(153.7,164.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81141F").s().p("AgsO/IimgTIhTgQIhUgUIhRgZIhVgfIhvgxIhKgnQg3gggcgSQgXgPg8grIg7gvIhWhPIgugyIgegiIgug7IgkgzIgeguIhGh+IgUgrIgTgpIhLjSIgiiAIgKgsIgZiEIgplzQgDg6gDhIIAAgWQAHB0ALA2QASBeAlAXQAjAVAggKQAXgHAfgdIA0gxQAfgZAdgBIASAIQBKBLBMA7QAvAlBiBEIBtBCQEXCcFKBOQE9BLFCgIQFDgHEUhaQEdhcDDinQgZBzgvCXQhSEKhjDMQiHEWiYCCIhHA5QgqAfgZARIhHArIg1AeQg3Aag6AaIhAAYQgdAKhGAUIhJASIhbAQIhOAJIhXAGIhRABIhUgDg");
	this.shape_8.setTransform(153,151.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#851520").s().p("AgsRFIingTIhTgQIhTgUIhSgZIhVgfIhvgxIhKgnQg3gggbgSQgYgPg7grIg8gvIhVhPIgugyIgegiIgvg8IgjgyIgeguIhGh/IgVgrIgSgoIhMjTIghiAIgKgrIgwknIgWkSIgBkSQAGDuBOAYQATAFA1gGQAtgFAZAQQC6DvE7CwQEWCdFKBNQE+BMFCgIQFCgHEUhaQEehcDDinQgaBzguCXQhSEKhkDMQiGEViZCDIhGA5QgrAfgZARIhGArIg1AdQg3Abg7AaIhAAYQgdAKhGAUIhJASIhaAQIhPAJIhWAGIhSABIhTgDgA32v3IAAgSIgBgaIABAaIAAASIAAAAgA33wlIAAACIAAgCgA33wrIAAAGIAAgGgA32xHIgBAcIABgcg");
	this.shape_9.setTransform(153,138.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#891620").s().p("AgrTKIingUIhTgPIhTgVIhSgYIhVggIhvgwIhKgoQg3gggbgRQgYgPg7gsIg8gvIhVhPIgugxIgegjIgvg7IgjgyIgeguIhGh/IgVgrIgSgpIhMjTIghiAIgKgqIgaiFIgolyIgIjAIAAh1IANkkIABgOIABgRIAAgQIABgDIABgPIAAgHIAAgDIABgJIgBAJIAAADIAAAHIgBAPIgBADIAAAQIgBARIgBAOQgDBtASBHQAQBBA9BlIASAYQBXCjCXCSQCdCWDUB3QEWCcFKBNQE+BLFCgIQFCgHEUhaQEehaDDioQgaBzguCWQhSELhkDMQiGEWiZCDIhGA4QgrAggZAQIhGArIg1AeQg3Aag7AaIhAAYQgdALhGATIhJASIhaAQIhPAJIhWAHIhSABIhTgDg");
	this.shape_10.setTransform(152.9,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#891620").s().p("AiVS7QkxgmkSiXQnSkBi+oqQh5lggTnlQgMkqAakqQgQEMCsEHQC9EeFvDNQEWCcFKBNQE+BLFCgHQFCgIEUhZQEehbDDioQgaBzguCXQhSELhkDMQiGEViZCDQhgBQhVA0QhVA0htAuQhOAghlAaQh6AfhtAIQhOAGhKAAQhnAAhhgMg");
	this.shape_11.setTransform(152.9,125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,2.2,305.8,245.7), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#631017").s().p("AiPDkQDojJA4kDIgBAGQg4EDjoDIg");
	this.shape.setTransform(14.5,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,29,46.6), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#631017").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape.setTransform(42.4,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671018").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_1.setTransform(42.4,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A1119").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_2.setTransform(42.4,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E111A").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_3.setTransform(42.4,80);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72121B").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_4.setTransform(42.4,80);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76131C").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_5.setTransform(42.4,80);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A131D").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_6.setTransform(42.4,80);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D141E").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_7.setTransform(42.4,80);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81141F").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_8.setTransform(42.4,80);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#851520").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_9.setTransform(42.4,80);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#891620").s().p("AmAL/IAOgOIgOAOIgSARIASgRgAiGGIQBqjYBTkcQAriOAXhmQDXi5BAjsIADgKIgDAKIgQBAIiMG7IhNDDIiLEgIijEKIhuCNIgfAjIheBeQB9iCBvjng");
	this.shape_10.setTransform(42.4,80);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#891620").s().p("AiHGGQBpjXBUkcQAriPAXhmQDXi5BAjtQgsC1g/C+QhqE9iJEHQiBD7ieC6QhJBXhXBOQCMiEB7j/g");
	this.shape_11.setTransform(42.5,80.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(2.1,1.6,80.5,156.8), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#631017").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape.setTransform(42.3,79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671018").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_1.setTransform(42.3,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A1119").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_2.setTransform(42.3,79.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E111A").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_3.setTransform(42.3,79.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72121B").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_4.setTransform(42.3,79.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76131C").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_5.setTransform(42.3,79.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A131D").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_6.setTransform(42.3,79.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D141E").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_7.setTransform(42.3,79.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81141F").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_8.setTransform(42.3,79.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#851520").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_9.setTransform(42.3,79.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#891620").s().p("AmBL+IAIgJQCAiCByjtQBkjMBRkKQAuiXAahzQDNiwBCjgIhCDvIhcEMIgXA8IhtD8Ih7DpIgXAnIh7C2IiUCtIg7A5IgIAJIgLAKIALgKgAGNsHIgIAdIAIgdg");
	this.shape_10.setTransform(42.3,79.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#891620").s().p("AiKGEQBjjMBRkKQAviYAZhyQDTi2BBjnQgvC9hCDDQhoEuiIEFQh6DuiYC1QhEBQhUBNQCEiCB3j0g");
	this.shape_11.setTransform(42.6,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(2.6,1.5,79.5,155.3), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB838B").s().p("AgHADQgFgEADgFQABgCAFgCQADgBADABQAEACACAIIACALQgOgDgEgFg");
	this.shape.setTransform(223,224.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA7F88").s().p("AAFAoQgkgPgOgQQgJgKgFgQQgFgRAFgLQAFgJATgDIAdgFQAFgBALAFQAIACAJAMIAMAVQAIAPAGAaIAKAtIg6gXg");
	this.shape_1.setTransform(224.9,225.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D97C84").s().p("AA9BeQgMgDgzgiQg1gigMgMQgNgOgDgHIgPgjQgJgWAHgLQAIgPAugCQAPgBAPADQARADAKAGQAHAEAoA2QAnA0AEALQAHAQgJAWQgEAKgFAIQgFADgJAAQgGAAgJgCg");
	this.shape_2.setTransform(225.9,226.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D87881").s().p("AA6B1QgGgCgGgFIgZgVIgYgWIgjgYQgWgPgKgLIgXgaQgOgRgGgMIgPggQgHgVAGgLQAKgRAvAAQBDAAAgASQAIAEAsA6QAsA6AFAMQAHAUgDAPQgDASgCAIQgFAQgJAGQgJAGgQAAQgNAAgRgDg");
	this.shape_3.setTransform(225.5,227.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7737D").s().p("ABYCMQgQgDgdgVIgYgWIgXgWIgigYQgWgPgJgLQg4g9gQgbQgZgrALgSQAJgQBFACQBIACAxAWQAKAFAuA3QAuA3AFANQAMAggFAqQgEAogPAKQgLAHgRAAQgLAAgMgCg");
	this.shape_4.setTransform(224.7,227.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D56F79").s().p("ABsCmQgRgDgWgOIgjgZQgJgHgPgPIgXgWIghgYQgVgQgJgKQgHgIgMgQIgSgXIgigkQgXgXgJgPQgCgEADgWQADgVABgBIAUgNQAUgOAFAAQAfACA4AKQBEAMAbANIA4A2QA4A/AIAoQAKAzgEAgQgCANgGANQgGAPgJAGQgIAGgPACIgMABIgNgBg");
	this.shape_5.setTransform(224.6,227.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D46A74").s().p("AB/C7Ihgg4IhwhlIhrh2IgHgKQgEgHAAgEQgDggAKgOQAfgvByAWQA5AMA1AVQAGADAsAvQAuAyARAZQAPAWAHA0QAHA6gNAlQgIAVgLAJQgIAGgOADQgIACgIAAIgIgBg");
	this.shape_6.setTransform(224.5,228);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D36570").s().p("ACRDSQgNgEgWgNQgrgYgxgqQipiggsgwQgYgZAAgeQAAgVAJgNQALgKASgKQAkgTAgAAQAsABCNAsQAIAEAvAyQAyA0AKARQAEAHAOAyQAOAyABALQADAqgLAlQgKAhgNAKQgIAGgNADQgKACgIAAIgFAAg");
	this.shape_7.setTransform(224.5,228.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1606B").s().p("ACiDnQgqgDijiYIifiZQgMgMgKgTQgLgTgDgQQgCgKADgNQADgMAHgJQAQgWA3gNQAcgHAagCQAQABBNAUQBMATAPAIQAHAEAxAxQA0A0AMASQATAeANBOQAMBEgMA0QgQBAgwAAIgIgBg");
	this.shape_8.setTransform(224.3,229.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CF5A65").s().p("ACwD8QgPgCgTgJQgRgJgOgMIk/kpQgQgPgTgkIgRgiQgEgrA1gYQAggPAugGQA1gGBZAaQAtAMAkAPQAJAEAxAwQAzAxANATQAbAlANBGQAXB3ghA/QgZAuglAAIgEAAg");
	this.shape_9.setTransform(224.3,229.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CE545F").s().p("AC7ESQgOgBgQgHQgRgIgLgJQjzjkhlhhQgkgigTgmIgMgfQgEg6BigXQAxgMAzgBQAMABBMAUQBOAVATAIQAOAGATASIAdAeQCMCCgSClQgHBAgdArQgbApgeAAIgBAAg");
	this.shape_10.setTransform(224.4,230.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC4D59").s().p("ADGEoQgZgDgbgWQgagWiDiCQgbgbhPhGQhEg8glgnQgxg2gOgSQgTgbgBgXQAAgtBHgcQBAgZBYABQAIAABTAWQBSAWAPAFQAOAGATASIAeAdQCgCPgbC7QgKBFghAxQgeArgbAAIgEgBg");
	this.shape_11.setTransform(224.5,231.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C94451").s().p("ADSFEQgZgEgagYQgXgVhoh0QgrgwhVhMQhghVgjgkQhBhCgPgUQgUgbABgaQABgvBEgcQBCgbBfAEQBlADBYAmQBkArA2BMQAwBDAUBbQASBRgIBRQgIBPgeAuQgcArgmAAIgLgBg");
	this.shape_12.setTransform(224.5,233);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C63946").s().p("ADUFhQgLgCgNgHQgNgHgIgIQgigjhBhRQg/hOgkglQgkgmh3hqQhjhZg0g9QgKgNgEgRQgJgiAagcQA0g5CagHQCYgHBeAyQCFBHA9CFQAnBVADBgQAFCGgyBRQgnA/gvAAIgLgBg");
	this.shape_13.setTransform(225.1,234.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BE1E2D").s().p("ADRGDQgQgIgYgYQgqgrg/haQhBhggkgnQgwg0h3hoQhwhjg1g+QgJgLgDgRQgHgiAbgcQAugxB0gSQB7gTB5AiQCNAmBXBkQBmB3AIC7QAHCag/BgQgVAhgbAVQgUAQgLABIgLABQgPAAgNgHg");
	this.shape_14.setTransform(225.8,236.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA1D2C").s().p("ADgG6QgtgCgohRQiIjcgZghQgSgVgYgbQgggkgSgRQgQgOiAhoQhYhIgug7QgggqAGgiQAEgTARgSQA6g9CBgSQCHgTCEApQCYAvBdBuQBsCAAJDDQAHCdhQB4QgfAvgkAcQggAZgVAAIgCgBg");
	this.shape_15.setTransform(227.4,239.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B61D2B").s().p("AC2HoQgUgCgIgLIgHgLIgGgMIgLgSQgCgDgCgHIgCgKQgQg3gfhEQg1h1hKhiQg3hHiXh6QiOh1g6hTQgGgKAAgPQgBgeAbgcQBDhHDKgOQC/gNBXAtQDkB2BTDAQAvBtgHBkQgLCLhpCUQgsA/gtAlQgqAkgcAAIgFgBg");
	this.shape_16.setTransform(229.2,243.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B31C2A").s().p("ABtINQgDgCgDgHIgFgKIgHgKIgQhhQgIhGgnhbQgfhNgjgyQhPhxiCh3QhUhMhahCQgjgZgYghIgQgcQgSg9BRgwQBRgxCWgSQCbgTCiA4QCrA5BoB0QB0CBgGCoQgIC/ipDZQgiArg3AtQhAAzghACIgEAAQgQAAgIgGg");
	this.shape_17.setTransform(230.7,245.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AF1C29").s().p("AA8I7QgKAAgDgBQgCgCgDgFIgEgIQgXgnAFg+QAGhXgDgQQgIg7gOgrQgWhJgyhQQg7hfhlheQg3gzgwgkQh/hdgwgyQgcgdgHgZQgMgmAlglQA8g9CvgmQE0hCEOCbQCJBOBTBkQArA1gMB+QgQCxiLDWQhJBvhnBZQhiBVg0AAIgEAAg");
	this.shape_18.setTransform(232.9,247.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AB1B29").s().p("AgRJhQgNgEgFgLQgFgKAEgZQACgOAIgfQAShKgHhZQgMiRhRh/Qg5hZhThPQhThQiQhnQgsgfgegdQgugsADgYQAOh1Dng8QDfg4DeApQA/AMCGAzQCeA9BMA1QAjAZASBLQAJAmACAhQACCriLDwQiSD+jFCGQgoAbgmAQQgeAMgOAAIgIgBg");
	this.shape_19.setTransform(235,248.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#631017").s().p("Ai3YIQg/gqgUgPQgcgUgvgnIgygsQg6g6gXgaIgnguIgvg8IgagmIhNh/IgXguIg4h8IgQgsIg3ipIgxjYIgslbIgMl4IAIjwIAMifQAPiTBKiGQBMiKCGhzQEFjhGdhWQGRhVG3BDIgaADQgQACgIAFQgDADgIAOQhpC4ijGeQidGQh0DCImsJNQksE2hPETQgzCuBQDBQBeDlEDCXIhJgpg");
	this.shape_20.setTransform(91.7,158.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#671018").s().p("Ah3Y3QAkATAnAQQgngQgkgTgAi5YZIhkg6Qg/gqgUgPQgcgUgvgmIgxgtQg6g6gYgaIgngtIgvg9IgagmIhMh/IgYgtIg4h8IgQgsIg3ipIgwjZIgslbIgMl4IAHjwIANieQAPiUBJiGQBMiKCGhzQElj7HbhNQHQhLHmByIgXAGIgEACIgGACQhcBKg1CZQgPAqgaBXQgZBMgYAxIg4BwQitFcgkBFQgkBEgtBBQiGDAgqA4QgqA4h5CQQg8BIjLDCQirCihOB3QgnA8gRAgQgeA4gSA5QhVEUC5D2QB+CpDNBng");
	this.shape_21.setTransform(101.9,162.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6A1119").s().p("AgaZmIgCgBIACABIAnANIgngNgAhtZJIhUgkIhLglIhjg5Qg/gqgVgPQgcgUgugnIgygsQg6g6gYgaIgnguIgug8IgbgmIhMh/IgYguIg3h8IgRgsIg2ipIgxjYIgslbIgMl4IAHjwIANifQAPiTBJiGQBMiKCGhzQFAkTIQhBQIGhBIFCgIgMAEQgTAGgLAOQgmA0gsBUQg1BmiOEpQhfDJgxBTQgxBTjFEqQhYCGibCOQgkAij1DOQitCRhfBtQiECYhCClQhWDVB6DhQB6DhEXCOQA8AfBEAYIAFACg");
	this.shape_22.setTransform(110.2,165);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6E111A").s().p("AgLZxIhTgZIhPgdIhUgkIhKglIhkg5Qg/gqgVgPQgbgUgvgnIgygsQg6g6gYgaIgnguIgug8IgagmIhNh/IgXguIg4h8IgQgsIg3ipIgxjYIgslbIgMl4IAIjwIAMifQAPiTBJiGQBNiKCFhzQCqiRDvhaQDnhWEQgaQIyg2IZDIIgRAFIgIAEQgiAciGEaQhCCIhhCsQjBFaiiDMQiMCyhgBjQikCojaCcIiTBzQicB/g6BJQgvA8gVAiQghA2gUA7QgwCUAsCUQApCLBzB7QBtB2CgBVQCGBICTAmIhDgQg");
	this.shape_23.setTransform(116.6,166.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#72121B").s().p("AAZZ6QArAKAsAIQgsgIgrgKgAhJZlIhTgZIhPgdIhUgkIhLglIhjg5Qg/gqgVgPQgcgUgugnIgygsQg6g6gYgaIgnguIgug8IgbgmIhMh/IgYguIg3h8IgRgsIg2ipIgxjYIgslaIgMl5IAHjwIANifQAPiTBJiGQBMiKCGhzQCziaEBhbQD4hYEjgTQEigUEoAyQEvA0EPB3IgPAFIgIAEQgCABgLAMQhmB6hmCvQgxBUh6DqQhqDKhGBxQhqCohyB3QiyC5hDA7QhYBQikB1QlYDzhcBUQh+B0gwCMQgzCWAyCYQAuCOB+B9QB5B5CsBTQB5A6B/Agg");
	this.shape_24.setTransform(122.8,167.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#76131C").s().p("AB4aNIgLgCIALACIAoAFIgogFgAAlaDQg6gLgYgFIhSgUIhTgZIhPgdIhUgkIhLglIhjg5Qg/gqgVgPQgcgUgugnIgygsQg6g6gYgaIgnguIgug8IgbgmIhMh/IgYguIg3h8IgRgsIg2ipIgxjYIgslaIgMl5IAHjwIANifQAPiTBJiGQBMiKCGhzQC8ihERhcQEHhZE0gNQE0gOE1BAQE+BCEUCLIgSAJIgNANQiLCci5FUQhkC4gtBLQhVCOhUBmQhRBihOBWQiSCkijB7QhxBWk+DPQioBthQBIQiMB9guCFQg1CYA6CdQA2CRCMCAQCHB7C6BQQCZBCCdAXg");
	this.shape_25.setTransform(128.2,168.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7A131D").s().p("ACYaSQhBgFgTgCIhTgMQg6gKgZgGIhSgUIhTgZIhPgcIhUgkIhKglIhkg6Qg/gqgUgPQgcgUgvgmIgygtQg6g6gXgaIgngtIgvg9IgagmIhNh/IgXgtIg4h8IgQgsIg3ipIgxjZIgslaIgMl5IAIjwIAMieQAPiUBKiGQBMiKCGhzQDDinEdhdQEUhZFBgIQFDgHE+BLQFKBOEWCcIAWAMIgMAFIgFAEQgnAfhZCWQjMFZhsCeQitD+iyCyQieCeiHBrQjvDCksCmQg/AihIAxQh7BThKBOQhNBQgoBnQg4CQA4CYQAzCNCKB+QCGB6C5BRQC8BTDEAWQAjAEAeACIBCABQguAAhGgDg");
	this.shape_26.setTransform(133.4,168.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7D141E").s().p("AD4aVIABAAIgBAAIAAAAgAD4aVIAAAAIAAAAIAAAAgAEDaVIgKAAIAKAAgADWaUIAiABIgigBgAEOaUIgLABIALgBgADRaUIAFAAIgFAAgABmaTQhBgFgTgCIhTgMQg6gKgYgGIhSgUIhUgZIhOgcIhVgkIhKglIhkg6Qg/gqgUgPQgcgUgvgmIgxgtQg6g6gYgaIgngtIgvg9IgagmIhMh/IgYgtIg4h8IgQgsIg3ipIgwjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEdhdQEVhZFBgIQFCgHE+BLQFKBOEXCcQA8AhA9AoIgKAFIgZAXQh2B0iRD5QhaCYgaAqQhDBshABLQj8EphZBLQhZBLhUBBQiHBqhKA0QhxBRibBeQmpEBhQA/Qg2AsgbArQgTAdgcBJQg7CUA+CbQA6CRCXB/QCSB7DHBNQDLBQDOAMIAcABg");
	this.shape_27.setTransform(138.4,168.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#81141F").s().p("AA3aSQg/gFgTgCIhUgMQg6gKgZgGIhSgUIhTgZIhPgcIhUgkIhKglIhkg6Qg/gqgVgPQgbgUgvgmIgygtQg6g6gYgaIgngtIgug9IgagmIhNh/IgXgtIg4h8IgQgsIg3ipIgxjZIgslaIgMl5IAIjwIAMieQAPiUBJiGQBNiKCFhzQDEinEdhdQEUhZFCgIQFBgHE/BLQFJBOEXCcQB2BCBgBIIgNAKQhjBehmCGQg/BShwCnQhzCpg8BQQhmCGhiBeQjtDilkDpQixB1iHBKQkUCNhfBEQiTBpg5CLQg+CWBGCfQBBCSCkB/QCeB7DSBKQDXBLDVADQAvAAAogCIhRAGIhWABg");
	this.shape_28.setTransform(143.1,168.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#851520").s().p("AALaSQhAgFgTgCIhUgMQg6gKgZgGIhSgUIhTgZIhPgcIhUgkIhKglIhkg6Qg/gqgUgPQgcgUgvgmIgygtQg6g6gXgaIgngtIgvg9IgagmIhNh/IgXgtIg4h8IgQgsIg3ipIgxjZIgslaIgMl5IAIjwIAMieQAPiUBKiGQBMiKCGhzQDDinEdhdQEUhZFCgIQFCgHE+BLQFKBOEWCcQCrBfCFBzIgIAFIgEAFIgVAOQgGAEgdAnIjFEPQjGEKhnBqQiHCOhIBAQg5AzhtBSIhQA8QhMA5i1BuQipBphVBDQhhBMjxBzQjlBthpBaQgpAkghA2QgSAcgWAuQg9CEA0CQQAyCJCQB6QCPB6DNBQQDWBUDwAUQBwAJBzgRIglAHIibAOIhXABg");
	this.shape_29.setTransform(147.5,168.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#891620").s().p("AghaSQhBgFgTgCIhUgMQg6gKgYgGIhSgUIhUgZIhOgcIhVgkIhKglIhkg6Qg/gqgUgPQgcgUgvgmIgxgtQg6g6gYgaIgngtIgvg9IgagmIhMh/IgYgtIg4h8IgQgsIg3ipIgwjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEdhdQEVhZFCgIQFBgHE+BLQFKBOEXCcQDkB/CkCmIgGAGIgDAFQhjBZinDlQihDchwBeQk3EEg+AyQg/AzhDAqQgxAfjDB1QiWBchbA8QjvCegwAdQgvAegvARQjJBNhVA4Qh2BPhBCFQhECLBCCUQA8CJCjB5QCeB2DYBLQDdBMDjANQA+AEAugDQAygDAygJIAigGIgiAGIhLAPQg6AIghADIhSAGIhWABg");
	this.shape_30.setTransform(152,168.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8D1621").s().p("AhNaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQEpCmC3DgIgGAFIgEAEQgkAWg+BCQg9BClMF2QguAxhTBIQinCPjEB3QhBAniuBZQiaBPhTA3QgvAgg7A4IhlBhQh9Byh0AbQiAAdhCAWQhyAlhGA0QgvAigjAjQgVAVgLARQhPBvAGB8QAHB4BUBwQBUBxCRBUQCXBYDBApQGfBbBgAGQA1AEAvgHIgNADIhOAOQg6AIghADIhSAGIhWABg");
	this.shape_31.setTransform(156.4,168.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#901722").s().p("Ah5aSQhBgFgTgCIhUgMQg6gKgYgGIhSgUIhUgZIhOgcIhVgkIhKglIhkg6Qg/gqgUgPQgcgUgvgmIgxgtQg6g6gYgaIgngtIgvg9IgagmIhMh/IgYgtIg4h8IgQgsIg3ipIgwjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEdhdQEVhZFCgIQFBgHE+BLQFKBOEXCcQC+BqCTCFQCNCABbCRQiABFioC6QhkBwghAgQhNBOhGAxQk0DVhVAyQhVAzjNBdQneDagHCEQgCAxBAAoQAkAXBXAhQDQBNCIBxQB/BpAyB7QAxB2gdBzQgdBzhiBaQgxApgqAbQg7AmhlAxQgYAKgJAHQgSAMACAMQADAKAcAIQAfAJAvAAQBXABBlgfQAcgJAegLQgeALgcAJIg+AVQg/ARglAIIhNAOQg6AIghADIhSAGIhVABgAlCISQk7AHi4CeQhaBOghBiQggBfAbBmQA3DYEHCTQEHCTE7gIQE7gHC4ieQBahNAhhjQAfhfgahmQg4jXkGiTQj6iMkpAAIgfAAg");
	this.shape_32.setTransform(160.8,168.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#941723").s().p("AjCaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQGODeC6E7QC1EyhHEuIgqCZQgUBPgcBYIgGAWIAGgWQAchYAUhPQBUlOgtihQgWhRg1gUQgvgRg4AlQhaA6hxBeIjBClQjvDKi3BPQlGCLh6A6QjDBbhSA/QhfBGAMA5QANA7CBA7QHWDXBEEbQAaBwgoBuQgiBehLBMQggAfgYAUQgrAjg5AkIgYAUQgXAVAGANQALAcBngPQBegNBnguIgMAFQg5AZg5AVIhIAXQhAARgkAIIhOAOQg6AIghADIhRAGIhWABgAmKISQk8AHi4CeQhaBOghBiQgfBfAaBmQA4DYEGCTQEHCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAg");
	this.shape_33.setTransform(168.1,168.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#981824").s().p("AjCaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQGODeC6E7QC1EyhHEuIhuF+Ig7CoIgTAvIgGAQIgjBWIgSArIASgrIAjhWIAGgQQBej7AmjiQAxkshWgiQgDgCiEALQhyA0jbCbQjSCTh/A1QhAAak0BrQjlBRiIBIQgsAYgnAsQgyA7ATAtQANAdAcAUQAbATCYBZQF/DeApENQARBqgoBmQghBXhDBDIggAhQhMBOgLAOQgLAPAKAMQASAXBqgcQBTgWBYgvIggASIg/AeQg5AZg5AVIhIAXQhAARgkAIIhOAOQg6AIghADIhRAGIhWABgAmKISQk8AHi4CeQhaBOghBiQgfBfAaBmQA4DYEGCTQEHCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAg");
	this.shape_34.setTransform(168.1,168.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9C1925").s().p("AjCaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQGODeC6E7QC1EyhHEuIhuF+Ig7CoIhSDAIgLAcIgMAbIgNAeIgJATIgaA4QggBDglBBIgoBHIgPAZIgYAmIgmA8IgEAFIAEgFIAmg8IAYgmIAPgZIAohHQAlhBAghDIAag4IAJgTIANgeIAMgbIALgcQA0iBAliEQAvirADh4QADh8gsgrQgJgJg9gFQg7gEgUAFQgpAKhDAoQhHArgkALIuAEgQhxAshMAwQh1BJAGA/QADAkAgAdQAdAbBfA6QG6ELAgEeQAVC5iRChIgbAiQgnA0gFAKQgFAKAHAJQAFAGAcAAQAmgBAxgPQB/gmCYh1IgUAQIg0AlIhFAtIhGAnIg/AeQg5AZg5AVIhIAXQhAARgkAIIhOAOQg6AIghADIhRAGIhWABgAmKISQk8AHi4CeQhaBOghBiQgfBfAaBmQA4DYEGCTQEHCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAg");
	this.shape_35.setTransform(168.1,168.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A01926").s().p("AjCaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQGODeC6E7QC1EyhHEuIhuF+Ig7CoIhmD3IiEEEIgtBNIiWDaIiZCqIhIBCIgRAOIhqBQIhFAtIhGAnIg/AeQg5AZg5AVIhIAXQhAARgkAIIhOAOQg6AIghADIhRAGIhWABgAmKISQk8AHi4CeQhaBOghBiQgfBfAaBmQA4DYEGCTQEHCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAgAG3CGQgeAGhJAWQhTAYgwATQhkAmg9AyQhpBXBVBRQA0AxBXA9ICTBmQCsB/BBCLQB7EKi6D1IgRAeQgOAnALAKQASAPBRgcQBlgjBzhWIAQgNQCwiNCmjxQCdjjBejsQBgjygJiaQgKioiMgLIgCAAQg9AAs3Csg");
	this.shape_36.setTransform(168.1,168.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A31A27").s().p("AjCaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQGODeC6E7QC1EyhHEuIhuF+Ig7CoIhmD3IiEEEIgtBNIiWDaIiZCqIhIBCIgRAOIhqBQIhFAtIhGAnIg/AeQg5AZg5AVIhIAXQhAARgkAIIhOAOQg6AIghADIhRAGIhWABgAmKISQk8AHi4CeQhaBOghBiQgfBfAaBmQA4DYEGCTQEHCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAgAPVBxQj4APjLAfQpqBeB6C1QAuBDBQBBQAhAaBzBRQBdBCAxAwQBIBFAmBPQBGCUgWCOQgPBhhJCHIgFAUIAEAKQADAHADACIAKACQANABATgDQA9gMBeg5IAHgFQC2h8CnjcQCejRBZjcQBcjigTiSQgVigiYgNIgegBQg+AAiYAKg");
	this.shape_37.setTransform(168.1,168.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A71A28").s().p("AjCaSQhAgFgUgCIhTgMQg7gKgYgGIhSgUIhTgZIhPgcIhUgkIhLglIhjg6Qg/gqgVgPQgcgUgugmIgygtQg6g6gYgaIgngtIgug9IgbgmIhMh/IgYgtIg3h8IgRgsIg2ipIgxjZIgslaIgMl5IAHjwIANieQAPiUBJiGQBMiKCGhzQDDinEehdQEUhZFCgIQFBgHE/BLQFJBOEXCcQGODeC6E7QC1EyhHEuIhuF+Ig7CoIhmD3IiEEEIgtBNIiWDaIiZCqIhIBCIgRAOIhqBQIhFAtIhGAnIg/AeQg5AZg5AVIhIAXQhAARgkAIIhOAOQg6AIghADIhRAGIhWABgAmKISQk8AHi4CeQhaBOghBiQgfBfAaBmQA4DYEGCTQEHCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAgAHkDHQjiARhvAyQiGA7AwBjQAXAxCHBaQB0BNBbBdQCOCRAsCVQA0CshPDKQgSAvAbANIAFABIAigGQCRg5Cpi5QCjizBrjUQBzjhgFidQgEiyiignQhVgUi/gJQhagEhUAAQh2AAhtAIg");
	this.shape_38.setTransform(168.1,168.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A71A28").s().p("AjBaSQilgKifgqQhggZhLgfQiMg7heg5QhxhEh3hrQhvhlhhiWQiWjphJknQhEkTgSk5QgVlbAglaQAglAEMjmQDDinEdhdQEUhZFCgIQFCgHE+BLQFKBOEWCcQGODeC6E7QC1EyhGEuQgyDOhHDRQhnEsiCD8Qh+DziYC2QhTBjhpBeIgEADIgBABIgDADIgXATIgrAiQjoCtkcBCQilAniuAAQg0AAg1gEgAmKISQk8AHi3CeQhaBOghBiQggBfAbBmQA3DYEHCTQEHCTE7gIQE7gHC4ieQBahNAhhjQAfhfgahmQg4jXkHiTQj4iMkqAAIgfAAg");
	this.shape_39.setTransform(168,168.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,-0.1,336.2,337.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#941723").s().p("AAoACQgbiChGiCIACgFQBFCBAbCEQAcCDgTCCIgBAFQATiBgciFg");
	this.shape.setTransform(331.2,114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#901722").s().p("AgwhFIABgGQA1BGArBLIgCAGQgohJg3hIg");
	this.shape_1.setTransform(320.7,80.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D1621").s().p("AgsgwIABgGQAwAzAoA0IgBAGQgsg4gsgvg");
	this.shape_2.setTransform(311.4,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#891620").s().p("AgsgoIABgFQAwAsAoApIgBAGQgogqgwgsg");
	this.shape_3.setTransform(302.5,58.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#851520").s().p("AgtgiIABgGQAnAfAzAsIgBAGQgtgogtgjg");
	this.shape_4.setTransform(293.5,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81141F").s().p("AgvgeIABgGQApAbA1AoIgCAGQgpggg0gjg");
	this.shape_5.setTransform(284.2,43.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D141E").s().p("AgxgcIABgFQAwAcAyAhIgBAGQgvgggzgeg");
	this.shape_6.setTransform(274.6,36.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A131D").s().p("Ag0gZIABgGIA6AfQAYANAWAOIgBAFg");
	this.shape_7.setTransform(264.3,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#76131C").s().p("Ag3gXIAAgGQA2AYA5AdIgBAGQg3gdg3gYg");
	this.shape_8.setTransform(253.5,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#72121B").s().p("Ag8gVIABgGQBDAaA1AXIgBAGQg8gbg8gWg");
	this.shape_9.setTransform(241.9,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E111A").s().p("AhDgUIABgGQBCAVBEAaIgBAGQhIgbg+gUg");
	this.shape_10.setTransform(229.1,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6A1119").s().p("AhOgSIABgGQBWAWBGAVIgBAGQhGgWhWgVg");
	this.shape_11.setTransform(214.6,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#671018").s().p("AhlgRIABgGQBnASBjAXIgBAGQhjgYhngRg");
	this.shape_12.setTransform(196.7,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#631017").s().p("AujG5QARiSBKiDQBNiICEhxQENjnGrhWQGghUHEBLIgBAGQnEhLmgBUQmrBWkNDnQiFBxhLCHQhLCEgRCSg");
	this.shape_13.setTransform(93.3,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,-0.1,337,140.5), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB838B").s().p("AABAIQgGgCgCgDQgFgDACgFQACgDAFgCQAEgCADACQAEACABAIIACAMIgKgEg");
	this.shape.setTransform(225,226.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA7F88").s().p("AAFApQgkgPgOgRQgJgKgFgPQgGgRAFgLQAFgJASgFIAegFQAFgBANAFQAKACAKAOIANAYQAHAOAFAaIAHArIg6gXg");
	this.shape_1.setTransform(227,227.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D97C84").s().p("AA9BfQhZgwgogjQgKgJgFgKIgQgkQgKgXAHgMQAIgQAugDQAPgBAQACQASADALAHQBgBzgCAWQgDAjgOAIQgFAEgJAAQgIAAgGgDg");
	this.shape_2.setTransform(228.1,229);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D87881").s().p("ABVB5IgegDQgCAAgDgCIgFgEQgMgGgTgTIgdgbIgdgUQgTgNgIgIQgbgXgPgfIgQghQgJgWAHgMQAJgTAvAAQAjAAATACQAgAEARAMQAGADAfAnQAlAwAbAsQAIANgDAYQgFAmgQALQgHAFgNAAIgIgBg");
	this.shape_3.setTransform(227.6,229.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7737D").s().p("ABUCOIgWgLQgNgHgHgFIhyhfQgTgQgTgYQgUgYgMgXQgbgtAKgSQAGgLATgFQAPgEASABIBEAIQBAAKANAJIAtAwQAvA1AQAcQAIAOACAZQACAVgEATQgGAlgQALQgKAHgQABIgFAAQgNAAgKgEg");
	this.shape_4.setTransform(226.9,229.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D56F79").s().p("ABrCoQgPgEgXgPIgkgXIhvhfIhlh3QgDgGACgXIADgWQAFgIAOgIIAWgLQAPgHBVARQBSARAJAIQAZAWArAyQAnAvAEAJQANAXACAxQABAZgBAUQgIAkgQALQgJAGgPACIgJABQgKAAgHgCg");
	this.shape_5.setTransform(226.7,229.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D46A74").s().p("AB+C9QgKgEgSgMIgagSIgwgbIhrhgIhsh4QgNgXACgXQACgNAGgJQAIgOAjgPQAhgNBeAWQAvAMAqAOQAgAeAqAwQAkApAEAIQANAbAHAqQAJA0gJAjQgJAigRAMQgJAHgNADQgIACgGAAQgGAAgFgCg");
	this.shape_6.setTransform(226.6,230.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D36570").s().p("ACQDTQgagChchKQhPhAgkgmIg6g2QgjgigRgcQgSgegEgOQgGgXAOgVQAJgPAjgOQA0gWBjAYQBSAVAUATQAmAjAkApQAgAkADAHQAQAnAIAoQAOBDgQAvQgKAjgQAMQgIAGgNADQgKACgIAAIgGgBg");
	this.shape_7.setTransform(226.6,230.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1606B").s().p("ACgDpQgGAAgegRQgdgQgMgJQgjgcg2gzIhYhQIhwhtQgigsgCgeQgDgqA5gYQBHgfBtAeQBRAXAUASQBOBJAQAWQARAVAVA3IAOBBQAKBKgRAsQgVA5grAAIgIgBg");
	this.shape_8.setTransform(226.6,231.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CF5A65").s().p("ACuD/QgQgDgTgKQgSgJgNgMQg4guhPhOIiFh/QglgfgPgOQgPgQgUglIgQghQgDgeAWgVQAMgLAagMQAxgVA1ACQAfACA1ANQBRAUAXANQAXAMA2A0QBkBgADCDQACBDgTAwQgMAdgSANQgJAGgMAEQgJADgHAAIgGAAg");
	this.shape_9.setTransform(226.5,231.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CE545F").s().p("ACpERQgVgFgVgSQg8g0hXhXQh8h5gVgUIgbgWQgSgOgIgJQgngpgSgjIgKgcQgDgsA+gdIA3gQQBAgNAzALQBzAaAdANQAcANA4A3QA0AyAPAeQASAkAZBrIAEA3QgBBBgYArQgPAbgSAMQgUAOgVAAQgJAAgJgDg");
	this.shape_10.setTransform(226.5,232.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#901722").s().p("AgBAHQABgSAEgHQgEAHgBASIgCAMg");
	this.shape_11.setTransform(337.2,146.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC4D59").s().p("AC2EoQgZgHgOgMQg5gzhWhWQhvhygdgaIgrglQgdgZgNgOQgpgrgPgUQgagjAAgYQgCgqA/geQBHgiBTAHQAxAEBfAbQA2APAYARQAXARBVBVIAUAiQAVAqANAtQAoCNg8B1QgRAggQAKQgOAKgUAAQgLAAgMgDg");
	this.shape_12.setTransform(226.6,233.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C94451").s().p("ACaEpQgugnhFhOQhNhYghggIh4huQhJhCgrgwQgKgLgHgRQgHgRAAgOQABgXAVgUQAhggBMgSQBGgPAtADQBIAECBAsQAIADA5AxQA4AxANAPQA1BBAVCCQAbCfhBBfIgMAMQgeAegUACIgGABQgbAAglghg");
	this.shape_13.setTransform(226.8,235);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C63946").s().p("ADVFmQgWgEgYgTQgvgng8hNQhIhfgagcQiEiAgSgPQhJg7grgvQgagagHgNQg5hXCBgwQAugSA+gIQA1gHAiADQCrAOBrBeQBbBQAkCAQAfBsgQBwQgPBngqArQgiAigiAAIgMgBg");
	this.shape_14.setTransform(227.1,236.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BE1E2D").s().p("ADmGNQgbgDgngkIhIhgQgLgSgYgfQgwhAhDhKQh5h4gbgVQhXhGgyg1IgigpQgihAA9grQAqgeBSgQQDBgmCTBDQCDA8BLCBQBFB4ABCLQABCNhEBlQgrA+grAAIgHgBg");
	this.shape_15.setTransform(228.3,239);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA1D2C").s().p("ADgG+IgegLQgygugzhdQhEh5gUgcQg7hSiIh0QiViBg2g/QhVhmCjg7QA6gWBOgLQBCgKAnADQC5AMB+BrQBwBeAvCVQArCIgZCKQgZCKhTBNQgqAnglAAIgDAAg");
	this.shape_16.setTransform(229.2,241.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B61D2B").s().p("ACcHjQgigkgVhDIglhwIgLgWIgMgUQgphNg2hFQgggog5g7QgmgphmhPQhehJgrgyQh0iJDUg9QBqgfCEgDQC8AMCNBqQCEBjA3CYQA4CXgoCZQgrCkiNB1QglAegeAEIgKABQgSAAgLgMg");
	this.shape_17.setTransform(231.2,245.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B31C2A").s().p("ABsIUQgTgVgBgWQgEg3gThJQgmiQhQh0QhFhkiOh/IiChtQgwgkgTgSQgggfgJgbQgghgDCg6QBLgWBWgJQBSgIAxAIQD7AoCRB/QCDByAXCmQAXCbhOCfQhOCgibBvQgiAZgdAJQgNADgKAAQgMAAgIgFg");
	this.shape_18.setTransform(233,247.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AF1C29").s().p("AAtI/QgRgLgDgqQgBgYADgbQADgggGgyIgGgmQgLhSgghKQgSgqgmg9QgxhNhShQQhThSiBhiQg7gtgXgVQgmglgHgdQgKgoA4gyQA9g2BogeQEThOFUCVQDmBlAoCzQAhCShfC7QhJCRiGCPQhvB2g2AZQghAPgSAAQgKAAgFgEg");
	this.shape_19.setTransform(235.2,249.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AB1B29").s().p("AgNJoQgNgCgLgRIAPiSQALhggVhXQgWhXg6hhQg8hjh6hsQhHg+hzhUQhIg0gbgkQgPgVgDgVQgGgmBAg2QBJg/B4ghQFNhcHIDEQCOA9ANCfQALCLhXC7QhRCtiECYQiGCYh8A7QglASgUAAIgHgBg");
	this.shape_20.setTransform(237.2,250.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#631017").s().p("Ah0Y5Qg/gkg1gkQgegVg9gvIg6gyQgfgeguguIgsgyIhYh1IhQiEIg7h+Ig/ipIgZhWQgGgTgGgYIgeiDIgwlOIgOjYIgDjEIAVmtQAPiVBKiIQBNiLCHh0QEIjjGghXQGUhVG7BDQgfgBgMAIQgOAJgiBIQg4B1heD+IgUA6QgOAlgJAVQguBkhjDBQhlDDgtBiQg/CJhpCTQhJBliDCbQilDEgtA4QhzCShHB8QgrBLgdBiQhCDiB4DeQBvDMDmCDg");
	this.shape_21.setTransform(92.6,160.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#671018").s().p("AgHZuIAJADIADACgAgHZuIgrgTIgMgFIAMAFIArATIAAAAgAiQYzIhLgoQg/gkg0gkQgfgVg9gvIg5gyQgggeguguIgsgyIhYh1IhPiEIg8h+Ig/ipIgZhWQgGgTgGgYIgeiDIgvlOIgOjYIgEjEIAVmtQAPiVBKiIQBNiLCHh0QEoj+HfhOQHVhMHpB0QgGgBgIACQgJACgEADQgIAGgRAfQgcAygtBoQgoBcgYAxQgYAyhpDOQi6FygmBHQglBHgnA4QifDjgpA2QgpA3hYBiQguA1jgDcQipCmhUB9IglA4QgrBCgiBoQhEDcCBDhQCFDpEsCKg");
	this.shape_22.setTransform(102.8,165);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6A1119").s().p("AgdZ3IhWgfIhwgxIhLgoQhAgkg0gkQgegVg9gvIg6gyQgggegtguIgsgyIhYh1IhQiEIg8h+Ig/ipIgZhWQgGgTgFgYIgeiDIgwlOIgOjYIgDjEIAVmtQAPiVBKiIQBNiLCHh0QFDkVIUhCQILhBIJChQgIgCgOAIQgKAHgMARQgMATgGAIQhpCQiBEgQiPE7hOB8QhZCNhsCkQh1CyjODGQh0BwjWC1Qi0CXhcCIQgyBKgbBSQhXEDCsDzQCpDuFcB9g");
	this.shape_23.setTransform(111.2,166.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6E111A").s().p("ABYaRIgCAAIACAAIARAEgABSaQIgFgBIgFgBIgKgDIghgJIgPgEIAPAEIAhAJIAKADIAFABIAJACgAhdZhIhWgfIhwgyIhMgnQg/gkg0gkQgegWg+gvIg5gxQgggegugvIgsgyIhXh0IhQiEIg8h/Ig/ipIgZhVQgGgTgGgZIgdiDIgwlNIgOjYIgDjEIAVmtQAOiWBLiHQBMiMCHh0QCriSDxhaQDphXESgbQI4g2IeDJQgOADgEAEQgZARi9FgQhvDRhnDFQgYAwgqBFQhVCKhdB1QiqDXhDBKQhgBniABjQkVDXheBPQh/BrhBBTQgpA1gWAkQgcAxgWBCQgsCCAjCKQAiCEBlB5QBmB5CZBaQCDBNCZAug");
	this.shape_24.setTransform(117.6,168.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#72121B").s().p("ACJacIgggGIAgAGIALACIgLgCgAAJaGIilguIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QC0ibEDhbQD6hZEmgUQElgUEqAzQEyA0ERB4QghANg2BZQgnBAiCD0Qh+DrgyBSQguBKiGC7IgkAzQi/EEivCcQiGB1m0E8QkbDNhDDhQg8DIBzC/QBpCuDfCBQDDBxDfAtg");
	this.shape_25.setTransform(123.9,169.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#76131C").s().p("ACqahIghgFIAhAFIAOABIgOgBgAAmaRIinglIhSgZIhVgfIhxgxIhLgoQg/gkg1gkQgegVg9gvIg6gyQgfgeguguIgsgyIhYh1IhQiEIg7h+Ig/ipIgZhWQgGgTgGgYIgeiDIgwlOIgOjYIgDjEIAVmtQAPiVBKiIQBNiLCHh0QC9ijEThdQEKhZE3gOQE3gNE4BAQFBBDEWCMQgaAPg7BcQhnCckCHCQg9BohWBwQgvA+hXBlQizDRlUD2QhcBEi7CGQilB3htBbQjVCzgbDNQgaC6CACxQB5CnDfB0QDOBqDnAig");
	this.shape_26.setTransform(129.4,169.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7A131D").s().p("ADvalIhWgDIimgTIioglIhTgZIhVgfIhxgyIhLgnQg/gkg0gkQgfgWg9gvIg5gxQgggegugvIgsgyIhYh0IhPiEIg8h/Ig/ipIgZhVQgGgTgGgZIgeiDIgvlNIgOjYIgEjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFEgIQFFgHFCBLQFNBPEZCdIAUAMQgfAZgcAlQgWAegvBMQkMG0heCLQiKDLiACCQi+DBl4D8IkrDKQioB2h3BkQjSCygNDNQgMC5CTCvQCLClDuBtQDxBuEEAPIArABg");
	this.shape_27.setTransform(134.6,170);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7D141E").s().p("ABnaiIingTIioglIhSgZIhVgfIhxgyIhLgnQg/gkg1gkQgegWg9gvIg6gxQgfgegugvIgsgyIhYh0IhQiEIg7h/Ig/ipIgZhVQgGgTgGgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFEgIQFFgHFCBLQFMBPEaCdQBFAoAzAiQhmByhzCgQgvBCiZDdQj9FxizC0QhzB0j0CxQkRDIjcBzQkICKhvB6QiYCkAVC/QAUCvCfChQCaCcDvBfQDzBhEGADIhOACIhVgDgAEOajIgEAAIAEAAIAJAAIgEAAIgFAAgAEZajIAHAAIgHAAgAEXajIACAAg");
	this.shape_28.setTransform(139.7,170);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#81141F").s().p("AA4aiIingTIioglIhSgZIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQBzBBBkBKQAHAQhoCXQhwCjiaC9QmkIHkoDCQsxIViLBdQiLBdgQAUQiJCtAyDBQAvCxC8CZQC4CVEABMQEHBOD/gaIgwAGIhXAGIhTABIhVgDg");
	this.shape_29.setTransform(144.4,170);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#851520").s().p("AAIaiIimgTIioglIhTgZIhVgfIhxgyIhLgnQg/gkg0gkQgfgWg9gvIg5gxQgggegugvIgsgyIhYh0IhPiEIg8h/Ig/ipIgZhVQgGgTgGgZIgeiDIgvlNIgOjYIgEjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFFgIQFEgHFCBLQFNBPEZCdQCqBgCGBzQARAYgjATQgzAbgFAGQglAwg8BXQhEBigdAmQigDYiPCcQkGEdkSCvQicBklQDBQlIC8ilBrQg4AkgkAeQhBA2gnA8Qh4C0BPC9QBHCqDVCOQDKCGEEBBQD5A+DVgZIAPgCIAKgCIgKACIgPACIhlAOIhXAGIhSABIhWgDg");
	this.shape_30.setTransform(149.1,170);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#891620").s().p("AgiaiIingTIioglIhTgZIhVgfIhxgyIhLgnQg/gkg0gkQgfgWg9gvIg5gxQgggegugvIgsgyIhYh0IhPiEIg8h/Ig/ipIgZhVQgGgTgGgZIgeiDIgvlNIgOjYIgEjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFFgIQFEgHFCBLQFNBPEZCdQDoCDCjCkQADAEgGAIQhGBdh2CHIjCDeQhfByhCBEQhtBxiKBuQiDBqi4BzQhbA4hEAmIgsAYQhPAth3BWQiWBtgsAdQhRA2irBKQivBMhOAxQgdASggAcQg4AvgjAzQh9C1BXC9QBOCqDjCMQDXCFEOA7QEPA7DdgpIgaAGQgeAGg+AKIhPAKIhXAGIhSABIhVgDg");
	this.shape_31.setTransform(153.4,170);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8D1621").s().p("AhOaiIingTIioglIhTgZIhVgfIhxgyIhLgnQg/gkg0gkQgfgWg9gvIg5gxQgggegugvIgsgyIhYh0IhPiEIg8h/Ig/ipIgZhVQgGgTgGgZIgeiDIgvlNIgOjYIgEjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFFgIQFEgHFCBLQFNBPEZCdQErCoC4DgQACACgBAFQgBAEgCADIsrMYQguAhgmAYQgVAOhCAlIm1D0Qg4AhhCAtQiCBZg0A+QgjApgjAgQg8A2gpAIQi8Ajh5A3QixBRhJCEQhZCgBaCzQBQCjC3BrIBxAzQCJA6CLApQGsB/EYhMIg+ASIhKASQgeAGg+AKIhPAKIhXAGIhSABIhVgDg");
	this.shape_32.setTransform(157.8,170);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#901722").s().p("Ah7aiIingTIioglIhTgZIhVgfIhxgyIhLgnQg/gkg0gkQgfgWg9gvIg5gxQgggegugvIgsgyIhYh0IhPiEIg8h/Ig/ipIgZhVQgGgTgGgZIgeiDIgvlNIgOjYIgEjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFFgIQFEgHFCBLQFNBPEZCdQDABsCSCFQCPCBBbCSIABAIQABAFgCACQgDADgGgBIgKABQgtALgoAkQgpAkjGDOQjzD8i1B2Qh6BRkkCHQkTCBiGBfIg9AxQhBA1gSAWQgoAzAFAlQADAbAdAWQBHA4ChA7QClA9BFAzQEkDZg0EEQgRBVgzBLQgqA8gTADQgiAfgkAZQg/AqhxA3IggAPQgUAKAAAMQgCAhBkADQBtADCMgwIgiANIhkAeIhKASQgeAGg+AKIhPAKIhXAGIhRABIhWgDgAlDIeQk8AHi4CeQhaBNghBjQgfBfAaBmQA4DXEHCTQEGCTE8gHQE6gIC4idQBbhOAghiQAghggbhlQg4jYkGiTQj6iMkpAAIgeABg");
	this.shape_33.setTransform(162.3,170);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#941723").s().p("AjEaiIingTIioglIhTgZIhVgfIhxgyIhLgnQg/gkg0gkQgfgWg9gvIg5gxQgggegugvIgsgyIhYh0IhPiEIg8h/Ig/ipIgZhVQgGgTgGgZIgeiDIgvlNIgOjYIgEjEIAVmtQAPiWBKiHQBNiMCHh0QDFioEgheQEXhaFFgIQFEgHFCBLQFNBPEZCdQE1CtC6DqQC0DiAkD0IAFAjQANB9gdB4IgpCVQgQA/gVBGIgYBMIgEALIAEgLIAYhMQAVhGAQg/QBSlCgpidQgVhRgzgbQgpgWgwARQhwAoh3B8IhhBpQg6A9gtAlQgWASgvAdQgwAdgWARQgUARgrAcQhFAuhGAiQpjEmhpA0QhoA1gRATQg4A7ACAqQABAXAYAbQA5A8B0A0QCUBCAlAZQFMDbgcEeQgJBhgyBTQgqBGgcAFQgTAUgmAQIhBAbQhMAkAABIQAAAJARAHQAWAJAkgBQBhgBCXhCIhDAfIhBAZIhkAeIhKASQgeAGg+AKIhPAKIhWAGIhSABIhWgDgAmMIeQk8AHi4CeQhaBNghBjQgfBfAaBmQA4DXEHCTQEGCTE8gHQE6gIC4idQBbhOAghiQAghggbhlQg4jYkGiTQj5iMkqAAIgeABg");
	this.shape_34.setTransform(169.6,170);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#981824").s().p("AjEaiIiogTIioglIhSgZIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQGSDhC8E+QC2E1hHExIhUEuIhGDDQBCjFAcitQAwkkhQgxQgEgDhBAGQhCAGgJAEQh2AyjhCfQjXCYiEAxQoXDGhhAoQhhAoguApQg5AxgNATQgTAdATAdQATAdBHAzQAvAiCaBjQGGD8gbEvQgJBjg1BYQgqBGgXAFQhhBlgPATQgQASAEAKQADAIAaADQAgAEAtgJQCBgaCrhuIABgBIhPAyIg2AdQgyAZhBAcIhBAZIhkAeIhJASQgeAGg+AKIhPAKIhWAGIhTABIhVgDgAmNIeQk7AHi4CeQhaBNghBjQggBfAbBmQA3DXEHCTQEHCTE7gHQE7gIC4idQBahOAhhiQAfhggahlQg4jYkHiTQj4iMkqAAIgfABgAXIF4QAXg7ATg6QgTA6gXA7IgQAvIgdBEIgGAOQAchBAXhAg");
	this.shape_35.setTransform(169.7,170);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9C1925").s().p("AjEaiIiogTIioglIhSgZIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQGSDhC8E+QC2E1hHExIhUEuIhODmIgyCBIgdBEIgkBPIgLAbIgRAlIARglIALgbQBIioAtiwQAuivgBh5QAAh7gugfIiQgEQhlAgi0BYQi6BcheAeQg8ATkEA6QjFAshzA9QjZB2gNBHQgHAkAmAnQAfAiBQAwQIDE3gUFLQgGBog8BdQgsBEgSAGQg7BQgHAPQgIAPANAJIAcADQAmgBAugNQCEgmCih+IgbAVQgqAfgaARIhHAtIg2AdQgyAZhBAcIhBAZIhkAeIhJASQgeAGg+AKIhPAKIhWAGIhTABIhVgDgAmNIeQk7AHi4CeQhaBNghBjQggBfAbBmQA3DXEHCTQEHCTE7gHQE7gIC4idQBahOAhhiQAfhggahlQg4jYkHiTQj4iMkqAAIgfABgAMyVqIAQgNIgQANIgQANg");
	this.shape_36.setTransform(169.7,170);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A01926").s().p("AjEaiIiogTIioglIhSgZIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQGSDhC8E+QC2E1hHExIhUEuIiAFnIgdBEIigFHIhEBzIgZAnIg8BRIgNASQgnA2gqAxIgTAXIgkAoIgLAMIALgMIAkgoIATgXQAqgxAng2IANgSIANgSQCQjQBfjqQBajfAQipQAQivhGgxQgmgco4B0Io3B8QiPA1hIA9Qh1BlCDBVQI2FvgIFTQgCBrg8BbQgeAtggAaQgUAlgEAMQgGAQAFAJIANAFQASAEAbgEQBXgPCRhfIAlgaQBahFBUhZIgiAmIgvAtIhqBYQgqAfgaARIhHAtIg2AdQgyAZhBAcIhBAZIhkAeIhJASQgeAGg+AKIhPAKIhWAGIhTABIhVgDgAmNIeQk7AHi4CeQhaBNghBjQggBfAbBmQA3DXEHCTQEHCTE7gHQE7gIC4idQBahOAhhiQAfhggahlQg4jYkHiTQj4iMkqAAIgfABg");
	this.shape_37.setTransform(169.7,170);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A31A27").s().p("AjEaiIiogTIioglIhSgZIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQGSDhC8E+QC2E1hHExIhUEuIiAFnIgdBEIigFHIhEBzIgZAnIhNBmIgZAiIgnAyIAngyIAZgiQBIhlA/h3QBXiiAtiYQAsiTgKhXQgIhOgQgdQgZguhGgUQiXgsooAwQhbAIhzAdQiEAihZAuQhqA2gTA9QgXBHBnBJQDBCJBPBHQCDB2AxByQA7CHgIBvQACA3gqBuQgnBngNAEIgCANQgBAJACAEQALAcBEgXQAjgMA8geIAigUQCqhsCNiuIgwA+IhBBDIgvAtIhqBYQgqAfgaARIhHAtIg2AdQgyAZhBAcIhBAZIhkAeIhJASQgeAGg+AKIhPAKIhWAGIhTABIhVgDgAmNIeQk7AHi4CeQhaBNghBjQggBfAbBmQA3DXEHCTQEHCTE7gHQE7gIC4idQBahOAhhiQAfhggahlQg4jYkHiTQj4iMkqAAIgfABg");
	this.shape_38.setTransform(169.7,170);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A71A28").s().p("AjEaiIiogTIioglIhSgZIhWgfIhwgyIhLgnQhAgkg0gkQgegWg9gvIg6gxQgggegtgvIgsgyIhYh0IhQiEIg8h/Ig/ipIgZhVQgGgTgFgZIgeiDIgwlNIgOjYIgDjEIAVmtQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQGSDhC8E+QC2E1hHExIhUEuIiAFnIgdBEIigFHIhEBzIgZAnIgYAkIilDUIhBBDIgvAtIhqBYQgqAfgaARIhHAtIg2AdQgyAZhBAcIhBAZIhkAeIhJASQgeAGg+AKIhPAKIhWAGIhTABIhVgDgAmNIeQk7AHi4CeQhaBNghBjQggBfAbBmQA3DXEHCTQEHCTE7gHQE7gIC4idQBahOAhhiQAfhggahlQg4jYkHiTQj4iMkqAAIgfABgAA9FoQgGAMgCAQQgBARAEAMQAdBLA9A9QAtAtBSA2QB2BPAQALQBJA3ApA5QBtCZAFCgQADBXghBmQgIAagIAjQgLArAEAGQACADAFACIAJADQARAAAWgEIABgBQA6gVAzggQCahiCSi7QCOi0BQjCQBVjLgRiLQgTibiRgjQj4gokEgDIgbAAQnsAAhVCyg");
	this.shape_39.setTransform(169.7,170);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A71A28").s().p("AjDaiQhpgEiCgcQiUgfh4gxQiTg8hxhIQhcg7hkhYQh9hthmihQiUjnhKkqQhTlNgKmWQgIkbAbkcQAPiVBKiIQBNiLCHh0QDFipEghdQEXhaFFgIQFEgIFCBMQFNBOEZCeQGTDiC6E+QC2E5hLE8QguC/hFDKQhqE5iED+QiBD4iXC1QhUBjhtBhIggAbQkJDWlTBDQiRAcisAAQgrAAgugCgAmLIeQk8AIi4CdQhaBOghBiQgfBfAaBmQA4DYEHCTQEGCTE8gIQE6gHC4ieQBbhNAghjQAghfgbhmQg4jXkGiTQj5iMkqAAIgeAAg");
	this.shape_40.setTransform(169.5,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0.1,-0.1,339.2,340.2), null);


(lib.eye_pink_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBHIgDgDQgYgeAAgmQAAggATgZIALgPIAGgFQAIgHAIgFIAHgEQATgIAXgBIAEAAQApABAeAdQAdAgAAAoQAAArgdAfQgfAdgrAAQglAAgmggg");
	this.shape.setTransform(-0.7,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#802E39").s().p("AkUBRQhzhXAAh+QAAgRAEgSID4AAIAEAAICEAAQgXABgTAIIgGAEQgJAFgHAHIgHAFIgKAPQgUAZAAAhQAAAmAYAdIADADQAmAgAmAAQAqAAAfgdQAegeAAgrQAAgpgeggQgegdgpgBIGFAAIACAjQAAB+hyBXQhzBXiiAAQiiAAhzhXg");
	this.shape_1.setTransform(-0.5,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6D6E").s().p("AmBBvQieh5AAiuQAAgYADgZICYAAQgFASAAARQAAB+BzBXQBzBXCjABQCigBBzhXQBxhXAAh+IgCgjICXAAQAFAZAAAYQAACuifB5QihB7jgAAQjhAAigh7g");
	this.shape_2.setTransform(-0.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_pink_big, new cjs.Rectangle(-54.8,0,108.8,46.8), null);


(lib.eye_blue_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAnQgGgDgEgFIgBAAQgNgNAAgSQAAgRANgMQANgNAQAAIAHABQAOABAKALQAMAMAAARQAAASgMANQgNAMgSAAQgJAAgJgEg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_blue_big, new cjs.Rectangle(0,0,8.7,8.6), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.screen_bw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFB1QgEAAgDgCQgCgEAAgDIAAh6QAAhGhGgBIhLAAQgFAAgCgCQgDgDAAgEIAAgNQAAgEADgDQACgCAFAAIBNAAQBoAAAABkIAAB8QAAADgCAEQgDACgEAAgAhVB1QgFAAgCgCQgDgEAAgDIAAiJQAAgEADgDQACgCAFAAIAQAAQAFAAACACQADADAAAEIAACJQAAADgDAEQgCACgFAAg");
	this.shape.setTransform(118.5,-113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNB1QgEAAgDgCQgCgEAAgDIAAgOQAAgEACgCQADgDAEAAIBOAAIAAhjQAAgfgQgTQgPgUgYAAIgqAAIggC/QgBAEgDADQgDADgEAAIgRAAQgEAAgCgDQgDgDABgEIAhi/IgVAAQgEAAgDgDQgDgCAAgEIAAgOQAAgEADgDQADgCAEAAIBmAAQAZAAAUAMQAUAMALAWQALAXAAAfIAAB8QAAADgCAEQgDACgEAAg");
	this.shape_1.setTransform(92.6,-113);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABTB1QgEAAgDgCQgDgEAAgDIAAh6QAAhGhGgBIgdAAQgEAYgCASQgBARAAAXIAABvQAAADgCAEQgCACgFAAIg5gBQgEAAgCgCQgDgDAAgEIAAgNQAAgEADgCQACgDAEAAIAfAAIAAhWIABgsQACgSAFgWIgVAAQgFAAgCgCQgDgDAAgEIAAgNQAAgEADgDQACgCAFAAIBWAAQBoAAAABkIAAB8QAAADgCAEQgDACgEAAg");
	this.shape_2.setTransform(66.4,-113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHCOQgFAAgCgCQgDgDAAgEIAAkJQAAgFADgCQACgDAFAAIAQAAQAEAAACADQADACAAAFIAAEJQAAAEgDADQgCADgEgBg");
	this.shape_3.setTransform(48.3,-110.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiCSQgCgCAAgEIAAgTQAAgCADgEQACgDAEgBIAQgHQAbgKAPgUQAQgUAAgnQAAgagHgRQgGgQgPgGQgPgIgaAAIgMAAIgCAAIglAAQgEAAgDgCQgDgDAAgEIAAhGQAAgEADgDQADgCAEgBIAQAAQAEABADACQACADAAAEIAAAvIAYAAIAIAAQAkAAAWALQAWAKAKAYQAKAXAAAmQAAA1gaAdQgaAegoANIgSAGIgDABQgCAAgDgCg");
	this.shape_4.setTransform(22.7,-115.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABTB1QgEAAgDgCQgDgEAAgDIAAh6QAAhGhGgBIgdAAQgEAYgCASQgBARAAAXIAABvQAAADgCAEQgCACgFAAIg5gBQgEAAgCgCQgDgDAAgEIAAgNQAAgEADgCQACgDAEAAIAfAAIAAhWIABgsQACgSAFgWIgVAAQgFAAgCgCQgDgDAAgEIAAgNQAAgEADgDQACgCAFAAIBWAAQBoAAAABkIAAB8QAAADgCAEQgDACgEAAg");
	this.shape_5.setTransform(-2,-113);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIB1QgEAAgDgCQgCgEAAgDIAAjXQAAgEACgDQADgCAEAAIARAAQAEAAADACQADADAAAEIAADXQAAADgDAEQgDACgEAAg");
	this.shape_6.setTransform(-20.1,-113);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6B1QgEAAgDgCQgCgEgBgDIAAh6QAAhGhFgBIg1AAQgEAAgDgCQgDgDAAgEIAAgNQAAgEADgDQADgCAEAAIA4AAQBmAAAABkIAAB8QABADgDAEQgDACgEAAg");
	this.shape_7.setTransform(-36.6,-113);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGB2IgeAAQgaAAgVgMQgWgMgMgXQgNgWAAgdIAAiAQAAgEADgDQADgCAEAAIAQAAQAFAAACACQACADAAAEIACBzQAlgCAPgRQAPgRAAgcIAAgzQAAgEACgDQADgCAEAAIAOAAQAFAAACACQADADAAAEIAAA1QAAAngYAZQgZAZgwADQAGAXASANQASANAZAAIAMAAQAnABAVgXQAXgXAAgmIAAhvQAAgEACgDQADgCAEAAIAQAAQAEAAADACQACADAAAEIAABxQAAAigOAbQgOAagaANQgYANggAAIgCAAg");
	this.shape_8.setTransform(-71.7,-112.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiCSQgCgCAAgEIAAgTQAAgCADgEQACgDAEgBIAQgHQAbgKAPgUQAQgUAAgnQAAgagHgRQgGgQgPgGQgPgIgaAAIgMAAIgCAAIglAAQgEAAgDgCQgDgDAAgEIAAhGQAAgEADgDQADgCAEgBIAQAAQAEABADACQACADAAAEIAAAvIAYAAIAIAAQAkAAAWALQAWAKAKAYQAKAXAAAmQAAA1gaAdQgaAegoANIgSAGIgDABQgCAAgDgCg");
	this.shape_9.setTransform(-96.9,-115.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA9COQgEAAgCgCQgDgDAAgEIAAisQAAhHhFAAIg8AAQgEAAgDgCQgDgDAAgEIAAgNQAAgFADgCQADgDAEAAIA+AAQA0AAAaAZQAZAYAAA0IAACuQAAAEgDADQgCACgEAAg");
	this.shape_10.setTransform(-119.6,-110.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("A0iRWQiYAAAAiYIAA96QAAiZCYAAMApFAAAQCYAAAACZIAAd6QAACYiYAAg");
	this.shape_11.setTransform(-0.1,-115.5,1.032,0.942);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("A0iRWQiYAAAAiYIAA96QAAiZCYAAMApFAAAQCYAAAACZIAAd6QAACYiYAAg");
	this.shape_12.setTransform(-0.1,-115.5,1.032,1.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_bw, new cjs.Rectangle(-151.4,-231,302.7,231), null);


(lib.buble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjuDWQgRgZgVggQgphBgQgpQg4iLAph1QA2iaDYgfQBCgKA4AAQCWAABNBFQA4AxAYBhQA3DaiUB+QhKA+hVATQgzALhNAFIhEAEIicCNgAhMl3QiwAag/BtQgqBIAKBiQAFA9AXA3QAYA+BGBhIADAEIgNCbICEh3IAFAAQBzgDBPgRQAlgIAsgXQBYgtAthIQBBhpgniaQgXhdg1guQhIhAiQAAQgyAAhGAKg");
	this.shape.setTransform(58.5,52.1,1.6,1.3,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AgpgFIADAAIAdACIBEACQhAAGg1ABg");
	this.shape_1.setTransform(64,84.1,1.6,1.3,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AhkDZIgCgCQhGhigZg/QgWg4gGg+QgKhlArhKQBBhwCzgaQBFgKA1AAQAdAAAZADQgugDgqACQi1AJhMBpQgyBFAABmQAAA9AQA7QAMApAiBDIAhA9IABACIgfCpIBghGIhtBig");
	this.shape_2.setTransform(79.2,51.4,1.6,1.3,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjmDZIgBgCQhGhigZg/QgXg4gGg+QgKhlArhKQBBhwC0gaQBGgKAzAAQCTAABMBEQA1AwAYBdQAnCdhDBrQguBKhaAvQgtAXglAIQhQAQhzAEIgDAAIiQCCg");
	this.shape_3.setTransform(58.5,51.4,1.6,1.3,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buble, new cjs.Rectangle(0,0,117.1,104.3), null);


(lib.board_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#637A7F").ss(3.2).p("EAkNgV7QAAish5h4Qh5h6irAAQisAAh5B6Qh5B4AACsQAACrB5B5QB5B5CsAAQCrAAB5h5QB5h5AAirgAVd17QAAish5h4Qh5h6isAAQhYAAhKAgIgjAQQgzAdgsAtQgqApgcAxIgoBmIgIAyQgDAYAAAaQAACrB5B5QB5B5CrAAQCsAAB5h5QB5h5AAirgAVdnTQAAirh5h5Qh5h5isAAQirAAh5B5Qh5B5AACrQAACrB5B6QAyAyA7AdQBTAqBkAAQBlAABTgqQA7gdAygyQB5h6AAirgEAkNgHTQAAirh5h5QgKgKgKgJQhehUh7gPQgbgDgcAAQisAAh5B5Qh5B5AACrQAACrB5B6QAyAyA7AdQBTAqBlAAQBkAABTgqQA7gdAygyQB5h6AAirgEAkNAHUQAAirh5h5Qh5h5irAAQisAAh5B5Qh5B5AACrQAACsB5B4QB5B6CsAAQCrAAB5h6QB5h4AAisgAVdHUQAAirh5h5Qh5h5isAAQirAAh5B5Qh5B5AACrQAACsB5B4QB5B6CrAAQCsAAB5h6QB5h4AAisgAVdV9QAAiOhShqQgSgYgVgVQh5h6isAAQirAAh5B6QgWAVgRAYQhSBqAACOQAACrB5B5QB5B5CrAAQCsAAB5h5QB5h5AAirgEAkNAV9QAAiOhShqQgRgYgWgVQh5h6irAAQisAAh5B6QgVAVgSAYQhSBqAACOQAACrB5B5QB5B5CsAAQCrAAB5h5QB5h5AAirgAGe17QAAish5h4Qh5h6isAAQiqAAh5B6Qh5B4AACsQAACrB5B5QB5B5CqAAQCsAAB5h5QB5h5AAirgAoY17QAAhDgSg7IgOglIgYgvIgdgqQgRgVgTgTQgPgPgPgNIgfgYQg3gngvgLQg9gUhFAAQirAAh5B6QgvAugdA3QgtBWAABpQAABTAcBHQAeBMA/A+QB5B5CrAAQCsAAB5h5QB5h5AAirgAoYnTQAAirh5h5Qh5h5isAAQirAAh5B5Qh5B5AACrQAACrB5B6QAyAyA7AdQBTAqBkAAQBlAABTgqQA7gdAygyQB5h6AAirgAGenTQAAirh5h5Qh5h5isAAQiqAAh5B5Qh5B5AACrQAACrB5B6QAyAyA7AdQBTAqBjAAQBlAABTgqQA7gdAygyQB5h6AAirgA3R17QAAgvgJgsIgUhAQgKgYgNgXQgbgxgqgpQglglgpgaIgtgYQhNgjhdAAQirAAh5B6Qh5B4AACsQAACrB5B5QB5B5CrAAQCsAAB5h5QA+g+AehMQAIgUAGgVQABgCABgDQANg0AAg4gA9s8WQgBAAgBAAA3PnTQAAirh5h5Qh5h5irAAQisAAh5B5Qh5B5AACrQAACrB5B6QAyAyA7AdQBTAqBlAAQBkAABTgqQA7gdAygyQB5h6AAirgAoYHUQAAirh5h5Qh5h5isAAQirAAh5B5Qh5B5AACrQAACsB5B4QB5B6CrAAQCsAAB5h6QB5h4AAisgA3PHUQAAirh5h5Qh5h5irAAQisAAh5B5Qh5B5AACrQAACsB5B4QB5B6CsAAQCrAAB5h6QB5h4AAisgA3PV9QAAiOhShqQgRgYgWgVQh5h6irAAQisAAh5B6QgVAVgSAYQhSBqAACOQAACrB5B5QB5B5CsAAQCrAAB5h5QB5h5AAirgAoYV9QAAiOhShqQgSgYgVgVQh5h6isAAQirAAh5B6QgWAVgRAYQhSBqAACOQAACrB5B5QB5B5CrAAQCsAAB5h5QB5h5AAirgAGeHUQAAirh5h5Qh5h5isAAQiqAAh5B5Qh5B5AACrQAACsB5B4QB5B6CqAAQCsAAB5h6QB5h4AAisgAGeV9QAAiOhShqQgSgYgVgVQh5h6isAAQiqAAh5B6QgWAVgRAYQhSBqAACOQAACrB5B5QB5B5CqAAQCsAAB5h5QB5h5AAirg");
	this.shape.setTransform(251,206.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182A33").s().p("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");
	this.shape_1.setTransform(251.3,190.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.board_0, new cjs.Rectangle(-14.7,-44.4,532,470), null);


(lib.board_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C9").s().p("EgksAhQQiiAAAAiiMAAAg9bQAAiiCiAAMBJZAAAQCiAAAACiMAAAA9bQAACiiiAAg");
	this.shape.setTransform(251.1,212.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.board_1, new cjs.Rectangle(0,0,502.2,425.7), null);


(lib.screen_big_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#3E5563").ss(6).dr(-23.6,-23.6,47.2,47.2);
	this.shape.setTransform(23.6,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s("#3E5563").ss(6).dr(-404.15,-268.55,808.3,537.1);
	this.shape_1.setTransform(404.1,268.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_big_1, new cjs.Rectangle(-3,-3,814.3,543.1), null);


(lib.screen_big_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s("#3E5563").ss(6).dr(-404.15,-268.55,808.3,537.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_big_0, new cjs.Rectangle(-407.1,-271.5,814.3,543.1), null);


(lib.base_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#667D83").s().p("EggAADEIAAjxQAAiWCYAAMA7RAAAQCYAAAACWIAADwMhABAAAIAAABg");
	this.shape.setTransform(0,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.base_2, new cjs.Rectangle(-204.9,0,409.9,39.2), null);


(lib.base_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE4F96").s().p("AthDDQgDgNAAgOIAAj1QAAh4CmAAIV9AAQCmAAAAB4IAAD1QAAAQgDAOI7DgDg");
	this.shape.setTransform(0,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.base_1, new cjs.Rectangle(-86.9,0,173.8,39.6), null);


(lib.base_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B7B91").s().p("AthDDQgDgNAAgOIAAj1QAAh4CmAAIV9AAQCmAAAAB4IAAD1QAAAQgDAOI7DgDg");
	this.shape.setTransform(0,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.base_0, new cjs.Rectangle(-86.9,0,173.8,39.6), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.OCCNFD0();
	this.instance.parent = this;
	this.instance.setTransform(640,0,0.32,0.32);

	this.instance_1 = new lib.OCCNFD0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,1280,640), null);


(lib.gameSubjComb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.subjComb = new lib.an_ComboBox({'id': 'subjComb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר, 0, משפחות הטורפים, 1, משטרים מדיניים, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.subjComb.setTransform(49.8,10.8,2.06,1.643,0,0,0,49.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.subjComb).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameSubjComb, new cjs.Rectangle(-53.8,-7.8,208.1,37.8), null);


(lib.nameText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.nameTb = new lib.an_TextInput({'id': 'nameTb', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.nameTb.setTransform(-0.4,-0.4,2.039,1.917,0,0,0,49.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.nameTb).wait(1));

}).prototype = getMCSymbolPrototype(lib.nameText, new cjs.Rectangle(-102.9,-22,206,44.1), null);


(lib.M_monster_pink_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.eye_pink_big();
	this.instance.parent = this;
	this.instance.setTransform(-173.4,-45.3,0.842,0.842,0,0,0,-0.5,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.4,x:-172.3},0).wait(1).to({x:-171.3},0).wait(1).to({x:-170.2},0).wait(1).to({x:-169.2},0).wait(1).to({x:-168.2},0).wait(1).to({x:-167.2},0).wait(1).to({x:-166.2},0).wait(1).to({x:-165.2},0).wait(1).to({x:-164.1},0).wait(1).to({x:-163.1},0).wait(1).to({x:-162.1},0).wait(1).to({x:-161.1},0).wait(1).to({x:-160.1},0).wait(1).to({x:-159.1},0).wait(1).to({x:-158},0).wait(1).to({x:-157},0).wait(1).to({x:-156},0).wait(1).to({x:-155},0).wait(1).to({x:-154},0).wait(1).to({x:-153},0).wait(1).to({x:-151.9},0).wait(1).to({x:-150.9},0).wait(1).to({x:-149.9},0).wait(1).to({x:-150.9},0).wait(1).to({x:-151.9},0).wait(1).to({x:-152.9},0).wait(1).to({x:-153.9},0).wait(1).to({x:-154.9},0).wait(1).to({x:-155.9},0).wait(1).to({x:-156.9},0).wait(1).to({x:-157.9},0).wait(1).to({x:-158.9},0).wait(1).to({x:-159.9},0).wait(1).to({x:-160.9},0).wait(1).to({x:-161.9},0).wait(1).to({x:-162.9},0).wait(1).to({x:-163.9},0).wait(1).to({x:-164.9},0).wait(1).to({x:-165.9},0).wait(1).to({x:-166.9},0).wait(1).to({x:-167.9},0).wait(1).to({x:-168.9},0).wait(1).to({x:-169.9},0).wait(1).to({x:-170.9},0).wait(1).to({x:-171.9},0).wait(1).to({x:-172.9},0).wait(1).to({x:-173.9},0).wait(1).to({x:-175},0).wait(1).to({x:-176},0).wait(1).to({x:-177},0).wait(1).to({x:-178},0).wait(1).to({x:-179},0).wait(1).to({x:-180},0).wait(1).to({x:-181},0).wait(1).to({x:-182},0).wait(1).to({x:-183},0).wait(1).to({x:-184},0).wait(1).to({x:-185},0).wait(1).to({x:-186},0).wait(1).to({x:-187},0).wait(1).to({x:-188},0).wait(1).to({x:-189},0).wait(1).to({x:-190},0).wait(1).to({x:-191},0).wait(1).to({x:-192},0).wait(1).to({x:-193},0).wait(1).to({x:-194},0).wait(1).to({x:-195},0).wait(1).to({x:-196},0).wait(1).to({x:-197},0).wait(1).to({x:-198},0).wait(1).to({x:-197},0).wait(1).to({x:-195.9},0).wait(1).to({x:-194.9},0).wait(1).to({x:-193.9},0).wait(1).to({x:-192.9},0).wait(1).to({x:-191.8},0).wait(1).to({x:-190.8},0).wait(1).to({x:-189.8},0).wait(1).to({x:-188.7},0).wait(1).to({x:-187.7},0).wait(1).to({x:-186.7},0).wait(1).to({x:-185.6},0).wait(1).to({x:-184.6},0).wait(1).to({x:-183.6},0).wait(1).to({x:-182.6},0).wait(1).to({x:-181.5},0).wait(1).to({x:-180.5},0).wait(1).to({x:-179.5},0).wait(1).to({x:-178.4},0).wait(1).to({x:-177.4},0).wait(1).to({x:-176.4},0).wait(1).to({x:-175.4},0).wait(1).to({x:-174.3},0).wait(1).to({x:-173.3},0).wait(1));

	// monster
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD683A").s().p("Ag5EqIAApCQBHgGBFgLIAAE+QCDBND1DIgAnKEqIAApCQA7AEA8ADIAAI7g");
	this.shape.setTransform(-147.7,244.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD8139").s().p("AFVErIAAo8QA7gCA6gFIAAJDgAnKErICKhuQCeh3BRgwIAAlAQBFALBFAHIAAJDg");
	this.shape_1.setTransform(-199.3,244.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6D6E").s().p("AzHEZIguEVIgmlKIDPh3IADiwIABiXIACmCQAYAFAcABIgaLNIAYDAIgbBAIgZheIg1FEgATLD9IAiiRIgIhxIgnpUQAXADAaAAIARAAIAYLNIgYDAIAcA/IAAABIgcBkg");
	this.shape_2.setTransform(-185.2,184.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AuSDPIgLgZIh+FpIgHAWIidoAIgGgTMAmLAAHIhSEVIgDAKIiti4IgNgOIkBIoIgJAQIi9n0IgIgUIjtGgIgHALIjjmDIgKgSIigFaIgHAMIi1lVIgKgRIk3I/IgIAPgAoLlaQjNidAAjeQAAgVAEgrIVqAAQAEAgAAAgQAADejNCdQjLCekgAAQkiAAjLieg");
	this.shape_3.setTransform(-170.3,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE4F96").s().p("Ah9enQg8gDg7gEQhGgIhGgKQi2gdisg8Qj3hUjBiIIALinQA3AZA4AWQEnBxE9AAQF0AAFTieQFKiWD7kTQD+kRCLllQCQlwAAmTQAAkuhQkYQhujeiCiwIAKANQGbIuCiORQCWNWouIBQghAdgiAdIgFoZQAegGAZgLQAygWAAghIAAgJQhXAdhigBQhRABhMgUQAAAhAyAWQAfAOApAGIAnJUQjCCJj1BTQitA8i3AdQhFALhIAHQg6AEg7ADIhSABIhSgBgA0vXhQj2jjhqknQAqBrA6BjQCWCCCrBdIgBCXQgjgdghgdgAy0QIQgbgBgYgFQgegGgZgLQgxgWAAghIAAgJQBWAdBjgBQBQABBMgUQAAAhgyAWQgfAOgmAGQgZADgaAAIgQAAgAya0cIgTAaIgoA7QAcgsAfgpgAwp2wIAEgDIgQASIAMgPgAIZ8iQheg1heglQCMAyCFBXQBRA2BMBEQh0hih+hHgArF7zQDKiGDcguQgoAKgpANQjUA/i8CJQAdgWAegVg");
	this.shape_4.setTransform(-169.1,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5517C").s().p("AFXV5QgvgagPgzQgOgyAZgvQAZguAygQQAzgPAwAZQAuAZAPAyQAQA0gZAvQgaAugyAQQgUAFgTAAQgfAAgdgPgACVTnQgUgMgGgWQgGgVAJgTQAMgUAWgHQAVgGATAJQAUAMAHAVQAGAVgJAUQgLAUgVAHQgJACgIAAQgNAAgNgFgAGSREQgcgQgKggQgIgdAPgcQAQgdAegJQAfgJAbAPQAdAPAIAfQALAfgQAbQgPAdgfAIQgNAFgMAAQgRAAgRgJgA02OQQgwgYgQgzQgQgzAZgvQAYgvAzgRQA0gRAuAaQAwAYAPAzQAQA0gYAuQgYAwgzAQQgTAFgTAAQgfAAgdgOgAwVOAQgdgNgKggQgIgeAOgbQAQgdAcgJQAggLAcAOQAbAQAKAeQAKAfgOAbQgPAdgeAKQgMAEgLAAQgTAAgRgKgAoJMhIE3o/IAKARIk4JCgANDLDIEBonIANAOIkGIugAGIJsIDtmhIAIAVIjsGdgAzGJpQgUgMgHgWQgGgUAJgUQALgVAVgGQAWgHAVALQAVAKAFAWQAGAWgJATQgLAUgVAGQgKADgJAAQgMAAgLgFgAuOI5IB+lpIALAZIiBFqgAgMI7ICglZIAKASIihFagAUBFYIBSkWMgmLgAGIAGASQhugEAAgGQAAgLF8gIQF2gIIcAAQIcAAF3AIQF8AIAAALQAAADggADIAGAAIhVEcgAmWktQjXivAAj3QAAgoAFgdIWsAAQAFAiAAAjQAAD3jXCvQjVCxkvAAQkuAAjWixgApLq7QAADeDNCcQDLCfEhAAQEhAADLifQDNicAAjeQAAghgEgfI1qAAQgEAqAAAWgAs9imQgfgGgTgZQgTgZAFggQAEggAbgSQAZgTAgAFQAfAGAUAZQATAZgGAgQgFAggZASQgUAPgZAAIgNgBgAwlkDQg1gIgggrQgggsAIgzQAJg1ApggQAtggA0AIQA0AJAfAqQAgArgHA1QgIA1grAfQgiAZgqAAIgTgBgAQ6k+QgfgIgPgcQgRgaAJghQAIgdAdgRQAagPAfAIQAfAIAQAaQARAdgKAeQgHAfgcAQQgSALgTAAQgLAAgLgDgATKnlQg0gNgbgvQgbgtAPgzQAMg1AugaQAwgbAyAOQAzANAbAvQAcAugPAyQgNA1guAaQgeARghAAQgRAAgRgEgAtun5QgYgDgMgSQgOgTAEgVQACgXATgNQASgOAYADQAVAEAPATQALASgDAVQgCAXgSAOQgPAJgQAAIgKAAgAP+qNQgXgGgLgTQgMgTAGgWQAGgXATgLQAVgLAVAGQAVAGAMATQAMATgHAXQgFAVgUAMQgLAHgNAAQgIAAgIgCgAlozMQjCgJAAgLQAAgMDCgHQDBgIEVAAQEWAADAAIQDDAHAAAMQAAALjDAJQjFAIkRAAQkTAAjDgIgAlo1WQjCgKAAgLQAAgLDCgJQDDgIETAAQERAADFAIQDDAJAAALQAAALjDAKQjFAHkRAAQkTAAjDgHg");
	this.shape_5.setTransform(-184.4,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1749F").s().p("AtkaaQg4gWg3gZIAemtQAmgGAfgOQAygWAAghQhMAThQAAQhjAAhVgcIAAAJQAAAhAxAWQAZALAdAGIgCGCQishdiWiCQg6hjgqhrQhrlAAimKQAHhBADgvQADgxBTl6QBSl8FRo9IApg7IASgbIATgZQAog4AqgzIAQgTQAigoAjglIAvgvIACgCQBVhUBahCQC9iJDThAQApgNApgJIAbgFIChgVQBOgEBOAHIBjAOIDAA0QBfAkBeA2QB+BHBzBiICZCVQAYAZAWAbIAMAOIBFBXIAHAJQCCCvBuDeQBPEZAAEuQAAGSiQFxQiLFlj+ERQj7ETlKCWQlTCel0AAQk9AAknhxgAGSThQgyAPgZAvQgZAuAOAyQAPA0AvAaQAwAZAzgQQAygPAagvQAZgugQg0QgPgzgugZQgegPgfAAQgTAAgTAGgADDTVQgWAHgMAUQgJATAGAWQAGAVAUAMQAVAKAWgGQAVgHALgVQAJgUgGgUQgHgVgUgMQgMgGgMAAQgIAAgIACgAHEQIQgeAKgQAcQgPAdAIAdQAKAgAcAPQAdAQAegLQAfgIAPgdQAQgbgLgfQgIgfgdgQQgRgJgTAAQgLAAgLADgAz/L2QgzARgYAwQgZAuAQAzQAQA0AwAXQAvAYAzgOQAzgRAYgvQAYgvgQgzQgPgzgwgYQgcgQgfAAQgTAAgUAGgAvnNHQgcAKgQAcQgOAcAIAeQAKAgAdANQAcAPAfgJQAegLAPgcQAOgcgKgfQgKgegbgPQgQgIgRAAQgNAAgOAEgAndOJIE4pDIC0FWIAHgNIAJATICilbIDjGDIAHgKIAJAQIDsmdIC9H0IAJgQIAIAVIEGovICtC4IADgKIANAPIBVkdIgGAAQAggCAAgEQAAgLl8gIQl3gHocAAQocAAl2AHQl8AIAAALQAAAGBuAFICdIAIAHgWIAIAbICBlqID0JGIAIgOgAybJYQgVAGgLAUQgJAUAGAVQAHAVAUAMQAUALAWgJQAVgGALgUQAJgTgGgVQgFgXgVgJQgNgHgNAAQgIAAgJADgApKqAQAAD4DXCvQDWCwEuAAQEvAADViwQDXivAAj4QAAgigFgjI2sAAQgFAeAAAngAs7jdQgbASgEAgQgFAhATAZQATAZAfAFQAgAFAagTQAZgSAFggQAGgggTgZQgUgZgfgGIgNgBQgYAAgUAPgAw9mWQgpAggJA0QgIAzAgAsQAgArA1AJQA1AHAqgfQArgfAIg2QAHg0gggrQgfgrg0gIQgLgCgKAAQgoAAgkAagARMl3QgdAQgIAeQgJAgARAaQAPAdAfAHQAfAKAcgRQAcgRAHgfQAKgdgRgdQgQgagfgJQgLgDgKAAQgTAAgRALgATMp8QguAagMA0QgPA0AbAtQAbAuA0ANQA0ANAtgaQAugaANg0QAPgygcgvQgbgugzgNQgSgFgQAAQghAAgfASgAtkoGQgTANgCAWQgEAWAOATQAMASAYACQAWAEATgMQASgPACgWQADgWgLgRQgPgTgVgEIgJgBQgSAAgPAMgAQSqeQgTALgGAYQgGAVAMATQALAUAXAFQAVAIATgMQAUgMAFgWQAHgWgMgTQgMgTgVgGQgIgDgHAAQgOAAgNAHgAlFygQjCAHAAAMQAAAMDCAIQDDAJETAAQERAADFgJQDDgIAAgMQAAgMjDgHQjAgHkWAAQkVAAjBAHgAlF0rQjCAIAAAMQAAALDCAJQDDAHETAAQERAADFgHQDDgJAAgLQAAgMjDgIQjFgJkRAAQkTAAjDAJgAUKTBQgaAAgXgDQgogGgfgOQgygWAAghQBMATBRAAQBiAABWgcIAAAJQAAAhgyAWQgZALgdAGQgYAFgaABIgRAAg");
	this.shape_6.setTransform(-187.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEDAA6").s().p("ARWH6IgHgJIhFhXIgMgOQgWgbgYgZIiZiWQhMhEhRg1IBhhWIADgDIAAAAIADgCQCcBkB5CXQA5BFAzBSIAAABIgiCFIgKgMgAx/GBIABgBQAwhQA6hHQB8iXCbhkIAVASIBQBJQgeAUgeAXQhaBChVBUIgCACIguAvQgkAlgiAoIgDAEIgNAPQgqAzgoA3gAMpg5IAwgtIABABIFXEvIgTBHgAydERIgShHIFYkwIAxAtIl2FKgAOfilIgBAAIAngkIEhDHIgGAZIgHAbgAzkgCIEhjHIAnAkIk6DXgAQWkTIAnglIDYCGIgOA0gA0Gh+IgNg0IDYiGIAoAlIjyCVgASdmQIAmgkIB4BuIgCANIgMAugA0rkLIgPg7IABAAIB3huIAnAkIiOCFgAT2niIAngkIBEAvIgOA1gA1gnXIABAAIBEgvIAnAkIhdBAg");
	this.shape_7.setTransform(-173.5,-163.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B3C3D").s().p("AS6ftIgZBdIgdg/IAYjAIgYrOQAagBAYgFIAFIZIABCxIDRB3IgnFKIgukVIhLFEgEgSrAhLIAchAIgYjAIAZrOIAQAAQAaAAAZgDIgeGtIgLCnIgIByIAhCRIg1DegAQP3eQh5iWichmIgCACIArgoIF0FLIAThHIlXkwIBFhAIE7DYIhXFOQgzhSg6hGgAyi21IF2lLIA+A5IgWgTQibBmh7CWQg7BHgvBRgAzd6UIE7jYIgogkIkhDHIggh9IDyiUIgpglIjXCFIgXhZICPiEIgngkIh3BuIgYhcIBdhAIgogkIhEAvIgmiSIIvIDIlYExgATg7JIkhjHIDXjHICQCEIgYBZIjXiFIgoAlIDxCUIgmCXgEAU0ggNIh4huIDFi1IhPEvgEATvgipIBdBAIAPg1IhEgvg");
	this.shape_8.setTransform(-172.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.2,-225.3,344.2,500.1);


(lib.player_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start "NU" buble//
		//normal condition//
		//this.stop();//
	}
	this.frame_21 = function() {
		//stop "NU" buble//
		//start celebrate//
		this.stop();//
	}
	this.frame_30 = function() {
		//stop celebrate//
		// start back to normal//
		this.stop();
	}
	this.frame_38 = function() {
		//stop back to normal//
		//this.stop();//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(9).call(this.frame_30).wait(8).call(this.frame_38).wait(1));

	// speak
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE4F96").s().p("ACkBzQgEAAgDgCQgDgEAAgDIAAgjQAAgFADgCQADgDAEAAIBCAAIgDhOQgBgXgHgLQgHgJgSgBIgUAAQgEABgEgEQgCgCAAgFIAAghQAAgEACgDQADgEAFAAIAWAAQA0ABAYAXQAXAXACA0IAGB6QAAAEgDADQgDACgFAAgAA3BzQgEAAgDgCQgDgEAAgDIAAjQQAAgEADgDQADgDAEAAIAyAAQAFAAADADQADADAAAEIAADQQAAAEgDADQgDACgFAAgAg9BzQgEAAgEgCQgDgEAAgEIAAg1QAAgEADgDQAEgEAEABIA0AAQAFgBADAEQACADAAAEIAAA1QAAAEgCAEQgDACgFAAgAiwBzQgEAAgEgCQgDgEAAgEIAAg1QAAgEADgDQAEgEAEABIA0AAQAFgBADAEQADADAAAEIAAA1QAAAEgDAEQgDACgFAAgAkjBzQgEAAgEgCQgDgEAAgEIAAg1QAAgEADgDQAEgEAEABIA0AAQAFgBADAEQADADAAAEIAAA1QAAAEgDAEQgDACgFAAg");
	this.shape.setTransform(-118.7,-167.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).to({_off:true},11).wait(22));

	// speak
	this.instance = new lib.buble();
	this.instance.parent = this;
	this.instance.setTransform(-79.9,-107.9,0.003,0.002,0,0,0,59.2,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:59,regY:57.1,scaleX:1,scaleY:1,x:-117.6,y:-155.1},6).wait(12).to({regX:59.2,regY:52,scaleX:0,scaleY:0,x:-79.9,y:-107.9},3).to({_off:true},1).wait(17));

	// monster
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD683A").s().p("AgXB9IAAjyQAdgDAdgEIAACFQA3AgBnBUgAjAB9IAAjyIAyADIAADvg");
	this.shape_1.setTransform(10.7,-12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD8139").s().p("ACQB+IAAjwIAwgDIAADzgAjAB+IA7guQBBgzAigUIAAiGQAeAFAcADIAADzg");
	this.shape_2.setTransform(-10.9,-12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#802E39").s().p("AhxAhQgvgjAAg0IABgOICeAAQgJAAgIAEIgDABIgGAFIgDACIgEAGQgIALAAANQAAAQAKALIABABQAQAOAPAAQARAAANgMQAMgMAAgSQAAgRgMgNQgNgMgRAAICgAAIABAOQAAA0gvAjQgvAkhDAAQhCAAgvgkg");
	this.shape_3.setTransform(-0.1,-135.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6D6E").s().p("AoBIDIgTB1IgQiMIBXgxIABhLIAAg/IABiiQAKACAMABIgLEtIAKBQIgLAbIgLgnIgWCIgAIDH3IAOg8IgDgxIgQj6IAUACIAHAAIAKEtIgKBQIAMAbIAAAAIgMArgAhsn8QhBgyAAhIQAAgKABgKIA+AAIgBAPQAAA0AvAjQAvAkBCAAQBDAAAvgkQAvgjAAg0IgBgPIA+AAQACAKAAAKQAABIhBAyQhCAyhdAAQhbAAhCgyg");
	this.shape_4.setTransform(-5,-77.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIhCjXIgCgIIQBADIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHIhQjSIgDgIIhkCuIgDAFIhfiiIgEgIIhDCRIgDAFIhMiPIgEgHIiCDyIgEAFgAjbiRQhWhBAAheIACgaIBFAAQgCAJAAALQAABHBBAyQBCAzBdAAQBbAABCgzQBCgyAAhHQAAgLgCgJIBFAAQACANAAANQAABehWBBQhWBDh4AAQh6AAhVhDgAgtkDIgBgBQgKgNAAgPQAAgNAIgLIAFgGIACgCIAHgFIADgCQAHgDAKAAIACAAQAQAAAMAMQAMANAAARQAAASgMANQgNAMgQgBQgQAAgQgNg");
	this.shape_5.setTransform(1.2,-109.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE4F96").s().p("Ag0M4IgygEQgdgDgdgEQhNgMhIgZQhogkhRg5IAFhGQAXALAXAJQB8AwCFAAQCdgBCNhBQCLg/Bph0QBrhzA6iWQA9ibAAioQAAh/gih2Qgvhfg4hLIAHAJQCsDqBEF/QA/FnjqDXIgcAYIgCjhQAMgDALgEQAVgKAAgNIAAgEQglAMgpAAQgiAAgggIQAAANAVAKQANAGARACIARD6QhSA6hnAjQhIAZhNANQgdAEgeACIgxAEIgiAAIgjAAgAosJ5Qhohggsh7QARAtAZAqQA/A2BIAnIgBA/IgcgYgAn5GzQgLgBgKgCQgNgDgKgEQgVgKAAgNIAAgEQAkAMAqAAQAhAAAggIQAAANgVAKQgNAGgQACIgVACIgHAAgAnmovQATgaAVgZQBHhTBOg0QBag8BjgSQgXAFgXAGQjHA8iVDYIgRAYQAQgYARgXgADir9QgogXgngPQA7AVA3AlQAiAWAgAdQgwgpg1geg");
	this.shape_6.setTransform(1.7,-106.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5517C").s().p("ACQJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA+IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgGABQgGAAgGgCgACpHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAowF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgHAAQgNAAgNgGgAm2F4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjaFQICCjxIAEAHIiDDzgAFeEpIBsjoIAGAGIhuDrgACkEEIBkivIADAJIhjCtgAoBEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAl+DvIA1iYIAFALIg2CYgAgFDwIBDiRIAEAHIhDCSgAIaCQIAih0IwBgDIACAIQgugCAAgDQAAgECggEQCdgDDiAAQDjAACdADQCgAEAAAEQAAACgOABIADAAIgkB3gAiqh+QhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJQhaBKh/AAQh+AAhahKgAj2klQAABdBWBCQBVBCB5AAQB5AABWhCQBWhCAAhdQAAgOgCgNIhFAAIg+AAIigAAIgCAAIidAAIg+AAIhFAAIgCAbgAlchFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAm9hsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAHGiFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgHAEgIAAIgKgBgAIDjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAlwjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGtkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgFAAIgHgBgAiXoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiXo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_7.setTransform(-4.7,-110.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1749F").s().p("AlsLFQgXgJgXgKIAMi0QAQgDANgGQAVgJAAgOQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIgBCiQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQiFAAh8gwgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAkh3IgDAAQAOgBAAgCQAAgEiggEQidgDjjAAQjiAAidADQigAEAAAEQAAADAuACIBCDXIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJQBaBKB+AAQB/AABahKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAIeH/IgVgBQgRgDgNgGQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgLAFgMACQgKACgLABIgHAAg");
	this.shape_8.setTransform(-6.2,-114);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EEDAA6").s().p("AHPDRIgdglIgFgGIgTgWIhAg+QgggdgigWIArgmQBBAqAzA/QAYAdAWAiIAAABIgPA4IgHgJgAnjCiIABgBQAUghAYgeQA0g/BBgqIAJAHIAiAfQhOA0hIBTQgVAZgTAagAFUgXIAUgTIAAAAICQB/IgIAegAnvBzIgIgeICRh/IAUATIidCKgAGFhFIAAAAIAQgPIB6BUIgDAKIgDALgAoNAAIB5hUIARAPIiEBagAG3hzIARgPIBaA4IgGAWgAobg0IgGgWIBbg4IARAPIhmA/gAHwinIAQgPIAyAuIgBAFIgFATgAorhwIgGgYIAAAAIAyguIARAPIg8A3gAIVjKIARgPIAcAUIgGAWgApBjFIAAAAIAdgUIAQAPIgnAbg");
	this.shape_9.setTransform(-0.1,-184.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3B3C3D").s().p("AH8NUIgLAnIgMgbIAKhQIgKktQAMgBAJgCIADDhIAABLIBXAxIgPCMIgUh1IggCIgAn1N7IAMgbIgKhQIAKktIAGAAIAWgCIgNC0IgEBGIgDAxIANA8IgWBegAG1p2Qg0g/hBgrIARgQICdCLIAIgeIiQiAIAcgbICFBbIglCNQgWgjgXgdgAnxplICciLIAaAYIgJgIQhBArg0A/QgYAegUAigAoKrDICEhbIgQgOIh6BTIgNg0IBlg/IgRgPIhbA4IgJgmIA8g3IgRgPIgyAuIgKgnIAogbIgRgOIgcATIgQg9IDqDYIiQCAgAIMrZIh5hTIBahUIA9A3IgKAmIhbg4IgQAPIBlA/IgRA/gAIvthIgyguIBThMIgiB/gAISujIAnAbIAGgWIgcgTg");
	this.shape_10.setTransform(0.2,-111.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIhCjXIgCgIQH8gtIFAwIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHIhQjSIgDgIIhkCuIgDAFIhfiiIgEgIIhDCRIgDAFIhMiPIgEgHIiCDyIgEAFgAjbiRQhWhBAAheIACgaIBFAAQgCAJAAALQAABHBBAyQBCAzBdAAQBbAABCgzQBCgyAAhHQAAgLgCgJIBFAAQACANAAANQAABehWBBQhWBDh4AAQh6AAhVhDgAgtkDIgBgBQgKgNAAgPQAAgNAIgLIAFgGIACgCIAHgFIADgCQAHgDAKAAIACAAQAQAAAMAMQAMANAAARQAAASgMANQgNAMgQgBQgQAAgQgNg");
	this.shape_11.setTransform(1.2,-109.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5517C").s().p("ACQJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA+IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgGABQgGAAgGgCgACpHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAowF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgHAAQgNAAgNgGgAm2F4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjaFQICCjxIAEAHIiDDzgAFeEpIBsjoIAGAGIhuDrgACkEEIBkivIADAJIhjCtgAoBEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAl+DvIA1iYIAFALIg2CYgAgFDwIBDiRIAEAHIhDCSgAIaCQIAih0QoGgwn7AtIACAIQgugCAAgDQAAgECZgQQCYgQDiAAQDjAACkAQQClAQAAAEQAAACgOABIADAAIgkB3gAiqh+QhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJQhaBKh/AAQh+AAhahKgAj2klQAABdBWBCQBVBCB5AAQB5AABWhCQBWhCAAhdQAAgOgCgNIhFAAIg+AAIigAAIgCAAIidAAIg+AAIhFAAIgCAbgAlchFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAm9hsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAHGiFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgHAEgIAAIgKgBgAIDjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAlwjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGtkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgFAAIgHgBgAiXoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiXo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_12.setTransform(-4.7,-110.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1749F").s().p("AlsLFQgXgJgXgKIAMi0QAQgDANgGQAVgJAAgOQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIgBCiQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQiFAAh8gwgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAkh3IgDAAQAOgBAAgCQAAgEilgQQikgRjjAAQjiAAiYARQiZAQAAAEQAAADAuACIBCDXIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJQBaBKB+AAQB/AABahKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAIeH/IgVgBQgRgDgNgGQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgLAFgMACQgKACgLABIgHAAg");
	this.shape_13.setTransform(-6.2,-114);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIhCjXIgCgIQH8hUIFBXIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHIhQjSIgDgIIhkCuIgDAFIhfiiIgEgIIhDCRIgDAFIhMiPIgEgHIiCDyIgEAFgAjbiRQhWhBAAheIACgaIBFAAQgCAJAAALQAABHBBAyQBCAzBdAAQBbAABCgzQBCgyAAhHQAAgLgCgJIBFAAQACANAAANQAABehWBBQhWBDh4AAQh6AAhVhDgAgtkDIgBgBQgKgNAAgPQAAgNAIgLIAFgGIACgCIAHgFIADgCQAHgDAKAAIACAAQAQAAAMAMQAMANAAARQAAASgMANQgNAMgQgBQgQAAgQgNg");
	this.shape_14.setTransform(1.2,-109.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5517C").s().p("ACQJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA+IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgGABQgGAAgGgCgACpHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAowF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgHAAQgNAAgNgGgAm2F4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjaFQICCjxIAEAHIiDDzgAFeEpIBsjoIAGAGIhuDrgACkEEIBkivIADAJIhjCtgAoBEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAl+DvIA1iYIAFALIg2CYgAgFDwIBDiRIAEAHIhDCSgAIaCQIAih0QoGhXn7BUIACAIQgugCAAgDQAAgECYgcQCXgdDigBQDjgBClAeQCmAdAAAEQAAACgOABIADAAIgkB3gAiqh+QhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJQhaBKh/AAQh+AAhahKgAj2klQAABdBWBCQBVBCB5AAQB5AABWhCQBWhCAAhdQAAgOgCgNIhFAAIg+AAIigAAIgCAAIidAAIg+AAIhFAAIgCAbgAlchFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAm9hsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAHGiFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgHAEgIAAIgKgBgAIDjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAlwjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGtkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgFAAIgHgBgAiXoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiXo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_15.setTransform(-4.7,-110.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1749F").s().p("AlsLFQgXgJgXgKIAMi0QAQgDANgGQAVgJAAgOQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIgBCiQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQiFAAh8gwgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAkh3IgDAAQAOgBAAgCQAAgEimgeQilgdjjAAQjiABiXAdQiYAdAAAEQAAADAuACIBCDXIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJQBaBKB+AAQB/AABahKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAIeH/IgVgBQgRgDgNgGQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgLAFgMACQgKACgLABIgHAAg");
	this.shape_16.setTransform(-6.2,-114);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIhCjXIgCgIQH8h0IFB3IgiB0IgCAFIhIhOIgGgGIhsDoIgDAHIhQjSIgDgIIhkCuIgDAFIhfiiIgEgIIhDCRIgDAFIhMiPIgEgHIiCDyIgEAFgAjbiRQhWhBAAheIACgaIBFAAQgCAJAAALQAABHBBAyQBCAzBdAAQBbAABCgzQBCgyAAhHQAAgLgCgJIBFAAQACANAAANQAABehWBBQhWBDh4AAQh6AAhVhDgAgtkDIgBgBQgKgNAAgPQAAgNAIgLIAFgGIACgCIAHgFIADgCQAHgDAKAAIACAAQAQAAAMAMQAMANAAARQAAASgMANQgNAMgQgBQgQAAgQgNg");
	this.shape_17.setTransform(1.2,-109.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E5517C").s().p("ACQJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA+IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgGABQgGAAgGgCgACpHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAowF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgHAAQgNAAgNgGgAm2F4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjaFQICCjxIAEAHIiDDzgAFeEpIBsjoIAGAGIhuDrgACkEEIBkivIADAJIhjCtgAoBEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAl+DvIA1iYIAFALIg2CYgAgFDwIBDiRIAEAHIhDCSgAIaCQIAih0QoGh3n7B0IACAIQgugCAAgDQAAgECZggQCZghDjgDQDkgCCjAjQCjAjAAAEQAAACgOABIADAAIgkB3gAiqh+QhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJQhaBKh/AAQh+AAhahKgAj2klQAABdBWBCQBVBCB5AAQB5AABWhCQBWhCAAhdQAAgOgCgNIhFAAIg+AAIigAAIgCAAIidAAIg+AAIhFAAIgCAbgAlchFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAm9hsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAHGiFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgHAEgIAAIgKgBgAIDjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAlwjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGtkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgFAAIgHgBgAiXoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiXo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_18.setTransform(-4.7,-110.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1749F").s().p("AlsLFQgXgJgXgKIAMi0QAQgDANgGQAVgJAAgOQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIgBCiQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQiFAAh8gwgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAkh3IgDAAQAOgBAAgCQAAgEijgkQijgijkACQjjADiZAgQiZAhAAAEQAAADAuACIBCDXIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJQBaBKB+AAQB/AABahKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAIeH/IgVgBQgRgDgNgGQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgLAFgMACQgKACgLABIgHAAg");
	this.shape_19.setTransform(-6.2,-114);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#802E39").s().p("AhxAhQgvgjAAg0IABgOICeAAQgJAAgIAEIgDABIgGAFIgDACIgEAGQgIALAAANQAAAQAKALIABABQAQAOAPAAQARAAANgMQAMgMAAgSQAAgRgMgNQgNgMgRAAICgAAIABAOQAAA0gvAjQgQANgTAIQgjAPgsAAQhCAAgvgkg");
	this.shape_20.setTransform(-3.1,-135.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6D6E").s().p("AnaIIIAAB2IgmiGIBOg/IgFglIgNhQIgbizIAAAAIAKAAIALgBIAAAAIgFABIAFAAIAmEqIAXBOIgHAcIgRglIAACKgAGPHlIAVgoIAIgPIA4kcIAdAAIhFEkIgeBMIAEAcIAAABIgWAlgAgFnIQhcAAhCgzQhBgyAAhIIABgUIA+AAIgBAPQAAA0AvAkQAvAkBDAAQArAAAjgPQATgJAQgMQAvgkAAg0IgBgPIA+AAIABACIABAGIAAAMQAABIhBAyQgfAXgjANQgZAKgVACIgZACIgHABIgOAAg");
	this.shape_21.setTransform(-2.5,-77.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIhCjXIgCgIQH0BDINhAIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHIhQjSIgDgIIhkCuIgDAFIhfiiIgEgIIhDCRIgDAFIhMiPIgEgHIiCDyIgEAFgAjbiRQhWhBAAheIACgaIAnAAIgCAUQAABHBBAyQBCAzBdAAIAPAAIAGAAIAZgCQAUgDAZgKQAkgNAegXQBCgyAAhHIgBgNIgBgGIAegBIBFAAQACANAAANQAABehWBBQhWBDh4AAQh6AAhVhDgAhLkDIgBgBQgKgNAAgPQAAgNAIgLIAFgGIACgCIAHgFIADgCQAHgDAKAAIACAAQARAAAMAMQAMANAAARQAAASgMANQgNAMgRgBQgQAAgQgNg");
	this.shape_22.setTransform(1.2,-109.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE4F96").s().p("Ag0M4IgygEQgdgDgdgEQhNgMhIgZQhLgZg+glIgIhWIALAFQB8AwCFAAQCdgBCNhBQCLg/Bph0QBrhzA6iWQA9ibAAioQAAh/gih2Qgvhfg4hLIAHAJQCsDqBEF/QA/FnjqDXIgcAYQg1AogUAMIBHkRIAXgLQAVgKAAgNIAAgEQglAMgpAAQgiAAgggIQAAANAVAKQANAGARACIg5EcIgIAQQgwAZg3ASQhIAZhNANQgdAEgeACIgxAEIgiAAIgjAAgAnuKrQgxgmgNgMQhohggsh7QARAtAZAqQA/A2BIAnQAVAKAMAHIAMBQIgMgIgAn0GwIgFAAIAFAAIAAgBIgMABIgKAAIAAABIgEgBQgNgDgKgEQgVgKAAgNIAAgEQAkAMAqAAQAhAAAggIQAAANgVAKQgLAFgNADgAnmovQATgaAVgZQBHhTBOg0QBag8BjgSQgXAFgXAGQjHA8iVDYIgRAYQAQgYARgXgADir9QgogXgngPQA7AVA3AlQAiAWAgAdQgwgpg1geg");
	this.shape_23.setTransform(1.7,-106.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5517C").s().p("ACQJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA+IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgGABQgGAAgGgCgACpHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAowF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgHAAQgNAAgNgGgAm2F4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjaFQICCjxIAEAHIiDDzgAFeEpIBsjoIAGAGIhuDrgACkEEIBkivIADAJIhjCtgAoBEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAl+DvIA1iYIAFALIg2CYgAgFDwIBDiRIAEAHIhDCSgAIaCQIAih0QoOBAnzhDQAnAAB3ALQB2AMDigBQDjgBCdgLQCdgLAAAEQAAACgOABIADAAIgkB3gAnxAcQAAgCAsgBIACAIQgugCAAgDgAiqh+QhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJQhaBKh/AAQh+AAhahKgAj2klQAABdBWBCQBVBCB5AAQB5AABWhCQBWhCAAhdQAAgOgCgNIhFAAIgeAAIg+AAIigAAIgCAAIidAAIg+AAIgnAAIgCAbgAlchFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAm9hsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAHGiFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgHAEgIAAIgKgBgAIDjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAlwjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGtkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgFAAIgHgBgAiXoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiXo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_24.setTransform(-4.7,-110.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F1749F").s().p("AlsLFIgLgEIgSjEQANgDALgFQAVgJAAgOQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIAEABIAcCzQgMgIgVgKQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQiFAAh8gwgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAkh3IgDAAQAOgBAAgCQAAgEidALQidALjjABQjiABh2gMQh3gLgnAAQgsABAAACQAAADAuACIBCDXIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJQBaBKB+AAQB/AABahKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAIsH+IgEgBIABABIgEAAIgcAAQgRgDgNgGQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJIgXALIgOgCg");
	this.shape_25.setTransform(-6.2,-114);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3B3C3D").s().p("AGeNQIgUAiIgEgdIAehLIBFklIADAAIgBAAIAEABIAOACIhHERIgEARIBIBHIg0CBIALh1IhBB7gAmsN5IAGgdIgWhOIgmkqIAcABIATDDIAHBWIABAKIAXA5IgHBggAG3pyQgzg/hCgrIARgQICdCLIAIgeIiQiAIAdgbICEBbIglCNQgVgjgYgdgAnvphICdiLIAaAYIgJgIQhBArg0A/QgZAegTAigAoHq/ICDhbIgQgOIh5BTIgOg0IBmg/IgRgPIhbA4IgJgmIA7g3IgQgPIgyAuIgKgnIAngbIgRgOIgcATIgQg9IDqDYIiQCAgAIPrVIh6hTIBahUIA9A3IgKAmIhag4IgRAPIBlA/IgQA/gAIytdIgzguIBThMIghB/gAIVufIAnAbIAGgWIgdgTg");
	this.shape_26.setTransform(-0.1,-111.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6E6D6E").s().p("AmkIDIAng0IAUgdIgcg/IhdjTIAAAAIACAAIAVgCIBwESIAqBFIAAAeIgZggIAkCFIhVhvIAfBygAEMICIASg+IAqguIB7j5IAgAAIiNEGIgxBBIgDAcIAAABIgfAegAghm5IgPAAQhcAAhCgzQhBgyAAhIIABgUIA+AAIgBAPQAAA0AvAkQAvAkBDAAQAsAAAigPQATgJAQgMQAvgkAAg0IgBgPIA+AAIAAABIABABIABAGIAAAMQAABIhBAyIgOAKIgLAHIgDACQgUALgZAIQgbAIgPACIgVACIgGABIgBAAg");
	this.shape_27.setTransform(-0.8,-79.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIhCjXIgCgIQHyBvILhrIAEgBIAAAAIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHIhQjSIgDgIIhkCuIgDAFIhfiiIgEgIIhDCRIgDAFIhMiPIgEgHIiCDyIgEAFgAjbiRQhWhBAAheIACgaIANAAIgCAUQAABHBBAyQBCAzBdAAIAPAAIABAAIAKAAIAPAAIAGAAIASgCQANgBAPgIQALgFAZgQIAEgCIALgHIANgKQBCgyAAhHIgBgNIgBgGIAAgBIACAAIB7AAQACANAAANQAABehWBBQhWBDh4AAQh6AAhVhDgAhlkDIgBgBQgKgNAAgPQAAgNAIgLIAFgGIACgCIAHgFIADgCQAHgDAKAAIACAAQARAAAMAMQAMANAAARQAAASgMANQgNAMgRgBQgQAAgQgNg");
	this.shape_28.setTransform(1.2,-109.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EE4F96").s().p("Ag0M4IgygEQgdgDgdgEQhNgMhIgZIgFgCIgGgeIgmgzIgNglQBaAZBfAAQCdgBCNhBQCLg/Bph0QBrhzA6iWQA9ibAAioQAAh/gih2Qgvhfg4hLIAHAJQCsDqBEF/QA/FnjqDXIgcAYQg1Aog/AkIgTAKIgcgwICUkFQAZgFALgEQAVgKAAgNIAAgEQglAMgpAAQgiAAgggIQAAANAVAKIANAFIh6D5IgqAuIgTA+Qg5AQg8ALQgdAEgeACIgxAEIgiAAIgjAAgAEmL1IgGAOIgOAFgAm+LKIgwgfQgxgmgNgMQhohggsh7QARAtAZAqQA/A2BIAnQAVAKAMAHIAoAQIAAABIAKAFIABAAIAdALIAcA/IgVAcIgngVgAoOGwQgNgDgKgEQgVgKAAgNIAAgEQAkAMAqAAQAhAAAggIQAAANgVAKIgIAEIgcACIgWABIgBAAIgFAAIgJAAIgBAAIAAABIgEgBgAnmovQATgaAVgZQBHhTBOg0QBag8BjgSQgXAFgXAGQjHA8iVDYIgRAYQAQgYARgXgADir9QgogXgngPQA7AVA3AlQAiAWAgAdQgwgpg1geg");
	this.shape_29.setTransform(1.7,-106.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E5517C").s().p("ACQJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA+IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgGABQgGAAgGgCgACpHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAowF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgHAAQgNAAgNgGgAm2F4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjaFQICCjxIAEAHIiDDzgAFeEpIBsjoIAGAGIhuDrgACkEEIBkivIADAJIhjCtgAoBEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAl+DvIA1iYIAFALIg2CYgAgFDwIBDiRIAEAHIhDCSgAIaCQIAih0QASgBAAABQAAACgOABIADAAIgkB3gAnFAZQAnAAB+AWQB9AWDigBQDjgBCWgVQBdgOAjgDQkBA0j8AAQkDAAj9g4gAnxAcQAAgCAsgBIACAIQgugCAAgDgAiqh+QhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJQhaBKh/AAQh+AAhahKgAj2klQAABdBWBCQBVBCB5AAQB5AABWhCQBWhCAAhdQAAgOgCgNIh7AAIgCAAIg+AAIifAAIgCAAIieAAIg+AAIgNAAIgCAbgAlchFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAm9hsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAHGiFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgHAEgIAAIgKgBgAIDjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAlwjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGtkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgFAAIgHgBgAiXoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiXo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_30.setTransform(-4.7,-110.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F1749F").s().p("AkkLdIhVjkIAIgEQAVgJAAgOQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIAEABIABAAIAJAAIAFAAIAAAAIBdDTIgdgLIgBAAIgKgEIAAgBIgogQQgMgIgVgKQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQhfAAhagYgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAkh3IgDAAQAOgBAAgCQAAgBgSABIAAAAIgEABQgjADhdAOQiWAVjjABQjiABh9gWQh+gWgnAAQgsABAAACQAAADAuACIBCDXIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJQBaBKB+AAQB/AABahKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAIYH6IggAAIgNgFQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgLAFgZAEg");
	this.shape_31.setTransform(-6.2,-114);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3B3C3D").s().p("AFlNWIheBmIArhyIAGgOIgTATIgKAJIADgcIAxhBICMkGIAVAEIiUEFIAcAwIAXAnIhTBwgAk4NrIAAgeIgqhFIhwkSIAdgCIBUDkIAOAlIAlAyIAGAfIAMA/gAG3pfQgzg/hCgrIARgQICdCLIAIgeIiQh/IAdgbICEBbIglCMQgVgjgYgdgAnvpOICdiLIAaAYIgJgIQhBArg0A/QgZAegTAigAoHqrICDhbIgQgPIh5BTIgOg0IBmg+IgRgQIhbA4IgJglIA7g4IgQgPIgyAuIgKgmIAngbIgRgPIgcATIgQg9IDqDYIiQCAgAIPrCIh6hTIBahUIA9A4IgKAlIhag4IgRAQIBlA+IgQA/gAIytKIgzguIBThMIghCAgAIVuLIAnAbIAGgXIgdgTg");
	this.shape_32.setTransform(-0.1,-113.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#802E39").s().p("AhxAhQgSgOgLgQQgSgZAAggIABgOICeAAQgJAAgIAEIgDABIgGAFIgDACIgEAGQgIALAAANQAAAQAKALIABABQAQAOAPAAQARAAANgMQAMgMAAgSQAAgRgMgNQgNgMgRAAICgAAIABAOIAAAIQgDAugsAhQgLAJgNAHQgnAUgzAAQhCAAgvgkg");
	this.shape_33.setTransform(-7.2,-135.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6E6D6E").s().p("Ak1INIgPgOIAihXIADgHIi7joIAYgEICvDnIA7A4IAIAdIghgZIAyBWIATAhIg2gqIg5grIAUAgIAoBGgADXGfIA0giICujGIAjADIjGDTIhBAyIgKAbIAAAAIgmAWgAnbC4IAAgBIABACgAjjnRQg6gtgGg/IgBgOIACgUIA+AAIgCAPQAAAfASAaQALAQASAOQAwAkBDAAQAyAAAmgUQANgHAMgJQArghAEguIAAgIIgBgPIA+AAIAAAAIABAJIABALQAAA6gqArIgMAMIgMAJQgxAlg/AKIgKABQgRACgSAAQhdAAhCgyg");
	this.shape_34.setTransform(-0.2,-81.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIg/jNIgFgSQALgBAaACQAKABARAFQAUADAfAJIAFABIAdAIQC0AxC3ABIhACJIgDAFIhMiPIgEgHIiCDyIgEAFgADQBTIgCgHQBRgMBTgWQAtgPAigFQAigFAaABIAEgBIAAAAIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHgAAHBcQBigCBjgNIhjCsIgDAFgAjciRQhSg/gDhZQAFA/A7AtQBCAzBcAAQASAAARgCIALgBQA+gKAygmIALgJIAMgMQAqgrAAg5IAAgLIgCgJIAGAAICFAAQACANAAANQAABehWBBQgqAggyARIgBABIgFABIgOAEQgsAMgyAAQh5AAhWhDgAhzkDIgBgBQgKgNAAgPQAAgNAIgLIAEgGIADgCIAGgFIADgCQAIgDAJAAIACAAQARAAANAMQAMANAAARQAAASgMANQgNAMgSgBQgPAAgQgNg");
	this.shape_35.setTransform(1.2,-109.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE4F96").s().p("Ag0M4IgygEQgdgDgdgEQgagEgZgFIgxhWIAgAZIAkAZIgqhXIgDgCQAZABAaABQCdgBCNhBQCLg/Bph0QBrhzA6iWQA9ibAAioQAAh/gih2Qgvhfg4hLIAHAJQCsDqBEF/QA/FnjqDXIgcAYQg1Aog/AkIiHA5IAAAAIA0g3IgYhVIDUjZIAAAAQAWgEAKgEQAVgKAAgNIAAgEQglAMgpAAQgiAAgggIQAAANAVAKIAKAEIiuDGIg0AiIgzBRIAngWIAAAAIAjgUIhRBvIB2hKIgpA6QgsALguAIQgdAEgeACIgxAEIgiAAIgjAAgAkbMQIgTggIA4ArIglgLgAm+LKIgwgfQgxgmgNgMQhohggsh7QARAtAZAqQA/A2BIAnQAVAKAMAHIAoAQIAAABIAKAFIABAAQAOAGA6ARQAeAJAgAFIgiBXIAOAOQhlgvgQgKgAoOGwQgNgDgKgEQgVgKAAgNIAAgEQAkAMAqAAQAhAAAggIQAAAKgNAJIgdAGIgYAEIgCgCIAAABIACABIgNABIAEgBIgBAAIgDABIgBAAIgFAAIgJAAIgBAAIAAABIgEgBgAnmovQATgaAVgZQBHhTBOg0QBag8BjgSQgXAFgXAGQjHA8iVDYIgRAYQAQgYARgXgADir9QgogXgngPQA7AVA3AlQAiAWAgAdQgwgpg1geg");
	this.shape_36.setTransform(1.7,-106.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5517C").s().p("ACGJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA0IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgHABQgFAAgGgCgACfHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAo6F/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgIAAQgNAAgMgGgAnAF4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgKABQgHAAgHgEgAjkFQICCjxIAEAHIiDDzgAFUEpIBsjoIAGAGIhuDrgACaEEIBjitQhjAOhiABIhDCSIgEgIIA/iKQi2AAi0gxIgdgIIgFgBIghgKIgSgDQgRgEgKgBQgagCgLABIAFARQhYg2BTAQQAngBB+AoQARAFAUAFICNAWQBOAFBfAAQC6gCCGgZQAegGAbgHQBdgXAjgHQBRgshJBMIghBsIgFgGIAih0IAAAAIgEABQgagCgiAGQgiAFgtAPQhTAWhRAMIACAHIhjCtgAoLEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAmIDvIA1iYIAFALIg2CYgAAjg0QhyAAhUg8IgSgOQhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJIgXASQhSA4hvAAgAkBksIABAOQADBZBSA/QBWBCB4AAQAzAAAsgLIAOgEIAFgCIABAAQAygRAqggQBWhCAAhdQAAgOgCgNIiGAAIgFAAIg+AAIifAAIgCAAIieAAIg+AAIgBAUgAlmhFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgLAAIgFAAgAnHhsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgPAKgRAAIgIAAgAG8iFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgIAEgIAAIgJgBgAH5jLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgNAIgNAAQgHAAgHgCgAl6jUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgHAEgGAAIgEgBgAGjkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgGAAIgGgBgAihoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiho9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_37.setTransform(-3.7,-110.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F1749F").s().p("AieLzIgugkIidjeQANgIAAgLQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIAEABIABAAIAJAAIAFAAIAAAAIABAAIADgBIABAAIgEABIANgBIC6DoIgCAGQgggFgegIQg6gSgOgGIgBAAIgKgEIAAgBIgogQQgMgIgVgKQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQgaAAgZgCgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAhhsQBJhNhRAtQgjAHhdAXQgbAHgeAGQiGAZi6ACQhfAAhOgFIiNgWQgUgFgRgFQh+gognABQhTgRBYA3IA/DOIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj2kMQAABoBaBJIASAOQBUA8ByAAIABAAQBvAABSg4IABAAIAXgSQBahJAAhoQAAgPgCgOIgBAAIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAItH+IgVgCIgjgDIgKgEQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgKAEgWAFIAAAAIgEAAg");
	this.shape_38.setTransform(-6.2,-114);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B3C3D").s().p("ADpOAIApg6Ih1BKIBRhuIgkATIAKgbIBAgyIDHjTIAVACIABAAIADAAIjUDYIAYBVIg0A3IAAAAIg3AsgAjSNMIgHgdIg7g4IivjnIAdgGICeDeIAtAkIADADIAqBWgAG3pBQgzg/hCgrIARgQICdCLIAIgeIiQh/IAdgbICEBbIglCMQgVgjgYgdgAnvowICdiLIAaAYIgJgIQhBArg0A/QgZAegTAigAoHqNICDhbIgQgPIh5BTIgOg0IBmg+IgRgQIhbA4IgJglIA7g4IgQgPIgyAuIgKgmIAngbIgRgPIgcATIgQg9IDqDYIiQCAgAIPqkIh6hTIBahUIA9A4IgKAlIhag4IgRAQIBlA+IgQA/gAIyssIgzguIBThMIghCAgAIVttIAnAbIAGgXIgdgTg");
	this.shape_39.setTransform(-0.1,-116.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BD683A").s().p("AgXB9IAAjyIAngEIgBAAIADgBIARgCIAACFQA3AgBnBUgAjAB9IAAjyIAyADIAADvg");
	this.shape_40.setTransform(10.7,-12.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#802E39").s().p("AhxAhQgSgOgLgQQgSgZAAggIABgOIBPAAQgJAAgIAEIgDABIgGAFIgDACIgEAGQgIALAAANQAAAQAKALIABABQAQAOAPAAQASAAAKgJQAKgHAGgQQAFgRgNgSQgMgQgNgBIDkAAIABAOIAAAIQgCAkgZAaIgCACIgSAPQgLAJgNAHQgcAOghAFIgFAAIgYABQhCAAgvgkg");
	this.shape_41.setTransform(-11.9,-135.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6E6D6E").s().p("AjNHxIAAgCIgDhjIkBiJIgHgIIABADIgCgDIAAgBIgCgDIABAAIAYgFID8CQIBLAdIATAYIgogLIBQA9IAeAXIhGgTIhBgRIAaATIBFA0gACHFwIAPgLIAKgBIAzgJICHhBIBVgqIAuAHIkHB2IhPAVIgUAVIAAABIgsAEgAncD1IABAAIABACgAjjmUQg7gtgFg/IgBgOIABgUIAPAAIgBAPQAAAgASAaQALAQASAOQAvAkBDAAIAYgBIAFgBQAhgEAcgPQANgGALgJIARgPIACgCQAZgcACgjIAAgIIgBgPIBtAAIAAABIACAJIAAAKQAAA6gqArIgMAMIgLAJQgyAmg+AKIgLABQgRACgSAAQhcAAhCgzg");
	this.shape_42.setTransform(-0.2,-87.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AmDBXIgFgKIg1CXIgDAJIhBjWQgRgxABgCIAAAAQAXAOBcAnIAMAFIAlAUQAZANAcANIAAABIAJACIADACQA/AcBAAQIhsDJIgEAFgADXBwQBOgaBJgmIAPgHICVhWQAAAIgIAiIgWBCIgDAIIgCAHIgUA3IgCAFIhIhOIgGgGIhsDoIgDAHgAAiCRQBKgFBBgQIhIB9IgDAFgAh7CHQAvAJAvACIgnBTIgDAFgAjgiRQhSg/gDhZQAFA/A7AtQBCAzBcAAQASAAARgCIALgBQA+gKAygmIALgJIAMgMQAqgrAAg5IAAgLIgCgJIAGAAICFAAQACANAAANQAABehWBBQgqAggyARIgBABIgFABIgOAEQgsAMgyAAQh5AAhWhDgAj1kDIgBgBQgKgNAAgPQAAgNAIgLIAEgGIADgCIAGgFIADgCQAIgDAJAAIAMAAQANABAMAQQANASgFAQQgGARgKAIQgKAIgSAAQgPAAgQgNg");
	this.shape_43.setTransform(1.6,-109.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EE4F96").s().p("Ag0M4IgygEQgdgDgdgEQgPgBgZgFIgrgKIhogiQhXgdhxhiQhwhigth8QARAtAZAqQA/A2BIAnQAVAKAMAHIAoAQIAAABIAKAFIABAAQAOAGA6ARQAdAIBqAQIAMABIgNgCIANABIAAABICDAzIhFg0IAngCIBGATIgegYQBEgKBBgXIgfASICJgWIhlA+IBEgSIBFggIALhTIAQgKID0hmIANgJIAGgLIAAAAQAWgEAKgEQAVgKAAgNIAAgEQglAMgpAAQgiAAgggIQAAANAVAKIhVApIAdgeQBrhzA6iWQA9ibAAioQAAh/gih2Qgvhfg4hLIAHAJQCsDqBEF/QA/FnjqDXIgcAYQg1Aog/AkQhYArgvAOIgoAIQgmAJgnAHIgRACIgDAAIABAAIgoAEIgxAEIgiAAIgjAAgACKMrIACgBIgBAAgAoOGwQgNgDgKgEQgVgKAAgNIAAgEQAkAMAqAAQAhAAAggIQAAAIgGAGIgkALIgYAEIgBgBIgBgBIAAABIACABIgBAAIgBABIgLAAIAEgBIgBAAIgDABIgBAAIgFAAIgJAAIgBAAIAAABIgEgBgAnmovQATgaAVgZQBHhTBOg0QBag8BjgSQgXAFgXAGQjHA8iVDYIgRAYQAQgYARgXgADir9QgogXgngPQA7AVA3AlQAiAWAgAdQgwgpg1geg");
	this.shape_44.setTransform(1.7,-106.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E5517C").s().p("AB/JMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgFAJgHAHIgKABIgPALIgKABQgOAAgMgHgAAtIPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgHABQgFAAgGgCgACYHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgApBF/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgIAAQgNAAgMgGgAnHF4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgJABQgIAAgHgEgAjrFQIBsjIQhAgQg/gcIgDgCIgJgEQgcgMgZgOIglgTIgMgFQhcgngXgOIAAAAQgBABARAyQgQgUgkg5IgTgdQBZA5BMAdQApAPAeAOIAWAKQBrAvByATQByASBxgVQBygWBxgwIATgIIAJgFQBdguBVhAQAUgcgtBoIgTAwIgfBnIgFgGIAUg3IACgHIADgIIAWhDQAIgiAAgHIiVBVIgPAIQhJAmhOAZIgPAFIgRAFIhOCHIgEgHIBIh9QhBAPhKAGIgnABIgRAAIgqBbIgEgIIAmhTQgugCgvgJIgrgJIhwDQgAGDAyIAFgCIALgFIgQAHgAFNEpIBsjoIAGAGIhuDrgAoSEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAmPDvIA1iYIAFALIg2CYgAAcg0QhmgGhWgvIgKgHIgSgOQhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJIgXASIgEADIgGAEQhQAwhnABgAkIksIABAOQADBZBSA/QBWBCB4AAQAzAAAsgLIAOgEIAFgCIABAAQAygRAqggQBWhCAAhdQAAgOgCgNIiFAAIgGAAIhtAAIjkAAIgMAAIhPAAIgPAAIgBAUgAlthFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgKAAIgGAAgAnOhsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgOAKgSAAIgIAAgAG1iFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgIAEgHAAIgKgBgAHyjLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgMAIgOAAQgHAAgHgCgAmBjUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgGAEgHAAIgEgBgAGckSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgGAAIgGgBgAiooDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAioo9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_45.setTransform(-3,-110.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F1749F").s().p("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");
	this.shape_46.setTransform(-6.2,-114);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3B3C3D").s().p("ACuMlIiJAWIAfgSIBXg0IgpAEIAUgVIBPgVIEHh2IAUACIABAAIADgBIgGALIgMAJIj1BmIgQAHIAAADIgLBTIhFAgIhDASgAhpMZIgSgYIhMgdIj8iQIAkgLIDdCJIA7AQIBIBAgAG3n9Qgzg/hCgrIARgQICdCLIAIgeIiQiAIAdgbICEBbIglCNQgVgjgYgdgAnvnsICdiLIAaAYIgJgIQhBArg0A/QgZAegTAigAoHpKICDhbIgQgOIh5BTIgOg0IBmg/IgRgPIhbA4IgJgmIA7g3IgQgPIgyAuIgKgnIAngbIgRgOIgcATIgQg9IDqDYIiQCAgAIPpgIh6hTIBahUIA9A3IgKAmIhag4IgRAPIBlA/IgQA/gAIyroIgzguIBThMIghB/gAIVsqIAnAbIAGgWIgdgTg");
	this.shape_47.setTransform(-0.1,-123.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6E6D6E").s().p("Ak1INIgPgOIAihXIADgHIi7joIAYgEICvDnIA7A4IAIAdIghgZIAyBWIATAhIg2gqIg5grIAUAgIAoBGgADXGfIA0giICujGIAjADIjGDTIhBAyIgKAbIAAAAIgmAWgAnbC4IAAgBIABACgAjinRQg7gtgFg/IgBgOQAAgKABgKIA+AAIgBAPQAAAfASAaQALAQASAOQAvAkBDAAQAzAAAmgUQANgHALgJQAsghADguIAAgIIgBgPIA+AAIAAAAIACAJIAAALQAAA6gqArIgMAMIgLAJQgyAlg+AKIgLABQgRACgSAAQhcAAhCgyg");
	this.shape_48.setTransform(-0.2,-81.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Al/BXIgFgKIg1CXIgDAJIg/jNIgFgSQALgBAaACQAKABARAFQAUADAfAJIAFABIAdAIQC0AxC3ABIhACJIgDAFIhMiPIgEgHIiCDyIgEAFgADQBTIgCgHQBRgMBTgWQAtgPAigFQAigFAaABIAEgBIAAAAIgiB0IgCAFIhIhOIgGgGIhsDoIgDAHgAAHBcQBigCBjgNIhjCsIgDAFgAjbiRQhTg/gDhZQAGA/A6AtQBCAzBdAAQASAAARgCIAKgBQA/gKAxgmIAMgJIAMgMQAqgrAAg5IgBgLIgBgJIAEAAICHAAQACANAAANQAABehWBBQgqAggyARIgCABIgEABIgPAEQgsAMgxAAQh6AAhVhDg");
	this.shape_49.setTransform(1.2,-109.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5517C").s().p("ACGJMQgUgLgGgVQgGgVAKgUQALgTAVgHQAVgGAUAKQAUALAGAVQAHAWgLATQgLAUgVAGQgIADgIAAQgNAAgMgHgAA0IPQgIgFgDgJQgCgJAEgIQAFgJAJgDQAJgCAIAEQAIAFADAJQADAIgEAJQgFAIgJADIgHABQgFAAgGgCgACfHKQgMgGgEgOQgEgMAHgMQAGgMANgEQANgDALAGQAMAGAEANQAEANgGAMQgHAMgNADQgFACgFAAQgHAAgHgEgAo6F/QgUgKgHgWQgGgVAKgUQAKgUAWgHQAVgHAUALQAUAKAGAWQAHAVgKAUQgKAUgWAHQgIACgIAAQgNAAgMgGgAnAF4QgNgFgEgOQgDgMAGgMQAGgMAMgEQAOgEALAGQAMAGAEANQAEANgGALQgGAMgNAFIgKABQgHAAgHgEgAjkFQICCjxIAEAHIiDDzgAFUEpIBsjoIAGAGIhuDrgACaEEIBjitQhjAOhiABIhDCSIgEgIIA/iKQi2AAi0gxIgdgIIgFgBIghgKIgSgDQgRgEgKgBQgagCgLABIAFARQhYg2BTAQQAngBB+AoQARAFAUAFICNAWQBOAFBfAAQC6gCCGgZQAegGAbgHQBdgXAjgHQBRgshJBMIghBsIgFgGIAih0IAAAAIgEABQgagCgiAGQgiAFgtAPQhTAWhRAMIACAHIhjCtgAoLEDQgIgFgDgJQgDgJAEgIQAFgJAJgCQAJgDAJAEQAIAEADAKQACAJgEAIQgEAIgJADIgIABQgFAAgFgCgAmIDvIA1iYIAFALIg2CYgAAkg0QhyAAhVg8IgRgOQhahJAAhoQAAgRACgMIJhAAQACAOAAAPQAABohaBJIgMAKIgMAIIgKAHQhEAthzAEgAkBksIABAOQADBZBTA/QBVBCB5AAQAyAAAsgLIAPgEIAEgCIACAAQAygRAqggQBWhCAAhdQAAgOgCgNIiHAAIgEAAIg+AAIifAAIgCAAIieAAIg+AAQgCAKAAAKgAlmhFQgNgDgIgKQgIgLACgNQACgOALgHQALgIANACQANACAJALQAIAKgDAOQgCANgKAIQgJAGgLAAIgFAAgAnHhsQgWgEgOgSQgNgSADgWQAEgWARgNQATgOAWAEQAWADANASQANASgDAWQgDAXgSANQgPAKgRAAIgIAAgAG8iFQgNgDgGgMQgHgLADgOQAEgMAMgHQALgHANAEQANADAHALQAHAMgEANQgDANgMAHQgIAEgIAAIgJgBgAH5jLQgWgGgMgTQgLgTAGgWQAFgWAUgLQAUgLAVAGQAVAFAMAUQALATgGAVQgFAWgUALQgNAIgNAAQgHAAgHgCgAl6jUQgKgBgFgHQgGgIABgJQABgKAIgFQAIgGAKABQAJACAGAIQAFAHgCAJQgBAKgHAGQgHAEgGAAIgEgBgAGjkSQgKgCgEgIQgFgIACgJQADgKAIgFQAIgEAJACQAJADAFAIQAFAIgDAJQgCAJgIAFQgFADgGAAIgGgBgAihoDQhRgEAAgFQAAgFBRgDQBRgDB0AAQB1AABQADQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDgAiho9QhRgEAAgFQAAgFBRgDQBSgEBzAAQBzAABSAEQBSADAAAFQAAAFhSAEQhSADhzAAQhzAAhSgDg");
	this.shape_50.setTransform(-3.7,-110.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F1749F").s().p("AieLzIgugkIidjeQANgIAAgLQggAIghAAQgqAAgkgMIAAAEQAAAOAVAJQAKAFANACIAEABIABAAIAJAAIAFAAIAAAAIABAAIADgBIABAAIgEABIANgBIC6DoIgCAGQgggFgegIQg6gSgOgGIgBAAIgKgEIAAgBIgogQQgMgIgVgKQhIgng/g2QgZgqgRgtQgtiGAOimIAEgvQABgUAjieQAjigCNjwIARgZQCVjXDHg8QAXgHAXgFIBDgIQAhgCAgADIAqAGIBRAWQAnAPAoAWQA1AeAwApIBAA/IAUAWIAFAGIAdAkQA4BLAvBgQAiB2AAB+QAACpg9CbQg6CVhrBzQhpB0iLA/QiOBCicAAQgaAAgZgCgACpIMQgVAHgLATQgKAUAGAVQAGAVAUALQAUALAVgHQAVgGALgUQALgTgHgWQgGgVgUgLQgMgGgNAAQgIAAgIACgABSIHQgJADgFAJQgEAIACAJQADAJAIAFQAJAEAJgDQAJgDAFgIQAEgJgDgIQgDgJgIgFQgFgDgGAAIgGABgAC+GxQgNAEgGAMQgHAMAEAMQAEAOAMAGQAMAHAMgFQANgDAHgMQAGgMgEgNQgEgNgMgGQgHgEgIAAIgJABgAoYE+QgWAHgKAUQgKAUAGAVQAHAWAUAKQAUAKAVgGQAWgHAKgUQAKgUgHgVQgGgWgUgKQgMgGgNAAQgIAAgIACgAmjFgQgMAEgGAMQgGAMADAMQAEAOANAFQALAHANgEQANgFAGgMQAGgLgEgNQgEgNgMgGQgGgEgIAAQgFAAgGACgAjIF8ICDjzIBLCPIADgFIAEAIIBEiSIBfCjIADgFIAEAHIBjitIBQDSIADgHIAEAJIBujrIBIBNIACgEIAFAGIAhhsQBJhNhRAtQgjAHhdAXQgbAHgeAGQiGAZi6ACQhfAAhOgFIiNgWQgUgFgRgFQh+gognABQhTgRBYA3IA/DOIADgJIAEALIA2iYIBmD0IAEgGgAnuD8QgJACgFAJQgEAIADAJQADAJAIAFQAJAEAJgDQAJgDAEgIQAEgIgCgJQgDgKgIgEQgGgCgFAAIgHABgAj1kMQAABoBaBJIARAOQBVA8ByAAIAAAAQBzgEBEgtIAKgHIAMgIIAMgKQBahJAAhoQAAgPgCgOIphAAQgCAMAAARgAlbhcQgLAHgCAOQgCANAIALQAIAKANADQAOACALgIQAKgIACgNQADgOgIgKQgJgLgNgCIgFAAQgKAAgJAGgAnHiqQgRANgEAWQgDAWANASQAOASAWAEQAWADASgNQASgNADgXQADgWgNgSQgNgSgWgDIgJgBQgRAAgPALgAHOidQgMAHgEAMQgDAOAHALQAGAMANADQANAEAMgHQAMgHADgNQAEgNgHgMQgHgLgNgDIgJgBQgIAAgHAEgAIEkLQgUALgFAWQgGAWALATQAMATAWAGQAVAFATgLQAUgLAFgWQAGgVgLgTQgMgUgVgFQgIgCgHAAQgNAAgNAHgAlsjZQgIAFgBAKQgBAJAGAIQAFAHAKABQAJACAIgFQAHgGABgKQACgJgFgHQgGgIgJgCIgEAAQgIAAgGAFgAG2kZQgIAFgDAKQgCAJAFAIQAEAIAKACQAJADAIgFQAIgFACgJQADgJgFgIQgFgIgJgDIgGAAQgGAAgFACgAiInxQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhQgDh1AAQh0AAhRADgAiIorQhRADAAAFQAAAFBRAEQBSADBzAAQBzAABSgDQBSgEAAgFQAAgFhSgDQhSgEhzAAQhzAAhSAEgAItH+IgVgCIgjgDIgKgEQgVgJAAgOQAgAIAiAAQApAAAlgMIAAAEQAAAOgVAJQgKAEgWAFIAAAAIgEAAg");
	this.shape_51.setTransform(-6.2,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_12},{t:this.shape_6},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_16},{t:this.shape_15},{t:this.shape_6},{t:this.shape_14},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_19},{t:this.shape_18},{t:this.shape_6},{t:this.shape_17},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_16},{t:this.shape_15},{t:this.shape_6},{t:this.shape_14},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_13},{t:this.shape_12},{t:this.shape_6},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},9).to({state:[{t:this.shape_26},{t:this.shape_9},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-3.1}},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_32},{t:this.shape_9},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_20,p:{x:-5.7}},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_39},{t:this.shape_9},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-7.2}},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_47},{t:this.shape_9},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_2},{t:this.shape_40}]},2).to({state:[{t:this.shape_39},{t:this.shape_9},{t:this.shape_51},{t:this.shape_50},{t:this.shape_36},{t:this.shape_49},{t:this.shape_48},{t:this.shape_33,p:{x:-7.1}},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_32},{t:this.shape_9},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_20,p:{x:-5.7}},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_26},{t:this.shape_9},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-3.1}},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-210,152.4,210);


(lib.M_monster_blue_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye right
	this.instance = new lib.eye_blue_big();
	this.instance.parent = this;
	this.instance.setTransform(-52.2,113.9,2.243,2.243,180,0,0,4.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:4.3,regY:4.3,x:-52.6,y:112.8},0).wait(1).to({x:-53.1},0).wait(1).to({x:-53.7},0).wait(1).to({x:-54.3},0).wait(1).to({x:-54.8},0).wait(1).to({x:-55.4},0).wait(1).to({x:-56},0).wait(1).to({x:-56.5},0).wait(1).to({x:-57.1},0).wait(1).to({x:-57.7},0).wait(1).to({x:-58.2},0).wait(1).to({x:-58.8},0).wait(1).to({x:-59.4},0).wait(1).to({x:-59.9},0).wait(1).to({x:-60.5},0).wait(1).to({x:-61.1},0).wait(1).to({x:-61.6},0).wait(1).to({x:-62.2},0).wait(1).to({x:-62.8},0).wait(1).to({x:-63.3},0).wait(1).to({x:-63.9},0).wait(1).to({x:-64.5},0).wait(1).to({x:-65},0).wait(1).to({x:-64.5},0).wait(1).to({x:-64},0).wait(1).to({x:-63.5},0).wait(1).to({x:-62.9},0).wait(1).to({x:-62.4},0).wait(1).to({x:-61.9},0).wait(1).to({x:-61.3},0).wait(1).to({x:-60.8},0).wait(1).to({x:-60.3},0).wait(1).to({x:-59.7},0).wait(1).to({x:-59.2},0).wait(1).to({x:-58.7},0).wait(1).to({x:-58.1},0).wait(1).to({x:-57.6},0).wait(1).to({x:-57.1},0).wait(1).to({x:-56.5},0).wait(1).to({x:-56},0).wait(1).to({x:-55.5},0).wait(1).to({x:-55},0).wait(1).to({x:-54.4},0).wait(1).to({x:-53.9},0).wait(1).to({x:-53.4},0).wait(1).to({x:-52.8},0).wait(1).to({x:-52.3},0).wait(1).to({x:-51.8},0).wait(1).to({x:-51.2},0).wait(1).to({x:-50.7},0).wait(1).to({x:-50.2},0).wait(1).to({x:-49.6},0).wait(1).to({x:-49.1},0).wait(1).to({x:-48.6},0).wait(1).to({x:-48},0).wait(1).to({x:-47.5},0).wait(1).to({x:-47},0).wait(1).to({x:-46.5},0).wait(1).to({x:-45.9},0).wait(1).to({x:-45.4},0).wait(1).to({x:-44.9},0).wait(1).to({x:-44.3},0).wait(1).to({x:-43.8},0).wait(1).to({x:-43.3},0).wait(1).to({x:-42.7},0).wait(1).to({x:-42.2},0).wait(1).to({x:-41.7},0).wait(1).to({x:-41.1},0).wait(1).to({x:-40.6},0).wait(1).to({x:-40.1},0).wait(1).to({x:-39.5},0).wait(1).to({x:-40.1},0).wait(1).to({x:-40.6},0).wait(1).to({x:-41.1},0).wait(1).to({x:-41.6},0).wait(1).to({x:-42.1},0).wait(1).to({x:-42.7},0).wait(1).to({x:-43.2},0).wait(1).to({x:-43.7},0).wait(1).to({x:-44.2},0).wait(1).to({x:-44.7},0).wait(1).to({x:-45.3},0).wait(1).to({x:-45.8},0).wait(1).to({x:-46.3},0).wait(1).to({x:-46.8},0).wait(1).to({x:-47.3},0).wait(1).to({x:-47.8},0).wait(1).to({x:-48.4},0).wait(1).to({x:-48.9},0).wait(1).to({x:-49.4},0).wait(1).to({x:-49.9},0).wait(1).to({x:-50.4},0).wait(1).to({x:-51},0).wait(1).to({x:-51.5},0).wait(1).to({x:-52},0).wait(1));

	// eye left
	this.instance_1 = new lib.eye_blue_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.8,114,2.243,2.243,180,0,0,3.6,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:4.3,regY:4.3,x:74.6,y:112.8},0).wait(1).to({x:74.1},0).wait(1).to({x:73.5},0).wait(1).to({x:72.9},0).wait(1).to({x:72.4},0).wait(1).to({x:71.8},0).wait(1).to({x:71.2},0).wait(1).to({x:70.7},0).wait(1).to({x:70.1},0).wait(1).to({x:69.5},0).wait(1).to({x:69},0).wait(1).to({x:68.4},0).wait(1).to({x:67.8},0).wait(1).to({x:67.3},0).wait(1).to({x:66.7},0).wait(1).to({x:66.1},0).wait(1).to({x:65.6},0).wait(1).to({x:65},0).wait(1).to({x:64.4},0).wait(1).to({x:63.9},0).wait(1).to({x:63.3},0).wait(1).to({x:62.7},0).wait(1).to({x:62.2},0).wait(1).to({x:62.7},0).wait(1).to({x:63.2},0).wait(1).to({x:63.7},0).wait(1).to({x:64.3},0).wait(1).to({x:64.8},0).wait(1).to({x:65.3},0).wait(1).to({x:65.9},0).wait(1).to({x:66.4},0).wait(1).to({x:66.9},0).wait(1).to({x:67.5},0).wait(1).to({x:68},0).wait(1).to({x:68.5},0).wait(1).to({x:69.1},0).wait(1).to({x:69.6},0).wait(1).to({x:70.1},0).wait(1).to({x:70.7},0).wait(1).to({x:71.2},0).wait(1).to({x:71.7},0).wait(1).to({x:72.2},0).wait(1).to({x:72.8},0).wait(1).to({x:73.3},0).wait(1).to({x:73.8},0).wait(1).to({x:74.4},0).wait(1).to({x:74.9},0).wait(1).to({x:75.4},0).wait(1).to({x:76},0).wait(1).to({x:76.5},0).wait(1).to({x:77},0).wait(1).to({x:77.6},0).wait(1).to({x:78.1},0).wait(1).to({x:78.6},0).wait(1).to({x:79.2},0).wait(1).to({x:79.7},0).wait(1).to({x:80.2},0).wait(1).to({x:80.7},0).wait(1).to({x:81.3},0).wait(1).to({x:81.8},0).wait(1).to({x:82.3},0).wait(1).to({x:82.9},0).wait(1).to({x:83.4},0).wait(1).to({x:83.9},0).wait(1).to({x:84.5},0).wait(1).to({x:85},0).wait(1).to({x:85.5},0).wait(1).to({x:86.1},0).wait(1).to({x:86.6},0).wait(1).to({x:87.1},0).wait(1).to({x:87.7},0).wait(1).to({x:87.1},0).wait(1).to({x:86.6},0).wait(1).to({x:86.1},0).wait(1).to({x:85.6},0).wait(1).to({x:85.1},0).wait(1).to({x:84.5},0).wait(1).to({x:84},0).wait(1).to({x:83.5},0).wait(1).to({x:83},0).wait(1).to({x:82.5},0).wait(1).to({x:81.9},0).wait(1).to({x:81.4},0).wait(1).to({x:80.9},0).wait(1).to({x:80.4},0).wait(1).to({x:79.9},0).wait(1).to({x:79.4},0).wait(1).to({x:78.8},0).wait(1).to({x:78.3},0).wait(1).to({x:77.8},0).wait(1).to({x:77.3},0).wait(1).to({x:76.8},0).wait(1).to({x:76.2},0).wait(1).to({x:75.7},0).wait(1).to({x:75.2},0).wait(1));

	// monster
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD8139").s().p("Ap7CAIAAkYIA+AAIAAEwQgegRgggHgAGrCPQgfgMgegGIAAkVIEOAAQiABrhFAnIAACYIgMgDg");
	this.shape.setTransform(32.7,-181.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD683A").s().p("Am2CHIAAiBQhEgniBhqIEOAAIAAEXQgjgIgmADgAI/CHIAAkSIA9AAIAAEVQgggFgdACg");
	this.shape_1.setTransform(5.7,-182.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E6E6").s().p("AKKBQIgGgOIgVg3Qgrh1gLgoQgDgMAAgFIAAgBIB7AAIgGFJIghhVgAqviaIgBgKIB7AAIgGFJQhokLgMg0g");
	this.shape_2.setTransform(4.3,57.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AI/ikIBwAAIgFALIhyE+gAqnikIBuAAIgHAQIhuE5g");
	this.shape_3.setTransform(15.7,57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C3C2F").s().p("AHdCmQhEhEAAhhQAAgTACgUIABAEQANhVBBg5QBAg4BWgBIAEAAIAGAAQBCAFAwAbQASALAQAOQBBA5AMBVIAAgCQAEATAAASQAABfhFBGQhFBEhhAAQhhAAhGhEgAsoCmQhGhGAAhfQAAgRADgSIACgOIADgOIAGgSIAWgtQAPgVATgTIAXgVIAogZQAtgVA1gBIAFAAQBKAAA4AnIAMAIIAEACIACACIADAEIAPANIAKAKIADAFIAMAOIAUAhQAMAZAGAeQAFAYAAAZQAABhhEBEQhFBEhhAAQhiAAhEhEg");
	this.shape_4.setTransform(12.1,114.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B7B91").s().p("AkZeRIAjALIAkALQgigKglgMgAS8biIAggTQhAAohDAkIgKAFQA3geA2gggAz7SmQhDhag3hkQh9jihBkWQgvjHgCiMIEbDeQgYhcgUhZQg2kGACjxQACjTAyiYQA2ieBrhcIBPHYQgPkMB+lPQB5k9DDj4QAbgjAbgfQCtjIClg5QAygRAugDQAmgDAjAIQAgAIAeARQA/AjAyBMQCODUBZEsQhaArhVAwQnTENktHVQlsI2AAKnQAAGbCLF9IAJAIQjBiiigjagAQiK9QgQgOgSgLQgwgbhCgFIgGAAIgEAAQhXABg/A4QhBA5gNBVIgBgEIgCggQAAhgBEhGQBFhEBiAAQBiAABEBEQBEBGAABgQAAAXgDALIAAACQgMhVhBg5gAiaM9QgFgegNgZIgUghIgLgOIgDgFQgKgLgMgKIgDgCIgEgEIgCgCIgDgCIgNgIQg4gnhKAAIgEAAQg2ABgsAVIgoAZIgMAKQgbAXgSAcIgXAtIgFASIgEAOIgCAOIgCgkQAAhgBGhGQBEhEBhAAQBiAABEBEQBFBGAABgIgCAkIgEgOgAA+CkQi7gCicgEIAHgRIhtAAIh8AAIABAKQhRgEAAgGQAAgJD2gIQCwgEDjgCIC7AAQFZAAD1AGQD2AIAAAJQAAAHhrAEIAFgLIhxAAIh7AAIAAABQAAAGAEALQjbAGkbAAIi7gBgAZZvWIgehTIAHAQQAUA0AQAyIgNgjgAIl8YQBbiICCgFQAegCAfAFQAeAFAgAMIALADQC6BHDDD5QAqA2AnA4QhtgJhOAAQm2AAmbCoQBWkVCFjCg");
	this.shape_5.setTransform(-13.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#37AFE4").s().p("AoEbcIj/g2IgkgLIgjgMIiQg3QhCgchCgiIgsgYIgFgDIgMgHIgEgCIkQi+IgcgXIgJgIQiMl9AAmbQAAqmFto3QEsnVHUkNQBWgwBZgrIAUBEIAVBWIAmiUIAOguQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQGZipG2AAQBPAABtAJQB7C1BXDVIASAuIAfBTIAMAjIAeBnQA5DYgMC2IBPnYQDQCyAFGyQAEFChlFqIEfjcQgFCLguDGQgqCxhDCcQhTDFh5CkQggAtgiAoQgBADgCACIgNAOQgBADgCABIgEAGIgEAFQh3CbiYB9QhnBVh4BGIgfASQg3Ahg2AeIjPBbIgFACIgEABIgFADIgEABIgQAFIgFADIgEABIgFACIgFABIlOBPIgOACIgMABIhWAIQg6AFg8AAgACvGAQhEBFAABhIADAfQgDAVAAAUQAABhBEBEQBGBEBiAAQBgAABGhEQBEhGAAhfQAAgTgEgTQAEgLAAgXQAAhhhEhFQhEhEhiAAQhiAAhGBEgAxWGAQhGBFAABhIADAkQgDASAAASQAABfBGBGQBFBEBhAAQBhAABFhEQBFhEAAhhQAAgagGgZIADAPIADgkQAAhhhFhFQhFhEhhAAQhhAAhFBEgADzA8IAVA3IAGAOIAgBWIBzk/QBrgFAAgGQAAgJj3gIQj0gHlYAAIi8AAQjkACiwAFQj1AIAAAJQAAAFBRAFQAMA0BoEMIBtk5QCbAEC8ABIC8ACQEbAADZgGQALAoArB1gAxLG7IANgKIgYAWQgTATgPAVQATgcAagYgAsKHHIgPgNIAEABQALALAKALIgKgKg");
	this.shape_6.setTransform(42.3,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.6,-196.5,383.2,426.2);


(lib.player_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start "NU" buble//
		//normal condition//
		//this.stop();//
	}
	this.frame_21 = function() {
		//stop "NU" buble//
		//start celebrate//
		this.stop();//
	}
	this.frame_30 = function() {
		//stop celebrate//
		// start back to normal//
		this.stop();
	}
	this.frame_38 = function() {
		//stop back to normal//
		//start to be sad//
		//this.stop();//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(9).call(this.frame_30).wait(8).call(this.frame_38).wait(1));

	// speak
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B7B91").s().p("ACkBzQgEAAgDgCQgDgEAAgDIAAgjQAAgFADgCQADgDAEAAIBCAAIgDhOQgBgXgHgLQgHgJgSgBIgUAAQgEABgEgEQgCgCAAgFIAAghQAAgEACgDQADgEAFAAIAWAAQA0ABAYAXQAXAXACA0IAGB6QAAAEgDADQgDACgFAAgAA3BzQgEAAgDgCQgDgEAAgDIAAjQQAAgEADgDQADgDAEAAIAyAAQAFAAADADQADADAAAEIAADQQAAAEgDADQgDACgFAAgAg9BzQgEAAgEgCQgDgEAAgEIAAg1QAAgEADgDQAEgEAEABIA0AAQAFgBADAEQACADAAAEIAAA1QAAAEgCAEQgDACgFAAgAiwBzQgEAAgEgCQgDgEAAgEIAAg1QAAgEADgDQAEgEAEABIA0AAQAFgBADAEQADADAAAEIAAA1QAAAEgDAEQgDACgFAAgAkjBzQgEAAgEgCQgDgEAAgEIAAg1QAAgEADgDQAEgEAEABIA0AAQAFgBADAEQADADAAAEIAAA1QAAAEgDAEQgDACgFAAg");
	this.shape.setTransform(127.7,-167.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).to({_off:true},12).wait(21));

	// eye_right
	this.instance = new lib.eye_blue_big();
	this.instance.parent = this;
	this.instance.setTransform(29.2,-138.1,1,1,0,0,0,4.3,4.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({x:29,y:-144.1},0).wait(1).to({x:24.8,y:-141.6},0).wait(1).to({x:23.7,y:-136.9},0).wait(1).to({x:27.7,y:-133.3},0).wait(1).to({x:33.2,y:-133.2},0).wait(1).to({x:35.5,y:-136.6},0).wait(1).to({x:33.5,y:-142.4},0).wait(1).to({x:28.7,y:-143.9},0).wait(1).to({x:29.2,y:-138.1},0).to({_off:true},1).wait(8));

	// eye_left
	this.instance_1 = new lib.eye_blue_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28.1,-138.1,1,1,0,0,0,4.3,4.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(1).to({x:-28.5,y:-143.9},0).wait(1).to({x:-23.7,y:-142.4},0).wait(1).to({x:-21.8,y:-136.6},0).wait(1).to({x:-24.1,y:-133.2},0).wait(1).to({x:-29.4,y:-133.3},0).wait(1).to({x:-33.4,y:-136.7},0).wait(1).to({x:-32.8,y:-141.3},0).wait(1).to({x:-28.2,y:-144.1},0).wait(1).to({x:-28.1,y:-138.1},0).to({_off:true},1).wait(8));

	// monster
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD8139").s().p("AEABEIAAiHQANAHAOAEIAAB8gAkbBEQA5gwAfgRIAAhDIAGACQAOAEANADIAAB7g");
	this.shape_1.setTransform(-8.3,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD683A").s().p("ACjA/IAAh9QAPAEARgBIAAA6QAfAQA5AwgAkbA/IAAh8QAOACANAAIAAB6g");
	this.shape_2.setTransform(3.7,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E6E6").s().p("AD8BKIADiTQAuB3AGAXIAAAFgAkyBKIADiTIAOAmIADAHIAJAYQATA0AFASIACAHIAAABg");
	this.shape_3.setTransform(4.3,-113.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADtC+IADgIIAxiMIgDCUgAlCC+IACgFIAziPIgDCUgAk4huIgCgCIgDgDQgKgMAAgQQAAgSANgMQAMgNASAAIAFABQAPABALALQANAMAAASQAAASgNANQgNAMgSAAQgQAAgMgKgAEKhrQgGgDgFgFIAAAAQgOgNAAgSQAAgSAOgMQAMgNASAAIAGABQAOACAKAKQANAMAAASQAAASgNANQgMAMgSAAQgLAAgIgEg");
	this.shape_4.setTransform(0.9,-124.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEAgmQgOANAAARQAAASAOANIAAAAQAFAFAGADQAIAEALAAQASAAAMgMQANgNAAgSQAAgRgNgNQgKgKgOgBIgGgBQgSAAgMAMgAkeBoIgDAAQgdgCgWgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk5gjQgNANAAASQAAAPAKAMIADACIACACQAMALAQAAQASAAANgNQANgNAAgQQAAgSgNgNQgLgKgPgCIgFAAQgSAAgMAMg");
	this.shape_5.setTransform(0.8,-138.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAhugzQiaAAhtgDQhtgEAAgEQAAgDAvgCIgCAFIAyAAIA3AAIAAAAIgCgIQBigCB+AAIBTAAQBTABBFACIgCAHIAwAAIA3AAIAAgEQAkACAAACQAAAEhuAEIizADIhTAAgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAVAMAdACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_6.setTransform(12.4,-99.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAi5AvQgvACAAADQAAAEBtADQBtADCZAAIBUAAIC0gDQBtgDAAgEQAAgDgkgCQgFgXguh3IgxCLQhFgChUAAIhUgBQh+AAhgADQgFgSgTg0IgKgYIgCgHIgPgmgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_7.setTransform(-12.6,-111);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7E6E6").s().p("AkXBRIgagDIgBAAIAAigIAPAmIACAGIAKAZQATA0ACACIAEAXIAAATgAD9hSQAuB2AFAYIADANIg1AHIgBABg");
	this.shape_8.setTransform(4.6,-112.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADqDIIAMgwIArh6IAACkIgLABIgrAFIgBABgAlAC6IAAgNIAziPIAAChIgzgFgAk4h5IgCgCIgDgDQgKgMAAgQQAAgSANgMQAMgNASAAIAFABQAPABALALQANAMAAASQAAASgNANQgNAMgSAAQgQAAgMgKgAEKh2QgGgDgFgFIAAAAQgOgNAAgSQAAgSAOgMQAMgNASAAIAGABQAOACAKAKQANAMAAASQAAASgNANQgMAMgSAAQgLAAgIgEg");
	this.shape_9.setTransform(0.9,-123.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEAglQgOANAAASQAAAQAOANIAAABQAFAFAGADQAIAEALAAQASAAAMgNQANgNAAgQQAAgSgNgNQgKgKgOgBIgGgBQgSAAgMAMgAkeBoIgDAAQgcgCgXgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk5ghQgNAMAAASQAAAPAKAMIADACIACADQAMAKAQAAQASAAANgNQANgNAAgQQAAgSgNgMQgLgLgPgCIgFAAQgSAAgMANg");
	this.shape_10.setTransform(0.8,-138.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAiFgfQhZgDhugJIAAgTIgEgXQBpgRA4gCQA4gDBUADQBUADBTANIgMAxQg2AGgpACIhEABIhagBgADihCQAkACAAACQAAADghAFIgDgMgAnig+QAAgDAvgCIAAANQgvgFAAgDgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAWAMAcACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_11.setTransform(12.4,-99.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAi5AvQgvACAAADQAAACAvAGIAzAFIABAAIAaADIAZACQBtAKBaACQBjACA8gCQAogCA2gGIAAABIABgBIArgFIALgBIABgBIA1gHQAhgGAAgCQAAgDgkgCQgFgXguh3IgrB5QhTgOhUgCQhUgDg5ACQg4ADhoARQgCgDgTg0IgKgYIgCgHIgPgmgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_12.setTransform(-12.6,-111);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7E6E6").s().p("AkyBPIAAitIAPAmIACAHIAKAZIAMAgIAAAAIANAsIAAAqgAD9heQAuB3ABAHIAHAdIg1AHIgBABg");
	this.shape_13.setTransform(4.6,-111.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AEACEIAhhnIAACjQgiAFgPAFgAlAC4IALgjIAoh4IAACtgAk4h7IgCgCIgDgCQgKgNAAgQQAAgRANgNQAMgMASAAIAFAAQAPACALAKQANANAAARQAAASgNANQgNANgSAAQgQAAgMgLgAEKh4QgGgDgFgEIAAgBQgOgNAAgSQAAgRAOgNQAMgMASAAIAGAAQAOACAKAKQANANAAARQAAASgNANQgMANgSAAQgLAAgIgFg");
	this.shape_14.setTransform(0.9,-123.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEAglQgOANAAASQAAAQAOANIAAABQAFAFAGADQAIAEALAAQASAAAMgNQANgNAAgQQAAgSgNgNQgKgKgOgBIgGgBQgSAAgMAMgAkeBoIgDAAQgagCgZgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk5ghQgNAMAAASQAAAPAKAMIADACIACADQAMAKAQAAQASAAANgNQANgNAAgQQAAgSgNgMQgLgLgPgCIgFAAQgSAAgMANg");
	this.shape_15.setTransform(0.8,-138.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAlMgUIAAgqIgNgsIAAAAQCGgpBiADQBhACAxAKQAzAKA5AQIgQBGIguAPQgRAFiLALQgoACgmAAQhfAAhSgRgADehSQAoASAAACQAAADghAFIgHgcgAnnhGQAAgDA/gQIgLAjQg0gNAAgDgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAYAMAaACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_16.setTransform(12.4,-99.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAitAZQhAAQAAADQAAACA0AOIAzASIA0APQByAZCMgKQCMgKASgFIAtgPQAQgGAigEIABgBIA1gHQAhgGAAgCQAAgDgogSQgBgHguh3IghBmQg6gOgygKQgzgLhhgCQhhgCiGAnIgMghIgKgYIgCgHIgPgmgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_17.setTransform(-12.6,-111);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7E6E6").s().p("AkyBVIAAi8IAPAmIACAHIAKAZIAMAhIANArIAAA8gAD9hnQAiBbAHAUQALAiACAKIg2AYg");
	this.shape_18.setTransform(4.6,-110.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AEIBrIAZhXIAAC0IgtALgAlAC6IAVhLIAehbIAAC9gAk4iDIgCgCIgDgDQgKgMAAgQQAAgSANgMQAMgNASAAIAFABQAPABALALQANAMAAASQAAASgNANQgNAMgSAAQgQAAgMgKgAEKiAQgGgDgFgFIAAAAQgOgNAAgSQAAgSAOgMQAMgNASAAIAGABQAOACAKAKQANAMAAASQAAASgNANQgMAMgSAAQgLAAgIgEg");
	this.shape_19.setTransform(0.9,-122.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEAglQgOANAAASQAAAQAOANIAAABQAFAFAGADQAIAEALAAQASAAAMgNQANgNAAgQQAAgSgNgNQgKgKgOgBIgGgBQgSAAgMAMgAkeBoIgDAAQgbgCgYgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk5ghQgNAMAAASQAAAPAKAMIADACIACADQAMAKAQAAQASAAANgNQANgNAAgQQAAgSgNgMQgLgLgPgCIgFAAQgSAAgMANg");
	this.shape_20.setTransform(0.8,-138.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAlMgCIAAg8IgNgsIgNgiQCghCBvAPQBuAPApARQApAQAtAUIgUBoIgFAAQADAIhoARQhtAShUAAQhmAAg9gagAnnhGQAAgDBJguIgUBLQg1gXAAgDgADXhiQAvAiAAACQAAADghAFQgCgJgMgjgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_21.setTransform(12.4,-99.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAikgEQhJAtAAADQAAACA1AYIAyAXIA0ASQBvAzD2gqQBngSgDgHIAFAAIAtgLIA2gYQAhgGAAgCQAAgDgughQgHgUgihbIgZBXQgsgVgpgQQgqgQhvgPQhvgPieBBIgKgYIgCgHIgPgmgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_22.setTransform(-12.6,-111);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAlMgUIAAgqIgNgsIAAAAQCGgpBiADQBhACAxAKQAzAKA5AQIgQBGIguAPQgRAFiLALQgoACgmAAQhfAAhSgRgADehSQAoASAAACQAAADghAFIgHgcgAnnhGQAAgDA/gQIgLAjQg0gNAAgDgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAWALAcADIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_23.setTransform(12.4,-99.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAiFgfQhZgDhugJIAAgTIgEgXQBpgRA4gCQA4gDBUADQBUADBTANIgMAxQg2AGgpACIhEABIhagBgADihCQAkACAAACQAAADghAFIgDgMgAnig+QAAgDAvgCIAAANQgvgFAAgDgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_24.setTransform(12.4,-99.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ADtC9IADgHIAxiMIgDCTgAlCC9IACgFIAziOIgDCTgAk4huIgCgCIgDgCQgKgNAAgQQAAgRANgNQAMgMASAAIAFAAQAPACALAKQANANAAARQAAASgNANQgNANgSAAQgQAAgMgLgAEKhrQgGgDgFgEIAAgBQgOgNAAgSQAAgRAOgNQAMgMASAAIAGAAQAOACAKAKQANANAAARQAAASgNANQgMANgSAAQgLAAgIgFg");
	this.shape_25.setTransform(0.9,-124.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEAglQgOANAAASQAAAQAOANIAAABQAFAFAGADQAIAEALAAQASAAAMgNQANgNAAgQQAAgSgNgNQgKgKgOgBIgGgBQgSAAgMAMgAkeBoIgDAAQgZgCgagMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk5ghQgNAMAAASQAAAPAKAMIADACIACADQAMAKAQAAQASAAANgNQANgNAAgQQAAgSgNgMQgLgLgPgCIgFAAQgSAAgMANg");
	this.shape_26.setTransform(0.8,-138.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAhugzQiaAAhtgDQhtgEAAgEQAAgDAvgCIgCAFIAyAAIA3AAIAAAAIgCgIQBigCB+AAIBTAAQBTABBFACIgCAHIAwAAIA3AAIAAgEQAkACAAACQAAAEhuAEIizADIhTAAgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAZALAZADIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_27.setTransform(12.4,-99.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AD+BKIADgIIAxiLIgDCTgAkxBKIACgFIAziOIgDCTg");
	this.shape_28.setTransform(-0.8,-113.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAkeBoIgDAAQgZgCgagMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAg");
	this.shape_29.setTransform(0.8,-138.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAhugzQiaAAhtgDQhtgEAAgEQAAgDAvgCIgCAFIAyAAIA3AAIAAAAIgCgIQBigCB+AAIBTAAQBTABBFACIgCAHIAwAAIA3AAIAAgEQAkACAAACQAAAEhuAEIizADIhTAAgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAZAMAZACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_30.setTransform(12.4,-99.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7E6E6").s().p("Ak0BaIgCAAIgDgBIgBAAIAPi+IAPAmIADAGIAJAZQATAzAFASIACAIIAAA5gAEEBaIAAi/QAuB2AEARQACAKACAdIgGACQgYAIgYAHg");
	this.shape_31.setTransform(3.9,-110.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AD4BmIAOhBIAxiLIAAC/IgDABQgdAHgeAFIgBABgAk2BIIAPgqIAviEIgPC+g");
	this.shape_32.setTransform(-1.2,-110.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEAgkIAAgBIAAAAgAkeBoIgDAAQgbgCgYgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAg");
	this.shape_33.setTransform(0.8,-138.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAmKgRIA+AMIAAg5IgCgIQBlARBdACQBeACA6gFQA7gEA2gLIgNBBIgrAEQhaAJh3ACIgPAAQhyAAh9gcgADghJQBSgGAKAEQAJADhTAhIgNAFQgCgdgDgKgAoag/QghgMCLgCIgOArQg6gRgigMgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_34.setTransform(12.4,-99.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAi1AlQiMACAiAMQAhALA6ARIAvAQIABAAIADABIABAAQCGAfB3gCQB4gCBagIIArgGIAAABIABgBQAdgFAdgHIAEgBIAAAAQAYgGAYgJIAGgCIANgFQBTgggJgEQgJgEhTAGQgDgQguh3IgxCLQg3ALg7AFQg7AEhegCQhdgChjgQQgFgSgTg0IgKgYIgCgHIgPgmgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_35.setTransform(-12.6,-111);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AD5BVIANhBIAyiLIgEDAIAAAAIABAKQAAAKADAJIAJgBIgCABIgcAHIgiAJIgIACgAjSB2IACAAIAMgBIAAABIAAABQAAgBgOAAgAkOBvIgVgJIgPgHIgKgEIgEgCIAJgfIAQguIAwiDIgWDmIgBAAg");
	this.shape_36.setTransform(-1.3,-108.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7E6E6").s().p("AkEB3IgBAAIAAAAIgJAAIgCAAIgBgBIgCAAIgMgBIgIAAIgPgCIgHgDIAWjmIAOAmIADAGIAJAZQAUA0AEARIACAIQgCAXABBDIgMABIgCAAgAkxBKIAAgBIgCAAgAEFBUIgBgKIAAAAIAEjAQAtB3AEAQQADAKACAdIAAAAQAAAIgBAHIgCAFIgXAQQgLAHgGACIgCABIgJABQgDgJAAgKg");
	this.shape_37.setTransform(3.5,-108.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAlNAdIgGAAIgLgBIgJgBIAJAAIAAABIABAAIACAAQAOgBAAACIAAgCIAAgBQgBhBACgXIgCgIQBlARBdACQBeACA6gFQA7gEA2gLIgNBBIAAAiQg2AMhtAAQhwAAiqgNgAmXAVIABAAIAHADIgIgDgAp1iHQBBAwCEAKIgQAuIgJAfQh1g4g3hPgADkgTQABgHAAgIIAAAAQgCgdgDgKQCDgVgCACIgmAUQgiASgFADIgcAVIgWAQIACgFgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_38.setTransform(12.4,-99.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAjPBxIAEACIAKAFIAPAGIAVAJIAIADIAPACIAIAAIAMABIACAAIACABIABAAIAJABIALAAIAGABQFRAaBsgaIAIgCIAjgIIAbgIIACAAIACgBQAHgDAKgGIAXgRIAWgQIAdgVQAEgDAjgSIAlgTQADgCiEAUQgDgQguh3IgxCLQg3ALg7AFQg7AEhegCQhdgChjgQQgFgSgTg0IgKgYIgCgHIgPgmIgvCEQiFgKhBgvQA3BOB1A3gAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAiRBgIABAAIAAABgAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_39.setTransform(-12.6,-111);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AEFCcIgCgZIgDgmIAAhOIA8irIgEDAIABAAIAAALIACANIgBAAIABABIABAFIAAAAIAFANQgBADACADIACACIABAAIgCACIAAAAIAAABQADAEgBAVIgIAKIgJAKIgBABIgDADIgEACIAAAAIgWAKIgQAFIAAABgAkcB+IgBAAIgYgRIgQgJIABgKIACgKQACgHADgFIABgGIAUg5IA1ihIgfDxQgBAKgDAKIgEAPIgCAGg");
	this.shape_40.setTransform(-1.7,-104.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E7E6E6").s().p("AkxCNIAAAAIgFgEIgLgHIgGgEIgCgBIABgGIAFgPQADgKAAgKIAgjxIAOAmIADAHIAJAYQATA1AGA3QABAfgFAeQgFAdgHAVIgHAPQgDAGgIAFQABAAABAAQAAAAABAAQAAAAgBAAQAAAAgBAAIgBABQgHAAgbgRgAk2CJIgCgDIAAgBgAlBCBIABAAIgBAAgAkqAjIAAgBIgCAAgAEYByQAAgVgCgEIgBgBIABAAIABgCIAAAAIgCgCQgDgDABgDIgEgNIgBAAIgBgFIAAgBIAAAAIgBgNIgBgLIAAAAIADjAQAuB4AEAQQACAKADAcIgBABIAGAoIAAAEIgGAIIgHAHIgFAFQggAgAAACg");
	this.shape_41.setTransform(2.8,-104.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAlaBxIgTgIQAAgBABAAQAAAAAAAAQAAAAgBAAQgBAAgBABQAIgGADgGIAHgPQAHgUAGgeQAEgcgBggQCFAQBbAFQBaAFAlgHQAmgIA7gQIAABMIACAmIADAaQiJAyh7AAQhtAAhhgogAmgBNIgBgBIABABgAnTAuQhshmhahwQBlBRB/AoIgUA3IgCAGQgDAGgBAHIgCAKIgBAJgADqAKIAAgFIgFgnIAAAAQgCgdgDgKQBvgrBJg2QgtAwgpAyQgqAygLAEQgLAEgeAgIAGgIgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_42.setTransform(12.4,-99.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAhgDkQDNBVEFhgIABABIAAgBIAQgFIAWgKIAAAAIAEgCIADgDIABgBIAJgKIAIgKIAAACQABgCAgggIAFgFIAGgHQAeggAMgEQALgFApgxQApgxAtgxQhJA3hvApQgDgQguh3Ig8CrQg7AQgmAIQglAIhbgFQhagFiEgQQgGg4gTg0IgKgYIgCgHIgPgmIg1ChQh/gnhlhQQBbBuBsBnIAAABIAQAJIAYARIABAAIAAAAIACABIAGAEIAMAHIAFAEIgBAAQAfATAFgDIATAJgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAiRBgIABAAIAAABgAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_43.setTransform(-12.6,-111);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E7E6E6").s().p("AkiDHIAAgBIgDgBIAAgBIgBAAIgBgBIgBgBIgBgBIgYgTIgDgCIgFgEIAAgBIgFgDIgFgFIgCgBIgHgHIAFgQIAMgmQAFgXAAgHIACgYIAfjxIAPAmIADAHIAJAYQATA1AGA4QAAAegEAeQgFAdAAAWQgBAWgHAXQgIAYgJAUQgIATgGAAIgBAAgAkugFIAAgBIgCAAgAEXCIIAAgCIgNhiQgBgIAAgIIAAgBIgBAFIABgGIgBgNIgBgKIAAAAIADjBQAuB4AEAQQACAKACAdIAAABQADASADAXQgCAbAZA5IgCABIgbAZIgQAQIgLAHIgMAJg");
	this.shape_44.setTransform(3.3,-100.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AENDBIgJhLIgEgZIgCgmIAAhNIA8isIgEDBIAAAAIABAKIACANIgBAGIABgFIAAABQAAAIABAIIAMBiIAAACIACAZIgvAbQgGADgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAgAExBiIABAAIAAgBIgBABgAlGCCQAAAFgBgSIAAgFIAAgLIAAgJIABgdIAAgLIACgKIAGgRIAAgCIABgCIATg1IA1iiIggDxIgBAYQgBAHgFAXIgLAmIgGAQIgZgZg");
	this.shape_45.setTransform(-1.5,-101.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAaAjAWAmIAGALQApBKAaBWQAKAgAIAhQAVBZABA+Ih/hjIAOA2IAGAbQAZB0gCBsQAABegXBDIgGAQQgYA7gpAlIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAisD2QiOgUgdgQQgegQgIgHQAGABAJgUQAJgUAHgXQAHgYABgVQAAgWAGgeQAEgcgBggQCFAQA4gBQA4gCAqABQArABB2gUIAABMIACAmIAEAaIAJBKQAAAEAMgFQiNBJh4AAQgbAAgagDgAmWCoIgHgFIAYATIABABIgSgPgADKCNIALgHIAIgGQgNAKgTALIANgIgAq2jmQCCCPB/AoIgTA0IgBACIAAACIgGASIgCAKIAAAKIgBAdIAAAKIAAALIAAAFIAAAMQhshth4jrgADqAHQgCgWgDgTIAAAAQgCgdgDgKQBdgkAgghQAfgiAJgHQAIgIAvg8QgbBQg0BsQgrBXhABDQgag5ACgbgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_46.setTransform(12.4,-99.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#37AFE4").s().p("AlmMSQg3hRgnhfIgIgUIgNglIgGgQIgNguQgZhgAFhRIgjDSQhdhPgCjCQgCiPAtihIiABiQACg+AVhYQAqiyBhiEIAeglIABgDIAGgGIABgCIACgCIACgCQA1hGBDg3QAugmA2gfIAOgJQAZgPAZgNIBbgoIACgBIACgBIACgBIACAAIAHgDIACgBIACAAIACgBIACgBICVgjIAGgBIAFAAIAmgEQAbgCAaAAIBoAHIByAYIAQAFIAQAFIBAAZQAeAMAdAQIATAKIADACIAFADIACABIB5BUIAJAHIAIAHQA+CqAAC3QAAEuijD9QiGDRjQB4QgmAVgoATIgJgeIgJgmIgRBCIgGAUIgBABQi2BLjDAAQgjAAgxgEgAi9D+IAHAHIACABIAFAFIAFADIAAABIAFAEIADACIAHAGIASAOIABABIABABIAAAAIABABIADABIAAABQAJAGAdARQAdAQCOATQCOAUCthZIAugbQATgMANgKIgIAGIAQgQIAbgZIACgBQBAhDArhZQA0hqAbhRQgvA9gIAHQgIAHggAiQggAhhdAjQgDgQguh3Ig8CrQh3AUgqAAQgrgBg3ABQg4ACiEgQQgGg4gTg0IgKgYIgCgHIgPgmIg1ChQh/gniBiOQB3DqBsBtIAAgMQABASAAgFIAaAZgAE9j0QAAArAeAfQAfAeArAAQAsAAAegeQAfgfAAgrIgBgQIABgQQAAgrgfgfQgegegsAAQgrAAgfAeQgeAfAAArQAAALACALIgBgGgAjileQgeAfAAArQAAAIABAJQgBAFAAAKQAAArAeAfQAfAeArAAQAsAAAfgeQAegfAAgrIgBgOIABgSQAAgrgegfQgfgegsAAQgrAAgfAegAGhDEIAAABIgBAAIABgBgAiRBgIABAAIAAABgAHvjKQAJgIAGgKQgIANgMAKIgFAFIAKgKgAFgjFIgJgJIAEAEIAHAGIgCgBg");
	this.shape_47.setTransform(-12.6,-111);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AEFCcIgCgZIgDgmIAAhOIA8irIgEDAIABAAIAAALIACANIgBAAIABABIABAFIAAAAIAFANQgBADACADIACACIABAAIgCACIAAAAIAAABQADAEgBAVIgIAKIgJAKIgBABIgDADIgEACIAAAAIgWAKIgQAFIAAABgAkcB+IgBAAIgYgRIgQgJIABgKIACgKQACgHADgFIABgDIAAgBIAAgBIAAgBIABAAIAAgDIATg2IA1ihIgfDxQgBAKgDAKIgEAPIgCAGg");
	this.shape_48.setTransform(-1.7,-104.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAD7ghQgNAMAAASQAAARANANIABAAQAEAFAGADQAJAEAKABQASAAANgNQAMgNAAgRQAAgSgMgMQgKgKgOgCIgHgBQgRAAgNANgAkeBoIgDAAQgbgCgYgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk+geQgMAMAAASQAAAPAKAMIACADIACACQAMAKARAAQASAAANgMQAMgNAAgRQAAgSgMgMQgLgKgPgCIgFAAQgSAAgNAMg");
	this.shape_49.setTransform(0.8,-138.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3B7B91").s().p("ABMNnQgOgEgNgHQgdgQgWgiQg/hegniGQAogTAlgWQDQh4CGjRQCij7AAkvQAAi3g+iqIgHgHQBYBJBJBkQAdAoAZAsQA4BlAdB8QAVBZABA+Ih/hjQALApAJAoQAZB0gCBsQAABegXBDQgYBHgvApIgjjTQAGB4g5CVQg1COhXBuIgYAeQhNBZhKAZQgWAIgVABIgHAAQgNAAgMgCgAlyNoQgNgDgOgFIgFgBQhTgghXhvIgkgxQAwAEAkAAQDDAAC3hLQgmB8g8BWQgoA9g7ACIgFAAQgKAAgMgBgArJHUQgJgXgHgWIAGAPIANAlIgDgHgAlaBxIgTgIQAAgBABAAQAAAAAAAAQAAAAgBAAQgBAAgBABQAIgGADgGIAHgPQAHgUAGgeQAEgcgBggQCFAQBbAFQBaAFAlgHQAmgIA7gQIAABMIACAmIADAaQiJAyh7AAQhtAAhhgogAmgBNIgBgBIABABgAnTAuQhshmhahwQBlBRB/AoIgTA0IgBADIAAAAIAAACIgBABIAAABIgBACQgDAGgBAHIgCAKIgBAJgADqAKIAAgFIgFgnIAAAAQgCgdgDgKQBvgrBJg2QgtAwgpAyQgqAygLAEQgLAEgeAgIAGgIgABhkdQgfgfABgrIABgQIABAHQADANAFALIAJAPIAFAGIACACIAJAKIACABIABABIABABIABABIAGAEQAZARAhAAIACAAQAYAAAUgKIARgLIAGgEQAMgLAIgMIAKgUIADgIIABgGIABgHIABAQQAAArgfAfQgeAfgsAAQgrAAgfgfgAnckdQgegfAAgrQgBgKACgFIAAgBQAGAmAdAaIAPALQAXAMAbACIADAAIACAAQAnAAAcgZQAdgaAFgmIABACIABAOQAAArgeAfQggAfgrAAQgrAAgfgfgAnvsqIAGgDQgaAOgZAPIgNAIQAcgSAegQgAButjIgQgFIAfAKIgPgFg");
	this.shape_50.setTransform(12.4,-99.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ADrDHIANhBIAxiLIgDDAIAAAAIABAKQAAAKACAJIAKgBIgCABIgcAHIgiAJIgIACgAjhDoIACgBIANgBIAAABIAAACQgBgCgOABgAkdDhIgUgJIgQgHIgKgEIgDgCIAJgfIAQguIAwiDIgWDmIgCAAgAkxiaIgCgCIgCgDQgKgMAAgQQAAgSAMgMQANgNASAAIAFABQAPABALALQAMAMAAASQAAASgMANQgNAMgSAAQgRAAgMgKgAERiXQgGgDgEgFIgBAAQgNgNAAgSQAAgSANgMQANgNARAAIAHABQAOACAKAKQAMAMAAASQAAASgMANQgNAMgSAAQgKAAgJgEg");
	this.shape_51.setTransform(0.1,-120);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAD/ghQgNAMAAASQAAARANANIABAAQAEAFAGADQAJAEAKABQASAAANgNQAMgNAAgRQAAgSgMgMQgKgKgOgCIgHgBQgRAAgNANgAEAgkIAAgBIAAAAgAkeBoIgDAAQgbgCgYgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk6geQgMAMAAASQAAAPAKAMIACADIACACQAMAKARAAQASAAANgMQAMgNAAgRQAAgSgMgMQgLgKgPgCIgFAAQgSAAgNAMg");
	this.shape_52.setTransform(0.8,-138.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ADoDYIANhBIAxiMIAADAIgDABQgdAHgeAFIAAAAgAlHC6IAPgrIAwiEIgPC/gAk4iJIgCgCIgDgDQgKgMAAgQQAAgSANgMQAMgMASAAIAFAAQAPACALAKQANAMAAASQAAASgNANQgNAMgSAAQgQAAgMgKgAEKiGQgGgDgFgFIAAAAQgOgNAAgSQAAgSAOgMQAMgNASAAIAGABQAOACAKAKQANAMAAASQAAASgNANQgMANgSAAQgLgBgIgEg");
	this.shape_53.setTransform(0.4,-121.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAD7ghQgOAMAAASQAAARAOANIAAAAQAFAFAGADQAIAEALABQASAAAMgNQANgNAAgRQAAgSgNgMQgKgKgOgCIgGgBQgSAAgMANgAkeBoIgDAAQgbgCgYgMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk+geQgNAMAAASQAAAPAKAMIADADIACACQAMAKAQAAQASAAANgMQANgNAAgRQAAgSgNgMQgLgKgPgCIgFAAQgSAAgMAMg");
	this.shape_54.setTransform(0.8,-138.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ADpC8IADgIIAxiMIgDCUgAlHC8IACgGIAziOIgDCUgAk4hsIgCgCIgDgDQgKgMAAgQQAAgSANgMQAMgMASAAIAFAAQAPACALAKQANAMAAASQAAASgNANQgNAMgSAAQgQAAgMgKgAEKhpQgGgDgFgFIAAAAQgOgNAAgSQAAgSAOgMQAMgNASAAIAGABQAOACAKAKQANAMAAASQAAASgNANQgMANgSAAQgLgBgIgEg");
	this.shape_55.setTransform(1.4,-124.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5C3C2F").s().p("AEfBoQghAAgZgRIgGgDIgBgBIgBgCIgCgBIgGgGIgFgFIgBgBIgFgHIgJgOQgGgMgCgNQgDgLAAgLQAAgrAfgeQAegfAsABQArgBAfAfQAfAfAAAqIgBAPIgBAHIgCAGIgCAIIgKAUQgHAJgIAJIgLAKIgRALQgUAJgYAAIgCAAgAEEghQgNAMAAASQAAARANANIABAAQAEAFAGADQAJAEAKABQASAAANgNQAMgNAAgRQAAgSgMgMQgKgKgOgCIgHgBQgRAAgNANgAkeBoIgDAAQgZgCgagMIgPgLQgdgZgFgnIAAABQgCgIAAgIQAAgqAfgfQAfgfArABQArgBAfAfQAfAeAAArIgBARIgBgCQgFAngdAZQgdAZgmAAIgCAAgAk1geQgMAMAAASQAAAPAKAMIACADIACACQAMAKARAAQASAAANgMQAMgNAAgRQAAgSgMgMQgLgKgPgCIgFAAQgSAAgNAMg");
	this.shape_56.setTransform(0.8,-138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_17},{t:this.shape_23},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_12},{t:this.shape_24},{t:this.shape_20},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_7},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_7},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},9).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_33},{t:this.shape_37},{t:this.shape_36},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_33},{t:this.shape_41},{t:this.shape_40},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_33},{t:this.shape_45},{t:this.shape_44},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_43},{t:this.shape_50},{t:this.shape_49},{t:this.shape_41},{t:this.shape_48},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_52},{t:this.shape_37},{t:this.shape_51},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31},{t:this.shape_1},{t:this.shape_2}]},2).to({state:[{t:this.shape_7},{t:this.shape_30},{t:this.shape_56},{t:this.shape_55},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},2).wait(2));

	// speak
	this.instance_2 = new lib.buble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93.7,-107.2,0.009,0.006,0,0,180,58.6,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:52.1,scaleX:1,scaleY:1,x:131.9,y:-157.2},6).wait(12).to({regY:52,scaleX:0.01,scaleY:0.01,x:93.7,y:-107.2},3).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-190,179.6,190);


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start hover//
		this.stop();
	}
	this.frame_4 = function() {
		//end hover//
		//start hover out//
		this.stop();
	}
	this.frame_8 = function() {
		//end hover out//
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(24,24,24,0.008)").s().p("Ao8DSQh/ABAAiAIAAilQAAh/B/gBIR4AAQCAABAAB/IAAClQAACAiAgBg");
	this.shape.setTransform(2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// Layer 5
	this.text = new cjs.Text("שחק שוב", "19px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(0.8,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10).to({y:-11.8},0).wait(1).to({y:-13},0).wait(1).to({y:-14.3},0).wait(1).to({y:-13},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.5},0).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,32,32,0.008)").s().p("AlTDMIAAmXIKnAAIAAGXg");
	this.shape_1.setTransform(1.8,-2.1,2.065,1.022);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({scaleY:1,y:-1.9},0).wait(4).to({x:2.2},0).wait(1).to({x:1.8,y:-2},0).wait(3).to({scaleY:0.91,x:2.2,y:-4.6},0).to({_off:true},3).wait(1));

	// Layer 3
	this.instance = new lib.btnd();
	this.instance.parent = this;
	this.instance.setTransform(2,0.1,1,1,0,0,0,70,19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({y:-1.2},0).wait(1).to({y:-2.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-2.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:0.1},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D606E").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_2.setTransform(2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B5056").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_3.setTransform(2,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B5056").s().p("AJEgbIyHAAQh1AAgDBeIAAgiQAAhjB4AAISHAAQB4AAAABjIAAAiQgDheh1AAg");
	this.shape_4.setTransform(2,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6B77").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_5.setTransform(2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#687680").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_6.setTransform(2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758089").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_7.setTransform(2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#828B92").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_8.setTransform(2,0,0.882,0.736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B5056").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_9.setTransform(2,-3.9,0.882,0.736);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D606E").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_10.setTransform(2,0,0.882,0.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-23,140.4,42.1);


(lib.start_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start hover//
		this.stop();
	}
	this.frame_4 = function() {
		//end hover//
		//start hover out//
		this.stop();
	}
	this.frame_8 = function() {
		//end hover out//
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(24,24,24,0.008)").s().p("Ao8DSQh/ABAAiAIAAilQAAh/B/gBIR4AAQCAABAAB/IAAClQAACAiAgBg");
	this.shape.setTransform(2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// Layer 5
	this.text = new cjs.Text("התחל", "19px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(0.8,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10).to({y:-11.8},0).wait(1).to({y:-13},0).wait(1).to({y:-14.3},0).wait(1).to({y:-13},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.5},0).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,32,32,0.008)").s().p("AlTDMIAAmXIKnAAIAAGXg");
	this.shape_1.setTransform(1.8,-2.1,2.065,1.022);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({scaleY:1,y:-1.9},0).wait(4).to({x:2.2},0).wait(1).to({x:1.8,y:-2},0).wait(3).to({scaleY:0.91,x:2.2,y:-4.6},0).to({_off:true},3).wait(1));

	// Layer 3
	this.instance = new lib.btnd();
	this.instance.parent = this;
	this.instance.setTransform(2,0.1,1,1,0,0,0,70,19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({y:-1.2},0).wait(1).to({y:-2.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-2.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:0.1},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D606E").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_2.setTransform(2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B5056").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_3.setTransform(2,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B5056").s().p("AJEgbIyHAAQh1AAgDBeIAAgiQAAhjB4AAISHAAQB4AAAABjIAAAiQgDheh1AAg");
	this.shape_4.setTransform(2,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6B77").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_5.setTransform(2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#687680").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_6.setTransform(2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758089").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_7.setTransform(2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#828B92").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_8.setTransform(2,0,0.882,0.736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B5056").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_9.setTransform(2,-3.9,0.882,0.736);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D606E").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_10.setTransform(2,0,0.882,0.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-23,140.4,42.1);


(lib.random_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start hover//
		this.stop();
	}
	this.frame_4 = function() {
		//end hover//
		//start hover out//
		this.stop();
	}
	this.frame_8 = function() {
		//end hover out//
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(24,24,24,0.008)").s().p("Ao8DSQh/ABAAiAIAAilQAAh/B/gBIR4AAQCAABAAB/IAAClQAACAiAgBg");
	this.shape.setTransform(2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// Layer 5
	this.text = new cjs.Text("הגרל", "19px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(0.8,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10).to({y:-11.8},0).wait(1).to({y:-13},0).wait(1).to({y:-14.3},0).wait(1).to({y:-13},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.5},0).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,32,32,0.008)").s().p("AlTDMIAAmXIKnAAIAAGXg");
	this.shape_1.setTransform(1.8,-2.1,2.065,1.022);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({scaleY:1,y:-1.9},0).wait(4).to({x:2.2},0).wait(1).to({x:1.8,y:-2},0).wait(3).to({scaleY:0.91,x:2.2,y:-4.6},0).to({_off:true},3).wait(1));

	// Layer 3
	this.instance = new lib.btnd();
	this.instance.parent = this;
	this.instance.setTransform(2,0.1,1,1,0,0,0,70,19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({y:-1.2},0).wait(1).to({y:-2.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-2.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:0.1},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D606E").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_2.setTransform(2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B5056").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_3.setTransform(2,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B5056").s().p("AJEgbIyHAAQh1AAgDBeIAAgiQAAhjB4AAISHAAQB4AAAABjIAAAiQgDheh1AAg");
	this.shape_4.setTransform(2,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6B77").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_5.setTransform(2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#687680").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_6.setTransform(2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758089").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_7.setTransform(2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#828B92").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_8.setTransform(2,0,0.882,0.736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B5056").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_9.setTransform(2,-3.9,0.882,0.736);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D606E").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_10.setTransform(2,0,0.882,0.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-23,140.4,42.1);


(lib.finish_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start hover//
		this.stop();
	}
	this.frame_4 = function() {
		//end hover//
		//start hover out//
		this.stop();
	}
	this.frame_8 = function() {
		//end hover out//
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(24,24,24,0.008)").s().p("Ao8DSQh/ABAAiAIAAilQAAh/B/gBIR4AAQCAABAAB/IAAClQAACAiAgBg");
	this.shape.setTransform(2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// Layer 5
	this.text = new cjs.Text("סיים", "19px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(0.8,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10).to({y:-11.8},0).wait(1).to({y:-13},0).wait(1).to({y:-14.3},0).wait(1).to({y:-13},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.5},0).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,32,32,0.008)").s().p("AlTDMIAAmXIKnAAIAAGXg");
	this.shape_1.setTransform(1.8,-2.1,2.065,1.022);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({scaleY:1,y:-1.9},0).wait(4).to({x:2.2},0).wait(1).to({x:1.8,y:-2},0).wait(3).to({scaleY:0.91,x:2.2,y:-4.6},0).to({_off:true},3).wait(1));

	// Layer 3
	this.instance = new lib.btnd();
	this.instance.parent = this;
	this.instance.setTransform(2,0.1,1,1,0,0,0,70,19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({y:-1.2},0).wait(1).to({y:-2.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-2.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:0.1},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D606E").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_2.setTransform(2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B5056").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_3.setTransform(2,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B5056").s().p("AJEgbIyHAAQh1AAgDBeIAAgiQAAhjB4AAISHAAQB4AAAABjIAAAiQgDheh1AAg");
	this.shape_4.setTransform(2,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6B77").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_5.setTransform(2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#687680").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_6.setTransform(2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758089").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_7.setTransform(2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#828B92").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_8.setTransform(2,0,0.882,0.736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B5056").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_9.setTransform(2,-3.9,0.882,0.736);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D606E").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_10.setTransform(2,0,0.882,0.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-23,140.4,42.1);


(lib.continue_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//start hover//
		this.stop();
	}
	this.frame_4 = function() {
		//end hover//
		//start hover out//
		this.stop();
	}
	this.frame_8 = function() {
		//end hover out//
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(24,24,24,0.008)").s().p("Ao8DSQh/ABAAiAIAAilQAAh/B/gBIR4AAQCAABAAB/IAAClQAACAiAgBg");
	this.shape.setTransform(2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// Layer 5
	this.text = new cjs.Text("המשך", "19px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(0.8,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10).to({y:-11.8},0).wait(1).to({y:-13},0).wait(1).to({y:-14.3},0).wait(1).to({y:-13},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.5},0).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,32,32,0.008)").s().p("AlTDMIAAmXIKnAAIAAGXg");
	this.shape_1.setTransform(1.8,-2.1,2.065,1.022);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({scaleY:1,y:-1.9},0).wait(4).to({x:2.2},0).wait(1).to({x:1.8,y:-2},0).wait(3).to({scaleY:0.91,x:2.2,y:-4.6},0).to({_off:true},3).wait(1));

	// Layer 3
	this.instance = new lib.btnd();
	this.instance.parent = this;
	this.instance.setTransform(2,0.1,1,1,0,0,0,70,19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({y:-1.2},0).wait(1).to({y:-2.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-2.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:0.1},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D606E").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_2.setTransform(2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B5056").s().p("ApDC/Qh4AAAAhkIAAi1QAAhkB4AAISHAAQB4AAAABkIAAC1QAABkh4AAg");
	this.shape_3.setTransform(2,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B5056").s().p("AJEgbIyHAAQh1AAgDBeIAAgiQAAhjB4AAISHAAQB4AAAABjIAAAiQgDheh1AAg");
	this.shape_4.setTransform(2,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6B77").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_5.setTransform(2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#687680").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_6.setTransform(2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758089").s().p("ApDC/Qh4AAAAhkIAAi6QADhfB1AAISHAAQB1AAADBfIAAC6QAABkh4AAg");
	this.shape_7.setTransform(2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#828B92").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_8.setTransform(2,0,0.882,0.736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B5056").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_9.setTransform(2,-3.9,0.882,0.736);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D606E").s().p("AqREDQiIAAAAiIIAAj1QAAiICIAAIUjAAQCIAAAACIIAAD1QAACIiIAAg");
	this.shape_10.setTransform(2,0,0.882,0.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-23,140.4,42.1);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjXHZQlMhOkaieQl2jSi+kkQhaiJgliLQAoCIBXCHQC+EjF3DSQEaCeFMBOQFBBMFFgHQFFgIEXhaQEghdDFipIgBAFQjFCpkgBdQkXBalFAIIg7ABQknAAkkhFg");
	mask.setTransform(154.9,84.6);

	// Layer 3
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(153.7,77.2,1,1,0,0,0,153.7,77.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(2.9,30.4,304.1,108.4), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AApTTQhKgChdgIQgXgCg+gKIhUgQIhTgUQgPgEgagIIgpgNQgWgHgqgQQg4gVgugVQg3gagUgMQg9gggngZQg5glgigZQgpgfg0gtQgcgZgigiQgpgqgggmQgagegxhDIgng7QgSgbgXgrQgfg3gWgxQgthjglhxQgNgngNgxQgQg8gQhEQgPhGgNhSQgJg2gCgTQgLhSgGhFQgIhSgDhEQgGhwgBhaQgBhXADhcQAEiMAJhwIADghQgREQCvEKQC/EhFyDPQEZCeFNBNQFABMFGgIQFFgIEWhaQEhhcDEipIhBD1QhVEchpDXQiHEXiaCEQgyApgVAQQg4AogyAgQgiAWgyAaQgsAYgXAJQg2AXg+AXQggAMgoALQhKAUgbAFQhaARhEAIQgtAFgyACQgiACgcAAIgagBg");
	mask.setTransform(154.3,126.5);

	// Layer 3
	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(154.3,126.3,1,1,0,0,0,154.3,126.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,2.9,308.7,247.2), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrTGQh1gIiFgbQgtgKgmgLIhSgYQgKgDhLgcQglgOgpgUQg/gegsgYQg7ghgsgfQhEgug2guQhdhOhNhgQgtg3ghgxQgYgmgagrQgJgPgPgeQgcgxgghMQgbg+gWhAQgPgrgNguIgLgnQgKgmgLguIgUhYIgQhYIgOhcIgIhHIgOiMQgOiqACjOQADjKAPinQgREOCtEIQC9EeFvDNQEWCcFKBNQE+BLFCgHQFCgIEUhZQEehbDDioQgaBzguCXQhSELhkDMQiGEViZCDQgzAqgTAOQgyAmgjAWQhMAtgeAQQg3Acg7AZQgtASg7ATQgtAOgOADQhCAQgUAEQg3AKgWADQgqAHgqADQhDAGhgABIgHAAQgaAAgygDg");
	mask.setTransform(152.9,125.4);

	// Layer 3
	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(152.9,125,1,1,0,0,0,152.9,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,2.9,305.8,245), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiPDkQDojJA4kDIgBAGQg4EDjoDIg");
	mask.setTransform(14.5,23.3);

	// Layer 3
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(14.5,23.3,1,1,0,0,0,14.5,23.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,29,46.6), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiEGHQBpjXBUkcQAriPAWhmQDci9A+jzQgZBugoCAQgrCPgyCJQgRAwghBRIg5CFQgzBuglBHIhuDDQgxBPg0BFIg3BGQgjAqgYAbQgmApgYAYQgeAeglAhQCQiFB/kGg");
	mask.setTransform(42.2,80);

	// Layer 3
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(42.4,80,1,1,0,0,0,42.4,80);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(2.1,1.6,80.5,156.8), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiIGDQBkjMBRkKQAuiYAahzQDUi2BAjqQgXBggiBxQgWBJgYBKQgZBLgNAjQgYBAgVA2IgzB8QgfBFgbA7QgYAxgiBCIhBB1QgRAfgdAtQgwBNg1BGQhDBXgxA0IhCBEIgmAjQCHiDB5j5g");
	mask.setTransform(42.4,79.4);

	// Layer 3
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(42.3,79,1,1,0,0,0,42.3,79);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(3.1,2.8,78.6,153.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjBaSQg1gDgfgEIhUgMQgpgGgqgKQg5gMhqggQgkgLgtgSIhOgiQgjgQgtgXQgsgWg4gkQgzgfhKg5QgcgWg3gyQgrgogmgsQgmgqgngzQgbgkgig2QgYglgbgzQg4hognhtQgMghgehcQgMgngWhaQgLgngRhdQgIgrgHgyIgGgqQgNhigEgtQgJhmgFhkQgHiSAEiXQAChoAFhRQAFhhAHg+QAPiUBKiGQBMiKCGhzQDDinEdhdQEUhZFCgIQFCgHE+BLQFKBOEWCcQGODeC6E7QC1EyhGEuQgbBxglB7QgtCWgnBqQgbBJgRAsQgdBJgWAzQg3B+g4BsQhmDEh0CaQg9BQg2A6QhFBLhEA6IgbAWIgBABIgqAiQgwAkg5AjQgpAbgtAXQhJAjg2AWQg5AXhCATQg6ARgqAIQhZARhCAHQhQAJhRAAQg0AAgzgEgAmKISQk8AHi3CeQhaBOghBiQggBfAbBmQA3DYEHCTQEHCTE7gIQE7gHC4ieQBahNAhhjQAfhfgahmQg4jXkHiTQj4iMkqAAIgfAAg");
	mask.setTransform(168,168.5);

	// Layer 3
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(168,168.5,1,1,0,0,0,168,168.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,336.2,337.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AYWEZQi8k5mNjeQkZielNhOQlChMlEAIQlFAIkXBaQkgBdjFCpQiEBxhMCHQhKCEgRCRIAAgGQASiRBKiEQBMiHCEhxQDFipEghdQEXhaFFgIQFEgIFCBMQFNBPEZCdQGNDfC8E4QBYCRAdCSQggiOhWiPg");
	mask.setTransform(167.6,56.6);

	// Layer 3
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(168.5,70.2,1,1,0,0,0,168.5,70.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,335.3,113.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhvalQh5AAiEgWIhVgRIhTgUQgogKgwgRQhIgZhXgmQgmgRhGgmQgtgYgmgaQhcg/gggcQg5gvgfgfQgsgrgvg3Qg+hHg4hbQhAhogvhvQg0h+gjh+Qgih+gYiLQgMhKgLheQgJhQgFhFQgHhsgBgiQgEhyABhTQACiEADhUQAEhZAIhXIAEgkQAPiWBKiHQBNiMCHh0QDEioEhheQEWhaFFgIQFFgHFBBLQFNBPEZCdQGSDhC8E+QC2E1hHExQgeB8gnCAQgrCPgyCJQgaBEgZA+QgaA/gfBGQgfBKg4BrIhCB3QgTAhgbArQgwBPg2BGIg3BHQgiApgaAcQgqAughAgQgYAXgtAoIggAbIhHA2QgwAig7AjQg5AggvAWQhCAehAAXQg1ATgvALQg5APgdAGQgsAIgjAFQgyAIgiACQhdAHg+AAIgJAAgAmNIeQk7AHi4CeQhaBNghBjQggBfAbBmQA3DXEHCTQEHCTE7gHQE7gIC4idQBahOAhhiQAfhggahlQg4jYkHiTQj4iMkqAAIgfABg");
	mask.setTransform(169.7,170);

	// Layer 3
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(169.7,170,1,1,0,0,0,169.7,170);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,339.2,340.1), null);


(lib.base_bw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.base_0();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,19.7,1,1,0,0,0,-0.1,19.7);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(20, 0, -100, 0))];
	this.instance.cache(-89,-2,178,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.base_bw, new cjs.Rectangle(-86.9,0,176,43), null);


(lib.pbw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.player_1();
	this.instance.parent = this;
	this.instance.setTransform(-3.8,-105,1,1,0,0,0,-3.9,-105);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(65, 0, -100, 0))];
	this.instance.cache(-82,-212,156,214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pbw1, new cjs.Rectangle(-79.9,-210,155,214), null);


(lib.pbw0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.player_0();
	this.instance.parent = this;
	this.instance.setTransform(4.3,-95.2,1,1,0,0,0,4.4,-95);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(65, 0, -100, 0))];
	this.instance.cache(-87,-192,184,194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pbw0, new cjs.Rectangle(-85.5,-190.2,183,193), null);


(lib.pause_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M_monster_pink_big();
	this.instance.parent = this;
	this.instance.setTransform(286.4,455.8,1,1,0,0,0,-173.2,24.7);

	this.instance_1 = new lib.M_monster_blue_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1029.6,37.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#182A33","#1A485B","#215063","#24657F","#1F789B"],[0,0.275,0.51,0.718,1],-412,-477.7,474.2,499.4).s().p("Ehj/AuGMAAAhcLMDH/AAAMAAABcLg");
	this.shape.setTransform(640,293.4,1,1.005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pause_bg, new cjs.Rectangle(0,-159.4,1280,865.3), null);


(lib.open_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_128 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(128).call(this.frame_128).wait(1));

	// Layer 7
	this.instance = new lib.M_monster_blue_big();
	this.instance.parent = this;
	this.instance.setTransform(299.9,316.9,0.458,0.458,180,0,0,11.6,16);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(1).to({regX:14,regY:16.5,scaleX:0.47,scaleY:0.47,x:292.7,y:320.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:286.7,y:324.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:280.6,y:328.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:274.6,y:332.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:268.5,y:336.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:262.4,y:340.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:256.4,y:344.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:250.3,y:348.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:244.3,y:352.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:238.2,y:357},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:232.2,y:361},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:226.1,y:365},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:220.1,y:369},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:214,y:373.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:207.9,y:377.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:201.9,y:381.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:195.8,y:385.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:189.8,y:389.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:183.7,y:393.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:177.6,y:397.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:171.6,y:401.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:165.5,y:405.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:159.4,y:409.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:153.4,y:413.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:147.4,y:417.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:141.3,y:421.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:135.3,y:425.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:129.2,y:429.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:123.1,y:433.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:117.1,y:437.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:111,y:441.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:104.9,y:445.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:98.9,y:449.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:92.8,y:453.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:86.8,y:457.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:80.7,y:461.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:74.7,y:465.8},0).wait(1));

	// Layer 6
	this.instance_1 = new lib.M_monster_pink_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(918,296,0.431,0.431);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).wait(1).to({regX:-173.2,regY:24.7,scaleX:0.45,scaleY:0.45,x:850.7,y:308.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:858,y:311.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:865.3,y:313.4},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:872.7,y:315.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:880,y:318},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:887.3,y:320.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:894.7,y:322.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:902,y:324.8},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:909.3,y:327.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:916.6,y:329.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:923.9,y:331.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:931.2,y:333.9},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:938.6,y:336.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:945.9,y:338.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:953.2,y:340.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:960.5,y:342.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:967.9,y:345.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:975.2,y:347.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:982.5,y:349.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:989.9,y:352},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:997.2,y:354.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1004.5,y:356.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1011.8,y:358.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1019.1,y:361.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1026.5,y:363.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1033.8,y:365.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1041.1,y:367.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1048.4,y:370.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1055.7,y:372.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1063.1,y:374.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1070.4,y:377},0).wait(1).to({scaleX:1,scaleY:1,x:1077.7,y:379.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:1085.1,y:381.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:1092.4,y:383.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:1099.7,y:386.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:1107,y:388.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:1114.4,y:390.6},0).wait(1));

	// monsters
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37AFE4").s().p("ABlNEQgDgpARghQAHgGAIABQAJABAGAIQAUAdAJApgAGxMDQgNgJgLAFQgOgJgKgKIAVAFQAWAFAOgKIALAaQgDACgEAAQgGAAgHgFgAGmLRQgEgQgDgEIADAAQgCgFgDgCQgDgCgDADQgHADADAJQAEAJgGAEQgEgGgIABQgGABgEgHQgJAGAHAOIAHARQgSgTACgXQALgaAfAOQAQADAHATQAFAOgBATQgMgKgDgQgAESGPQgQgPAPgPQAPgQAOANQAMAIgIAYQgGAFgIAAQgIAAgKgEgADBEJQgJgEgGgBQADAAACgCIAGgHQAAAEAEABQAEABADgBQAEgNgCgQIAAgBIAMApIgGABQgHAAgIgDgACaD8IAHgCIAGAIgAG/D3QgVgFgPgRQgOgTgEgLQgGgRAFgSQAHgWAVgDQALgCAZAEQAaAWAIALQAPAVgEAYQgCADgDAQQgCANgIAGQgegDgJgDgAITCpQg1g4gogIQgcgIAAggQgBglgNgKQgDADADADIAAAAQgFgBgGAGQgGAGgDgEIAKAmIACAGQhPh9hPhcQAKAAATAPQASAPAOgDQARAeAoAXQA5AhAGAEQAXgGAbAOQAaAOALAWIgRgPQgLgJgIAIQARAKgDAKQgEAKAUAKIAMgOQAEA9ABADQAIAhAhASIAtAnQAaAYAOATQAJAKgGAFIgPAIQgfgPg9hBgACHDqQgNgJgBgKQADALANAFQAMAFACANQgCgFgOgKgADBDNIgRABIAOgHIgWgSQgNgJgMgBQABANgGAKQgIAMgNgCQACgUANgLQAPgNATANQAVAKAKAbIgEgFgAGEBLIATAgQgNgKgGgWgAGNA2IABgBQAAADADAEQADAEgIACQgFgGAGgGgABqj4QhXhDgcgbQgXAQAZATQAZAUgKAKQgRgKgSAJQgUAPgNAFIhJg+QgIAAgGAGIgLAJQgUgDgQgnQgQgkgcACQgJgNgFggQgEgdgPgNQgQAFAMANQAQASgCAKQgHAAgKgPQgKgNgLAFQgCAIAMAlQAJAbgTAMQgEgNgRACQgSABgGgIQgMAGAEALQAEAIAKAGQgLADgJgOQgKgQgGAAQgFAFAHAQQAEAKgQgCQgCgIgJgJQgIgJgHAAQgHAFAGAKQAFALgCAEQgFgHhFhGQgtgugDguQgCgYAIgYQAJgYAPgPQAMgDAfgPQAdgLAPAQQAPgCAUAJQAKAFAWANQgBgTABgGQACgPAMgFQAQAOADAnQACAoARAQIALgoQAFgYgKgMQADgJAZgXQATgRgLgTQAEACAFgBIAJgBQACgIgBgJIgBgTQghAFgfgXQghgXgCgkQgGgUAPgRQAOgQAUgDQAWAAAVAOQATANAOASIASAqQgMACgEAHQgEAGAKAGQAJACAHgEQAHgEADgGQABADAMAGQAIAFgBAJQAOgXAXgKQAXgLAcADIAFAVQAZgRAYARQAgAXAPABQApABAKAdQAJAeAoACQgXAFgEADQgNAHAKAQQAGAHAUgCQAVgCAIAJQgEAKgnACQgeACARAfQAMAJAGATIALAgQAXAHAvAuQAkAjAkABQgLACgCAMIgEAbQAJATAYAJQAhANAFADQgDAGAEANQACAKgKAHIg4gqQghgYgcgLIgbASQgNAJAFAQQADAJATBZQANA5ATAVQgngphJg5gAjjjQIADACIgIAEgAorq1QgRACgMgGQgUgMgPgUQgQgUgFgWIAIgZQAFgOAGAPQgDgLALgJQALgJAJAJQgQABADAJQABAFAHALIAEgEQABAEgFAKIgCAGQgFgIgLABQgOAAAAANQAEAKADADIAKAHIAAgGIACAMQADAKgIACQAJAUAgAFQAoAHAJAGQgLgFgSADgAoKrGQgBgIgEgFIAQASIgBAAQgIAAgCgFgAoHrfQABgBAEADQADADgBgHQAMACADALgAoRsFQgXgIAIgPIgWgLIgUgLQAIAEAWADQAUADAEARQAKAGAGAPIADAJQgDgHgNgFg");
	this.shape.setTransform(445.8,450.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1749F").s().p("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");
	this.shape_1.setTransform(929.5,229.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37AFE4").s().p("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");
	this.shape_2.setTransform(309.8,414.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1749F").s().p("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");
	this.shape_3.setTransform(814.9,185.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#37AFE4").s().p("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");
	this.shape_4.setTransform(316.5,321.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1749F").s().p("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");
	this.shape_5.setTransform(862.6,272.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1749F").s().p("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");
	this.shape_6.setTransform(862.6,276.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#37AFE4").s().p("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");
	this.shape_7.setTransform(284.8,321.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1749F").s().p("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");
	this.shape_8.setTransform(862.6,276.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#37AFE4").s().p("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");
	this.shape_9.setTransform(297.5,302.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1749F").s().p("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");
	this.shape_10.setTransform(866.9,286.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#37AFE4").s().p("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");
	this.shape_11.setTransform(309.6,262.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1749F").s().p("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");
	this.shape_12.setTransform(858,305.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37AFE4").s().p("Ai4PAQgUg2gGgJQgZgfgQgjIh7gcQglgIgggNQgYgFgRgIIgXgTQgngZgfgiIgEgHQgdgfgOghQgegRgMgfQgNgkACgoIgRAEQhkAZAOhgQghgIgggTQhAglAIhFQANh2BggQQACgMANgNQgbgbgRgiQgWgpABgwQgagOgbgTQgMgMgBgXQgBgagGgKQACgEAVgNQARgKAAgPQA0gZAegKQAIgNAKgLIAAgdIAwgcIAPgIQgCgfAUgaQAug7A8gqQAagTAQgcQAdg1AzgYQgUgTgCggQgEgygMgPQAFAAASAGQARAFAJgCQAWAJAMgYQAOgbARABQAFgPgLgZQgPgigCgGQgOgDgTgSQgTgQgPgBQgOgJAOgKQARgNgBgGQAZAPAuAnQArAgAkAEQAFgSARAJQAQAIACgTIgLgdQATAIAGgSQgLgqgLgSIAVAGQAPACAIgHIADgpQAQA7A1AXQAIgFgBgQQgCgPADAAIAEASQAEAMAGADQAagZARgjQARgkgBgcQABAEAFgCQAKgEACAAIgJBKQgGAtADAcQANgEACAZQADAYAbgGQADgCABgPQAAgMALAAQA1AUBTgOQAjgFBqgdQgCACgDAIQgDAHgCANQgFAWgNAGQgJAFgRAEIgJACIglAHQgqAMAKApQgBAwgaAwQgZAtgoAhQACAhAVAVQANANAiARIAYANQAOAAALgJQAIAGAPAUQAPAOAPgKQAZAggHAlQgBAIgFAOIACAEQAGALgJAIIgKADIAEAJQAagQAZgZQAWgWAggpQARATAFAEQAOAKAQgBQAMgLAZgVQAGACAIAJQAIAJAIgBIAdgYQAJAKAPAUQAOARAQADQAMAGAMgLIATgTQAIAFADAKIACARQAEAKAdATQAYARgDAOQgLABgEAJQgEAIAEALQAEAEAQAFQANAFADAJQgVAbADAZQADAhgIAXQAIANAVABQALABAYgBQgBAIgIgCQgKgDgCACQAdAOA6AHQA9AGARAiQABAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIh6gLQgTAWgOAZQAFAEAAAIQgCAPAFADQAIgLAdAHQAZAGAHgUQAEAKgLALQgMAMAEAKIABAHQAIAVARARIAMALIAPAJQANAIARAGIABABIAbAKQARAGAHAFQAOAIALAMQAIAKAFANQgRAJgYAqIgEAGQgVAggZAEQgNAZAQAWQAKAMAVATIgFAIQAMAPACAUQADAagMAeIgIAFIAIAJIgNgFIgcAUIgCACQAAAFADAIQAEAKgQgCQgBgGgHgHQgKADgJAAQAFAKgCAFIgOgQIgBgBIAAAAQgNgDgMgEIAHAGQAXAWAWAJQAOAFANABQgLACgCAMIgEAbQAKATAYAJQAgAMAFAEQgCAFADANQACAKgKAHIg3gpQgigZgcgKIgaARQgOAKAFAQQADAIAUBZQAMA5ATAVQgegegxgoIghgbQhXhEgdgbQgXARAZATQAbAUgKAKQgTgLgSAKQgRAMgMAGIgEABIgRgOQgNANgWADQhnAPhVhGIgJALIgLANIgDAHQgDAEgDADIgHgBQgbASglAAQgTAAgZAHQgqAoACAjQABAigpBMQgoBMgPhFQgPhGgDgDQgJgKgMgIIAABBQAAApgxA8QgaAggRAAQgQAAgKgagAlhmMIAAAAIAAAAgAMUMfIgFgEQAGgBAIAFgAFGLYIADADIgIADg");
	this.shape_13.setTransform(315.8,299.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1749F").s().p("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");
	this.shape_14.setTransform(819,280.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37AFE4").s().p("AljOaQjZididjiQgXghgmghQi7iggWiiQgWigBxizQB0i2B6iiQAXggAPgrQBhkoEohTQA5gHA1ABIAAAAQC8AKEgFFIALANQANAXAPAWID5C7IAAAAQBsBUATAYQDJEHAlE6QAIBFgKBIQgRBtgwBjQg2BthXAkIAEAGIgFgGQhdAliCguQk+hwjTDsIgKAKQhbBlhpAAQhZAAhjhHgAA8o2IAAACIACgEIgCACgAMtMSIgEgFQAFAAAJAFg");
	this.shape_15.setTransform(313.3,300.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1749F").s().p("ADBOuQiGgKhmhKQkIi6hqk7Qgrh/hGhyQjUleBVjVQBHizBjgIQFbgdFFhjQHvAWFpFDQFAEeh8GWQhjFCkRDIQhgBHiAAcQiBAdhfAOQg2AIhCAAQgzAAg5gFgAGVMhIADABIADgDIgGACgASnDOIgCgEIgFAEIAHAAIAAAAgA2hLyQgKgDgBgIIALgBQALAAABAGQgCAHgGAAIgEgBgAqeK+IAJgGQAQgMgFgMQAEAFgDAKIgGAQIgGABQgEAAgFgCgAqAJ9QAHgQADgBIgUAuIAKgdgA1KKJIADgFIAAAIIgCAEQgFgCAEgFgAo9J/IAJAAQgDAJgGAIgApuIvIAGgMIADABIgGANgAntH8IASAAIgPADIgDgDgAt+HJIACgEQADACgDAFIgCAFgAWKpZQgLgJgCgMQgEgLADgLQACgNAJgHQAIgDAKAFQAIAEAFAHIAGAMQgJgQgJgFQgJAHAAgBQgEgGgIgBQgKANADAOIAGAaQAJgDAIALQAHAJAHgHIAFgRQADgLAAgFQACAQgNAYQgMAAgKgKgAO4skQAGgGAFAJIgVAJQAEgCAGgKgAOytNIAQgCIgHAIgARKt7IAEgGIAAAIgAP/uJQgCgCgCgIQACAEAEABIAHABQgFAEgDAAIgBAAgAROuxQgCAGgDADQgCgOAHAFg");
	this.shape_16.setTransform(808.3,293.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37AFE4").s().p("AA4MbQhwjjhxDTQhxDUg1gsQg1gsgrhCIiJjQQhfiPgFiKIgCADIgCADIgBADIgCAEIgCADIgGAOQgDAHgFAHIgFAHQgmARgZghQgvg+gWhJQgcheAShkQAOhSAWhTQhABUgjhmQgVg8AShxQARhwBDh4QBCh4Cjh6QCjh6DygyQGaguEsEFQBKBAAzBSQB9DGBHDZQAXBChEgCQgOgBgOgDIAKASQAbA6gEBDQgCA5gJAqQgHAkgLAgQgdBagxBNQgQAYgTgSIgDgHIAAgDIgBgDIAAgEIAAgfIAAgZQAAgLgDgKQgFgQgLgLQglA2hVDIQhWDIggAuIgmA2IhvB9QgYAbgaAAQhBAAhQihgAgComIAAADIACgEIgCABgAOHJ3IgEgEQAGgBAIAFg");
	this.shape_17.setTransform(304.2,316);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1749F").s().p("AXuTIIABAFIgCAFgApsSUIADgBIAIAFgAYLR2IAGACIgPAIgAFCItQhjgBiAgHQiAgHi7iAQi8h/gYkEQgYkDBVj7QBUj7DGjCQC+i8CoAMQEPAJDXFQQDYFPgVE1QgVE0iACOQiACPh+AoQh8AnhiAAIgDAAgAEwGfIADACIAEgEIgHACgA4GFwQgJgCgBgIIAKgBQALAAABAGQgCAGgGAAIgEgBgAsCE8IAJgGQAPgLgEgNQADAGgDAJIgGAQIgFABQgEAAgFgCgArkD8QAGgRADgBIgTAuIAKgcgA2vEHIAEgFIAAAJIgDAEQgEgCADgGgAqiD9IAJAAQgDAKgGAHgArTCuIAHgNIACACIgGAMgApSB7IASAAIgOACIgEgCgAvjBHIACgDQADABgCAGIgDAFgAUlvaQgKgKgDgLQgEgLADgMQACgMAJgHQAIgDAKAEQAJAEAEAIIAHAMQgKgRgJgEQgJAGAAgBQgDgFgJgCQgKANADAPIAGAaQAJgDAIAKQAIAJAHgHIAEgQQAEgLgBgGQACAQgNAZQgLgBgLgJgANTylQAGgHAFAJIgUAJQADgBAGgKgANNzOIAQgDIgHAIg");
	this.shape_18.setTransform(818.4,332.5);

	this.instance_2 = new lib.M_monster_blue_big();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.9,317,0.458,0.458,180,0,0,13.7,16.1);

	this.instance_3 = new lib.M_monster_pink_big();
	this.instance_3.parent = this;
	this.instance_3.setTransform(918,296,0.431,0.431);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37AFE4").s().p("AFxVqIAAggIAMgNIADAtgAFxUuIAAgGIAGAKgAl31kQgJgCABgCQARgEACANIgDAHQABgKgJgCg");
	this.shape_19.setTransform(424,292.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1749F").s().p("AXuZGIABAFIgCAFgApsYSIADgBIAIAFgAYLX0IAGACIgPAIgA4GLuQgJgCgBgIIAKgBQALAAABAGQgCAGgGAAIgEgBgAsCK7IAJgGQAPgMgEgNQADAGgDAKIgGAQIgFAAQgEAAgFgBgArkJ6QAGgQADgCIgTAvIAKgdgA2vKGIAEgGIAAAJIgDAEQgEgCADgFgAqiJ8IAJAAQgDAJgGAHgArTIsIAHgNIACACIgGANgApSH5IASAAIgOACIgEgCgAvjHFIACgDQADACgCAFIgDAFgAUlpcQgKgJgDgMQgEgLADgLQACgNAJgHQAIgDAKAFQAJADAEAIIAHAMQgKgQgJgFQgJAGAAAAQgDgGgJgCQgKANADAPIAGAaQAJgDAIALQAIAIAHgHIAEgQQAEgLgBgGQACARgNAYQgLgBgLgJgANTsnQAGgGAFAIIgUAJQADgBAGgKgANNtQIAQgDIgHAIgAPlt+IAFgGIAAAIgAOauMQgCgCgCgIQACADAEABIAIACQgGAEgCAAIgCAAgAPpu0QgBAGgEACQgCgNAHAFgA1GzlIgCgGQgCgHAEgHQACgDADgCQAPAOgBAHIgGANQgJgDgEgGgAk0ziQgPgOAMgEQAPgEABgEQAEALgCAIQgCAIgHAAIgGgBgAqg3MQgHgHAQgIQAHgDAEgDQACgNAFgCQAAAJgHAGIgBAJQAAANgMAAIgHgBgAqI4jQAAALgEAJIgIASIAIAEQgGgDgFAFIgCACgApK47QACAIgDAGIgJAGQgGgLAQgJgAp747IAJgUIAFADIgJAUg");
	this.shape_20.setTransform(821.2,294.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},9).to({state:[{t:this.shape_1},{t:this.shape_2}]},9).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).to({state:[{t:this.shape_3},{t:this.shape_4}]},9).to({state:[{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.shape_6},{t:this.shape_4}]},9).to({state:[{t:this.shape_8},{t:this.shape_7}]},9).to({state:[{t:this.shape_10},{t:this.shape_9}]},9).to({state:[{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.instance_3},{t:this.instance_2}]},2).to({state:[]},10).wait(37));

	// logo
	this.instance_4 = new lib.logo_open();
	this.instance_4.parent = this;
	this.instance_4.setTransform(588.9,132.7,1,1,0,0,0,252.5,55.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(128).to({_off:false},0).wait(1));

	// Bubbles
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(37,172,227,0)").s().p("Egp0BBlQmMjeh7m1Qh7m1DemMQDemMG1h7QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGMm1B7QicAsiWAAQkQAAj/iPgEgGPA3jQmMjfh6m1Qh7m1DemLQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ad1QmMjfh6m1Qh7m1DemLQDemMG1h6QG1h7GMDeQGMDdB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgAwRTzQmMjeh6m1Qh7m1DemLQDemMG1h7QG1h7GLDeQGMDeB7G0QB6G1jeGMQjeGMm0B7QibAsiXAAQkQAAj/iPgATgJvQmMjfh6m0Qh7m1DemLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGLQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gFpQmMjeh7m1Qh7m1DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB7G1jeGMQjeGMm1B7QicAsiWAAQkQAAj/iPgA6QvnQmMjeh7m1Qh7m1DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jdGMQjeGMm1B7QicAsiWAAQkQAAj/iPgAJh5qQmMjfh6m1Qh6m1DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgjsQmMjfh6m1Qh7m1DemLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_21.setTransform(576.7,275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(37,172,227,0.008)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_22.setTransform(558.9,339.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(43,170,225,0.004)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_23.setTransform(576.7,242.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(37,172,227,0.012)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_24.setTransform(558.9,339.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(48,169,223,0.012)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_25.setTransform(576.7,242.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(37,172,227,0.02)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_26.setTransform(558.9,339.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(54,167,221,0.016)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_27.setTransform(576.7,242.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(37,172,227,0.027)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_28.setTransform(558.9,339.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(59,165,219,0.024)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_29.setTransform(576.7,242.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(37,172,227,0.035)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_30.setTransform(558.9,339.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(65,164,218,0.027)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_31.setTransform(576.7,242.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(37,172,227,0.039)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_32.setTransform(558.9,339.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(70,162,216,0.031)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_33.setTransform(576.7,242.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(37,172,227,0.047)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_34.setTransform(558.9,339.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(76,160,214,0.039)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_35.setTransform(576.7,242.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(37,172,227,0.055)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_36.setTransform(558.9,339.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(81,159,212,0.043)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_37.setTransform(576.7,242.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(37,172,227,0.059)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_38.setTransform(558.9,339.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(87,157,210,0.047)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_39.setTransform(576.7,242.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(37,172,227,0.067)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_40.setTransform(558.9,339.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(92,155,208,0.055)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_41.setTransform(576.7,242.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(37,172,227,0.075)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_42.setTransform(558.9,339.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(98,154,206,0.059)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_43.setTransform(576.7,242.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(37,172,227,0.078)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_44.setTransform(558.9,339.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(103,152,204,0.067)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_45.setTransform(576.7,242.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(37,172,227,0.086)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_46.setTransform(558.9,339.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(109,150,202,0.071)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_47.setTransform(576.7,242.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(37,172,227,0.094)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_48.setTransform(558.9,339.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(115,149,201,0.075)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_49.setTransform(576.7,242.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(37,172,227,0.102)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_50.setTransform(558.9,339.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(120,147,199,0.082)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_51.setTransform(576.7,242.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(37,172,227,0.106)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_52.setTransform(558.9,339.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(126,145,197,0.086)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_53.setTransform(576.7,242.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(37,172,227,0.114)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_54.setTransform(558.9,339.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(131,144,195,0.09)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_55.setTransform(576.7,242.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(37,172,227,0.122)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_56.setTransform(558.9,339.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(137,142,193,0.098)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_57.setTransform(576.7,242.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(37,172,227,0.125)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_58.setTransform(558.9,339.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(142,140,191,0.102)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_59.setTransform(576.7,242.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(37,172,227,0.133)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_60.setTransform(558.9,339.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(148,138,189,0.11)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_61.setTransform(576.7,242.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(37,172,227,0.141)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_62.setTransform(558.9,339.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(153,137,187,0.114)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_63.setTransform(576.7,242.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(37,172,227,0.145)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_64.setTransform(558.9,339.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(159,135,185,0.118)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_65.setTransform(576.7,242.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(37,172,227,0.153)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_66.setTransform(558.9,339.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(164,133,183,0.125)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_67.setTransform(576.7,242.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(37,172,227,0.161)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_68.setTransform(558.9,339.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(170,132,182,0.129)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_69.setTransform(576.7,242.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(37,172,227,0.169)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_70.setTransform(558.9,339.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(176,130,180,0.133)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_71.setTransform(576.7,242.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(37,172,227,0.173)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_72.setTransform(558.9,339.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(181,128,178,0.141)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_73.setTransform(576.7,242.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(37,172,227,0.18)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_74.setTransform(558.9,339.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(187,127,176,0.145)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_75.setTransform(576.7,242.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(37,172,227,0.188)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_76.setTransform(558.9,339.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(192,125,174,0.153)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_77.setTransform(576.7,242.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(37,172,227,0.192)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_78.setTransform(558.9,339.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(198,123,172,0.157)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_79.setTransform(576.7,242.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(37,172,227,0.2)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_80.setTransform(558.9,339.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(203,122,170,0.161)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_81.setTransform(576.7,242.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(37,172,227,0.208)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_82.setTransform(558.9,339.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(209,120,168,0.169)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_83.setTransform(576.7,242.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(37,172,227,0.212)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_84.setTransform(558.9,339.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(214,118,166,0.173)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_85.setTransform(576.7,242.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(37,172,227,0.22)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_86.setTransform(558.9,339.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(220,117,165,0.176)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_87.setTransform(576.7,242.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(37,172,227,0.227)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_88.setTransform(558.9,339.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(225,115,163,0.184)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_89.setTransform(576.7,242.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(37,172,227,0.235)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_90.setTransform(558.9,339.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(231,113,161,0.188)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_91.setTransform(576.7,242.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(37,172,227,0.239)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_92.setTransform(558.9,339.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(236,112,159,0.196)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_93.setTransform(576.7,242.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(37,172,227,0.247)").s().p("EgnCA3jQmMjfh7m0Qh7m2DemMQDemLG1h8QG1h7GMDeQGMDfB7G1QB7G1jeGLQjeGNm1B7QicAriWAAQkQAAj/iOgAtfJwQmMjeh6m0Qh7m1DemLQDemNG1h6QG1h8GLDfQGMDdB7G1QB6G1jeGMQjeGLm0B7QibAsiXAAQkQAAj/iPgAWSgTQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B6QibAsiXAAQkQAAj/iOgA3e5qQmMjeh7m1Qh7m1DemLQDemNG1h7QG1h6GMDdQGMDeB6G1QB7G1jdGNQjeGLm1B7QicAsiWAAQkQAAj/iPg");
	this.shape_94.setTransform(558.9,339.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(242,110,157,0.2)").s().p("EgGPA8kQmMjeh6m2Qh7m0DemMQDemMG1h7QG0h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkPAAj/iPgEgz6Ai2QmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEg94gAoQmMjeh7m1Qh7m1DemLQDemNG1h6QG1h8GMDfQGMDdB7G1QB7G1jeGNQjeGLm1B6QicAsiWAAQkQAAj/iOgAJh0pQmMjeh6m1Qh6m2DdmLQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPgEAtIgerQmMjeh6m2Qh7m0DemMQDemMG1h7QG1h7GMDeQGMDeB7G1QB6G1jeGMQjeGMm1B7QibAsiXAAQkQAAj/iPg");
	this.shape_95.setTransform(576.7,242.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},91).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).wait(1));

	// screen
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.004)").s().p("EhkBAuGMAAAhcLMDIDAAAMAAABcLg");
	this.shape_96.setTransform(596.3,256,1.022,1.046);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.024)").s().p("EhmSAwOMAAAhgbMDMlAAAMAAABgbg");
	this.shape_97.setTransform(596.3,256.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.047)").s().p("EhmVAwOMAAAhgbMDMrAAAMAAABgbg");
	this.shape_98.setTransform(596.3,256.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.067)").s().p("EhmZAwQMAAAhgfMDMzAAAMAAABgfg");
	this.shape_99.setTransform(596.4,256.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.09)").s().p("EhmdAwRMAAAhghMDM7AAAMAAABghg");
	this.shape_100.setTransform(596.3,256.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.11)").s().p("EhmgAwRMAAAhghMDNBAAAMAAABghg");
	this.shape_101.setTransform(596.3,256.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.133)").s().p("EhmkAwSMAAAhgjMDNJAAAMAAABgjg");
	this.shape_102.setTransform(596.3,256.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.153)").s().p("EhmnAwTMAAAhglMDNPAAAMAAABglg");
	this.shape_103.setTransform(596.3,256.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.176)").s().p("EhmrAwUMAAAhgnMDNXAAAMAAABgng");
	this.shape_104.setTransform(596.4,256.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.196)").s().p("EhmvAwUMAAAhgnMDNeAAAMAAABgng");
	this.shape_105.setTransform(596.4,256.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.22)").s().p("EhmyAwVMAAAhgpMDNlAAAMAAABgpg");
	this.shape_106.setTransform(596.4,256.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.239)").s().p("Ehm2AwWMAAAhgrMDNsAAAMAAABgrg");
	this.shape_107.setTransform(596.4,256.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.263)").s().p("Ehm5AwXMAAAhgtMDNzAAAMAAABgtg");
	this.shape_108.setTransform(596.3,256.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.282)").s().p("Ehm9AwXMAAAhgtMDN7AAAMAAABgtg");
	this.shape_109.setTransform(596.3,256.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.306)").s().p("EhnBAwZMAAAhgxMDOCAAAMAAABgxg");
	this.shape_110.setTransform(596.4,256.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.325)").s().p("EhnEAwaMAAAhgzMDOJAAAMAAABgzg");
	this.shape_111.setTransform(596.4,256.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.349)").s().p("EhnIAwaMAAAhgzMDORAAAMAAABgzg");
	this.shape_112.setTransform(596.4,256.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.369)").s().p("EhnLAwbMAAAhg1MDOXAAAMAAABg1g");
	this.shape_113.setTransform(596.4,256.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.392)").s().p("EhnPAwcMAAAhg3MDOfAAAMAAABg3g");
	this.shape_114.setTransform(596.4,256.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.412)").s().p("EhnTAwcMAAAhg4MDOmAAAMAAABg4g");
	this.shape_115.setTransform(596.4,256.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.435)").s().p("EhnWAwdMAAAhg5MDOtAAAMAAABg5g");
	this.shape_116.setTransform(596.4,256.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.455)").s().p("EhnaAweMAAAhg7MDO0AAAMAAABg7g");
	this.shape_117.setTransform(596.4,256.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.478)").s().p("EhndAwfMAAAhg9MDO7AAAMAAABg9g");
	this.shape_118.setTransform(596.4,256.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.498)").s().p("EhnhAwgMAAAhg/MDPDAAAMAAABg/g");
	this.shape_119.setTransform(596.4,256.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.522)").s().p("EhnkAwhMAAAhhBMDPJAAAMAAABhBg");
	this.shape_120.setTransform(596.4,256.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.541)").s().p("EhnoAwiMAAAhhDMDPRAAAMAAABhDg");
	this.shape_121.setTransform(596.4,256.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.565)").s().p("EhnsAwjMAAAhhFMDPZAAAMAAABhFg");
	this.shape_122.setTransform(596.4,256.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.584)").s().p("EhnvAwkMAAAhhHMDPfAAAMAAABhHg");
	this.shape_123.setTransform(596.4,256.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.608)").s().p("EhnzAwkMAAAhhHMDPnAAAMAAABhHg");
	this.shape_124.setTransform(596.4,256.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.627)").s().p("Ehn2AwlMAAAhhJMDPtAAAMAAABhJg");
	this.shape_125.setTransform(596.4,256.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.651)").s().p("Ehn6AwmMAAAhhLMDP1AAAMAAABhLg");
	this.shape_126.setTransform(596.4,256.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.671)").s().p("Ehn9AwmMAAAhhLMDP7AAAMAAABhLg");
	this.shape_127.setTransform(596.4,256.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.694)").s().p("EhoBAwnMAAAhhNMDQDAAAMAAABhNg");
	this.shape_128.setTransform(596.4,256.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.714)").s().p("EhoEAwoMAAAhhPMDQJAAAMAAABhPg");
	this.shape_129.setTransform(596.4,256.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.737)").s().p("EhoIAwpMAAAhhRMDQRAAAMAAABhRg");
	this.shape_130.setTransform(596.4,256.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.757)").s().p("EhoMAwqMAAAhhTMDQZAAAMAAABhTg");
	this.shape_131.setTransform(596.4,256.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.78)").s().p("EhoPAwrMAAAhhVMDQfAAAMAAABhVg");
	this.shape_132.setTransform(596.4,256.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.8)").s().p("EhkBAuGMAAAhcLMDIDAAAMAAABcLg");
	this.shape_133.setTransform(596.4,256,1.043,1.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_96}]},91).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).wait(1));

	// For_Matching
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0)").s().p("Ehj/AuGMAAAhcLMDH/AAAMAAABcLg");
	this.shape_134.setTransform(594,254.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_134).to({_off:true},1).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-40.6,1280,590);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#901722").s().p("AlgQpQlNhOkZieQkaidi0jRQivjKg5jeQg6jcBFjQQBHjXDFipQDEipEhhdQEWhaFFgIQFFgIFBBNQFNBOEZCeQEZCdC1DRQCvDKA6DeQA5DdhFDPQhHDXjFCpQjECpkhBdQkWBalFAIIg7ABQknAAkkhGg");
	this.shape.setTransform(170.6,113.5);

	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(155.5,165.9,1,1,0,0,0,153.7,77.2);

	this.instance_1 = new lib.ClipGroup_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.4,217,1,1,0,0,0,154.3,126.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#901722").s().p("AldQgQlKhOkXicQkWici0jPQisjIg5jcQg5jaBEjPQBGjUDEioQDCimEeheQEUhYFCgJQFCgHE+BLQFKBOEWCcQEWCcC0DPQCtDIA5DcQA5DbhEDNQhHDWjCCnQjDCokeBbQkUBalDAHIg6ABQkjAAkihEg");
	this.shape_1.setTransform(170.4,114.6);

	this.instance_2 = new lib.ClipGroup_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154.5,216.4,1,1,0,0,0,152.9,125);

	this.instance_3 = new lib.ClipGroup_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(323.2,168.1,1,1,0,0,0,14.5,23.3);

	this.instance_4 = new lib.ClipGroup_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(296.6,226.8,1,1,0,0,0,42.3,80);

	this.instance_5 = new lib.ClipGroup_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(295.6,225.9,1,1,0,0,0,42.3,79);

	this.instance_6 = new lib.ClipGroup_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.6,170.7,1,1,0,0,0,168,168.5);

	this.instance_7 = new lib.ClipGroup_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(170.8,70.2,1,1,0,0,0,168.5,70.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#901722").s().p("Am7F8QkHiTg3jXQgahlAfhfQAhhiBahOQC3ieE9gHQE6gHEHCTQEGCSA4DYQAaBlgfBfQggBihbBOQi4Cdk8AIIgeAAQkpAAj6iMg");
	this.shape_2.setTransform(143.6,275.7);

	this.instance_8 = new lib.ClipGroup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(169.7,170.6,1,1,0,0,0,169.7,170);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#901722").s().p("Am6F8QkHiTg4jXQgbhlAghfQAhhjBahNQC4ieE7gHQE7gIEHCUQEGCTA4DXQAaBkgfBgQghBjhaBNQi4Cek8AHIgeAAQkpAAj5iMg");
	this.shape_3.setTransform(143.4,276.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_8},{t:this.shape_2},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0.1,-0.1,339.3,340.9), null);


(lib.award = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pbw0();
	this.instance.parent = this;
	this.instance.setTransform(1100.8,-7065.6,1,1,0,0,0,0,-95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDC00F").ss(4.1).p("AB8AAQAABNgkA2QgkA2g0AAQgzAAgkg2Qgkg2AAhNQAAhMAkg2QAkg2AzAAQA0AAAkA2QAkA2AABMg");
	this.shape.setTransform(0.5,-76);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FDC00F").ss(7,1,1).p("ACyCtQANgRAegeQACgCABgCQA1g1AFgGQBJhLAIgrQAKgxgngdQgfgXhBgOQgEgBgFgBAixCtQgNgRgegeQgBgCgCgCQg1g1gFgGQhJhLgIgrQgJgxAngdQAegXBBgOQAFgBAEgB");
	this.shape_1.setTransform(0.5,-78.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A6DAE8").s().p("AhVAdQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAICrAAQADAAABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgBABgDAAgAhVAHQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAICrAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBACgDABgAhVgQQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAICrAAQADAAABACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgBABgDAAg");
	this.shape_2.setTransform(0.5,-7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13ADB7").s().p("AhqAuQgIAAgEgGQgGgEAAgIIAAg3QAAgHAGgGQAEgEAIAAIDVAAQAHAAAFAEQAFAGABAHIAAA3QgBAIgFAEQgFAGgHAAgAhaATQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAICrAAQADAAABgBQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgDAAIirAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBABgAhagEQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABABAAQAAABABAAQAAAAABAAQAAABABAAICrAAQADgBABgCQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBQgBgCgDAAIirAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAgAhagaQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAICrAAQADAAABgBQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBgCgDAAIirAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBABg");
	this.shape_3.setTransform(0.5,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#146B7F").s().p("AjhBOQgHAAgEgFQgGgFAAgHIAAh5QAAgHAGgFQAEgFAHAAIBCAAIE/AAIBBAAQAHAAAFAFQAGAFAAAHIAAB5QAAAHgGAFQgFAFgHAAgAh2goQgGAGAAAHIAAA3QAAAIAGAEQAEAGAIAAIDVAAQAHAAAFgGQAFgEABgIIAAg3QgBgHgFgGQgFgEgHAAIjVAAQgIAAgEAEg");
	this.shape_4.setTransform(0.5,-7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AifB3IAAg6QAAgHAGgFQAFgFAHAAIBJAAQACACAFAAIB8AAQAEAAADgCIBJAAQAHAAAFAFQAFAFAAAHIAAA6gAA3AJIhtAAIgDAAIAAh+IADAAIBtAAIADgBIAAB/IgDAAg");
	this.shape_5.setTransform(0.5,-27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD633").s().p("AA1EkIhqAAIgEAAQhBgCguguQgwgwAAhDQAFgCAEgEQAHgIABgLQgBgLgHgIQgGgFgGgCIgBgRQAeAeAMARQgMgRgegeIgRkoIAJgCIgJACIgEg4IHiAAIABAAIgEA4IgKgCIAKACIgREoQgeAegNARQANgRAegeIgBARQgGACgGAFQgHAIgBALQABALAHAIQAFAEAEACQAABDgwAwQguAuhCACIgEAAgAh7gjQAABLAkA2QAkA2AzAAQAzAAAlg2QAkg2AAhLQAAhNgkg2Qglg2gzAAQgzAAgkA2QgkA2AABNIAAAAgAhXBeQgkg2AAhLQAAhNAkg2QAkg2AzAAQAzAAAlA2QAkA2AABNQAABLgkA2QglA2gzAAQgzAAgkg2gAhCiQQgdAtAABAQAAA+AdAtQAcAtAmAAQAnAAAdgtQAcgtAAg+QAAhAgcgtQgdgtgnAAQgmAAgcAtgAjcA9IAAAAgAB8gjIAAAAgADujrIAAAAg");
	this.shape_6.setTransform(0.5,-72.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9B233").s().p("Ag+GzQgEAAgDgCIgCgCQgDgDAAgFQAAgFADgDQAEgDAEAAIB+AAIAAAAQAFAAAEADQADADAAAFQAAAFgDADIgCACQgDACgEAAgAA/EAIh+AAQgEgBgEgDQgDgDAAgFQAAgFADgDQAEgEAFAAIAFAAIAEAAIBqAAIAEAAIAGAAQAEAAAFAEQADADAAAFQAAAFgDADQgEADgFABIAAAAgAhCAMQgdgsAAg/QAAhAAdgtQAcgtAmAAQAnAAAdAtQAcAtAABAQAAA/gcAsQgdAtgnAAQgmAAgcgtgAj4mGIgBAAQgIgBgHgGQgGgGAAgJQAAgJAGgGQAHgHAJAAIHxAAQAJAAAHAHQAGAGAAAJQAAAJgGAGQgHAGgJABg");
	this.shape_7.setTransform(0.5,-66.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDC00F").s().p("AA/GSIh+AAQgCgEAAgCQAAgEACgDQADgCADAAIADAAIBtAAIACAAQAEAAACACQADADAAAEQAAACgDAEIAAAAgAg2EEIgDAAIgGgDQgCgCAAgEQAAgEACgCIB+AAIAAAAQADACAAAEQAAAEgDACQgCACgEABIgCAAgADZA6QgEgCgFgDQgHgJgBgKQABgLAHgIQAGgFAGgCIAIgBQALAAAJAIQAIAIAAALQAAAKgIAJQgJAHgLABQgGAAgFgDgAj3A1QgIgJAAgKQAAgLAIgIQAIgIAMAAIAIABQAGACAGAFQAHAIABALQgBAKgHAJQgEADgFACQgFADgGAAQgMgBgIgHgADxlpIniAAQgIgBgGgGQgHgFAAgJQAAgIAHgGIAGgFIABAAIHxAAIAHAFQAHAGAAAIQAAAJgHAFQgGAGgIABIgBAAg");
	this.shape_8.setTransform(0.5,-65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.award, new cjs.Rectangle(-39.5,-7160.8,1237.8,7160.8), null);


(lib.playBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(147,147,147,0.008)").s().p("AsfNGIAA6LIY/AAIAAaLg");
	this.shape.setTransform(0,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AIQpZQATARATATQDqDqAAFLQAAFMjqDqQjqDqlMAAQlLAAjqjqQjqjqAAlMQAAlLDqjqQAUgUAUgSAldrQQCfhPC+AAQDBAACfBP");
	this.shape_1.setTransform(0,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF7FB1").s().p("AgNAVIhYgDQgpgDgjgEQhIgKgBgOQABgFALgBQASgCAtAJQAaAGAfAEQA2AFBCACIALAAIAtgBQBFgCA0gMQAfgIASgBQAXgCAAAIQAAAGgOAGQgSAGgqAGQgoAFgwACIhZADIgNAAg");
	this.shape_2.setTransform(1.8,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CCF2").s().p("ACKBBQhCgjBkgYQBkgXAcgRQAcgRA9geQA+gdAvASQAuARABAzQgBAzhGAkQhGAlhjAAQhlAAhCgjgAnaA/QhFgkAAgzQgBgzAwgRQAugSA+AdQA+AeAbARQAbARBlAXQBlAYhDAjQhDAjhkAAQhiAAhIglg");
	this.shape_3.setTransform(1,-26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ao1JbQjqjpAAlMQAAlLDqjqIAogmIgVkQQBZCABsAaQCfhOC+AAQDBAACfBOQBrgaBbiAIgWESIAlAkQDrDqAAFLQAAFMjrDpQjpDrlMAAQlLAAjqjrgAjdBpQgLACAAAFQAAAPBJAKQAiAEApADIBYADIANAAIBZgDQAxgCAngFQArgGASgHQANgGAAgGQAAgIgWACQgSABggAIQg0ANhEACIgtABIgLAAQhCgCg3gHQgegDgagGQgngIgTAAIgGAAgAGPlJQg+AdgbARQgcARhkAYQhkAYBCAkQBCAiBkAAQBjAABGgkQBHglAAgzQAAg0gugRQgSgGgUAAQghAAgmASgAnnlVQgvARAAA0QAAAzBGAlQBHAkBjAAQBkAABCgiQBDgkhlgYQhkgYgcgRQgagRg/gdQgmgSghAAQgUAAgRAGg");
	this.shape_4.setTransform(0,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiSH5QkIhFg0i/QgxitB/jLQB9jHDWhtQDoh0DXA5QAzAOAQAuQAQAvgRAeQhmCyi5CHQj/C7kRgiQgQBiAvBeQA4BxCBAhQB1AfChgqIAjAcQh9A6hrAAQgyAAgugNgABXmKQjzB8huDBQgjA8gSA8QDogDDPicQCWh1BaicQAfg3g2gOQgQgEgTAAQhPAAiIBEg");
	this.shape_5.setTransform(35.3,30.9,0.083,0.083,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxEUQBIg1A7gnQBOg5AZgsQBIh+kIiPQhVB6hABfQhzCbgvAAIgdgnQAWgnAzhKQA0hLAUghQASggAKhFQALhGASgfQAPgZAtgHQAtgGAvAMQA+ARAOAkQCbA8BGBlQBFBkgxBWQgeA0hlA/IinBig");
	this.shape_6.setTransform(29.1,25.8,0.083,0.083,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmKE9QAAgmADgZIACgSQAdhtAshOQAOgZALgzQALgzAOgaQAPgZAfgJQAfgKAdAIQAeAIAMAVQAOAVgPAZIhhCoIgwBRQgQAjgaBnQgWAOgWAGQgLADgIAAQgZAAAAgcgAhRC0QgogOAKgSQAIgNAjgOQDrhKBIh9QA8hoilgrQg0gOhagJQhcgJgigKQhRgVARgdQAQgcBZABQBZABBoAbQCZApBPBCQBgBPgzBZQgeAziiBaQiWBThXAAQgQAAgNgDg");
	this.shape_7.setTransform(23.7,22.3,0.083,0.083,23.7);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(29.6,37.2,0.083,0.083,23.7,0,0,221.8,223.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AIQpZQATARATATQDqDqAAFLQAAFMjqDqQjqDqlMAAQlLAAjqjqQhGhGgxhPQhzi4AAjpQAAjnBzi5QAxhPBGhGQAUgUAUgSAldrQQCehPC/AAQDAAACgBP");
	this.shape_8.setTransform(0,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34B92D").s().p("Ag9h+IACgBQBTBBAWBpIAQBVQgpi1hShJg");
	this.shape_9.setTransform(14.4,26.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#30DA64").s().p("AA9CuQgsiAhRhCQhThEhngeQgbgIgPgLQgkgcA/gxQBXhDCPAIQCNAIBvA2QA1AbAWA7QAXA/gOBkQgbDDhVAiQgTAIgQAAQg7AAgihlgAgBjwQBTBJAoC1IgQhUQgWhqhUhBg");
	this.shape_10.setTransform(8.4,37.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmrgyIgFgIIgBgDQgDgFACgDIAAgBQBMAJALAJQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIANBDIADAPQAEAWgCALQgBAHgEAAQgTAAhMh7gAFFAhQAKg1AFgdQACgMBegLQhYCRgUAAQgLAAAIgog");
	this.shape_11.setTransform(4.8,-3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF7FB1").s().p("AGGDZIgWgIQgWg6g2gcQhvg2iNgIQiOgIhXBEQhAAwAlAdIhUATQijAsiQkIQiSkJCaA2QCZA4AzAQQgCADADAFIACADIAEAIQBfCbAGgmQACgLgFgWIgDgPIgMhEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQCXAdCuABQAuABAxgCQCagGBxgUQgEAdgLA2QgWB0CFjeQBMgXAwghQCIheheEcQhODth8AAQgYAAgZgJgAhghMIATgBIgGAAIgNABg");
	this.shape_12.setTransform(0.8,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#56CCF2").s().p("ACKBBQhCgjBkgYQBkgXAcgRQAcgRA9geQA+gdAvASQAuARABAzQgBAzhGAkQhHAlhiAAQhlAAhCgjgAnaA/QhFgkAAgzQgBgzAwgRQAugSA+AdQA+AeAbARQAbARBlAXQBlAYhDAjQhDAjhkAAQhiAAhIglg");
	this.shape_13.setTransform(1,-26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ao1JbQhGhGgxhOQhzi5AAjoQAAjoBzi4QAxhPBGhGIAogmIgVkQIALAQQBVBxBlAZQCehOC/AAQDAAACgBOQBlgYBVhyIAMgQIgWESIAlAkQDrDqAAFLQAAFMjrDpQjpDrlMAAQlLAAjqjrgAimENQBnAeBSBEQBSBDAsCAQArCBBVgkQBVgiAbjDQAOhlgXg/IAWAHQCeA3BdkbQBekciIBeQgwAhhMAXQhdALgCANQhyAUiaAFQgxACgugBQiugBiXgcQgKgKhNgJIAAABQgzgQiZg3Qiag2CSEIQCQEJCjgsIBUgUQAOALAcAIgAGPlJQg+AdgbARQgcARhkAYQhkAYBCAkQBCAiBkAAQBiAABHgkQBHglAAgzQAAg0gugRQgSgGgUAAQghAAgmASgAnnlVQgvARAAA0QAAAzBGAlQBHAkBjAAQBkAABCgiQBDgkhlgYQhkgYgcgRQgagRg/gdQgmgSghAAQgUAAgRAGg");
	this.shape_14.setTransform(0,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AIPpZQAUARATATQDqDqAAFLQAAFLjqDrQjqDqlMAAQlLAAjqjqQjqjrAAlLQAAlLDqjqQAUgUAUgSAldrQQCehPC/AAQDAAACgBP");
	this.shape_15.setTransform(0,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("ACKBBQhCgkBkgXQBkgXAcgRQAbgRA9geQA/gdAuARQAvASABAzQgBAzhGAkQhHAlhiAAQhlAAhCgjgAnaA/QhFgkAAgzQgBgzAvgSQAvgRA+AdQA+AeAbARQAbARBlAXQBkAXhCAkQhDAjhkAAQhiAAhIglg");
	this.shape_16.setTransform(1,-26.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34B92D").s().p("Ag9h+IABgBQBUBBAWBpIAQBVQgoi1hThJg");
	this.shape_17.setTransform(14.4,26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#30DA64").s().p("AA9CvQgsiAhRhDQhUhDhmgeQgbgIgPgLQgkgdA/gwQBXhFCOAJQCNAIBwA2QA1AbAVA7QAXBAgNBkQgbDChVAiQgSAIgQAAQg8AAgihkgAgBjvQBTBJAoC0IgQhTQgWhqhUhBg");
	this.shape_18.setTransform(8.4,37.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AFFAhIAPhSQACgMBegLQhYCRgUAAQgLAAAIgogAmrgzIgFgHIgBgDQgDgFACgDIAAgBQBMAJALAJQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAIANBDIADAPQAEAWgCAKQgBAIgFAAQgSAAhMh8g");
	this.shape_19.setTransform(4.8,-3.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF7FB1").s().p("AGGDZIgXgIQgVg7g2gbQhwg2iNgIQiNgJhXBFQhAAwAlAdQgqAIgqALQijAriQkHQiSkJCaA2QCZA3AzARQgCADADAFIACADIAEAHQBfCcAGgnQACgKgFgWIgDgPIgMhEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQCXAdCuABQAuABAxgCQCagGBxgUIgPBTQgWB0CFjeQBMgXAwghQCIheheEcQhPDth7AAQgYAAgZgJgAhhhMIATgBIgFAAIgOABg");
	this.shape_20.setTransform(0.8,4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ao1JbQjqjqAAlLQAAlLDqjqIAogmIgVkQQBZCABsAaQCehOC/AAQDAAACgBOQBrgaBbiAIgXESIAmAkQDrDqAAFLQAAFLjrDqQjpDrlMAAQlLAAjqjrgAimENQBmAeBTBEQBSBDAsCAQArCABVgjQBVgjAbjCQANhlgXg/IAXAHQCdA3BekbQBekciIBeQgwAhhMAXQhdALgCANQhyAUiaAFQgxACgugBQiugBiXgcQgKgKhNgJIAAABQgzgRiZg2Qiag2CSEIQCQEICjgrQArgMApgIQAOALAcAIgAGOlJQg+AdgaARQgcARhkAYQhkAXBCAlQBCAiBkAAQBiAABHgkQBHglAAgzQAAg0gvgRQgSgHgTAAQghAAgnATgAnolVQguARAAA0QAAAzBGAlQBHAkBjAAQBkAABCgiQBCglhkgXQhkgYgcgRQgbgRg+gdQgngTghAAQgUAAgRAHg");
	this.shape_21.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:-1.2}}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance,p:{regX:221.8,regY:223.7,rotation:23.7,x:29.6,y:37.2}},{t:this.shape_7,p:{rotation:23.7,y:22.3}},{t:this.shape_6,p:{rotation:23.7,x:29.1}},{t:this.shape_5,p:{rotation:23.7,y:30.9}},{t:this.shape,p:{y:-1.2}}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance,p:{regX:226.7,regY:230.3,rotation:23.8,x:29.7,y:37.8}},{t:this.shape_7,p:{rotation:23.8,y:22.2}},{t:this.shape_6,p:{rotation:23.8,x:29}},{t:this.shape_5,p:{rotation:23.8,y:30.8}},{t:this.shape,p:{y:0.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-85,162,168.6);


// stage content:
(lib.monsterRow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();                                                                                     //enable mouse over and mouse out events
		stage.setBounds(0, 0, 1280, 590);                                                                            //sets stage bounds
		
		var subjects = ["משפחות הטורפים", "משטרים מדיניים"];                                                         //subjects names
		var subjCategory = [["כלביים", "חתוליים", "רקוניים", "דוביים", "סמוריים"],                                   //categories of the first subject
						    ["משטר נשיאותי","משטר פרלמנטרי","מונרכיה חוקתית","מונרכיה אבסולוטית","משטר חד מפלגתי"]]; //categories of the second subject
						
		var subjectsContent = [[["דינגו", "קויוט", "טאנוקי", "פנק", "תן זהוב", "000", "001", "002", "003", "004"],                                  //
							  ["נמרון מרגיי", "חתול שיש", "יגואר", "יגוארונדי", "אוצלוט", "010", "011", "012", "013", "014"],                       //
							  ["דביביון סרטנים", "אולינגו מזרחי", "קינקז'ו", "חוטמן חום" ,"דביבון ננסי", "020", "021", "022", "023", "024"],        //subject1 categories
							  ["דוב קודיאק", "דוב לבן גרון", "דוב שחור אוסורי", "דוב שפתני", "דוב שחור אסיאתי", "030", "031", "032", "033", "034"], //
							  ["גריזון", "חורפן", "סמור", "הרמין", "טאירה", "040", "041", "042", "043", "044"]],                                    //
							  
							  [["צרפת", "פורטוגל", "דרום אפריקה", "100", "101", "102"],                                     //
							   ["קנדה", "הודו", "ברבדוס", "110", "111", "112"],                                                        //
							   ["הולנד", "בריטניה", "דנמרק", "120", "121", "122"],                                                     //subject2 categories
							   ["סווזילנד", "עומאן", "קטר", "130", "131", "132"],                                                      //
							   ["סין", "לאוס", "קובה", "140", "141", "142"]]];                                                         //
		var subject;
							  
		var itemPositions = [[[80, 400], [180, 400], [280, 400], [130, 500], [230, 500]],
							[[1000, 400], [1100, 400], [1200, 400], [1050, 500], [1150, 500]]];
							
		var itemPositionsCopy = [];                                                                              //holds the original values of itemPositions' array
		for (var i = 0; i < itemPositions.length; i++){
		    itemPositionsCopy[i] = itemPositions[i].slice();
		}
		
		var lastAnswer;
		var objectsOnStage = [];                                                                                 //holds the names of objects currently in play
		var objectsOnStagePos = [];                                                                              //holds the position of objects currently in play
		var playersAns = [[[[],[],[],[],[]],[]],[[[],[],[],[],[]],[]]];                                                                   //holds players item names - right/wrong
		var objectsInsideBoard = [];                                                                             //holds the names of objects corrently in the game board
		var gameObjects = [];                                                                                    //holds all games objects generated
		var contCount = 0                                                                                        //counts the number of objects created
		var wins = [0, 0];                                                                                       //holds the number of wins per player
		var consecutive = [];                                                                                    //holds the position of consecutive values in the matrix
		
		var board;
		var boardCols = 5;
		var boardRows = 4;
		var boardFullCounter = 0;
		var winCondition = 4;
		var emptyCells = [];
		var lastXPosInCol = [0, 0, 0, 0, 0];
		var boardXPos = [490, 396.4, 302.8, 209.2];                                                              //holds the game board's cell heights
		
		var pieceSize = 86;                                                                                      //size in pixels of a game object
		var turn;                                                                                                //indicates how many turn have been played
		var stageW = stage.getBounds().width;                                                                    //stage width
		var stageH = stage.getBounds().height;                                                                   //stage height
		
		var playerNames = [];                                                                                    //holds the players' names
		var playerColors = ["#25ade3","#f06d9b"];                                                                //holds players' colors
		var grayscalePlayerNames = ["1", "0"];                                                                   //helps to create the grayscale player dynamically
		var playersPosX = [180, 1100];                                                                           //specifies players position on the stage
		var turnTime = 30;                                                                                        //specifies the turn time
		var sounds = [];                                                                                         //hold sounds created in runtime - making them accessible globally
		var timeInterval;
		var endTurnWindowCounter = 0;
		var sound = true;
		
		//pregame screen
		function preGame() {
			registerSounds();
			var btnBG = new lib.start_BG();                                                                      //creates pre-game background
			var playBtn = new lib.playBtn();                                                                     //creates start button
		
			btnBG.addChild(playBtn);                                                                             //adds start button as the background's child
			stage.addChild(btnBG);                                                                               //add the backgound to the stage
		
			playBtn.x = stageW / 2;                                                                              //sets x position of start button to half stage's width
			playBtn.y = stageH / 2;                                                                              //sets y position of start button to half stage's height
		
			playBtn.addEventListener("mouseover", function () {                                                  //on mouseover on start button
				playBtn.gotoAndStop(1);                                                                          //play start button animation
			});
			playBtn.addEventListener("mouseout", function () {                                                   //on mouseout on start button
				playBtn.gotoAndStop(0);                                                                          //play start button animation
			});
			
			playBtn.addEventListener("click", function () {                                                      //on click on start button
				playBtn.removeAllEventListeners();                                                               //remove all listeners from start button
				playBtn.gotoAndStop(2);                                                                          //play start button animation
				setTimeout(function () {                                                                         //after 0.5 seconds
					stage.removeChild(btnBG);                                                                      //remove pre-game's background
					var startMusic = createjs.Sound.play("start", {loop: -1});                                     //play pre loaded staring music
					startMusic.volume = 0.05;                                                                      //sets music volume to 5%
					sounds.push(startMusic);                                                                       //adds the sound object in the sound array
					initGame();                                                                                    //calls the second screen - initGame
				}, 500);
			});
		}
		
		//first screen of the game
		function initGame() {
			var bg = new lib.BG();                                                                               //set notebook background
			bg.name = "note_bg";
			stage.addChild(bg);                                                                                  //add background to stage
		
			var openScene = new lib.open_scene();                                                                //create opnning scene
			var pauseIcon = new lib.pause_btn();
			var soundIcon = new lib.sound_btn();                                                                 //button to turn on/off sound
			
			openScene.name = "OS";                                                                               //sets openning scence name
			openScene.x += 45;                                                                                   //sets openning scene's x position
			openScene.y += 40;                                                                                   //sets openning scene's y position
			pauseIcon.x = 30;
			pauseIcon.y = 85;
			soundIcon.x = pauseIcon.x;
			soundIcon.y = pauseIcon.y+pauseIcon.nominalBounds.height+3;
			
			pauseIcon.alpha = 0;
			pauseIcon.name = "pause";
			soundIcon.name = "sound";
			
			soundIcon.addEventListener("click", mute);
			stage.addChild(openScene, pauseIcon, soundIcon);                                                     //add openning scene to stage
			openScene.gotoAndPlay();                                                                             //plays openning scene
		
			setupFont();          
			
			var startMsg = new createjs.Text("במה תרצו לשחק", "14px Rubik", "white");
			startMsg.x = (stageW) / 2.2;
			startMsg.y = (stageH) / 2.6;
			centerRegPoint(startMsg);
		
			// set combobox subjects and styles
			var comb = new lib.gameSubjComb();
			var sel = document.getElementsByTagName("select");
		
			setTimeout(function () {
				openScene.addChild(startMsg);
		
				//setting styles for input fields
				setTimeout(function () {
					for (var opt of sel) {
						opt.style.textAlign = "right"; //doesn't seem to work
						opt.style.fontSize = "18px";
					}
				}, 100);
		
				comb.x = stageW/ 2.4;
				comb.y = stageH/ 2.4;
				openScene.addChild(comb);
				
				$("#dom_overlay_container").on("change", "#subjComb", onSelect);
			}, 5500)
		}
		
		//enter names
		function choosePlayerNames() {
			stage.removeChild(stage.getChildByName("OS"));                                           //remove openning scene from stage
			
			var whiteSc = new lib.screen_big_0();                                                    //creates rectange container and setting name
			whiteSc.name = "whiteSc";
		
			var randBtn = new lib.random_btn();                                                      //creates the button to randomize a starting player
			randBtn.alpha = 0;                                                                       //make it invisible
			randBtn.name = "rBtn";                                                                   //setting name property for button
			
			var startBtn = new lib.start_btn();                                                      //creates the button to randomize a starting player
			startBtn.alpha = 0;                                                                      //make it invisible
			startBtn.name = "sBtn";                                                                  //setting name property for button
		
			var namesMsg = new createjs.Text                                                         //creating the instructions text
			('הזן את שמות השחקנים ולחץ על "הגרל" לקביעת סדר התור', "18px Rubik", "black");
			
			var p0 = new lib.player_0();                                                             //creating player1
			p0.gotoAndStop(0);                                                                       //stopping animation
			var p1 = new lib.player_1();                                                             //creating player2
			p1.gotoAndStop(0);                                                                       //stopping animation
		
			p0.name = "p0";                                                                          //setting name property for player1 object
			p1.name = "p1";                                                                          //setting name property for player1 object
		
			var name0 = new lib.nameText();                                                          // creating input field for player1 name
			var name1 = new lib.nameText();                                                          // creating input field for player2 name
			
			name0.name = "n0";
			name1.name = "n1";
		
			randBtn.x = 0;                                                                           //randBtn x position
			randBtn.y = 200;                                                                         //randBtn y position
			startBtn.x = randBtn.x;
			startBtn.y = randBtn.y;
		
			p0.x = stageW * -0.145;                                                                  //player1 x position
			p0.y = stageH* 0.132;				                                                     //player1 y position
			p1.x = stageW * 0.145;                                                                   //player2 x position
			p1.y = stageH* 0.132; 					                                                 //player2 y position
		
			name0.x = (808.25 / -2) / 2 + 20;                                                        //player1 input field x position
			name0.y = 100;                                                                           //player1 input field y position
			name1.x = (808.25 / 2) / 2 - 20;                                                         //player2 input field x position
			name1.y = 100;                                                                           //player2 input field y position
		
			namesMsg.lineWidth = 215;                                                                //sets textbox message maximum width
			namesMsg.textAlign = "center";                                                           //sets textbox message text alignment
			namesMsg.name = "namesMsg";                                                              //sets name property of textbox message
			namesMsg.x = 0;                                                                          //sets x position of textbox message
			namesMsg.y = -250;                                                                       //sets y position of textbox message
		
			whiteSc.addChild(name0, name1, namesMsg, randBtn, startBtn, p0, p1);                     //adds player 1 and player 2 input fields, textbox message, randomButton, startButton, player1&2 figures as whiteSc's child                                                           //adds player2 figure to stage
		
			whiteSc.x = stage.getBounds().width / 2;                                                 //sets whiteSc x position
			whiteSc.y = stage.getBounds().height / 2;                                                //sets whiteSc y position
			stage.addChild(whiteSc);                                                                 //adds whiteSc to the stage
		
			whiteSc.alpha = 0;                                                                       //sets the alpha of whiteSc to 0
			fadeInOutObj(whiteSc, 0.01);                                                             //fading it in
		
			var inputs = document.getElementsByTagName("input");                                     //create array of input elements
			setTimeout(function () {
				for (var el of inputs) {                                                             //iterate over the array
					el.style.textAlign = "right";                                                    //set text alignment of input field
					el.style.fontSize = "18px";                                                      //set font size of input field
				}
			}, 100);
		
			$("#dom_overlay_container").on("keyup", "input", function () {                           //listener for keypress
				var counter = 0;                                                                     //creates a counter
				for (i = 0; i < inputs.length; i++) {                                                //iterates over the array
					if (inputs[i].value.length > 0 && inputs[i].value.length < 11 &&                 //validate input
						inputs[i].value != undefined && inputs[i].value.replace(/\s/g, '').length) { //if tests passed
						counter++;                                                                   //increment counter by 1
						playerNames[i] = inputs[i].value;                                            //read value of input fields
					} else {                                                                         //if tests not passed
						if (counter > 0) {                                                           //if counter is bigger than 0
							counter--;                                                               //decrement by 1
						}
					}
				}
				if (counter == inputs.length) {                                                      //if counter equals to the array length
					fadeInOutObj(randBtn, 0.02);                                                     //fade in randButton
		
					setButton(randBtn,randStartingPlayer);                                           //sets randButton funcionality
				} else {                                                                             //if not
					randBtn.alpha = 0;                                                               //set alpha of randButton to 0
					randBtn.removeAllEventListeners();                                               //remove all randButton event listeners
				}
			});
		}
		
		//randomize starting player
		function randStartingPlayer(e) {
			var wsc = stage.getChildByName("whiteSc");                                      //getting white background
			var wscRBtn = wsc.getChildByName("rBtn");                                       //getting randomize button
			var wscSBtn = wsc.getChildByName("sBtn");                                       //getting start button
			var wscMessage = wsc.getChildByName("namesMsg");                                //gettting textbox message
			var nInput0 = wsc.getChildByName("n0");
			var nInput1 = wsc.getChildByName("n1");
			
			
			fadeInOutObj(wscRBtn, -0.02);                                                   //fade out randButton
			var n0 = new createjs.Text(playerNames[0], "14px Rubik", "black");
			var n1 = new createjs.Text(playerNames[1], "14px Rubik", "black");
			n0.x = nInput0.x-4;
			n0.y = nInput0.y;
			n1.x = nInput1.x+4;
			n1.y = nInput1.y;
			n0.textAlign="center";
			n1.textAlign="center";
			n0.alpha=0;
			n1.alpha=0;
			
			wsc.removeChild(wsc.getChildByName("n0"),-0.02);
			wsc.removeChild(wsc.getChildByName("n1"),-0.02);
			wsc.addChild(n0,n1);
			fadeInOutObj(n0, 0.02);
			fadeInOutObj(n1, 0.02);
			
			setTimeout(function(){                                                          //after 0.2 seconds
				wsc.removeChild(wscRBtn);	                                                //remove randButton from whiteSc
				fadeInOutObj(wscSBtn, 0.02);                                                //fade in startButton
				setButton(wscSBtn, buildArena);                                             //set startButton's functionality
			},200);
			
			turn = Math.round(Math.random());                                               //generates either 0 or 1	
		
			var p_bw = new lib["pbw"+grayscalePlayerNames[turn]];                           //create grayscale player figure
			
			p_bw.name = "pbw" + grayscalePlayerNames[turn];                                 //setting grayscale figure name
			var removedPlayer = wsc.getChildByName("p" + grayscalePlayerNames[turn]);       //getting the player that don't start
			p_bw.x = removedPlayer.x;                                                       //setting x position of grayscale figure
			p_bw.y = removedPlayer.y;                                                       //setting y position of grayscale figure
			p_bw.alpha = 0;                                                                 //making it transparent
			wsc.addChild(p_bw);                                                             //adding it as whiteSc's child
			fadeInOutObj(p_bw, 0.02);                                                       //fading in grayscale figure after 0.5 sec
		
			setTimeout(function(){                                                          //after 0.1 seconds
				wsc.removeChild(removedPlayer);                                               //remove the player that don't start from whiteSc after 0.5 sec
			},100);
			wscMessage.text = playerNames[turn] + " " + "מתחיל את המשחק";                   //declare the starting player
		}
		
		//placing all required objects in container
		function buildArena() {
			soundFadeInOut(sounds[sounds.length-1], -0.001, 0); //fade out sound
			
			setTimeout(function(){                                                          //after 5 seconds
				createjs.Sound.removeSound("start");                                          //removing openning music
				var gameMusic = createjs.Sound.play("game", {loop: -1});                      //playing game music
				sounds.push(gameMusic);                                                       //making the sound available globally
				gameMusic.volume = 0;                                                         //sets the music volume to zero
				soundFadeInOut(gameMusic, 0.001, 0.1);                                        //fading it in
			},5000);
			
			var wsc = stage.getChildByName("whiteSc");                                      //getting whiteSc container
			moveObject(wsc, wsc.x, -stageH, 3);                                             //moving whiteSc up	outside of the stage
			fadeInOutObj(wsc, -0.005);                                                      //fading out whiteSc
			setTimeout(function(){                                                          //after 1 second
				stage.removeChild(wsc);                                                     //remove whiteSc from stage
			},1000);
			
			//board objects
			var gameBoard = new lib.board_0();                                              //ceatess the game board
			var backBoard = new lib.board_1();                                              //creates the board gray backgound
			var boardBase = new lib.base_2();                                               //creates the game board base
			backBoard.name = "bb";
			gameBoard.name = "gb";
			
			setBoardMatrix(boardCols, boardRows);
			
			for(var c=0; c<board.length; c++){
				var whiteRect = new createjs.Shape();
				whiteRect.graphics.beginFill("#ffffff").drawRect(0, 0, 88, 88);
				whiteRect.alpha = 1;
				whiteRect.regX = 44;
				whiteRect.name = "wr"+c;
			    whiteRect.x = (c*(pieceSize+8.5))+60;
				whiteRect.y = backBoard.nominalBounds.height-(pieceSize+33.85);
				backBoard.addChild(whiteRect);
			}
			
			//current player objects
			var p = wsc.getChildByName("p" + turn);                                         //getting player1 figure
			var pBase = new lib["base_" + turn]();                                            //creates player1 base
			var pScreen = new lib["screen_" + turn]();                                        //creates player1 object container
			pScreen.name = "pScreen";
				
			//grayscale player objects
			var pBW = wsc.getChildByName("pbw"+grayscalePlayerNames[turn]);                 //getting player1 grayscale figure
			var baseBW = new lib.base_bw();                                                 //creates a grayscale player base
			var screenBW = new lib.screen_bw();                                             //creates grayscale object container
			
			screenBW.name = "screenBW";
			pBW.name = "pbw";
			
			//board position
			backBoard.x = (stageW-backBoard.nominalBounds.width)/2;                         //setting backboard x position
			backBoard.y = -gameBoard.nominalBounds.height;                                  //setting backBoard y position above stage
			boardBase.x = stageW/2;                                                         //setting boardBase x position
			boardBase.y = stageH;                                                           //setting boardBase y position bewlow stage
			gameBoard.x = backBoard.x;
			gameBoard.y = backBoard.y
			baseBW.y = screenBW.nominalBounds.height*-0.06;                                 //sets grayscale player's base y position
			pBase.y = pScreen.nominalBounds.height*-0.06;                                   //sets grayscale player's base y position
			
		
			setTimeout(function(){                                                          //after 1 second
				p.x = 0;                                                                      //set player's x position
				pBW.x = 0;                                                                    //set grayscale player's x position
				p.y = -pScreen.nominalBounds.height;                                          //set player's y position
				pBW.y = -pScreen.nominalBounds.height;                                        //set grayscale player's y position
				pScreen.alpha = 0;                                                            //set player's screen alpha to 0
				screenBW.alpha = 0;                                                           //set grayscale player's screen alpha to 0
			},1000);
			
			screenBW.y = stageH-pBase.nominalBounds.height-baseBW.y; //
			pScreen.y = stageH-pBase.nominalBounds.height-pBase.y;
		
			pScreen.x = playersPosX[turn];
			screenBW.x = playersPosX[(turn+1)%2];
			
			screenBW.addChild(baseBW);                                                      //adds screenBW as baseBW's child
			pScreen.addChild(pBase);
			boardBase.setBounds(boardBase.x, backBoard.y, 409.85, 39.15);                   //set x, y, width and height to boardBase
			
			setBoardObjects(backBoard, gameBoard);
			gameBoard.shadow = new createjs.Shadow("#353535", 0, 15, 30);                   //apply shadow to board
			setTimeout(function(){
				pScreen.addChild(p);
				screenBW.addChild(pBW);
				stage.addChild(pScreen,screenBW, backBoard,gameBoard,boardBase);
				
			},1000);
		
			setTimeout(function(){
				fadeInOutObj(pScreen, 0.01);
				fadeInOutObj(screenBW, 0.01);
			}, 2000);
			
			setTimeout(function(){
				moveObject(boardBase, boardBase.x, stageH-boardBase.nominalBounds.height, 1);
				moveObject(backBoard, backBoard.x, 140/*stageH-boardBase.nominalBounds.height-boardBase.nominalBounds.height*/, 1.5);
				moveObject(gameBoard, gameBoard.x, 140,1.5);
			},2500);
			
			if(turn%2==0){
				var name0 = new createjs.Text(playerNames[0], "bold 20px Rubik", playerColors[turn%2]);
				var name1 = new createjs.Text(playerNames[1], "bold 20px Rubik", "gray");
			}else{
				var name0 = new createjs.Text(playerNames[0], "bold 20px Rubik", "gray");
				var name1 = new createjs.Text(playerNames[1], "bold 20px Rubik", playerColors[turn%2]);
			}
			
			centerRegPoint(name0);
			centerRegPoint(name1);
			
			name0.y = stageH*0.08;
			name1.y = stageH*0.08;
			name0.x = 180;
			name1.x = 1100;
			
			name0.name = "name0";
			name1.name = "name1";
			
			name0.alpha = 0;
			name1.alpha = 0;
			stage.getChildByName("pause").alpha = 1;
		
			stage.addChild(name0, name1);
			
			setTimeout(function(){
				fadeInOutObj(name0, 0.02);
				fadeInOutObj(name1, 0.02);
			},2000);
			var timeObjs = setTurnTime(); //returns text object that will show time
			
			var subjText = new createjs.Text("המשחק: " + subjects[subject], "bold 20px Rubik");
			subjText.y = -(backBoard.nominalBounds.height*0.25);
			subjText.x = backBoard.nominalBounds.width/2;
			centerRegPoint(subjText);
			backBoard.addChild(subjText);
			
			var gameMsg = new createjs.Text("גרור את האסימונים אל המשפך מעל העמודה המתאימה","16px Rubik");
			centerRegPoint(gameMsg);
			gameMsg.y = -(backBoard.nominalBounds.height*0.2);
			gameMsg.x = backBoard.nominalBounds.width/2;
			backBoard.addChild(gameMsg);
			stage.getChildByName("pause").addEventListener("click", pause);
		
			setTimeout(function(){
				stage.addChild(timeObjs[0],timeObjs[1]);
				startTurn();
			},5000);
		}
		
		//starting a turn
		function startTurn(){
			loadGameObjects(); //creates game pieces
			timeInterval = setInterval(timer,1000);
		}
		//orgenize stage objects and data for the next turn
		function nextTurn(){
			for (var i = 0; i < itemPositionsCopy.length; i++){
				itemPositions[i] = itemPositionsCopy[i].slice();
			}
			
			var screen = stage.getChildByName("pScreen");                                                   //old screen
			var bw_screen = stage.getChildByName("screenBW");                                               // old b&w player
			var old_pbw = bw_screen.getChildByName("pbw");                                                  //gets the grayscale objects from stage
			var t = stage.getChildByName("time");
			var th = stage.getChildByName("timeH");
			
			for(var obj=0;obj<objectsOnStage.length;obj++){
				stage.removeChild(stage.getChildByName(objectsOnStage[obj]));
			}
			bw_screen.removeChild(old_pbw);                                                                 //remove the cuurent grayscale player
			stage.removeChild(screen);                                                                      //remove the current player's screen along with it's children
			
			stage.getChildByName("name"+((turn+1)%2)).color = playerColors[(turn+1)%2];                     //set color of names
			stage.getChildByName("name"+(turn%2)).color = "gray";
			
			var grayscalePlayer = new lib["pbw"+(turn%2)]();                                                //creates grayscale player
			var player = new lib["player_"+((turn+1)%2)]();
			var pBase = new lib["base_"+((turn+1)%2)](); 	
			var screen2 = new lib["screen_"+(turn+1)%2]();
		
			
			t.color = playerColors[(1+turn)%2];
			th.color = playerColors[(1+turn)%2];
			t.x = playersPosX[(1+turn)%2]-13;
			th.x = playersPosX[(1+turn)%2]+13;
			t.text = 30;
			
			player.x =0;
			player.y =-screen.nominalBounds.height;
			player.gotoAndStop(0);
			screen2.name = "pScreen";
			grayscalePlayer.name = "pbw";
			player.name = "p"+((turn+1)%2);
			
			screen2.x = playersPosX[(turn+1)%2];
			bw_screen.x = playersPosX[turn%2];
			
			pBase.y = screen.nominalBounds.height*-0.06;
			screen2.y = stageH-pBase.nominalBounds.height-pBase.y;
			grayscalePlayer.y = -bw_screen.nominalBounds.height;
			grayscalePlayer.x = 0;
			
			bw_screen.addChild(grayscalePlayer);
			screen2.addChild(pBase, player);
			stage.addChildAt(screen2, 2);
			
			turn++;
			
			setTimeout(function(){
				startTurn();
			} ,2000);
		}
		
		function endTurn(endType){
			clearInterval(timeInterval);                                                                                   //stop timer interval
			var endMessagesP1 = ["הזמן שלך נגמר", "!ניצחת בשלב", "נגמר המקום על הלוח"];                                  //part 2 of end turn messages
			var endMessagesP2 = ["עכשיו התור של", "עכשיו התור של", "עכשיו התור של"];                                        //part 2 of end turn messages
			var icons = [lib.icon_time_over, lib.icon_star, lib.icon_full_Board];                                          //icons for end turn message
			var scenarios = [function(){}, addStar, clearBoard];                                                               //functions to execute base on endType
			
			var msgScreen = new lib.screen_2();                                                                            //a yello message screen to contain an end turn message
			var contBtn = new lib.continue_btn();                                                                          //a button to continue game
			var icon = new icons[endType]();                                                                               //an icon to represent the end turn type
			
			var playerName = new createjs.Text(playerNames[turn%2], "bold 18px Rubik", playerColors[turn%2]);              //textbox with the name of the current player
			var secPlayerName = new createjs.Text(playerNames[(turn+1)%2], "bold 18px Rubik", playerColors[(1+turn)%2]);   //textbox with the name of the next player
			var messagePart1 = new createjs.Text(endMessagesP1[endType], "bold 18px Rubik");                               //a textbox to contain the first part of a message type
			var messagePart2 = new createjs.Text(endMessagesP2[endType], "bold 18px Rubik");                               //a textbox to contain the first part of a message type
			
			if(endType==2){
				playerName.text="";
			}
			
			for(var obj=0; obj<objectsOnStage.length; obj++){
				stage.getChildByName(objectsOnStage[obj]).removeAllEventListeners();
			}
			
			setButton(contBtn, scenarios[endType]);
				
			contBtn.addEventListener("click", function(){
				createjs.Tween.get(msgScreen).to({y:-200},1000,createjs.Ease.quadOutbackInOut);
				
				endTurnWindowCounter--;
				if(endTurnWindowCounter==0){
					nextTurn();
				}
			});
			
			playerName.textAlign = "left";
			messagePart2.textAlign = "left";
			secPlayerName.textAlign = "right";
			
			msgScreen.x = stageW/2;
			msgScreen.y = stageH/2;
			icon.y = -msgScreen.nominalBounds.height/4;
			icon.scaleX = 1.3;
			icon.scaleY = 1.3;
			contBtn.y = 70;
			playerName.x = 40;
			playerName.y = -10;
			messagePart1.x = playerName.x -120;
			messagePart1.y  = playerName.y;
			messagePart2.x = -30;
			messagePart2.y = 20;
			secPlayerName.x = messagePart2.x-5;	
			secPlayerName.y = messagePart2.y;
			
			msgScreen.addChild(contBtn, playerName, secPlayerName, messagePart1, messagePart2, icon);
			stage.addChild(msgScreen);
		}
		
		//removes all game objects from stage
		function clearBoard(){
			for(p=0; p<objectsInsideBoard.length; p++){
				var rndDirection = (Math.random()+1)*2000;
				createjs.Tween.get(stage.getChildByName(objectsInsideBoard[p])).
				to({x:rndDirection, y:rndDirection}, 1000, createjs.Ease.bounceOut).call(function(){
					stage.removeChild(objectsInsideBoard[p]);
					setBoardMatrix(boardCols, boardRows);
				});
			}
			objectsInsideBoard = [];
			boardFullCounter = 0;
			lastXPosInCol = [0, 0, 0, 0, 0];
			for(var c=0; c<board.length; c++){
				stage.getChildByName("bb").getChildByName("wr"+c).y = stage.getChildByName("bb").nominalBounds.height-(pieceSize+33.85);
			}
		}
		
		function addStar(){
			wins[turn%2]++;
			var star = new lib.icon_star();
			var nameWinner = stage.getChildByName("name"+(turn%2));
			star.alpha = 0;
			star.scaleX = 10;
			star.scaleY = 10;
			star.x = stageW/2;
			star.y = stageH/2;
			
			stage.addChild(star);
			createjs.Tween.get(star).to({alpha:1}, 1000).wait(300)
			.to({scaleX: 0.8, scaleY: 0.8, x: nameWinner.x-(wins[turn%2]*47.4), y: nameWinner.y}, 700).call(clearBoard);
		}
		
		
		function setTurnTime(){
			var timeText = new createjs.Text(turnTime, "bold 24px Rubik", playerColors[turn%2]);
			timeText.name = "time";
			timeText.textAlign = "left";
			timeText.y = 100;
			timeText.x = playersPosX[turn%2]-13;
			centerRegPoint(timeText);
			
			var timeHeader = new createjs.Text(" :זמן","bold 20px Rubik", playerColors[turn%2]);
			timeHeader.name = "timeH";
			timeHeader.textAlight = "left";
			timeHeader.y = timeText.y;
			timeHeader.x = playersPosX[turn%2]+13;
			centerRegPoint(timeHeader);
			
			return [timeText,timeHeader];
		}
		
		function timer(){
			var tt = stage.getChildByName("time");
			tt.text--;
			if(tt.text == 15){
				stage.getChildByName("pScreen").getChildByName("p"+(turn%2)).gotoAndPlay(1);
			}
			if(tt.text == 9){
				tt.x += 10;
			}else if(tt.text == 0){
				clearInterval(timeInterval);
				endTurnWindowCounter++;
				endTurn(0);
			}
		}
		
		function onSelect(e) {                                                         //executes on option selection from combobox
			if (e.currentTarget.value != 0) {
				subject = e.currentTarget.value-1;
				stage.removeChild(e.currentTarget);
				fadeInOutObj(stage.getChildByName("OS"), -0.01);
				setTimeout(choosePlayerNames, 500);
			}
		}
		
		//sets listeners for a button
		function setButton(button, func){
			button.addEventListener("mouseover", function(){                           //on mouseover
				button.gotoAndPlay(1);                                                 //play animation
			});
			button.addEventListener("mouseout", function(){                            //on mouseout
				button.gotoAndPlay(5);                                                 //play animation
			});
			button.addEventListener("click", func);                                    //on click - calls the required function for game control
			button.addEventListener("click", btnBehav);                                //on click - call generic button behaviour
		}
		
		//defines behaviour for buttons
		function btnBehav(e){
			e.currentTarget.removeAllEventListeners();                                 //removes all listeners from a button
			e.currentTarget.gotoAndPlay(10);                                           //play animation
			var click = createjs.Sound.play("click");                                  //play click sound effect
			click.volume = 0.2;                                                        //sets click sound effect volume
		}
		
		function updateAvailableCell(col){
				var wr = stage.getChildByName("bb").getChildByName("wr"+col);
				wr.y -= pieceSize+10;
				wr.alpha = 0;
				fadeInOutObj(wr, 0.01);
		}
		
		function setBoardMatrix(c, r) {
			board = new Array(c);
			for (var i = 0; i < board.length; i++) {
				board[i] = new Array(r);
				for (var j = 0; j < board[i].length; j++) {
					board[i][j] = 0;
				}
			}
		}
		
		function insertObjectToBoardMatrix(col) {
			for (var r = 0; r < board[col].length; r++) {
				if (board[col][r] == 0) {
					board[col][r] = (turn%2)+1;
					if(r<board[col].length-1){
						lastXPosInCol[col]++;
						updateAvailableCell(col);
					}
					if(board[col][3] != 0){
						boardFullCounter++;
					}
					return checkForWin({val: turn%2+1, xPos: col, yPos: r});
					break;
				}
			}
		}
		
		function checkForWin(lastObj){
			var count = 0;
			//number of spaces to check to the left of the last object
			var spaceToLeft = 3;
			if(lastObj.xPos<spaceToLeft){
				spaceToLeft = lastObj.xPos;
			}
			//number of spaces to check above the last object
			var spaceFromAbove = (board[0].length-1)-lastObj.yPos;
		
			var spaceFromBelow = lastObj.yPos;
			
			//vertical
			for(i=0;i<board[lastObj.xPos].length;i++){
				if(board[lastObj.xPos][i]==lastObj.val){
					count++;
					consecutive.push([(lastObj.xPos*(pieceSize+8.5))+450, (i*(pieceSize+7.6))-105.85]);
					if(count>=winCondition){
						return true;
					}
				}else{
					count = 0;
				}
			}
			consecutive = [];
			count=0;
			
			//horizontal
			for(var i=0;i<board.length;i++){
				if(board[i][lastObj.yPos]==lastObj.val){
					count++;
					consecutive.push([(i*(pieceSize+8.5))+450, (lastObj.yPos*(pieceSize+7.6))-105.85]);
					if(count>=winCondition){
						return true;
					}
				}else{
					count = 0;
				}
			}
			count = 0;
			consecutive = [];
			
			//diagonal - bottom left to top right
			if(spaceFromBelow>spaceToLeft){
				spaceFromBelow=spaceToLeft;
			}
			var row=lastObj.yPos-spaceFromBelow;
			for(var i=lastObj.xPos-spaceToLeft; i<board.length && row<=board[0].length; i++){
				if(board[i][row++] == lastObj.val){
					count++;
					consecutive.push([(i*(pieceSize+8.5))+450, ((row-1)*(pieceSize+7.6))+-105.85]);
					if(count>=winCondition){
						return true;
					}
				}else{
					count = 0;
				}
			}
			count=0;
			consecutive = [];
			
			//diagonal - top left to bottom right
			if(spaceFromAbove>spaceToLeft){
				spaceFromAbove = spaceToLeft;
			}else if(spaceFromAbove<spaceToLeft){
				spaceToLeft = spaceFromAbove;
			}
			var row=lastObj.yPos+spaceFromAbove;
			for(var i=lastObj.xPos-spaceFromAbove; i<board.length && row>=0; i++){
				if(board[i][row--] == lastObj.val){
					count++;
					consecutive.push([(i*(pieceSize+8.5))+450, ((1+row)*(pieceSize+7.6))-105.85]);
					if(count>=winCondition){
						return true;
					}
				}else{
					count = 0;
				}
			}
			count=0;
			consecutive = [];
			return false;
		}
		
		function createColoredCircle(){
			var bb = stage.getChildByName("bb");
			for(var m=0;m<consecutive.length;m++){
				var circ = new createjs.Shape();
				circ.graphics.beginFill(playerColors[turn%2]).drawCircle(consecutive[m][0], bb.nominalBounds.height-(consecutive[m][1]+43), 43);
				circ.alpha = 0;
				//fadeInOutObj(circ, 0.02);
				stage.addChild(circ);
		/*		setTimeout(function(){
					fadeInOutObj(circ, -0.02);
				},250);
				setTimeout(function(){
					bb.removeChild(circ);
				},500);*/
		
				
				createjs.Tween.get(circ).to({alpha:1},700).wait(2000).to({alpha:0},700).call(function(){
					bb.removeChild(circ);
				});
			}
		}
		function setBoardObjects(board, gb){
			for(cat=0; cat<subjCategory[subject].length; cat++){
				var category = new createjs.Text(subjCategory[subject][cat], "bold 16px Rubik", "white");
				var transpRect = new createjs.Shape();
				
				transpRect.name = "rec"+cat;
				transpRect.graphics.beginFill("#ffffff").drawRect(40,0,10,80);
				transpRect.alpha = 0.01;
				category.textAlign = "center";
				category.lineWidth = pieceSize;
				
				category.x = (cat*(pieceSize+8.5))+60;
				category.y = -10;	
				
				transpRect.x = 451+(95*cat);
				transpRect.y = 33;
				gb.addChild(category);
				stage.addChild(transpRect);
			}
		}
		
		function loadGameObjects(){
			objectsOnStage = [];
			objectsOnStagePos = [];
			for(var cat=0; cat<subjectsContent[subject].length; cat++){                                  //iterates over the remaining category arrays that did not participate in the previous random text object creation
				var rand = Math.floor(Math.random()*subjectsContent[subject][cat].length);               //generating random number between zero and the length of a category array	
				var item = subjectsContent[subject][cat][rand]; 
				if(subjectsContent[subject][cat].length != 0){
					if(item.includes("0") || item.includes("1")){
						loadImg(item, subject, cat, rand);          
					}else{
						textToCircle(item, subject, cat, rand); 				                         //creating text object from the removed text
					}
				}
			}
		}
		
		function textToCircle(txt, subj, cat, item){
			var circleTextContainer = new createjs.Container();
			var txtContent = new createjs.Text(txt,"12px Rubik");
			
			txtContent.lineWidth = 60;
			txtContent.x = 40;
			txtContent.y = 38;
			
			circleTextContainer.regX = 43;
			circleTextContainer.regY = 43;
		
			txtContent.textAlign = "center";
			
			var shape = new createjs.Shape();
			
			if(turn%2==0){
				var stroke = [0,0];
			}else{
				var stroke = [4,3];
			}
			
			shape.graphics.beginFill("white").setStrokeStyle(4).setStrokeDash(stroke).beginStroke(playerColors[turn%2]).drawCircle(40, 40, 43);
			
			circleTextContainer.addChild(shape,txtContent);
			randomPosition(circleTextContainer, subj, cat, item);
		}
		
		function loadImg(imgName, subj, cat, item){
			var img = new Image();
			img.src = "images/"+imgName+".png";
			setTimeout(function(){
				img.onload = imgToCircle(img, subj, cat, item);
				
			},100);
		}
		
		function imgToCircle(img, subj, cat, item) {
		    var shape = new createjs.Shape();
		
			var m = new createjs.Matrix2D();
			m.translate(-44, -44);
			m.scale(0.44, 0.44);
			
			if(turn%2==0){
				var stroke = [0,0];                                                                                               //stroke type for player 0
			}else{
				var stroke = [4,3];                                                                                               //stroke type for player 1
			}
		    
		    shape.graphics.setStrokeStyle(4).setStrokeDash(stroke).beginStroke(playerColors[turn%2]).beginBitmapFill(img, "no-repeat", m).drawCircle(0,0,43);
			randomPosition(shape, subj, cat, item);
		}
		
		function randomPosition(obj, subj, cat, item){
			var scaleTween;
			var rand = parseInt(Math.random()*itemPositions[turn%2].length);
			var positions = itemPositions[turn%2].splice(rand,1);
			
			obj.x = positions[0][0];
			obj.y = positions[0][1];
			obj.addEventListener("pressmove", dragFunc);
			obj.addEventListener("pressup", up);
			obj.addEventListener("mousedown", function(){
				var select = createjs.Sound.play("select");
				select.volume = 0.2;
			});
			obj.addEventListener("mouseover", overObj);
			obj.addEventListener("mouseout", function(){
				createjs.Tween.get(obj).to({scaleX:1,scaleY:1},100);
				clearTimeout(scaleTween);
			});
			stage.addChildAt(obj, stage.children.length-2);
			obj.name = subjectsContent[subj][cat][item]+"_"+cat+item;
			objectsOnStage.push(obj.name);
			objectsOnStagePos.push([obj.x, obj.y]);
		}
		function overObj(){
			scaleTween = setTimeout(function(){
				createjs.Tween.get(obj).to({scaleX:1.5,scaleY:1.5},100);
			},400);
		}
		
		function dragFunc(e) {	
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);                                  //gets mouse event global stage position
			setTimeout(function(){
				e.removeEventListener("mouseover", overObj);
			},200);
			e.currentTarget.scaleX = 1;
			e.currentTarget.scaleY = 1;
			
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;
		}
		
		//mouse pressup eventHandler
		function up(e){
			var intrCount = 0;                                                                                                         //holds the number of failed intesection attempts
			for(var col=0;col<board.length;col++){                                                                                     //iterates the number of colums in the matrix
				var target = stage.getChildByName("rec"+col);                                                                          //gets the transparent rectangale above a column
				var a = [e.currentTarget.x, e.currentTarget.y, pieceSize, pieceSize];                                                  //holds the bounds of the intersecting game object
				var b = [target.x, target.y, 10, 80];                                                                                  //holds the bounds of the intersecting square object
				var isCorrect;                                                                                                         //holds the result result of intersection test
				if (intersect(a, b) && board[col][3]==0) {                                                                             //if objects intersect and the desired column isn't full
					e.currentTarget.removeAllEventListeners();
					stage.addChildAt(e.currentTarget,14);                                                                              //change z-index of the current game object
					clearInterval(timeInterval);                                                                                       //stops the timer
					if(e.currentTarget.name[e.currentTarget.name.length-2] == target.name[target.name.length-1]){                      //if the intersecting objects have the same column number in their name
						playersAns[turn%2][0][target.name[target.name.length-1]].push(subjectsContent[subject][col].splice(e.currentTarget.name[e.currentTarget.name.length-1], 1)); //add the current object's name to the answers array of the current player
						
						objectsInsideBoard.push(objectsOnStage.splice(objectsOnStage.indexOf(e.currentTarget.name),1));                //adds the current object's name to an array that holds all objects in the game board
						isCorrect = true;                                                                                              //sets test indicator to true
							
					}else{                                                                                                             //if the intersecting objects have the same column number in their name
						playersAns[turn%2][1].push(subjectsContent[subject][col].splice(e.currentTarget.name[e.currentTarget.name.length-1], 1)); //add the current object's name to the wrong answers array of the current player
						isCorrect = false;                                                                                             //sets test indicator to false
					}
					e.currentTarget.x = target.x;                                                                                      //sets the current game object's x position to the the x position of the intersected transparent rectangle above the column
					e.currentTarget.y = target.y;                                                                                      //sets the current game object's y position to the the y position of the intersected transparent rectangle above the column
					dropPiece(e.currentTarget, target.name[target.name.length-1], boardXPos[lastXPosInCol[col]], isCorrect);           //calls a function to drop the game object in to the board
				}else{                                                                                                                 //if intersection fails or column is full
					e.currentTarget.addEventListener("mouseover",overObj);
					intrCount++;                                                                                                       //counts failed intersect attempts
					if(intrCount == board.length){                                                                                     //if all tests failed
						var targetPos = objectsOnStagePos[objectsOnStage.indexOf(e.currentTarget.name)];                               //gets the object's starting position
						e.currentTarget.x = targetPos[0];                                                                              //set object's x position to its starting position
						e.currentTarget.y = targetPos[1];                                                                              //set object's y position to its starting position
					}
				}
			}
		}
		
		//fall animation
		function dropPiece(obj, col, dropPos, answer){
			createjs.Tween.get(obj).to(	{y: dropPos}, 2000, createjs.Ease.bounceOut)                            //animates fall motion
			.call(function(){
				stage.addChildAt(obj,stage.children.length);                                                    //after animation finishes change z-index of object in stage
				})
			.call(function(){
				if(answer){                                                                                     //if answer is correct
					var correctSound = createjs.Sound.play("correct");                                          //play positive feedback sound
					
					if(insertObjectToBoardMatrix(col)){                                                         //if there are four consecutive game object that belong to the same player
						endTurnWindowCounter++;                                                                 //indicates that a message window is open
						var winMusic = createjs.Sound.play("win");
						createColoredCircle();
						setTimeout(function(){
							endTurn(1);
						},3000);
						if(boardFullCounter==board.length){
							endTurnWindowCounter++;
							endTurn(2);
						}
					}else{
						
						if(boardFullCounter==board.length){
							endTurnWindowCounter++;
							endTurn(2);
						}else{
							nextTurn();
						}
					}
					
				}else{                                                                                          //if answer is wrong
					var wrongSound = createjs.Sound.play("wrong");                                              //play negative feedback sound
					var wrongX = new lib.wrong();
					
					wrongX.scaleX = 0.01;
					wrongX.scaleY = 0.01;
					wrongX.y = obj.y;
					wrongX.x = obj.x;
					stage.addChild(wrongX);
					
					createjs.Tween.get(wrongX).to({scaleX:1, scaleY:1}, 250, createjs.Ease.circIn )
					.wait(1000).to({scaleX:0, scaleY:0},250, createjs.Ease.circOut).call(function(){
						stage.removeChild(wrongX);
					}).call(nextTurn);
				}
				
			});
			/*if(checkIfFinishedGame()){
				endgame();
			}*/
		}
		
		/*function checkIfFinishedGame(){
			var answerSum = 0;
			for(var p=0; p<playersAns.length; p++){
				consol.log(answerSum);
				for(var ans=0;ans<playersAns[p].length;ans++){
					if(ans==0){
						for(var cat=0;cat<playersAns[p][ans].length;cat++){
							answerSum +=playersAns[p][ans][cat].length;
						}
					}else{
						answerSum += playersAns[p][ans].length;
					}
				}
			}
			if(answerSum==30){
				return true;
			}
		}*/
		
		function intersect(obj1, obj2) {
		
			if (obj1[0] + (obj1[2] / 2) <= obj2[0] - (obj2[2] / 2)) {
				return false;
			} else if (obj1[1] + (obj1[3] / 2) <= obj2[1] - (obj2[3] / 2)) {
				return false;
			} else if (obj1[0] - (obj1[2] / 2) > obj2[0] + (obj2[2] / 2)) {
				return false;
			} else if (obj1[1] - (obj1[3] / 2) > obj2[1] + (obj2[3] / 2)) {
				return false;
			}
			return true;
		}
		
		/*function endGame(){
			var notebook = stage.getChildByName("note_bg");
			var againBtn = new lib.again_btn();
			var finishBtn = new lib.finish_btn();
			
			notebook.y = -stageH;
			againBtn.y = stageH/2;
			againBtn.x = stageW/2-100;
			finishBtn.y = againBtn.y;
			finishBtn.x = stageW/2+100;
			
			stage.addChid(noteBook, againBtn, finishBtn);
			createjs.Tween.get(notebook).to({y:0},1000, createjs.Ease.bounceOut).wait(300).get(againBtn,finishBtn).to({alpha:1}, 500);
			
			
			var answersContainer1 = new createjs.Container();
			var answersContainer2 = new createjs.Container();
			
			var midLine = new createjs.Shape();
			midLine.graphics.beginFill("black").drawRect(stageW/2, stageH*0.3, stageH*0.7, 3);
			
			answersContainer1.x = stageW*0.03;
			answersContainer1.y = stageH*0.4;
			
			answersContainer2.x = midxline.x+stageW*0.12;
			answersContainer2.y = answersContainer1.y;
			
			for(var player=0; player<playersAns.length; player++){
				var answersContainer = new createjs.Container();
				answersContainer.name = "ansCont"+player;
				answersContainer.alpha = 0;
				stage.addChild(answersContainer);
				answersContainer.x = (stageW*0.03)+((stageW*0.59)*ans);
				answersContainer1.y = stageH*0.4;
				
		
				for(var cat=0; cat<playersAns[player][0].length; cat++){
					for(var ans=0; ans<ans.length; ans++){
						loadGameObjectsForEndGame(playersAns[player][0][cat][ans], player, cat, ans);
					}
				}
			}
		}*/
		
		
		////////////////////////////////////////////
		////////////  helper functions  ////////////
		////////////////////////////////////////////
		
		//a function to help control object movement on the stage
		function moveObject(obj, xDest, yDest, time){
			//calculate the difference between two points
			deltaX = xDest-obj.x;
			deltaY = yDest-obj.y;
			
			//calculates the advancement per millisecond
			var xMovement = ((deltaX/time)/1000)*4;
			var yMovement = ((deltaY/time)/1000)*4;
			
			var mInterval = setInterval(function(){
				obj.x += xMovement;
				obj.y += yMovement;
				
				if(yMovement>0 && yDest<=obj.y){
					yMovement = 0;
				}else if(yMovement<0 && yDest>=obj.y){
					yMovement = 0;
				}
				if(xMovement>0 && xDest<=obj.x){
					xMovement = 0;
				}else if(xMovement<0 && xDest>=obj.x){
					xMovement = 0;
				}
				if(xMovement==0 && yMovement==0){
					clearInterval(mInterval);
				}
			},1);
		}
		
		//fade object in/out(the object to fade, alpha jumps between 0-1)
		function fadeInOutObj(obj, fadeValue) {
			var fadeInterval = setInterval(function () {
				obj.alpha += fadeValue;
				if (obj.alpha <= 0 || obj.alpha >= 1) {
					clearInterval(fadeInterval, 2);
				}
			}, 1);
		}
		
		//takes an object as argument and ceterizes its registration point
		function centerRegPoint(obj){
			obj.regX = obj.getBounds().width/2;
			obj.regY = obj.getBounds().height/2;
		}
		
		function setupFont(){
			WebFontConfig = {
				google: {
					families: ['Rubik'] //כאן בחרו את הפונט
				}
			};
			(function(){
				var wf = document.createElement('script');
				wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
				wf.type = 'text/javascript';
				wf.async = true;
				var s = document.getElementsByTagName('script')[0];
		
				s.parentNode.insertBefore(wf, s);
			})();
		}
		
		function registerSounds(){
				createjs.Sound.registerSound("sounds/start.mp3", "start");
				createjs.Sound.registerSound("sounds/in-game-long.mp3", "game");                                     //load game music
				createjs.Sound.registerSound("sounds/btn_click.mp3","click");                                        //load click sound effect
				createjs.Sound.registerSound("sounds/select.mp3", "select");                                         //load select sound effect
				createjs.Sound.registerSound("sounds/win.mp3", "win");                                               //load win music
				createjs.Sound.registerSound("sounds/correct.mp3", "correct");                                       //load correct sound effect
				createjs.Sound.registerSound("sounds/wrong.mp3", "wrong");                                           //load wrong sound effect
		}
		
		function pause(){
			var c_time = stage.getChildByName("time").text;
			console.log(stage.getChildByName("time"))
			//clearInterval(timeInterval);
			
			var pauseInterval = setInterval(function(){
				stage.getChildByName("time").text = c_time;
			}, 1000);
			
			var pause_bg = new lib.pause_bg();
			var pause_screen = new lib.screen_2();
			var pause_icon = new lib.icon_pause();
			var pause_msg = new createjs.Text("מחכים שתחזרו", "bold 18px Rubik", "black");
			var pause_window_btn = new lib.continue_btn();
			
			pause_screen.x = stageW/2;
			pause_screen.y = stageH/2;
			pause_icon.y = -pause_screen.nominalBounds.height/4;
			pause_window_btn.y = 70;
			
			pause_msg.textAlign = "center";
			pause_bg.alpha = 0;
		
			
			pause_screen.addChild(pause_icon, pause_msg, pause_window_btn);
			pause_bg.addChild(pause_screen);
			stage.addChild(pause_bg);
			fadeInOutObj(pause_bg, 0.04);
			
			
			setButton(pause_window_btn, function(){
				clearInterval(pauseInterval);
				fadeInOutObj(pause_bg, -0.04)
				setTimeout(function(){
					stage.removeChild(pause_bg);
				},300);
			});
		}
		
		function mute(e){
			e.currentTarget.gotoAndStop(1);
			createjs.Sound.removeAllSounds();
		}
		
		function soundFadeInOut(soundObj ,volume, volumeGoal){
			soundInterval = setInterval(function(){
				soundObj.volume += volume;
				if(volume>0){
					if(soundObj.volume>=volumeGoal){
						clearInterval(soundInterval);
					}
				}else{
					if(soundObj.volume<=volumeGoal){
						clearInterval(soundInterval);
					}
				}
			},20);
		}
		
		preGame();                                                                                    //calls the first screen
		//choosePlayerNames();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '78F141F76AA55E499730C191F93FDD3F',
	width: 1280,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/OCCNFD0.jpg?1550565246700", id:"OCCNFD0"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1550565246700", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1550565246700", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1550565246700", id:"an.TextInput"},
		{src:"components/ui/src/combobox.js?1550565246700", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['78F141F76AA55E499730C191F93FDD3F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;