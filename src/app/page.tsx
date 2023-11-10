import Carousel from "./components/carousel/carousel";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Carousel />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <button className="btn-primary">Contact me 💬</button>
      </div>
    </main>
  )
}
