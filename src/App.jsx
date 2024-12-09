import { useState } from 'react'
import reactLogo from '/BSI.png'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Alexandra McQueen</h1>
    </header>
    <section>
      <nav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOCj1PwJ0Nvd9ZD6B1EaVFgxSdhtk2UfGA&s"
          alt=""
        />
        <h4>Contact</h4>
        <p>
          Langstraat 21 <br />
          2310 TP Leiden <br />
          alexandramc@gmail.com <br />
          12-05-1996
        </p>
      </nav>
      <article>
        <h2>Experiences</h2>
        <ol>
          <li>Red Team Penetration Testing at Firebird</li>
          <li>Cloud Engineering at Linkedin</li>
          <li>Business Intelligence at Tesla</li>
        </ol>
        <h2>Projects</h2>
        <ol>
          <li>Industry 5.0 Project Analysis</li>
          <li>Cloud Computing</li>
          <li>Penetration Testing</li>
          <li>Network Algorithm</li>
        </ol>
        <h2>Education</h2>
        <ul>
          <li>Computer Science Bachelor's Degree, Standford University</li>
          <li>Master of Cyber Security, University of North South Wales</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Software Development</li>
          <li>Cloud Computing</li>
          <li>Penetration Testing</li>
          <li>Network Algorithm</li>
        </ul>
      </article>
    </section>
    <footer>
      <h2>References</h2>
      <div class="flex-container1">
        <div>
          <p>
            <b>Robert Simanjuntak</b><br />
            Business Manager <br />
            Tesla, USA <br />
            067456128
          </p>
        </div>
        <div>
          <p>
            <b>Immanuel Lubragh</b><br />
            IT SEVP <br />
            Linkedin, UK <br />
            077456129
          </p>
        </div>
        <div>
          <p>
            <b>Nawfal Fudhayl Warsito</b><br />
            President Director <br />
            Firebird, UEA <br />
            067456128
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
