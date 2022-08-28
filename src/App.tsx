import { Header } from "./components/Header"
import "./global.css"

import styles from "./App.module.css"
import { New } from "./components/New"
import { Tasks } from "./components/Tasks"

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <New />
          <main>
            <Tasks />
          </main>
      </div>

    </div>

    )
}

export default App
