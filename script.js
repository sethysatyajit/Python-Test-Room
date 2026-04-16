// script.js – Python Test Room Logic (50 challenges)
(function() {
  'use strict';

  // ---------- DATASET: 50 Python Questions (5 rooms x 10) ----------
  const questionsData = [
    // ROOM 1: BASICS (variables, print, operators, input)
    { question: 'What is the output of: print(2 + 3 * 4)?', answer: '14', topic: 'operators', difficulty: 'easy' },
    { question: 'Which function is used to get user input in Python?', answer: 'input', topic: 'input', difficulty: 'easy' },
    { question: 'What is the output of: print(type(5))?', answer: "<class 'int'>", topic: 'types', difficulty: 'medium' },
    { question: 'What keyword is used to define a variable? (Python doesn\'t need one, type "none")', answer: 'none', topic: 'variables', difficulty: 'easy' },
    { question: 'What is the result of: 10 // 3?', answer: '3', topic: 'operators', difficulty: 'easy' },
    { question: 'How do you write a single-line comment in Python?', answer: '#', topic: 'comments', difficulty: 'easy' },
    { question: 'What is the output of: print("Python"[0])?', answer: 'P', topic: 'strings', difficulty: 'easy' },
    { question: 'Which operator is used for exponentiation?', answer: '**', topic: 'operators', difficulty: 'easy' },
    { question: 'What is the output of: print(10 % 3)?', answer: '1', topic: 'operators', difficulty: 'easy' },
    { question: 'What is the name of the function to display output?', answer: 'print', topic: 'print', difficulty: 'easy' },
    // ROOM 2: DATA TYPES
    { question: 'What is the output of: len([1, 2, 3, 4])?', answer: '4', topic: 'lists', difficulty: 'easy' },
    { question: 'Which data type is immutable: list or tuple?', answer: 'tuple', topic: 'tuples', difficulty: 'easy' },
    { question: 'What is the output of: type(3.14)?', answer: "<class 'float'>", topic: 'types', difficulty: 'medium' },
    { question: 'How do you create an empty dictionary?', answer: '{}', topic: 'dict', difficulty: 'easy' },
    { question: 'What method adds an element to the end of a list?', answer: 'append', topic: 'lists', difficulty: 'easy' },
    { question: 'What is the output of: bool([])?', answer: 'False', topic: 'bool', difficulty: 'hard', hintWords: ['False','True','false','true'] },
    { question: 'Which keyword is used to check if a value is present in a list?', answer: 'in', topic: 'membership', difficulty: 'easy' },
    { question: 'What is the result of: "hello".upper()?', answer: 'HELLO', topic: 'strings', difficulty: 'easy' },
    { question: 'What is the output of: type(True)?', answer: "<class 'bool'>", topic: 'types', difficulty: 'medium' },
    { question: 'How do you get the length of a string?', answer: 'len', topic: 'strings', difficulty: 'easy' },
    // ROOM 3: CONTROL FLOW (if/else, loops)
    { question: 'Which keyword is used for conditional execution?', answer: 'if', topic: 'if', difficulty: 'easy' },
    { question: 'What is the output of: for i in range(3): print(i, end="")?', answer: '012', topic: 'loops', difficulty: 'medium', hintWords: ['012','0 1 2','0123'] },
    { question: 'What keyword stops a loop prematurely?', answer: 'break', topic: 'loops', difficulty: 'easy' },
    { question: 'What is the output of: x = 5; if x > 3: print("A") else: print("B")?', answer: 'A', topic: 'if', difficulty: 'easy' },
    { question: 'Which statement skips the rest of the current iteration?', answer: 'continue', topic: 'loops', difficulty: 'easy' },
    { question: 'What is the output of: while False: print("Hi")?', answer: 'nothing', topic: 'while', difficulty: 'medium', hintWords: ['nothing','None',''] },
    { question: 'What is the correct syntax for an else-if in Python?', answer: 'elif', topic: 'elif', difficulty: 'easy' },
    { question: 'What does range(5) produce? (first 3 numbers)', answer: '0,1,2,3,4', topic: 'range', difficulty: 'medium', hintWords: ['0,1,2,3,4','0 1 2 3 4'] },
    { question: 'How do you write an infinite loop?', answer: 'while True', topic: 'while', difficulty: 'medium' },
    { question: 'What is the output of: print("a" if 5>2 else "b")?', answer: 'a', topic: 'ternary', difficulty: 'easy' },
    // ROOM 4: FUNCTIONS & CLASSES
    { question: 'Which keyword defines a function?', answer: 'def', topic: 'functions', difficulty: 'easy' },
    { question: 'What is the output of: def add(a,b): return a+b; print(add(2,3))?', answer: '5', topic: 'functions', difficulty: 'easy' },
    { question: 'What keyword is used to create a class?', answer: 'class', topic: 'classes', difficulty: 'easy' },
    { question: 'What is the name of the constructor method in a class?', answer: '__init__', topic: 'classes', difficulty: 'medium' },
    { question: 'Which parameter refers to the current instance of a class?', answer: 'self', topic: 'classes', difficulty: 'easy' },
    { question: 'What is the output of: lambda x: x*2; print((lambda x: x*2)(5))?', answer: '10', topic: 'lambda', difficulty: 'hard', hintWords: ['10','lambda'] },
    { question: 'How do you return a value from a function?', answer: 'return', topic: 'functions', difficulty: 'easy' },
    { question: 'What is the default return value of a function without return?', answer: 'None', topic: 'functions', difficulty: 'medium' },
    { question: 'What decorator is used to define a class method?', answer: '@classmethod', topic: 'decorators', difficulty: 'hard', hintWords: ['@classmethod','classmethod'] },
    { question: 'What is the output of: type(lambda x:x)?', answer: "<class 'function'>", topic: 'lambda', difficulty: 'hard' },
    // ROOM 5: ADVANCED (comprehensions, exceptions, etc.)
    { question: 'What is the output of: [x**2 for x in range(3)]?', answer: '[0, 1, 4]', topic: 'list comprehension', difficulty: 'medium' },
    { question: 'Which keyword is used to handle exceptions?', answer: 'try', topic: 'exceptions', difficulty: 'easy' },
    { question: 'What is the output of: {x: x**2 for x in range(2)}?', answer: '{0: 0, 1: 1}', topic: 'dict comprehension', difficulty: 'hard', hintWords: ['{0:0,1:1}','{0: 0, 1: 1}'] },
    { question: 'What function returns the length of an object?', answer: 'len', topic: 'builtins', difficulty: 'easy' },
    { question: 'What is the result of: list(map(lambda x: x*2, [1,2]))?', answer: '[2, 4]', topic: 'map', difficulty: 'hard', hintWords: ['[2,4]','[2, 4]'] },
    { question: 'Which statement is used to raise an exception?', answer: 'raise', topic: 'exceptions', difficulty: 'medium' },
    { question: 'What is the output of: import math; print(math.pi)? (approx)', answer: '3.14159', topic: 'modules', difficulty: 'hard', hintWords: ['3.14','3.14159','3.1415926535'] },
    { question: 'How do you open a file for reading?', answer: "open('file','r')", topic: 'files', difficulty: 'medium' },
    { question: 'What does the "with" statement ensure?', answer: 'cleanup', topic: 'context', difficulty: 'hard', hintWords: ['cleanup','close','automatic'] },
    { question: 'What is the output of: print(1 is 1)?', answer: 'True', topic: 'identity', difficulty: 'easy' }
  ];

  const ROOMS = [];
  for (let i = 0; i < 5; i++) {
    ROOMS.push(questionsData.slice(i*10, i*10+10));
  }

  // ---------- STATE ----------
  let currentRoomIndex = 0;
  let currentQuestionIndex = 0;
  let roomSolved = new Array(5).fill().map(() => new Array(10).fill(false));
  let completedRooms = new Array(5).fill(false);

  // DOM elements
  const roomSelector = document.getElementById('room-selector');
  const challengePanel = document.getElementById('challenge-panel');
  const summaryPanel = document.getElementById('summary-panel');
  const roomGrid = document.getElementById('roomGrid');
  const globalStats = document.getElementById('globalStats');
  const roomTitle = document.getElementById('roomTitle');
  const progressIndicator = document.getElementById('progressIndicator');
  const topicLabel = document.getElementById('topicLabel');
  const difficultyTag = document.getElementById('difficultyTag');
  const questionDisplay = document.getElementById('questionDisplay');
  const hintContainer = document.getElementById('hintContainer');
  const hintBox = document.getElementById('hintBox');
  const answerInput = document.getElementById('answerInput');
  const submitBtn = document.getElementById('submitAnswerBtn');
  const nextBtn = document.getElementById('nextQuestionBtn');
  const resetRoomBtn = document.getElementById('resetRoomBtn');
  const messageBox = document.getElementById('messageBox');
  const backToRoomsBtn = document.getElementById('backToRoomsBtn');
  const summaryScore = document.getElementById('summaryScore');
  const answerKey = document.getElementById('answerKey');
  const summaryBackBtn = document.getElementById('summaryBackBtn');

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // LocalStorage
  function loadProgress() {
    const saved = localStorage.getItem('pythonTestRoomProgress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.roomSolved) roomSolved = data.roomSolved;
        if (data.completedRooms) completedRooms = data.completedRooms;
      } catch(e) {}
    }
  }
  function saveProgress() {
    localStorage.setItem('pythonTestRoomProgress', JSON.stringify({ roomSolved, completedRooms }));
  }

  function renderRoomGrid() {
    roomGrid.innerHTML = '';
    const difficulties = ['BASICS', 'DATA TYPES', 'CONTROL FLOW', 'FUNCTIONS & CLASSES', 'ADVANCED'];
    ROOMS.forEach((room, idx) => {
      const solvedCount = roomSolved[idx].filter(v => v).length;
      const card = document.createElement('div');
      card.className = `room-card ${completedRooms[idx] ? 'completed' : ''}`;
      card.innerHTML = `
        <h3><i class="fab fa-python"></i> ROOM ${idx+1}</h3>
        <div class="difficulty">${difficulties[idx]}</div>
        <div class="progress-badge">${solvedCount}/10 solved</div>
      `;
      card.addEventListener('click', () => enterRoom(idx));
      roomGrid.appendChild(card);
    });
    const totalSolved = roomSolved.flat().filter(v=>v).length;
    globalStats.innerHTML = `[ SYSTEM ] Total progress: ${totalSolved}/50 challenges · ${completedRooms.filter(v=>v).length}/5 rooms mastered`;
  }

  function enterRoom(roomIdx) {
    if (completedRooms[roomIdx]) {
      showRoomSummary(roomIdx);
      return;
    }
    currentRoomIndex = roomIdx;
    currentQuestionIndex = roomSolved[roomIdx].findIndex(solved => !solved);
    if (currentQuestionIndex === -1) currentQuestionIndex = 0;
    switchPanel('challenge');
    loadQuestion();
  }

  function switchPanel(panelName) {
    roomSelector.classList.remove('active');
    challengePanel.classList.remove('active');
    summaryPanel.classList.remove('active');
    if (panelName === 'room') roomSelector.classList.add('active');
    if (panelName === 'challenge') challengePanel.classList.add('active');
    if (panelName === 'summary') summaryPanel.classList.add('active');
    if (panelName === 'room') renderRoomGrid();
  }

  function loadQuestion() {
    const room = ROOMS[currentRoomIndex];
    const q = room[currentQuestionIndex];
    const roomNames = ['BASICS', 'DATA TYPES', 'CONTROL FLOW', 'FUNCTIONS & CLASSES', 'ADVANCED'];
    roomTitle.textContent = `ROOM ${currentRoomIndex+1}: ${roomNames[currentRoomIndex]}`;
    progressIndicator.textContent = `${currentQuestionIndex+1}/10`;
    topicLabel.textContent = q.topic;
    difficultyTag.textContent = q.difficulty;
    questionDisplay.textContent = q.question;
    
    if (q.difficulty === 'hard' && q.hintWords) {
      hintContainer.style.display = 'block';
      hintBox.innerHTML = q.hintWords.map(w => `<span>${w}</span>`).join('');
    } else {
      hintContainer.style.display = 'none';
    }
    
    answerInput.value = '';
    messageBox.textContent = '';
    messageBox.className = 'message';
    nextBtn.disabled = true;
    
    if (roomSolved[currentRoomIndex][currentQuestionIndex]) {
      messageBox.textContent = '✓ Already solved. Proceed to next.';
      messageBox.classList.add('success');
      nextBtn.disabled = false;
    }
    answerInput.focus();
  }

  function checkAnswer() {
    const room = ROOMS[currentRoomIndex];
    const q = room[currentQuestionIndex];
    const userAnswer = answerInput.value.trim();
    
    if (roomSolved[currentRoomIndex][currentQuestionIndex]) {
      messageBox.textContent = 'Already solved.';
      messageBox.classList.add('success');
      nextBtn.disabled = false;
      return;
    }
    
    const normalizedUser = userAnswer.toLowerCase().replace(/\s+/g, ' ').trim();
    const normalizedCorrect = q.answer.toLowerCase().replace(/\s+/g, ' ').trim();
    
    if (normalizedUser === normalizedCorrect || userAnswer === q.answer) {
      roomSolved[currentRoomIndex][currentQuestionIndex] = true;
      saveProgress();
      messageBox.textContent = '✔ CORRECT! +1 Python power.';
      messageBox.classList.add('success');
      nextBtn.disabled = false;
      
      const allSolved = roomSolved[currentRoomIndex].every(v => v);
      if (allSolved && !completedRooms[currentRoomIndex]) {
        completedRooms[currentRoomIndex] = true;
        saveProgress();
        setTimeout(() => showRoomSummary(currentRoomIndex), 800);
      }
    } else {
      messageBox.textContent = '✘ INCORRECT. Try again.';
      messageBox.classList.remove('success');
    }
  }

  function nextQuestion() {
    let nextIdx = roomSolved[currentRoomIndex].findIndex((solved, i) => i > currentQuestionIndex && !solved);
    if (nextIdx === -1) {
      if (!completedRooms[currentRoomIndex]) {
        completedRooms[currentRoomIndex] = true;
        saveProgress();
        showRoomSummary(currentRoomIndex);
      } else {
        showRoomSummary(currentRoomIndex);
      }
      return;
    }
    currentQuestionIndex = nextIdx;
    loadQuestion();
  }

  function resetRoom() {
    if (confirm('Reset current room progress? All solved exercises will be lost.')) {
      roomSolved[currentRoomIndex] = new Array(10).fill(false);
      completedRooms[currentRoomIndex] = false;
      saveProgress();
      currentQuestionIndex = 0;
      loadQuestion();
      renderRoomGrid();
    }
  }

  function showRoomSummary(roomIdx) {
    const room = ROOMS[roomIdx];
    const solvedCount = roomSolved[roomIdx].filter(v=>v).length;
    summaryScore.innerHTML = `Room ${roomIdx+1} · Score: ${solvedCount}/10`;
    
    let html = '<h3>// ANSWER KEY //</h3>';
    room.forEach((q, i) => {
      html += `<div class="answer-row"><span>${i+1}. [${q.topic}] ${q.question.substring(0,30)}…</span> <strong>→ ${q.answer}</strong> ${roomSolved[roomIdx][i] ? '✅' : '❌'}</div>`;
    });
    answerKey.innerHTML = html;
    switchPanel('summary');
  }

  // Event listeners
  submitBtn.addEventListener('click', checkAnswer);
  nextBtn.addEventListener('click', nextQuestion);
  resetRoomBtn.addEventListener('click', resetRoom);
  backToRoomsBtn.addEventListener('click', () => {
    switchPanel('room');
    renderRoomGrid();
  });
  summaryBackBtn.addEventListener('click', () => {
    switchPanel('room');
    renderRoomGrid();
  });

  answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkAnswer();
    }
  });

  // Initialize
  loadProgress();
  renderRoomGrid();
  switchPanel('room');
})();