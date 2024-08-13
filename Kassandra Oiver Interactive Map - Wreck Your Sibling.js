(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_2", frames: [[786,1077,768,729],[0,0,1899,1075],[0,1077,784,750]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3", frames: [[0,1408,474,592],[0,731,514,675],[770,0,654,509],[0,0,768,729],[1426,0,474,592],[516,731,474,592],[476,1408,474,592],[952,1325,474,592],[992,594,474,592],[1468,594,474,592],[1428,1188,474,592]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4", frames: [[0,0,474,592],[0,594,474,592],[0,1188,474,592],[476,0,474,592],[952,0,474,592],[1428,0,474,592],[476,594,474,592],[476,1188,474,592],[952,594,474,592],[1428,594,474,592],[952,1188,474,592],[1428,1188,474,592]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5", frames: [[0,0,474,592],[0,594,474,592],[0,1188,474,592],[476,0,474,592],[952,0,474,592],[1428,0,474,592],[476,594,474,592],[476,1188,474,592],[952,594,474,592],[1428,594,474,592],[952,1188,474,592],[1428,1188,474,592]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6", frames: [[0,0,474,592],[0,594,474,592],[0,1188,474,592],[476,0,474,592],[952,0,474,592],[1428,0,474,592],[476,594,474,592],[476,1188,474,592],[952,594,474,592],[1428,594,474,592],[952,1188,474,592],[1428,1188,474,592]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7", frames: [[0,0,474,592],[0,594,474,592],[0,1188,474,592],[476,0,474,592],[952,0,474,592],[1428,0,474,592],[476,594,474,592],[476,1188,474,592],[952,594,474,592],[1428,594,474,592],[952,1188,474,592],[1428,1188,474,592]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8", frames: [[0,0,474,591],[476,0,474,589],[952,0,474,589],[1428,0,474,589],[0,593,474,591],[476,591,474,589],[476,1182,474,589],[952,591,474,589],[0,1186,474,591],[1428,591,474,589],[952,1182,474,589],[1428,1182,474,589]]},
		{name:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9", frames: [[0,939,238,260],[0,0,474,589],[1333,354,255,346],[1590,354,255,346],[1448,0,255,352],[0,591,255,346],[1182,0,264,346],[733,618,255,346],[257,657,255,346],[1705,0,255,352],[990,702,255,346],[1247,702,255,346],[819,264,255,352],[476,303,255,352],[1076,348,255,352],[1504,702,255,346],[733,551,59,63],[0,1201,230,150],[365,1344,89,108],[240,1005,238,260],[1847,354,192,227],[1761,934,256,244],[804,1050,238,260],[1044,1050,238,260],[1284,1050,238,260],[1524,1180,238,260],[1764,1180,238,260],[514,966,288,228],[480,1196,266,230],[1761,702,280,230],[748,1312,284,84],[819,0,361,262],[804,966,176,78],[748,1398,127,84],[514,801,191,84],[1524,1050,191,84],[0,1353,224,63],[232,1267,244,75],[514,887,166,77],[1847,583,175,94],[1356,1312,131,120],[232,1344,131,116],[1034,1384,131,92],[877,1398,139,69],[548,1428,174,46],[257,591,191,51],[98,1418,124,68],[476,0,341,301],[794,551,20,53],[1484,1442,61,86],[1962,167,81,75],[733,303,83,71],[1962,244,72,84],[1166,264,11,40],[1393,1434,89,71],[733,376,68,85],[1306,1434,85,80],[733,463,67,86],[456,1428,90,92],[0,1418,96,91],[1076,264,88,78],[1962,0,83,81],[990,618,70,69],[1547,1442,70,69],[1619,1442,70,69],[1691,1442,70,69],[1034,1312,320,70],[1167,1384,137,78],[1962,83,81,82],[514,657,160,142]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.HammerButton = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Angry1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Angry10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Angry11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Angry12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Angry13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Angry14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Angry2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Angry3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Angry4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Angry5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Angry6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Angry7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Angry8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Angry9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Anya1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Anya10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Anya11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Anya12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Anya13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Anya14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Anya2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Anya3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Anya4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Anya5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Anya6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Anya7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Anya8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Anya9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.computer = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.computer_1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Controler = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Cursor = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.faceSpeachbubble = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Hammer1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Hammer10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Hammer11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Hammer12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Hammer13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Hammer14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Hammer2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Hammer3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Hammer4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Hammer6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Hammer7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Hammer8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Hammer9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hands = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.HeadPhones = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Hurt1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Hurt10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Hurt11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Hurt12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Hurt14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Hurt2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Hurt3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Hurt4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Hurt5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Hurt6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Hurt7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Hurt8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Hurt9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Hurt13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Kuwutiful = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Layer90 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer91 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Marker1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Marker10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Marker11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Marker12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Marker13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Marker2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Marker3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Marker4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Marker5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Marker6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Marker7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Marker8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Marker9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.MarkerButon = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.mc = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Paper1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Paper10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Paper11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Paper12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Paper13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Paper14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Paper2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Paper3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Paper4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Paper5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Paper6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Paper7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Paper8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Paper9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.pause = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Play = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Reset = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Sad1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Sad10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Sad11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Sad12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Sad13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Sad14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Sad2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Sad3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Sad4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Sad5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Sad6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Sad7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Sad8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Sad9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Shut1 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Shut10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Shut11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Shut12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Shut13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Shut14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Shut2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Shut3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Shut4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Shut5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Shut6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Shut7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Shut8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Shut9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ShutUp = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.SPEAK = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Trash = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.TrashCan = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Yap10 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Yap11 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Yap12 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Yap13 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Yap14 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Yap2 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Yap3 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Yap4 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Yap5 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Yap6 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Yap7 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Yap8 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Yap9 = function() {
	this.initialize(ss["Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.website_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Kuwutiful();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,78);


(lib.Tablet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwODLQg/gDguglQgdgXgTgiQgSgigEglQgEgkALglQALglAYgdQAdgjArgSQAsgSAtADQA6AFAwAoQAwAoAOA5QAOA4gXA6QgXA6gxAgQgtAdg3AAIgLAAgAP9CtQg+gDgugkQgegYgSgiQgTgigEglQgDgkALglQALglAYgdQAdgjArgSQArgSAuADQA6AFAwAoQAvApAOA5QAPA5gXA5QgXA5gxAgQgtAeg4AAIgLgBg");
	this.shape.setTransform(890.1131,514.6596);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AwiC1QgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAugPA0QgPA1gpAdQgZASgeAGQgQADgPAAQgPAAgOgDgAPpBvQgygJgigrQgjgqgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgQADgPAAQgPAAgOgDg");
	this.shape_1.setTransform(889.0665,514.6909);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AwmCEQgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgJAAgLgCgAQDBwQgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	this.shape_2.setTransform(888.6027,513.1984);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AxPBjQgWgQgLgbQgKgbAFgbQAGgfAZgXQAZgXAggCQAggDAdASQAdASAMAeQALAcgJAhQgKAhgZATQgaAUgiAAQgiAAgZgUgAPaA7QgWgQgLgbQgKgaAFgbQAGggAZgXQAZgXAggCQAggDAdASQAdASAMAeQALAdgJAgQgKAhgZATQgaAUgiAAQgiAAgZgUg");
	this.shape_3.setTransform(889.5842,515.1786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AxJBPQgWgQgKgbQgLgbAFgaQAGggAagXQAZgXAggCQAggDAdASQAdASALAeQAMAdgKAgQgJAhgaATQgZAUgiAAQgiAAgagUgAPTBPQgWgRgKgbQgLgbAFgaQAGgfAagXQAZgXAggDQAggDAdASQAdASALAeQAMAegKAgQgJAhgaATQgZATgiAAQgiAAgagTg");
	this.shape_4.setTransform(893.2342,516.2036);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).wait(1).to({x:895.2342},0).wait(1).to({x:899.2342},0).wait(1).to({x:895.2342},0).wait(1).to({x:889.2342},0).wait(1).to({x:885.2342},0).wait(1).to({x:889.2342},0).to({_off:true},1).wait(3));

	// Layer_1
	this.instance = new lib.Layer90();
	this.instance.setTransform(0,0,0.9461,0.9461);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABkCaIgggXIgdgUQgqgcgWgNIgjgSQgUgLgNgKQgcgXgQgJQgbgOgNgIQgjgWgJgmQgFgTAFgTQAFgUANgNQANgOAUgEQAUgEARAIQAIAEAVATIASAQQAHADAHAFQAMAIAGALQAaAUAcASIA/AkIA2AjQAkAYATALQAbAQAKALQAKANAEAQQADAQgEAPQgFAQgMALQgMAMgPAEQgJACgKAAQgcAAgfgUg");
	this.shape_5.setTransform(795.0141,521.1899);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.008)").s().p("AhSKCQi8gYiMhzQiMhyg9i0Qg9izApivQApiwCGiHQCGiGCwgpQBHgQBJAAQAqAAAsAGQB2APBmA2QBnA3BOBYQBPBZAqBsQAsBzgBB8QgCB9guByQguBxhXBbQhWBahwAzQh4A3iDACIgMAAQgrAAgugGgAhRhRQgTAEgOANQgNAOgFAUQgEATAEASQAJAlAkAWQAMAJAcANQAPAKAdAYQAMAJAUALIAiATQAWAMArAcIAeAUIAgAXQAqAcAjgKQAQgEAMgLQALgMAFgPQAFgQgEgQQgDgQgKgMQgKgMgbgPQgUgMgjgYIg3gjIg/glQgcgSgagTQgHgKgLgIQgHgFgIgDIgRgRQgUgSgJgEQgLgGgNAAIgNACg");
	this.shape_6.setTransform(786.0771,512.1297);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(204,0,255,0.008)").s().p("Ak5KIQCDgCB4g3QBvgzBWhaQBXhbAuhxQAuhyACh9QABh8gshzQgqhshPhZQhOhYhmg3Qhmg2h2gPQgsgGgrAAQA2gCA3AIQB1APBnA3QBmA3BOBZQBOBZAqBsQArBzgBB8QgCB+gvBxQguBxhXBaQhYBbhuAyQh8A4iIAAIgJAAg");
	this.shape_7.setTransform(819.3775,512.1122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance}]}).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1796.6,1017.1);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {draw:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

	// animation
	this.instance = new lib.MarkerButon();
	this.instance.setTransform(0,496);

	this.instance_1 = new lib.Marker1();
	this.instance_1.setTransform(590,32);

	this.instance_2 = new lib.Marker2();
	this.instance_2.setTransform(589,45);

	this.instance_3 = new lib.Marker3();
	this.instance_3.setTransform(589,25);

	this.instance_4 = new lib.Marker4();
	this.instance_4.setTransform(589,0);

	this.instance_5 = new lib.Marker5();
	this.instance_5.setTransform(589,2);

	this.instance_6 = new lib.Marker6();
	this.instance_6.setTransform(589,26);

	this.instance_7 = new lib.Marker7();
	this.instance_7.setTransform(581,49);

	this.instance_8 = new lib.Marker8();
	this.instance_8.setTransform(546,71);

	this.instance_9 = new lib.Marker9();
	this.instance_9.setTransform(529,76);

	this.instance_10 = new lib.Marker10();
	this.instance_10.setTransform(529,42);

	this.instance_11 = new lib.Marker11();
	this.instance_11.setTransform(529,42);

	this.instance_12 = new lib.Marker12();
	this.instance_12.setTransform(496,64);

	this.instance_13 = new lib.Marker13();
	this.instance_13.setTransform(476,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,764,564);


(lib.Speakbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SPEAK();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,78);


(lib.speak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGZBKQgUAAgPgKQgOgKgIgPQgIgQABgRQABgQAKgOQAJgPAPgIQAZgMAZAIQARAGANAPQAMAPACARQADATgJARQgIARgQAKQgPAJgTAAIgBAAgAmuA0QgSgGgLgOQgLgOgDgSQgCgRAHgRQAHgQAOgLQAPgKASgCQAJgBAIACQATAEANAMQAOANAFASQAFASgFAQQgFARgOANQgOAMgRAEIgMABQgLAAgLgEg");
	this.shape.setTransform(76.6455,62.9313);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AGhBJQgMgLgHgOQgHgRACgSQADgSALgOQALgNASgHQARgGASAEQAaAFAPAWQAKAOABATQAAATgIAQQgPAageAGIgNABQgWAAgSgOgAnNAqQgUgBgPgLQgPgMgHgSQgHgSAFgSQAEgTAPgNQAOgOATgDQASgDATAIQASAHAKAQQAJAOABAPQADATgKARQgJARgQAKQgOAHgRAAIgFAAg");
	this.shape_1.setTransform(75.7133,66.5848);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AG+BCQgKgEgHgHQgGgEgEgGQgEgFgFgJQgHgQADgSQACgSAMgOQALgOASgGQARgGASAEQARAEAOANQANANAFARQAEAQgFASQgGASgNALQgNAMgTAEIgMABQgMAAgLgEgAnfA7QgQgCgOgLQgNgKgHgPQgGgPABgPQACgRAJgOQAJgNAPgIQAPgIAQAAQAQAAAPAJQAOAIAJAOQAFAIACAKQAEAPgDAPQgEAQgLAMQgLAMgPAGQgLADgLAAIgKAAg");
	this.shape_2.setTransform(75.8122,68.2348);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AG+BFQgPgJgJgQQgJgRAAgSQABgOAIgNQAIgOAMgIQAMgJAQgCQAPgCAOAFQARAGAMAPQAMAOADARQACASgIARQgHARgPAKQgPAKgTABIgCAAQgSAAgPgIgAn9AsQgQgJgJgQQgJgRABgRQABgPAHgNQAIgOAMgIQANgJAPgCQAPgCAOAFQARAGANAPQAMAOACASQADASgIAQQgIARgPAKQgPAKgTABIgCAAQgRAAgPgIg");
	this.shape_3.setTransform(75.5784,70.8728);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AG7BTQgQgGgMgOQgLgOgDgSQgCgRAHgQQAHgRAOgKQAOgKASgCQASgCAQAHQAKAGAGAFQAHAGAFAIQAFAJACAJQAEARgFARQgFASgNALQgNAMgSAEIgNABQgLAAgLgEgAnnAnQgQgGgLgOQgMgOgCgQQgDgQAGgQQAFgQANgLQANgLARgDQASgEAQAGQAQAFAMAOQALANAEARQADARgGAQQgGARgNALQgNALgSADIgMABQgLAAgLgEg");
	this.shape_4.setTransform(75.2748,78.9464);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmxBEQgTgEgNgNQgOgNgEgUQgEgTAHgSQAHgRARgMQARgLATAAQAXABASANQARAPAFAWQAEAPgFAQQgFAQgLALQgLAMgQAEQgKADgKAAIgMgBgAGdA9QgPgCgNgIQgOgJgIgQQgIgPABgQQABgcAWgTQAWgTAdAEQAdAFAQAXQASAbgLAdQgKAfgeAKQgKADgLAAIgIAAg");
	this.shape_5.setTransform(76.5957,86.5465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_1
	this.instance = new lib.ShutUp();
	this.instance.setTransform(209,278);

	this.instance_1 = new lib.faceSpeachbubble();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,654,509);


(lib.sibling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {yap:0,shut:14,sad:28,hurt:55,angry:69};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_13 = function() {
		this.gotoAndPlay("yap");
	}
	this.frame_27 = function() {
		this.gotoAndPlay("yap");
	}
	this.frame_54 = function() {
		this.gotoAndPlay("yap");
	}
	this.frame_68 = function() {
		this.gotoAndPlay("yap");
	}
	this.frame_95 = function() {
		this.gotoAndPlay("yap");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(14).call(this.frame_27).wait(27).call(this.frame_54).wait(14).call(this.frame_68).wait(27).call(this.frame_95).wait(2));

	// Yap_1
	this.instance = new lib.Yap14();

	this.instance_1 = new lib.Yap2();

	this.instance_2 = new lib.Yap3();

	this.instance_3 = new lib.Yap4();

	this.instance_4 = new lib.Yap5();

	this.instance_5 = new lib.Yap6();

	this.instance_6 = new lib.Yap7();

	this.instance_7 = new lib.Yap8();

	this.instance_8 = new lib.Yap9();

	this.instance_9 = new lib.Yap10();

	this.instance_10 = new lib.Yap11();

	this.instance_11 = new lib.Yap12();

	this.instance_12 = new lib.Yap13();

	this.instance_13 = new lib.Shut1();

	this.instance_14 = new lib.Shut2();

	this.instance_15 = new lib.Shut3();

	this.instance_16 = new lib.Shut4();

	this.instance_17 = new lib.Shut5();

	this.instance_18 = new lib.Shut6();

	this.instance_19 = new lib.Shut7();

	this.instance_20 = new lib.Shut8();

	this.instance_21 = new lib.Shut9();

	this.instance_22 = new lib.Shut10();

	this.instance_23 = new lib.Shut11();

	this.instance_24 = new lib.Shut12();

	this.instance_25 = new lib.Shut13();

	this.instance_26 = new lib.Shut14();

	this.instance_27 = new lib.Sad1();

	this.instance_28 = new lib.Sad2();

	this.instance_29 = new lib.Sad3();

	this.instance_30 = new lib.Sad4();

	this.instance_31 = new lib.Sad5();

	this.instance_32 = new lib.Sad6();

	this.instance_33 = new lib.Sad7();

	this.instance_34 = new lib.Sad8();

	this.instance_35 = new lib.Sad9();

	this.instance_36 = new lib.Sad10();

	this.instance_37 = new lib.Sad11();

	this.instance_38 = new lib.Sad12();

	this.instance_39 = new lib.Sad13();

	this.instance_40 = new lib.Sad14();

	this.instance_41 = new lib.Hurt1();

	this.instance_42 = new lib.Hurt2();

	this.instance_43 = new lib.Hurt3();

	this.instance_44 = new lib.Hurt4();

	this.instance_45 = new lib.Hurt5();

	this.instance_46 = new lib.Hurt6();

	this.instance_47 = new lib.Hurt7();

	this.instance_48 = new lib.Hurt8();

	this.instance_49 = new lib.Hurt9();

	this.instance_50 = new lib.Hurt10();

	this.instance_51 = new lib.Hurt11();

	this.instance_52 = new lib.Hurt12();

	this.instance_53 = new lib.Hurt13();

	this.instance_54 = new lib.Hurt14();

	this.instance_55 = new lib.Angry1();

	this.instance_56 = new lib.Angry2();
	this.instance_56.setTransform(0,3);

	this.instance_57 = new lib.Angry3();
	this.instance_57.setTransform(0,3);

	this.instance_58 = new lib.Angry4();
	this.instance_58.setTransform(0,3);

	this.instance_59 = new lib.Angry5();
	this.instance_59.setTransform(0,1);

	this.instance_60 = new lib.Angry6();
	this.instance_60.setTransform(0,3);

	this.instance_61 = new lib.Angry7();
	this.instance_61.setTransform(0,3);

	this.instance_62 = new lib.Angry8();
	this.instance_62.setTransform(0,3);

	this.instance_63 = new lib.Angry9();
	this.instance_63.setTransform(0,3);

	this.instance_64 = new lib.Angry10();
	this.instance_64.setTransform(0,1);

	this.instance_65 = new lib.Angry11();
	this.instance_65.setTransform(0,3);

	this.instance_66 = new lib.Angry12();
	this.instance_66.setTransform(0,3);

	this.instance_67 = new lib.Angry13();
	this.instance_67.setTransform(0,3);

	this.instance_68 = new lib.Angry14();
	this.instance_68.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,474,592);


(lib.screenshot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ScreenShot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenshot, new cjs.Rectangle(0,0,70,69), null);


(lib.refresh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Reset();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.refresh, new cjs.Rectangle(0,0,70,69), null);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Play();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,69);


(lib.pause_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pause();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,69);


(lib.paperball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ball:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// animation
	this.instance = new lib.Paper2();
	this.instance.setTransform(0,62.95,1,1,-45);

	this.instance_1 = new lib.Paper1();
	this.instance_1.setTransform(-1729,-374);

	this.instance_2 = new lib.Paper3();
	this.instance_2.setTransform(-1571,-505);

	this.instance_3 = new lib.Paper4();
	this.instance_3.setTransform(-1357,-553);

	this.instance_4 = new lib.Paper5();
	this.instance_4.setTransform(-1171,-549);

	this.instance_5 = new lib.Paper6();
	this.instance_5.setTransform(-1085,-537);

	this.instance_6 = new lib.Paper7();
	this.instance_6.setTransform(-1086,-530);

	this.instance_7 = new lib.Paper8();
	this.instance_7.setTransform(-1183,-431);

	this.instance_8 = new lib.Paper9();
	this.instance_8.setTransform(-1257,-354);

	this.instance_9 = new lib.Paper10();
	this.instance_9.setTransform(-1423,-249);

	this.instance_10 = new lib.Paper11();
	this.instance_10.setTransform(-1553,-182);

	this.instance_11 = new lib.Paper12();
	this.instance_11.setTransform(-1679,-125);

	this.instance_12 = new lib.Paper13();
	this.instance_12.setTransform(-1726,-99);

	this.instance_13 = new lib.Paper14();
	this.instance_13.setTransform(-1729,-27);

	this.instance_14 = new lib.Trash();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:-45,x:0,y:62.95}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{rotation:0,x:-1709,y:-433}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance,p:{rotation:-45,x:0,y:62.95}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1729,-553,1842.2,666.2);


(lib.off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63);


(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer91();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,784,750), null);


(lib.lefteye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ACaAAQAABAgtAtQgTATgWALQgfAPglAAQg/AAgtgtQgtgtAAhAQAAg/AtgtQAtgtA/AAQAlAAAfAPQAWALATATQAtAtAAA/g");
	this.shape.setTransform(15.4,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAnQgMgCgJgIQgJgJgDgLQgDgOAIgNQAHgOAOgFQANgEAPAGQAOAGAGANQAGANgEAOQgFAPgMAIQgKAGgKAAIgGgBg");
	this.shape_1.setTransform(23.4786,22.1333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lefteye, new cjs.Rectangle(-1.5,-1.5,33.8,33.8), null);


(lib.Headphones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HeadPhones();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Headphones, new cjs.Rectangle(0,0,361,262), null);


(lib.hammer_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {smash:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// hammer
	this.instance = new lib.HammerButton();
	this.instance.setTransform(159,469);

	this.instance_1 = new lib.Hammer1();
	this.instance_1.setTransform(159,469);

	this.instance_2 = new lib.Hammer2();
	this.instance_2.setTransform(107,231);

	this.instance_3 = new lib.Hammer3();
	this.instance_3.setTransform(112,71);

	this.instance_4 = new lib.Hammer4();
	this.instance_4.setTransform(141,25);

	this.instance_5 = new lib.Hammer6();

	this.instance_6 = new lib.Hammer7();
	this.instance_6.setTransform(302,24);

	this.instance_7 = new lib.Hammer8();

	this.instance_8 = new lib.Hammer9();
	this.instance_8.setTransform(302,24);

	this.instance_9 = new lib.Hammer10();
	this.instance_9.setTransform(284,20);

	this.instance_10 = new lib.Hammer11();
	this.instance_10.setTransform(192,5);

	this.instance_11 = new lib.Hammer12();
	this.instance_11.setTransform(99,216);

	this.instance_12 = new lib.Hammer13();
	this.instance_12.setTransform(125,343);

	this.instance_13 = new lib.Hammer14();
	this.instance_13.setTransform(159,469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,729);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ACaAAQAABAgtAtQgtAthAAAQg/AAgtgtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/g");
	this.shape.setTransform(15.4,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAnQgMgDgJgJQgIgJgCgMQgCgLAGgMQAGgMALgGQALgFANACQANACAJAJQAIAJACAOQACAMgGALQgGALgNAGQgIAEgIAAIgHgBg");
	this.shape_1.setTransform(21.765,23.2624);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-1.5,-1.5,33.8,33.8), null);


(lib.cursor_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cursor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cursor_mc, new cjs.Rectangle(0,0,89,108), null);


(lib.Controller = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Controler();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Controller, new cjs.Rectangle(0,0,230,150), null);


(lib.can = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TrashCan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,142);


(lib.anyabutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Anya1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255,346);


(lib.Link = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.website_btn = new lib.website_btn();
	this.website_btn.name = "website_btn";
	this.website_btn.setTransform(88,39,1,1,0,0,0,88,39);
	new cjs.ButtonHelper(this.website_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.website_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,78);


(lib.Cursor_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.cursor_mc = new lib.cursor_mc();
	this.cursor_mc.name = "cursor_mc";
	this.cursor_mc.setTransform(15,4.2,1,1,0,0,0,15,4.2);

	this.timeline.addTween(cjs.Tween.get(this.cursor_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cursor_1, new cjs.Rectangle(0,0,89,108), null);


(lib.anya_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {animation1:0,"animation1":27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// animation
	this.anya_btn = new lib.anyabutton();
	this.anya_btn.name = "anya_btn";
	this.anya_btn.setTransform(127.5,173,1,1,0,0,0,127.5,173);
	new cjs.ButtonHelper(this.anya_btn, 0, 1, 1);

	this.instance = new lib.Anya2();

	this.instance_1 = new lib.Anya3();

	this.instance_2 = new lib.Anya4();

	this.instance_3 = new lib.Anya5();

	this.instance_4 = new lib.Anya6();

	this.instance_5 = new lib.Anya7();

	this.instance_6 = new lib.Anya8();

	this.instance_7 = new lib.Anya9();

	this.instance_8 = new lib.Anya10();

	this.instance_9 = new lib.Anya11();

	this.instance_10 = new lib.Anya12();

	this.instance_11 = new lib.Anya13();

	this.instance_12 = new lib.Anya14();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.anya_btn}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,352);


// stage content:
(lib.KassandraOiverInteractiveMapWreckYourSibling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.streamSoundSymbolsList[0] = [{id:"SHUTUP",startFrame:0,endFrame:1,loop:1,offset:0},{id:"PUNK",startFrame:0,endFrame:1,loop:1,offset:0},{id:"PUNK",startFrame:0,endFrame:1,loop:1,offset:0},{id:"PUNK",startFrame:0,endFrame:1,loop:1,offset:0}];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("PUNK",0);
		this.InsertIntoSoundStreamData(soundInstance,0,1,1);
		var soundInstance = playSound("PUNK",0);
		this.InsertIntoSoundStreamData(soundInstance,0,1,1);
		var soundInstance = playSound("PUNK",0);
		this.InsertIntoSoundStreamData(soundInstance,0,1,1);
		var soundInstance = playSound("SHUTUP",0);
		this.InsertIntoSoundStreamData(soundInstance,0,1,1);
		this.stop();
		
		
		//cursor
		this.stage.cursor = "none";
		this.cursor_mc.mouseEnabled = false;
		this.addEventListener("tick", CustomMouseCursor.bind(this));
		
		function CustomMouseCursor() {
			this.cursor_mc.x = stage.mouseX / stage.scaleX;
			this.cursor_mc.y = stage.mouseY / stage.scaleY;
		}
		
		//screenshot
		this.save_btn.addEventListener("click", screenshot.bind(this));
		
		function screenshot(){
		        var a = document.createElement('a');
		        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
		        a.download = 'SHUTUP.jpg';
		        a.click();
		}
		
		
		//refresh
		this.refresh_btn.addEventListener("click", refreshPage.bind(this));
		
		function refreshPage(){
			location.reload();
			return false;
		}
		
		
		
		//website
		this.website_btn.addEventListener("click", ClickToGoToWebPage);
		
		
		function ClickToGoToWebPage() {
			window.open("https://allmylinks.com/kuwutiful", "_blank");
		}
		
		
		
		//eyestracking
		stage.enableMouseOver(30);
		var _this = this;
		
		stage.on('stagemousemove', function(e){
			
			 var radians = Math.atan2(e.localY - _this.eye1_mc.y, e.localX - _this.eye1_mc.x);
		 var degrees = radians * (180 / Math.PI);
		 _this.eye1_mc.rotation = degrees;
		
		});
		
		stage.on('stagemousemove', function(e){
			
			 var radians = Math.atan2(e.localY - _this.eye2_mc.y, e.localX - _this.eye2_mc.x);
		 var degrees = radians * (180 / Math.PI);
		 _this.eye2_mc.rotation = degrees;
		
		});
		
		
		
		//drag and drop
		function ClickToDrag(e) {
			var p = stage.globalToLocal(e.stageX, e.stageY);
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;
		}
		
		this.headphones_mc.addEventListener("pressmove", ClickToDrag.bind(this));
		this.gotoAndPlay("angry");  
		
		this.tablet_mc.addEventListener("pressmove", ClickToDrag.bind(this));
		this.gotoAndPlay("angry");  
		
		this.controller_mc.addEventListener("pressmove", ClickToDrag.bind(this));
		this.gotoAndPlay("angry");  
		
		
		this.headphones_mc.addEventListener("pressup", overlapCheckHeadphones.bind(this));
		
		function overlapCheckHeadphones(){
			if (this.headphones_mc.x >= 592 && this.headphones_mc.x <= 700 && this.headphones_mc.y >= 238 && this.headphones_mc.y <= 400){
				
			}else{
				this.sib_mc.gotoAndPlay("angry"); 
			}
		}
		
		this.controller_mc.addEventListener("pressup", overlapCheckController.bind(this));
		
		//replace headphones_mc with controller_mc
		function overlapCheckController(){
			if (this.headphones_mc.x >= 592 && this.headphones_mc.x <= 700 && this.headphones_mc.y >= 238 && this.headphones_mc.y <= 400){
				
			}else{
				this.sib_mc.gotoAndPlay("angry"); 
			}
		}
		
		//trash
		this.ball_mc.visible = false;
		this.can_btn.addEventListener('click' , ClickToHide.bind(this));
		
		function ClickToHide(){
			this.ball_mc.visible = !this.ball_mc.visible
		}
		
		//speak
		this.speak_mc.visible = false;
		this.speak_btn.addEventListener('click' , ClickToSpeak.bind(this));
		
		function ClickToSpeak(){
			this.speak_mc.visible = !this.speak_mc.visible
			createjs.Sound.play("SHUTUP");
		}
		
		
		
		//music
		var _this = this;
		
		_this.play_btn.on('click', function(){
			
			if (_this.PUNK)
				_this.PUNK.play();
			else
				_this. PUNK = createjs.Sound.play("PUNK");
		});
		
		
		this.pause_btn.on("click", function(){
			if (_this.PUNK)
				_this.PUNK.paused = true;		
		});
		
		
		
		
		//animations
		function playAnya() {
			this.anya_mc.play();
		}
		this.anya_mc.addEventListener("click" ,playAnya.bind(this));
		
		
		function playShutAnimation() {
			this.sib_mc.gotoAndPlay("shut");
			
		}
		this.sib_mc.addEventListener("click" ,playShutAnimation.bind(this));
		
		
		
		
		
		this.hammer_mc.addEventListener("click" ,playHammer.bind(this));
		
		function playHammer() {
			this.hammer_mc.play();
			this.sib_mc.gotoAndPlay("smash")
			this.sib_mc.gotoAndPlay("hurt"); 
		}
		
		
		
		
		this.marker_mc.addEventListener("click" ,playMarker.bind(this));
		
		function playMarker() {
			this.marker_mc.play();
			this.sib_mc.gotoAndPlay("draw")
			this.sib_mc.gotoAndPlay("sad"); 
		}
		
		
		
		
		
		
		this.ball_mc.addEventListener("click" ,playBall.bind(this));
		
		function playBall() {
			this.ball_mc.play();
			this.sib_mc.gotoAndPlay("ball")
			this.sib_mc.gotoAndPlay("hurt"); 
		}
		
		
		
		
		
		
		//turnoff
		this.light_mc.visible = true;
		this.off_btn.addEventListener('click' , ClickToTurnOff.bind(this));
		
		function ClickToTurnOff(){
			this.light_mc.visible = !this.light_mc.visible
			this.sib_mc.gotoAndPlay("angry");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Tablet
	this.tablet_mc = new lib.Tablet();
	this.tablet_mc.name = "tablet_mc";
	this.tablet_mc.setTransform(854.1,1366.7,1,1,0,0,0,898.3,508.5);

	this.timeline.addTween(cjs.Tween.get(this.tablet_mc).wait(1));

	// Cursor
	this.cursor_mc = new lib.Cursor_1();
	this.cursor_mc.name = "cursor_mc";
	this.cursor_mc.setTransform(484.9,375.45,1,1,0,0,0,18.9,12.8);

	this.timeline.addTween(cjs.Tween.get(this.cursor_mc).wait(1));

	// Kuwutiful
	this.website_btn = new lib.Link();
	this.website_btn.name = "website_btn";
	this.website_btn.setTransform(808,55,1,1,0,0,0,88,39);
	new cjs.ButtonHelper(this.website_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.website_btn).wait(1));

	// refresh
	this.refresh_btn = new lib.refresh();
	this.refresh_btn.name = "refresh_btn";
	this.refresh_btn.setTransform(675,59.5,1,1,0,0,0,35,34.5);
	new cjs.ButtonHelper(this.refresh_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.refresh_btn).wait(1));

	// ScreenShot
	this.save_btn = new lib.screenshot();
	this.save_btn.name = "save_btn";
	this.save_btn.setTransform(590,60.5,1,1,0,0,0,35,34.5);
	new cjs.ButtonHelper(this.save_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.save_btn).wait(1));

	// Play_idn
	this.play_btn = new lib.play();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(508,60.5,1,1,0,0,0,35,34.5);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(1));

	// pause
	this.pause_btn = new lib.pause_1();
	this.pause_btn.name = "pause_btn";
	this.pause_btn.setTransform(425,60.5,1,1,0,0,0,35,34.5);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pause_btn).wait(1));

	// SPEAK_button
	this.speak_btn = new lib.Speakbutton();
	this.speak_btn.name = "speak_btn";
	this.speak_btn.setTransform(137.5,338,1,1,0,0,0,68.5,39);
	new cjs.ButtonHelper(this.speak_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.speak_btn).wait(1));

	// Speak
	this.speak_mc = new lib.speak();
	this.speak_mc.name = "speak_mc";
	this.speak_mc.setTransform(402,296.5,1,1,0,0,0,327,254.5);

	this.timeline.addTween(cjs.Tween.get(this.speak_mc).wait(1));

	// Right_Eye
	this.eye1_mc = new lib.eye();
	this.eye1_mc.name = "eye1_mc";
	this.eye1_mc.setTransform(183.4,120.6,1,1,0,0,0,15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.eye1_mc).wait(1));

	// Left_eye
	this.eye2_mc = new lib.lefteye();
	this.eye2_mc.name = "eye2_mc";
	this.eye2_mc.setTransform(117.4,120.6,1,1,0,0,0,15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.eye2_mc).wait(1));

	// Character
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9C6BEC").s().p("ADWDFIgMgLQgIgHgGgCQgIgCgDgDQgFgEgBgGQgBgIAFgDIAFgEQAAgFAEgFQAEgEAGgBQALgCAMAJIAUAOQAFACALAEQALACAFADIAKAFQAEABAOgDIAOgCQAJAAAFgCQALgDAPgKIAZgQIALgGIAKgFQAIgFAKgNIAcgiQAHgIADgGQAEgKgBgSQgBgVACgIIALgbQALgYAAgWIgBgSQADgMAIgCQAJgDAHAKQAEAGAAANQAAALgEAWQgHAegDAJIgHAQQgCAKABASQAAAVgMAVQgHAMgNAQQgOASgIAIQgNANgNAHIgVAKIgUAOQgNAJgJADQgKAEgQADIgbACIgOACQgJABgGgCIgIgDQgCADgDADQgFAEgHABQgLAAgMgKgAj+CgQgEgDgCgFQgCgGACgFQACgHAKgMQAXgdALgVQAJgSAMgoQAHgUgEgNQgBgIgHgJIgVgdQgLgSgEgPQgEgKgCgBIgKgHQgIgFgEgJQgEgJACgJQgYAFgPAAQgXABgQgJIgMgGQgHgEgFgBQgOgDgXANQgPAJgHAAQgGAAgEgCQgHAGgEADIgHAEQgEADgCADQgEAIgEADIgIADIgFAEIgEADQgEADgGgCQgFgBgDgDQgFgFgBgEQgDgKALgJQgDgGAFgIQADgFAHgFIAvglQAJgHAFgBIAKgBIA6ABIAPAEQAIACAEADQAFAFgBAJIAAACIAGADQAcAKAhgOQAOgHAEAAQAMgBAFAIQADAHgFAMQgGANABAGQARAFAHAQIAGAVQAEAJAIALIALAQQARAZADANQAFAYgNAoQgLAlgJARIgQAZIgVAdQgHAKgFADQgFAEgFAAQgDAAgEgCgAGxhgQgEgBgIgFIgdgTQgJgGgCgFQgCgJAHgFQAHgGAJACQAIABAOAKIAbAWQAFAIgHAIQgEAFgHAAIgFAAg");
	this.shape.setTransform(153.9667,120.65);

	this.instance = new lib.mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	// Hammer
	this.hammer_mc = new lib.hammer_mc();
	this.hammer_mc.name = "hammer_mc";
	this.hammer_mc.setTransform(436.15,830.2,1,1,0,0,0,278,599);

	this.timeline.addTween(cjs.Tween.get(this.hammer_mc).wait(1));

	// Marker
	this.marker_mc = new lib.Symbol1();
	this.marker_mc.name = "marker_mc";
	this.marker_mc.setTransform(567,605,1,1,0,0,0,382,282);

	this.timeline.addTween(cjs.Tween.get(this.marker_mc).wait(1));

	// ball
	this.ball_mc = new lib.paperball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.setTransform(1786.6,885.6,1,1,0,0,0,56.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.ball_mc).wait(1));

	// Trash_Can
	this.can_btn = new lib.can();
	this.can_btn.name = "can_btn";
	this.can_btn.setTransform(1793,1009,1,1,0,0,0,80,71);
	new cjs.ButtonHelper(this.can_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.can_btn).wait(1));

	// Anya
	this.anya_mc = new lib.anya_mc();
	this.anya_mc.name = "anya_mc";
	this.anya_mc.setTransform(1732.5,411,1,1,0,0,0,127.5,173);

	this.timeline.addTween(cjs.Tween.get(this.anya_mc).wait(1));

	// hands
	this.instance_1 = new lib.hands();
	this.instance_1.setTransform(693,734);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Controler
	this.controller_mc = new lib.Controller();
	this.controller_mc.name = "controller_mc";
	this.controller_mc.setTransform(844,689.95,1,1,0,0,0,115,75);

	this.timeline.addTween(cjs.Tween.get(this.controller_mc).wait(1));

	// sibling
	this.sib_mc = new lib.sibling();
	this.sib_mc.name = "sib_mc";
	this.sib_mc.setTransform(798,545,1,1,0,0,0,237,296);

	this.timeline.addTween(cjs.Tween.get(this.sib_mc).wait(1));

	// Head_Phones
	this.headphones_mc = new lib.Headphones();
	this.headphones_mc.name = "headphones_mc";
	this.headphones_mc.setTransform(767.5,360,1,1,0,0,0,180.5,131);

	this.timeline.addTween(cjs.Tween.get(this.headphones_mc).wait(1));

	// button
	this.off_btn = new lib.off();
	this.off_btn.name = "off_btn";
	this.off_btn.setTransform(1134.5,675.5,1,1,0,0,0,29.5,31.5);
	new cjs.ButtonHelper(this.off_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.off_btn).wait(1));

	// computer
	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(1039,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_91
	this.light_mc = new lib.light();
	this.light_mc.name = "light_mc";
	this.light_mc.setTransform(1296,492,1,1,0,0,0,392,375);

	this.timeline.addTween(cjs.Tween.get(this.light_mc).wait(1));

	// background
	this.instance_3 = new lib.computer_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(915.8,540,1004.2,1335.3);
// library properties:
lib.properties = {
	id: 'AFE04A2A701A4E4CBE27B483A581B797',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_1.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_1"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_2.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_2"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_3"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_4"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_5"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_6"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_7"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_8"},
		{src:"images/Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9.png", id:"Kassandra Oiver Interactive Map _ Wreck Your Sibling_atlas_9"},
		{src:"sounds/PUNK.mp3", id:"PUNK"},
		{src:"sounds/SHUTUP.mp3", id:"SHUTUP"}
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
an.compositions['AFE04A2A701A4E4CBE27B483A581B797'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;