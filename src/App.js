
import { Accordion } from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use React in any project?",
      content: "Yes, you can use React in any project.",
    },
    {
      id: 2,
      label: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },

  ];

  return <Accordion items={items}/>;
}

export default App;
