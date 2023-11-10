import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experience">
        <h3>
          experience
        </h3>
        <p>Texto</p>
      </div>
      <div className="expirience-time"></div>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-indo">
          <span>🇺🇸 EN - Intermediary</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>In progress - Computer Science Bacharelors Degree - Faculdade Descomplica Digital</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  )
}
