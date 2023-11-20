export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div className="">
        <label htmlFor="randomText">
          Enter Random Text:
          <input type="text" id="randomText" />
          Enter Specific Text:
        </label>
      </div>
      <div className="">
        <label htmlFor="specific">
          <input type="text" id="specificText" />
        </label>
      </div>

      <div className="">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="">
        <input type="text" value="AUDI Q5" onChange={() => {}} />
      </div>
    </main>
  );
}
