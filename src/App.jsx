import { Header } from "./components/Header/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Aslap"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente, at nesciunt autem incidunt facere ipsa similique beatae odio. Quas eaque itaque distinctio ipsa nesciunt veniam provident eum voluptatibus vel."
          />
          <Post
            author="Aslap"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente, at nesciunt autem incidunt facere ipsa similique beatae odio. Quas eaque itaque distinctio ipsa nesciunt veniam provident eum voluptatibus vel."
          />
        </main>
      </div>
    </>
  )
}

export default App
