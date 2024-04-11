function DailyHabit({ habit, onToggleCompleted, onRemoveHabit }) {
  return (
    <div className={habit.completed ? "DailyHabit" : "DailyHabit completed"}>
      <input
        type="checkbox"
        value={habit.completed}
        onChange={() => onToggleCompleted(habit)}
      />
      <button onClick={() => onRemoveHabit(habit)}>X</button>
      <h3>{habit.habit}</h3>
      <p>{habit.amountPerDay}</p>
    </div>
  );
}

export default DailyHabit;
