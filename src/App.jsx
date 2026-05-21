import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Greeter.css'
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import ColorList from "./ColorList"
import Slots from "./Slots"
import Toggler from "./Toggler"
import ShoppingList from './ShoppingList'
import PropertyList from "./PropertyList"
import Clicker from "./Clicker"
import ScoreKeeper from "./ScoreKeeper"
import EmojiClicker from "./EmojiClicker"
import BetterScoreKeeper from "./BetterScoreKeeper"
import NewCounter from './counter'
import QuoteFetcher from './QuoteFetcher'

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 1, completed: true },
  { id: 3, item: 'bread', quantity: 1, completed: false },
  { id: 4, item: 'meat', quantity: 3, completed: true },
  { id: 5, item: 'yogurt', quantity: 2, completed: false },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoteFetcher />
      <NewCounter />
      <BetterScoreKeeper numPlayers={5} target={5} />
      <EmojiClicker />
      <ScoreKeeper />
      <Clicker />
      <ShoppingList items={data} />
      <PropertyList properties={properties} />
      <Greeter person="User" from="Dev Studios" />
      <Die numSides={20} />
      <ListPicker values={[1, 2, 3, 4, 5]} />
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <Slots val1="b" val2="b" val3="b" />
      <Toggler />
      {/* <ObjectPicker values={{a: 1, b: 2, c: 3, d: 4}} /> */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
