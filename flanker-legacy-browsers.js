/**************** 
 * Flanker *
 ****************/


// store info about the experiment session:
let expName = 'flanker';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'nBlocks': '1',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_wel
n_blocks = 1;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const CheckTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CheckTrialsLoopBegin(CheckTrialsLoopScheduler));
flowScheduler.add(CheckTrialsLoopScheduler);
flowScheduler.add(CheckTrialsLoopEnd);








flowScheduler.add(InstrTrainRoutineBegin());
flowScheduler.add(InstrTrainRoutineEachFrame());
flowScheduler.add(InstrTrainRoutineEnd());
const BlockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlockLoopLoopBegin(BlockLoopLoopScheduler));
flowScheduler.add(BlockLoopLoopScheduler);
flowScheduler.add(BlockLoopLoopEnd);






flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trialTypes.csv', 'path': 'trialTypes.csv'},
    {'name': 'trialTypes_5x.csv', 'path': 'trialTypes_5x.csv'},
    {'name': 'trialTypes_5x.csv', 'path': 'trialTypes_5x.csv'},
    {'name': 'trialTypes.csv', 'path': 'trialTypes.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var text_wel;
var key_resp_wel;
var n_blocks;
var InstrPractClock;
var instrPractText;
var practReady;
var FixationClock;
var fixation;
var StimulateClock;
var stimuText;
var key_resp;
var ISI;
var FeedBackClock;
var fbString;
var times_total;
var times_correct;
var fbText;
var CheckClock;
var checkText;
var InstrTrainClock;
var instrTrainText;
var trainReady;
var BlockEndClock;
var n_this_block;
var text_block;
var key_resp_block;
var EndClock;
var endText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text_wel = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_wel',
    text: '欢迎参加测试！\n接下来我们将向你介绍内容\n\n【按空格键继续...】',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_wel = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_wel
  n_blocks = Number.parseInt(expInfo["nBlocks"]);
  
  // Initialize components for Routine "InstrPract"
  InstrPractClock = new util.Clock();
  instrPractText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrPractText',
    text: '练习模式\n\n在屏幕中央会出现一组箭头，\n请你根据中间箭头的方向选择按键。\n如果中间箭头是"<"，左手食指按"f"键；\n如果中间箭头是">"，右手食指按"j"键；\n\n【按空格键进入练习...】',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  practReady = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "Stimulate"
  StimulateClock = new util.Clock();
  stimuText = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimuText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ISI = new core.MinimalStim({
    name: "ISI", 
    win: psychoJS.window,
    autoDraw: false, 
    autoLog: true, 
  });
  // Initialize components for Routine "FeedBack"
  FeedBackClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  fbString = "";
  times_total = 0;
  times_correct = 0;
  
  fbText = new visual.TextStim({
    win: psychoJS.window,
    name: 'fbText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Check"
  CheckClock = new util.Clock();
  checkText = new visual.TextStim({
    win: psychoJS.window,
    name: 'checkText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "InstrTrain"
  InstrTrainClock = new util.Clock();
  instrTrainText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrTrainText',
    text: '欢迎进入正式测试\n\n在屏幕中央会出现一组箭头，\n请你根据中间箭头的方向选择按键。\n如果中间箭头是"<"，左手食指按"f"键；\n如果中间箭头是">"，右手食指按"j"键；\n\n【按空格键继续...】',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  trainReady = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BlockEnd"
  BlockEndClock = new util.Clock();
  // Run 'Begin Experiment' code from code_block
  n_this_block = 0;
  text_block = "";
  
  text_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_block',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_block = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: '感谢您的参与，本次测试结束！\n【5s后自动退出】',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeMaxDurationReached;
var _key_resp_wel_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_wel.keys = undefined;
    key_resp_wel.rt = undefined;
    _key_resp_wel_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text_wel);
    welcomeComponents.push(key_resp_wel);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_wel* updates
    if (t >= 0.0 && text_wel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_wel.tStart = t;  // (not accounting for frame time here)
      text_wel.frameNStart = frameN;  // exact frame index
      
      text_wel.setAutoDraw(true);
    }
    
    
    // if text_wel is active this frame...
    if (text_wel.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_wel* updates
    if (t >= 0.0 && key_resp_wel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_wel.tStart = t;  // (not accounting for frame time here)
      key_resp_wel.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_wel.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_wel.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_wel.clearEvents(); });
    }
    
    // if key_resp_wel is active this frame...
    if (key_resp_wel.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_wel.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_wel_allKeys = _key_resp_wel_allKeys.concat(theseKeys);
      if (_key_resp_wel_allKeys.length > 0) {
        key_resp_wel.keys = _key_resp_wel_allKeys[_key_resp_wel_allKeys.length - 1].name;  // just the last key pressed
        key_resp_wel.rt = _key_resp_wel_allKeys[_key_resp_wel_allKeys.length - 1].rt;
        key_resp_wel.duration = _key_resp_wel_allKeys[_key_resp_wel_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_wel.corr, level);
    }
    psychoJS.experiment.addData('key_resp_wel.keys', key_resp_wel.keys);
    if (typeof key_resp_wel.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_wel.rt', key_resp_wel.rt);
        psychoJS.experiment.addData('key_resp_wel.duration', key_resp_wel.duration);
        routineTimer.reset();
        }
    
    key_resp_wel.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CheckTrials;
function CheckTrialsLoopBegin(CheckTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    CheckTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'CheckTrials'
    });
    psychoJS.experiment.addLoop(CheckTrials); // add the loop to the experiment
    currentLoop = CheckTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    CheckTrials.forEach(function() {
      snapshot = CheckTrials.getSnapshot();
    
      CheckTrialsLoopScheduler.add(importConditions(snapshot));
      CheckTrialsLoopScheduler.add(InstrPractRoutineBegin(snapshot));
      CheckTrialsLoopScheduler.add(InstrPractRoutineEachFrame());
      CheckTrialsLoopScheduler.add(InstrPractRoutineEnd(snapshot));
      const PractTrialsLoopScheduler = new Scheduler(psychoJS);
      CheckTrialsLoopScheduler.add(PractTrialsLoopBegin(PractTrialsLoopScheduler, snapshot));
      CheckTrialsLoopScheduler.add(PractTrialsLoopScheduler);
      CheckTrialsLoopScheduler.add(PractTrialsLoopEnd);
      CheckTrialsLoopScheduler.add(CheckRoutineBegin(snapshot));
      CheckTrialsLoopScheduler.add(CheckRoutineEachFrame());
      CheckTrialsLoopScheduler.add(CheckRoutineEnd(snapshot));
      CheckTrialsLoopScheduler.add(CheckTrialsLoopEndIteration(CheckTrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var PractTrials;
function PractTrialsLoopBegin(PractTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    PractTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trialTypes.csv',
      seed: undefined, name: 'PractTrials'
    });
    psychoJS.experiment.addLoop(PractTrials); // add the loop to the experiment
    currentLoop = PractTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    PractTrials.forEach(function() {
      snapshot = PractTrials.getSnapshot();
    
      PractTrialsLoopScheduler.add(importConditions(snapshot));
      PractTrialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      PractTrialsLoopScheduler.add(FixationRoutineEachFrame());
      PractTrialsLoopScheduler.add(FixationRoutineEnd(snapshot));
      PractTrialsLoopScheduler.add(StimulateRoutineBegin(snapshot));
      PractTrialsLoopScheduler.add(StimulateRoutineEachFrame());
      PractTrialsLoopScheduler.add(StimulateRoutineEnd(snapshot));
      PractTrialsLoopScheduler.add(FeedBackRoutineBegin(snapshot));
      PractTrialsLoopScheduler.add(FeedBackRoutineEachFrame());
      PractTrialsLoopScheduler.add(FeedBackRoutineEnd(snapshot));
      PractTrialsLoopScheduler.add(PractTrialsLoopEndIteration(PractTrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function PractTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(PractTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function PractTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function CheckTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(CheckTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function CheckTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var BlockLoop;
function BlockLoopLoopBegin(BlockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    BlockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_blocks, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'BlockLoop'
    });
    psychoJS.experiment.addLoop(BlockLoop); // add the loop to the experiment
    currentLoop = BlockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    BlockLoop.forEach(function() {
      snapshot = BlockLoop.getSnapshot();
    
      BlockLoopLoopScheduler.add(importConditions(snapshot));
      const TrainTrialsLoopScheduler = new Scheduler(psychoJS);
      BlockLoopLoopScheduler.add(TrainTrialsLoopBegin(TrainTrialsLoopScheduler, snapshot));
      BlockLoopLoopScheduler.add(TrainTrialsLoopScheduler);
      BlockLoopLoopScheduler.add(TrainTrialsLoopEnd);
      BlockLoopLoopScheduler.add(BlockEndRoutineBegin(snapshot));
      BlockLoopLoopScheduler.add(BlockEndRoutineEachFrame());
      BlockLoopLoopScheduler.add(BlockEndRoutineEnd(snapshot));
      BlockLoopLoopScheduler.add(BlockLoopLoopEndIteration(BlockLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var TrainTrials;
function TrainTrialsLoopBegin(TrainTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trialTypes_5x.csv',
      seed: undefined, name: 'TrainTrials'
    });
    psychoJS.experiment.addLoop(TrainTrials); // add the loop to the experiment
    currentLoop = TrainTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    TrainTrials.forEach(function() {
      snapshot = TrainTrials.getSnapshot();
    
      TrainTrialsLoopScheduler.add(importConditions(snapshot));
      TrainTrialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      TrainTrialsLoopScheduler.add(FixationRoutineEachFrame());
      TrainTrialsLoopScheduler.add(FixationRoutineEnd(snapshot));
      TrainTrialsLoopScheduler.add(StimulateRoutineBegin(snapshot));
      TrainTrialsLoopScheduler.add(StimulateRoutineEachFrame());
      TrainTrialsLoopScheduler.add(StimulateRoutineEnd(snapshot));
      TrainTrialsLoopScheduler.add(TrainTrialsLoopEndIteration(TrainTrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function TrainTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrainTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrainTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function BlockLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(BlockLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BlockLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var InstrPractMaxDurationReached;
var _practReady_allKeys;
var InstrPractMaxDuration;
var InstrPractComponents;
function InstrPractRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstrPract' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstrPractClock.reset();
    routineTimer.reset();
    InstrPractMaxDurationReached = false;
    // update component parameters for each repeat
    practReady.keys = undefined;
    practReady.rt = undefined;
    _practReady_allKeys = [];
    psychoJS.experiment.addData('InstrPract.started', globalClock.getTime());
    InstrPractMaxDuration = null
    // keep track of which components have finished
    InstrPractComponents = [];
    InstrPractComponents.push(instrPractText);
    InstrPractComponents.push(practReady);
    
    InstrPractComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstrPractRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstrPract' ---
    // get current time
    t = InstrPractClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrPractText* updates
    if (t >= 0.0 && instrPractText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrPractText.tStart = t;  // (not accounting for frame time here)
      instrPractText.frameNStart = frameN;  // exact frame index
      
      instrPractText.setAutoDraw(true);
    }
    
    
    // if instrPractText is active this frame...
    if (instrPractText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practReady* updates
    if (t >= 0.0 && practReady.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practReady.tStart = t;  // (not accounting for frame time here)
      practReady.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practReady.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practReady.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practReady.clearEvents(); });
    }
    
    // if practReady is active this frame...
    if (practReady.status === PsychoJS.Status.STARTED) {
      let theseKeys = practReady.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _practReady_allKeys = _practReady_allKeys.concat(theseKeys);
      if (_practReady_allKeys.length > 0) {
        practReady.keys = _practReady_allKeys[_practReady_allKeys.length - 1].name;  // just the last key pressed
        practReady.rt = _practReady_allKeys[_practReady_allKeys.length - 1].rt;
        practReady.duration = _practReady_allKeys[_practReady_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstrPractComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstrPractRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstrPract' ---
    InstrPractComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('InstrPract.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practReady.corr, level);
    }
    psychoJS.experiment.addData('practReady.keys', practReady.keys);
    if (typeof practReady.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practReady.rt', practReady.rt);
        psychoJS.experiment.addData('practReady.duration', practReady.duration);
        routineTimer.reset();
        }
    
    practReady.stop();
    // the Routine "InstrPract" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationMaxDurationReached;
var FixationMaxDuration;
var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FixationClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    FixationMaxDuration = null
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(fixation);
    
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    FixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FixationMaxDurationReached) {
        FixationClock.add(FixationMaxDuration);
    } else {
        FixationClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var StimulateMaxDurationReached;
var stimuString;
var _key_resp_allKeys;
var StimulateMaxDuration;
var StimulateComponents;
function StimulateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stimulate' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StimulateClock.reset();
    routineTimer.reset();
    StimulateMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    stimuString = `${side}${side}${center}${side}${side}`;
    
    stimuText.setText(stimuString);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Stimulate.started', globalClock.getTime());
    StimulateMaxDuration = null
    // keep track of which components have finished
    StimulateComponents = [];
    StimulateComponents.push(stimuText);
    StimulateComponents.push(key_resp);
    StimulateComponents.push(ISI);
    
    StimulateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StimulateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stimulate' ---
    // get current time
    t = StimulateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimuText* updates
    if (t >= 0.2 && stimuText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuText.tStart = t;  // (not accounting for frame time here)
      stimuText.frameNStart = frameN;  // exact frame index
      
      stimuText.setAutoDraw(true);
    }
    
    
    // if stimuText is active this frame...
    if (stimuText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.2 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ["f","j"] === 'string' ? [["f","j"]] : ["f","j"], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == corrAnswer) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if (t >= 0.0 && ISI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI.tStart = t;  // (not accounting for frame time here)
      ISI.frameNStart = frameN;  // exact frame index
      
      ISI.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ISI.tStop = t;  // not accounting for scr refresh
      ISI.frameNStop = frameN;  // exact frame index
      // update status
      ISI.status = PsychoJS.Status.FINISHED;
      ISI.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StimulateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StimulateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stimulate' ---
    StimulateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Stimulate.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAnswer)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Stimulate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedBackMaxDurationReached;
var fbColor;
var FeedBackMaxDuration;
var FeedBackComponents;
function FeedBackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FeedBack' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FeedBackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FeedBackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    times_total += 1;
    if ((key_resp.corr === 1)) {
        times_correct += 1;
        fbString = "\u6b63\u786e";
        fbColor = "green";
    } else {
        fbString = "\u9519\u8bef";
        fbColor = "red";
    }
    
    fbText.setColor(new util.Color(fbColor));
    fbText.setText(fbString);
    psychoJS.experiment.addData('FeedBack.started', globalClock.getTime());
    FeedBackMaxDuration = null
    // keep track of which components have finished
    FeedBackComponents = [];
    FeedBackComponents.push(fbText);
    
    FeedBackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedBackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FeedBack' ---
    // get current time
    t = FeedBackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fbText* updates
    if (t >= 0.0 && fbText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fbText.tStart = t;  // (not accounting for frame time here)
      fbText.frameNStart = frameN;  // exact frame index
      
      fbText.setAutoDraw(true);
    }
    
    
    // if fbText is active this frame...
    if (fbText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fbText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fbText.tStop = t;  // not accounting for scr refresh
      fbText.frameNStop = frameN;  // exact frame index
      // update status
      fbText.status = PsychoJS.Status.FINISHED;
      fbText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FeedBackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedBackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FeedBack' ---
    FeedBackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('FeedBack.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FeedBackMaxDurationReached) {
        FeedBackClock.add(FeedBackMaxDuration);
    } else {
        FeedBackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CheckMaxDurationReached;
var rate_correct;
var checkString;
var CheckMaxDuration;
var CheckComponents;
function CheckRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CheckClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    CheckMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    rate_correct = ((times_correct * 100) / times_total);
    if ((rate_correct > 80)) {
        checkString = "\n\u51c6\u786e\u7387\u9ad8\u4e8e80%\uff0c\u7ec3\u4e60\u901a\u8fc7!\n\u5373\u5c06\u8fdb\u5165\u6b63\u5f0f\u6d4b\u8bd5\u3002\n";
    } else {
        checkString = "\n\u51c6\u786e\u7387\u4f4e\u4e8e\u4e8e80%\uff0c\u7ec3\u4e60\u672a\u901a\u8fc7!\n\u8bf7\u7ee7\u7eed\u7ec3\u4e60\u3002\n";
    }
    times_total = 0;
    times_correct = 0;
    
    checkText.setText(checkString);
    psychoJS.experiment.addData('Check.started', globalClock.getTime());
    CheckMaxDuration = null
    // keep track of which components have finished
    CheckComponents = [];
    CheckComponents.push(checkText);
    
    CheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CheckRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Check' ---
    // get current time
    t = CheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *checkText* updates
    if (t >= 0.0 && checkText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      checkText.tStart = t;  // (not accounting for frame time here)
      checkText.frameNStart = frameN;  // exact frame index
      
      checkText.setAutoDraw(true);
    }
    
    
    // if checkText is active this frame...
    if (checkText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (checkText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      checkText.tStop = t;  // not accounting for scr refresh
      checkText.frameNStop = frameN;  // exact frame index
      // update status
      checkText.status = PsychoJS.Status.FINISHED;
      checkText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Check' ---
    CheckComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Check.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    if ((rate_correct > 90)) {
        CheckTrials.finished = true;
    }
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (CheckMaxDurationReached) {
        CheckClock.add(CheckMaxDuration);
    } else {
        CheckClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InstrTrainMaxDurationReached;
var _trainReady_allKeys;
var InstrTrainMaxDuration;
var InstrTrainComponents;
function InstrTrainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstrTrain' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstrTrainClock.reset();
    routineTimer.reset();
    InstrTrainMaxDurationReached = false;
    // update component parameters for each repeat
    trainReady.keys = undefined;
    trainReady.rt = undefined;
    _trainReady_allKeys = [];
    psychoJS.experiment.addData('InstrTrain.started', globalClock.getTime());
    InstrTrainMaxDuration = null
    // keep track of which components have finished
    InstrTrainComponents = [];
    InstrTrainComponents.push(instrTrainText);
    InstrTrainComponents.push(trainReady);
    
    InstrTrainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstrTrainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstrTrain' ---
    // get current time
    t = InstrTrainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrTrainText* updates
    if (t >= 0.0 && instrTrainText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrTrainText.tStart = t;  // (not accounting for frame time here)
      instrTrainText.frameNStart = frameN;  // exact frame index
      
      instrTrainText.setAutoDraw(true);
    }
    
    
    // if instrTrainText is active this frame...
    if (instrTrainText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *trainReady* updates
    if (t >= 0.0 && trainReady.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainReady.tStart = t;  // (not accounting for frame time here)
      trainReady.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trainReady.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trainReady.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trainReady.clearEvents(); });
    }
    
    // if trainReady is active this frame...
    if (trainReady.status === PsychoJS.Status.STARTED) {
      let theseKeys = trainReady.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _trainReady_allKeys = _trainReady_allKeys.concat(theseKeys);
      if (_trainReady_allKeys.length > 0) {
        trainReady.keys = _trainReady_allKeys[_trainReady_allKeys.length - 1].name;  // just the last key pressed
        trainReady.rt = _trainReady_allKeys[_trainReady_allKeys.length - 1].rt;
        trainReady.duration = _trainReady_allKeys[_trainReady_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstrTrainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstrTrainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstrTrain' ---
    InstrTrainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('InstrTrain.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(trainReady.corr, level);
    }
    psychoJS.experiment.addData('trainReady.keys', trainReady.keys);
    if (typeof trainReady.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trainReady.rt', trainReady.rt);
        psychoJS.experiment.addData('trainReady.duration', trainReady.duration);
        routineTimer.reset();
        }
    
    trainReady.stop();
    // the Routine "InstrTrain" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlockEndMaxDurationReached;
var fb_block;
var _key_resp_block_allKeys;
var BlockEndMaxDuration;
var BlockEndComponents;
function BlockEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockEnd' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BlockEndClock.reset();
    routineTimer.reset();
    BlockEndMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_block
    n_this_block = (n_this_block + 1);
    fb_block = `你已完成${n_this_block}/${n_blocks}组，
    可以稍作休息。
    【按空格键继续...】`
    ;
    text_block.setText(fb_block);
    
    text_block.setText(fb_block);
    key_resp_block.keys = undefined;
    key_resp_block.rt = undefined;
    _key_resp_block_allKeys = [];
    psychoJS.experiment.addData('BlockEnd.started', globalClock.getTime());
    BlockEndMaxDuration = null
    // keep track of which components have finished
    BlockEndComponents = [];
    BlockEndComponents.push(text_block);
    BlockEndComponents.push(key_resp_block);
    
    BlockEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BlockEndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockEnd' ---
    // get current time
    t = BlockEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_block* updates
    if (t >= 0.0 && text_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_block.tStart = t;  // (not accounting for frame time here)
      text_block.frameNStart = frameN;  // exact frame index
      
      text_block.setAutoDraw(true);
    }
    
    
    // if text_block is active this frame...
    if (text_block.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_block* updates
    if (t >= 0.0 && key_resp_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_block.tStart = t;  // (not accounting for frame time here)
      key_resp_block.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_block.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_block.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_block.clearEvents(); });
    }
    
    // if key_resp_block is active this frame...
    if (key_resp_block.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_block.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_block_allKeys = _key_resp_block_allKeys.concat(theseKeys);
      if (_key_resp_block_allKeys.length > 0) {
        key_resp_block.keys = _key_resp_block_allKeys[_key_resp_block_allKeys.length - 1].name;  // just the last key pressed
        key_resp_block.rt = _key_resp_block_allKeys[_key_resp_block_allKeys.length - 1].rt;
        key_resp_block.duration = _key_resp_block_allKeys[_key_resp_block_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BlockEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockEndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockEnd' ---
    BlockEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BlockEnd.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_block.corr, level);
    }
    psychoJS.experiment.addData('key_resp_block.keys', key_resp_block.keys);
    if (typeof key_resp_block.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_block.rt', key_resp_block.rt);
        psychoJS.experiment.addData('key_resp_block.duration', key_resp_block.duration);
        routineTimer.reset();
        }
    
    key_resp_block.stop();
    // the Routine "BlockEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(endText);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }
    
    
    // if endText is active this frame...
    if (endText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (endText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      endText.tStop = t;  // not accounting for scr refresh
      endText.frameNStop = frameN;  // exact frame index
      // update status
      endText.status = PsychoJS.Status.FINISHED;
      endText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
