import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Aslap"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente, at nesciunt autem incidunt facere ipsa similique beatae odio. Quas eaque itaque distinctio ipsa nesciunt veniam provident eum voluptatibus vel."
      />

      <Post
        author="Lopes"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente, at nesciunt autem incidunt facere ipsa similique beatae odio. Quas eaque itaque distinctio ipsa nesciunt veniam provident eum voluptatibus vel."
      />

      <Post
        author="Adolfo"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente, at nesciunt autem incidunt facere ipsa similique beatae odio. Quas eaque itaque distinctio ipsa nesciunt veniam provident eum voluptatibus vel."
      />


    </>
  )
}

export default App
