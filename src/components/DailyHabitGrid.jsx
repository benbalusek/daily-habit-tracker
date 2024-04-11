import DailyHabit from "./DailyHabit";

function DailyHabitGrid({ dailyHabits, onToggleCompleted, onRemoveHabit }) {
  return (
    <div className="DailyHabitGrid">
      {dailyHabits.map((habit) => (
        <DailyHabit
          key={habit.id}
          habit={habit}
          onToggleCompleted={onToggleCompleted}
          onRemoveHabit={onRemoveHabit}
        />
      ))}
    </div>
  );
}

export default DailyHabitGrid;
