interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 text-white flex items-center justify-center rounded m-2">
      {props.completed}
    </div>
  );
}
