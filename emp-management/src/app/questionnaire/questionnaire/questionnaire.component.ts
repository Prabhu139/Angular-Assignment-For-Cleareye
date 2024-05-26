
import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
  questions: Question[] = [];
  totalMarks: number = 100;
  score: number = 0;
  isSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.questions = [
      {
        id: 1,
        questionText: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        selectedOption: '',
        // correctOption: 'Paris'
      },
      {
        id: 2,
        questionText: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'Stephen King', 'J.K. Rowling', 'Charles Dickens'],
        selectedOption: '',
        // correctOption: 'Harper Lee'
      },
      {
        id: 3,
        questionText: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'NaCl', 'O2'],
        selectedOption: '',
        // correctOption: 'H2O'
      },
      {
        id: 4,
        questionText: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
        selectedOption: '',
        // correctOption: 'Mars'
      },
      {
        id: 5,
        questionText: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo'],
        selectedOption: '',
        // correctOption: 'Leonardo da Vinci'
      },
      {
        id: 6,
        questionText: 'What is the largest mammal in the world?',
        options: ['Blue whale', 'African elephant', 'Giraffe', 'Hippopotamus'],
        selectedOption: '',
        // correctOption: 'Blue whale'
      },
      {
        id: 7,
        questionText: 'What year did the Titanic sink?',
        options: ['1912', '1901', '1923', '1899'],
        selectedOption: '',
        // correctOption: '1912'
      },
      {
        id: 8,
        questionText: 'What is the capital of Japan?',
        options: ['Tokyo', 'Kyoto', 'Osaka', 'Seoul'],
        selectedOption: '',
        // correctOption: 'Tokyo'
      },
      {
        id: 9,
        questionText: 'Who is known as the father of modern physics?',
        options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'],
        selectedOption: '',
        // correctOption: 'Albert Einstein'
      },
      {
        id: 10,
        questionText: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Pt'],
        selectedOption: '',
        // correctOption: 'Au'
      }
    ];
    
   console.log(['Paris', 'Harper Lee', 'H2O', 'Mars', 'Leonardo da Vinci', 'Blue whale', '1912', 'Tokyo', 'Albert Einstein',  'Au'])
  }

  onSubmit(): void {
    // Check if all questions are answered
    const unansweredQuestions = this.questions.filter(question => !question.selectedOption);
    if (unansweredQuestions.length > 0) {
      alert('Please answer all questions.');
      return;
    }
  
    // Calculate score
    this.score = this.questions.reduce((totalScore, question) => {
      // If the selected option matches the correct option, add 10 to the total score
      if (question.selectedOption === question.options[0]) {
        return totalScore + 10;
      } else {
        return totalScore; // Otherwise, don't change the score
      }
    }, 0);
  
    // Display score
    this.isSubmitted = true;
    if (this.score < 60) {
      alert(`Your score is ${this.score}. Your score is less than 60. Please retake the assessment.`);
      this.resetAssessment();
    } else {
      alert(`Congratulations! Your score is ${this.score}.`);
    }
  }
  resetAssessment(): void {
    // Reset selected options
    this.questions.forEach(question => {
      question.selectedOption = '';
    });
    // Reset score
    this.score = 0;
    // Reset submission status
    this.isSubmitted = false;
  }
}  
