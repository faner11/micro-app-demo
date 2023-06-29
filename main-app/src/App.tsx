// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import MicroApp from '@micro-zoe/micro-app'
function App() {

  return (
    <>
      <h1>MAIN</h1>
      <micro-app
        name={"app1"}
        url={`http://localhost:5174/`}
        iframe
      />
    </>
  )
}

export default App
