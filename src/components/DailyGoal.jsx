import { useEffect } from "react";

function DailyGoal({ dailyHabits }) {
  const hasCompletedHabits = dailyHabits.some((habit) => habit.completed);
  const allCompleted = dailyHabits.every((habit) => habit.completed);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", allCompleted);
  }, [allCompleted]);

  return (
    <div>
      {dailyHabits.length > 0 ? (
        <>
          {hasCompletedHabits ? (
            <>
              <h3>Today&apos;s Accomplishments:</h3>
              {dailyHabits
                .filter((habit) => habit.completed)
                .map((habit) => (
                  <li key={habit.id}>{habit.habit}</li>
                ))}
            </>
          ) : (
            <h3>Let&apos;s get it!</h3>
          )}
        </>
      ) : (
        <h3>Add a good habit and start tracking your progress!</h3>
      )}
    </div>
  );
}

export default DailyGoal;
