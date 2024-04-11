import "./App.css";
import { useState } from "react";
import NewHabitForm from "./NewHabitForm";
import DailyHabitGrid from "./DailyHabitGrid";
import DailyGoal from "./DailyGoal";

const defaultHabits = [
  {
    id: 1,
    habit: "meditation",
    amountPerDay: "20 minutes",
    completed: false,
  },
  {
    id: 2,
    habit: "wim hof breathing",
    amountPerDay: "3 rounds",
    completed: false,
  },
  {
    id: 3,
    habit: "exercise",
    amountPerDay: "30 minutes",
    completed: false,
  },
];

function App() {
  const [dailyHabits, setDailyHabits] = useState(defaultHabits);

  function handleNewHabit(addNewHabit) {
    setDailyHabits((dailyHabits) => [...dailyHabits, addNewHabit]);
  }

  function handleToggleCompleted(toggledHabit) {
    setDailyHabits((currentHabits) =>
      currentHabits.map((habit) => {
        if (habit.id === toggledHabit.id) {
          return { ...habit, completed: !habit.completed };
        }
        return habit;
      })
    );
  }

  function handleRemoveHabit(habitToBeRemoved) {
    const isConfirmed = window.confirm(
      "Are you sure you want to remove this habit?"
    );

    if (isConfirmed) {
      setDailyHabits(
        dailyHabits.filter((habit) => habit.id !== habitToBeRemoved.id)
      );
    }
  }

  return (
    <div>
      <h1>Daily Habit Tracker</h1>
      <NewHabitForm onNewHabit={handleNewHabit} />
      <DailyHabitGrid
        dailyHabits={dailyHabits}
        setDailyHabits={setDailyHabits}
        onToggleCompleted={handleToggleCompleted}
        onRemoveHabit={handleRemoveHabit}
      />

      <DailyGoal dailyHabits={dailyHabits} />
    </div>
  );
}

export default App;
