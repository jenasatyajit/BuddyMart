// App root with Tailwind v4

function App() {
  return (
    <main className="min-h-screen grid place-items-center bg-secondary/5 text-gray-900">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">BuddyMart</h1>
        <p className="mt-2 text-base text-gray-700">
          Welcome to <span className="text-secondary font-semibold">your store</span>
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
