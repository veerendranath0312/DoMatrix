function App() {
  return (
    <>
      <aside className="aside">
        <h1>DoMatrix</h1>
        <ul>
          <li>Today</li>
          <li>Completed</li>
          <li>Next Week</li>
        </ul>
      </aside>
      <main className="main">
        <h2>Today</h2>
        <ul>
          <li>
            <input type="checkbox" />
            <span>Master the art of speaking</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Conquer mount everest</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Bake a cake made entierly of raindows and unicorns</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Master the art of speaking</span>
          </li>
        </ul>
      </main>
    </>
  )
}

// TODO
// Circle the check boxes
// Add the icons to the sidebar
// Add icon at the bottom. Position it to the bottom-right
// Add reactivity step by step
export default App
