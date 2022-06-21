import Form from "./components/Form";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import DiscussionBoard from "./components/DiscussionBoard";

function App() {
  const domain = "http://localhost:3001";
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussion();
  }, []);

  const getDiscussion = () => {
    return fetch(domain + "/discussions")
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data);
      });
  };

  return (
    <>
      <div id="left__container">
        <Sidebar />
      </div>
      <div id="middle__container">
        <h1>My Agora States</h1>
        <Form />
        <DiscussionBoard discussions={discussions} />
        {/* <section class="pagination__wrapper">
          <button class="pagination__btn">1</button>
          <button class="pagination__btn">2</button>
          <button class="pagination__btn">3</button>
          <button class="pagination__btn">4</button>
          <button class="pagination__btn">5</button>
        </section> */}
      </div>
    </>
  );
}

export default App;
