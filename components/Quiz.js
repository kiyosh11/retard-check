import React, { useState } from 'react';

const questions = [
  {
    q: "If a tree falls in a forest and no one’s around, what’s it smell like?",
    options: ["Pine", "Nothing", "Chicken nuggets", "My ex’s tears"],
    correct: "Nothing",
    retard: "Chicken nuggets",
  },
  {
    q: "What’s the vibe of a triangle?",
    options: ["Chill", "Pointy", "Three", "Sus"],
    correct: "Pointy",
    retard: "Sus",
  },
  {
    q: "If you yeet a rock into the void, where’s it going?",
    options: ["Down", "The void", "Florida", "Back at you"],
    correct: "The void",
    retard: "Florida",
  },
  {
    q: "What’s the sound of one hand clapping?",
    options: ["Silence", "A vibe", "Slap", "F in chat"],
    correct: "Silence",
    retard: "F in chat",
  },
  {
    q: "If the earth is flat, where’s the edge?",
    options: ["Canada", "Nowhere", "Space", "My backyard"],
    correct: "Nowhere",
    retard: "My backyard",
  },
  {
    q: "What’s heavier: a pound of feathers or a pound of vibes?",
    options: ["Feathers", "Vibes", "They’re equal", "My regrets"],
    correct: "They’re equal",
    retard: "Vibes",
  },
  {
    q: "If you stare at the sun, what happens next?",
    options: ["Blindness", "Superpowers", "It stares back", "TikTok fame"],
    correct: "Blindness",
    retard: "It stares back",
  },
  {
    q: "What’s the smell of rain like if you’re a cloud?",
    options: ["Wet", "Yourself", "Nothing", "Flex tape"],
    correct: "Yourself",
    retard: "Flex tape",
  },
  {
    q: "If a cat has 9 lives, how many does a meme have?",
    options: ["1", "Infinite", "69", "Until X bans it"],
    correct: "Infinite",
    retard: "69",
  },
  {
    q: "What’s the color of the wind?",
    options: ["Invisible", "Blue", "Vibes", "John Cena"],
    correct: "Invisible",
    retard: "John Cena",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore([...answers, answer]);
    }
  };

  const calculateScore = (finalAnswers) => {
    let rawScore = 0;
    finalAnswers.forEach((answer, i) => {
      const q = questions[i];
      if (answer === q.retard) rawScore += 20;
      else if (answer !== q.correct) rawScore += 10;
    });

    const maxRawScore = questions.length * 20;
    const normalizedScore = Math.round((rawScore / maxRawScore) * 100);

    let message;
    if (normalizedScore >= 80) {
      message = "BRUH UR A RETARD GOD! 🐐 Smooth brain hall of fame!";
    } else if (normalizedScore >= 60) {
      message = "LMAO UR PRETTY RETARDED! Pepega vibes strong!";
    } else if (normalizedScore >= 40) {
      message = "Yo, ur brain’s half sus, half retard!";
    } else if (normalizedScore >= 20) {
      message = "Eh, ur kinda normal but still a lil dumb!";
    } else {
      message = "WTF UR BRAIN WORKS?? Get outta here, nerd!";
    }

    setScore({ value: normalizedScore, message });
  };

  const saveScore = () => {
    if (score) {
      localStorage.setItem('retardScore', JSON.stringify(score));
      alert('Score saved, bruh! Check it in ur browser storage!');
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(null);
  };

  return (
    <div className="quiz-container">
      {score === null ? (
        <div>
          <p className="question">
            {currentQuestion + 1}. {questions[currentQuestion].q}
          </p>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="option-btn"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="progress">
            {currentQuestion + 1} / {questions.length}
          </p>
        </div>
      ) : (
        <div className="result">
          <h2 className="result-title">UR RETARD SCORE:</h2>
          <p className="score">{score.value}%</p>
          <p className="result-message">{score.message}</p>
          <img
            src="https://i.imgflip.com/1g8my4.jpg"
            alt="Pepega"
            className="pepega"
          />
          <div className="result-buttons">
            <button onClick={saveScore} className="save-btn">
              SAVE SCORE
            </button>
            <button onClick={restart} className="restart-btn">
              TRY AGAIN, DUMDUM
            </button>
          </div>
        </div>
      )}
    </div>
  );
                      }
