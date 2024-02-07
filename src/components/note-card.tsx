interface INote {
  dias: string
}

export function NoteCard({ dias }: INote) {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há {dias} dias</span>

      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        facere nihil ipsum! Sequi reprehenderit alias suscipit beatae excepturi
        nesciunt blanditiis, ea consectetur, expedita ducimus magni praesentium
        adipisci, nisi necessitatibus atque!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/90 to-slate-800/0 pointer-events-none" />
    </button>
  );
}
