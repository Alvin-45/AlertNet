

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Home</h1>
      <p>Count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Home