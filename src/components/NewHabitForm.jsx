import { useState } from "react";

function NewHabitForm({ onNewHabit }) {
  const [habit, setHabit] = useState("");
  const [amountPerDay, setAmountPerDay] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!habit || !amountPerDay) return;

    const newHabit = {
      id: crypto.randomUUID(),
      habit,
      amountPerDay,
      completed: false,
    };

    onNewHabit(newHabit);
    setHabit("");
    setAmountPerDay("");
  }

  return (
    <form className="NewHabitForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="habit">Habit:</label>
        <input
          id="habit"
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amountPerDay">Amount per day:</label>
        <input
          id="amountPerDay"
          type="text"
          value={amountPerDay}
          onChange={(e) => setAmountPerDay(e.target.value)}
        />
      </div>
      <button>New Daily Habit</button>
    </form>
  );
}

export default NewHabitForm;
