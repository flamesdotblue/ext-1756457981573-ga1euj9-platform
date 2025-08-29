export default function HeaderBar() {
  return (
    <header className="w-full border-b border-orange-200/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-orange-500 text-white font-semibold">BG</span>
          <h1 className="text-sm sm:text-base font-semibold tracking-wide text-neutral-800 uppercase">Board Game Library</h1>
        </div>
        <div className="text-xs text-neutral-500 hidden sm:block">Catalog • Dewey 700s</div>
      </div>
    </header>
  );
}
