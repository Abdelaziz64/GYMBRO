import React, { useState } from 'react';
import bannerImage from './images/crossfit.jpg';
import fullbody from './images/full_body.jpg';
import strength from './images/strenght.jpg';
import nutrition from './images/nutrition.jpg';
import chest from './images/chestworkouts.jpg';
import biceps from './images/bicepworkouts.jpg';
import triceps from './images/tricepworkouts.jpg';
import backworkouts from './images/backworkouts.jpg';
import gluteworkouts from './images/gluteworkouts.jpg';
import legworkouts from './images/legworkouts.jpg';
import shoulderworkouts from './images/shoulderworkout.jpg';
import './App.css';



function App() {
  

  
  const [showTable, setShowTable] = useState(false);
  
  const [filter, setFilter] = useState('');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [gender, setGender] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('');
  const [trainingMethod, setTrainingMethod] = useState('');
  const [level, setLevel] = useState('');
  const [trainingDays, setTrainingDays] = useState([]);
  const [workoutTime, setWorkoutTime] = useState('');
  const [routineTable, setRoutineTable] = useState([]);

  const openExercisesWindow = (muscleGroup) => {
    window.open(`https://example.com/exercises/${muscleGroup}`, '_blank');
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleMuscleGroupSelect = (muscleGroup) => {
    setSelectedMuscleGroup(muscleGroup);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePrimaryGoalChange = (event) => {
    setPrimaryGoal(event.target.value);
  };

  const handleTrainingMethodChange = (event) => {
    setTrainingMethod(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleTrainingDaysChange = (event) => {
    const selectedDays = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setTrainingDays(selectedDays);
  };

  const handleWorkoutTimeChange = (event) => {
    setWorkoutTime(event.target.value);
  };

  const muscleGroups = [
    { name: 'Chest', image: chest },
    { name: 'Biceps', image: biceps },
    { name: 'Triceps', image: triceps },
    { name: 'Back Workouts', image: backworkouts },
    { name: 'Glute Workouts', image: gluteworkouts },
    { name: 'Leg Workouts', image: legworkouts },
    { name: 'Shoulder Workouts', image: shoulderworkouts },
    // Add more muscle groups as needed
  ];

  const generateRoutine = () => {
    // Generate routine logic based on user selections
    const routineTable = [];

    // Loop through each selected training day
    for (let day of trainingDays) {
      const workout = {
        day: day,
        exercises: [],
      };

      // Generate special workout based on user selections
      if (gender === 'male') {
        if (primaryGoal === 'loseFat') {
          // Generate special workout for losing fat (Male)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 1', 'Exercise 2', 'Exercise 3');
        } else if (primaryGoal === 'buildMuscle') {
          // Generate special workout for building muscle (Male)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 4', 'Exercise 5', 'Exercise 6');
        } else if (primaryGoal === 'cardio') {
          // Generate special workout for cardio (Male)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 7', 'Exercise 8', 'Exercise 9');
        }
      } else if (gender === 'female') {
        if (primaryGoal === 'loseFat') {
          // Generate special workout for losing fat (Female)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 10', 'Exercise 11', 'Exercise 12');
        } else if (primaryGoal === 'buildMuscle') {
          // Generate special workout for building muscle (Female)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 13', 'Exercise 14', 'Exercise 15');
        } else if (primaryGoal === 'cardio') {
          // Generate special workout for cardio (Female)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 16', 'Exercise 17', 'Exercise 18');
        }
      }

      routineTable.push(workout);
      setRoutineTable(routineTable);
      setShowTable(true);
    }

    // Display the routine table on the page
    setRoutineTable(routineTable);
  };

  const generateExercises = (day) => {
    // Implement exercise generation logic based on selected options
    // You can generate exercises specific to the selected muscle group or other criteria
    // Example code:
    const exercises = muscleGroups.map((group) => ({
      muscleGroup: group.name,
      // Generate exercises based on muscle group and other selected options
    }));
    return exercises;
  };

  const filteredMuscleGroups = muscleGroups.filter((group) => {
    if (selectedMuscleGroup === '') {
      return group.name.toLowerCase().includes(filter.toLowerCase());
    } else {
      return group.name.toLowerCase() === selectedMuscleGroup.toLowerCase();
    }
  });

  return (
    <div className="App">
      <header>
        <section id='home'>
        <div className="brand">GYMBRO</div>
        </section>
        <nav>
          <ul>
          <li><a href="#home" class="nav">HOME</a></li>
          <li><a href="#articles" class="nav">Articles</a></li>
          <li><a href="#exercices" class="nav">EXERCICES</a></li>
          <li><a href="#build-workout" class="nav">BUILD WORKOUT</a></li>
          <li><a href="#contact-us" class="nav">CONTACT US</a></li>
          </ul>
        </nav>
      </header>

      <img className="banner-image" src={bannerImage} alt="Banner" />

      <section id="articles">
      <h2 className="articles-title">Articles to Unlock Your Potential</h2>
      </section>
      <div className="articles">
        <article>
          <a href="https://youtube.com">
            <img className="full-body" src={fullbody} alt="Full Body" />
          </a>
          <p>Full Body article</p>
        </article>
        <article>
          <a href="https://youtube.com">
            <img className="strength" src={strength} alt="Strength" />
          </a>
          <p>Strength article</p>
        </article>
        <article>
          <a href="https://youtube.com">
            <img className="nutrition" src={nutrition} alt="Nutrition" />
          </a>
          <p>Nutrition article</p>
        </article>
      </div>

      <section id='exercices'>
      <h2 className="muscle-group-title">Muscle Groups</h2>
      </section>
      <div className="search-tool">
        <input
          type="text"
          placeholder="Search muscle group..."
          value={filter}
          onChange={handleFilterChange}
        />
        <select
          value={selectedMuscleGroup}
          onChange={(event) => handleMuscleGroupSelect(event.target.value)}
        >
          <option value="">All Muscle Groups</option>
          {muscleGroups.map((group, index) => (
            <option key={index} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div className="muscle-groups">
        {filteredMuscleGroups.map((group, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openExercisesWindow(group.name)}
          >
            <img src={group.image} alt={group.name} />
            <p>{group.name}</p>
          </div>
        ))}
      </div>
        
      <section id='build-workout'>
      <h2 className="workout-builder-title">Workout Builder</h2>
      </section>
      <div className="workout-builder">
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="primaryGoal">Primary Goal:</label>
          <select
            id="primaryGoal"
            value={primaryGoal}
            onChange={handlePrimaryGoalChange}
          >
            <option value="">Select Primary Goal</option>
            <option value="loseFat">Lose Fat</option>
            <option value="buildMuscle">Build Muscle</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="trainingMethod">Training Method:</label>
          <select
            id="trainingMethod"
            value={trainingMethod}
            onChange={handleTrainingMethodChange}
          >
            <option value="">Select Training Method</option>
            <option value="resistance">Resistance</option>
            <option value="strength">Strength</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="level">Level:</label>
          <select id="level" value={level} onChange={handleLevelChange}>
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="trainingDays">Training Days:</label>
          <select
            id="trainingDays"
            multiple
            value={trainingDays}
            onChange={handleTrainingDaysChange}
          >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="workoutTime">Workout Time:</label>
          <select
            id="workoutTime"
            value={workoutTime}
            onChange={handleWorkoutTimeChange}
          >
            <option value="">Select Workout Time</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
          </select>
        </div>

        <button className="generate-button" onClick={generateRoutine}>
          Generate Routine
        </button>
      </div>

      

      {showTable && (
        
        <table className="routine-table">

          <thead>
            <tr>
              <th>Day</th>
              <th>Exercises</th>
            </tr>
          </thead>
          <tbody>
            {routineTable.map((workout, index) => (
              <tr key={index}>
                <td>{workout.day}</td>
                <td>{workout.exercises.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <section class="contact-section">
      <section id='contact-us'></section>
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-form">
      <form>
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name" />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
    </div>

    
  );




}

export default App;