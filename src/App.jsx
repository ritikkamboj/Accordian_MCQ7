import { useState } from 'react';
import './App.css'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

{/* <IoIosArrowDropdown /> */ }
{/* <IoIosArrowDropup /> */ }



const accordionData = [
  {
    title: "What is JavaScript?",
    content: "JavaScript is a versatile scripting language used to create dynamic content on websites."
  },
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces, especially single-page applications."
  },
  {
    title: "What is an Accordion?",
    content: "An accordion is a UI component that expands/collapses to show or hide content when triggered."
  },
  {
    title: "Why use useState in React?",
    content: "The useState hook lets you add state to functional components in React."
  },
  {
    title: "How do I center a div?",
    content: "Use CSS flexbox or grid, or `margin: 0 auto;` for block elements with a fixed width."
  }
];


function App() {

  const [visibleIndex, setVisibleIndex] = useState(null);


  function handleToggle(i) {
    // if(visibleIndex===i )
    visibleIndex === i ? setVisibleIndex(null) : setVisibleIndex(i)


  }


  return (
    <div className='app'>
      <h1>Accordina UI </h1>
      {
       (!accordionData || accordionData.length == 0) ? <h1>No Availaible Data</h1> : <div className='accordian-data'>
          {
            accordionData.map((data, i) => <div key={i} className='accordian'><button onClick={() => handleToggle(i)}>{data.title}{visibleIndex === i ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}</button>

              {visibleIndex === i && <div>{data.content}</div>}
            </div>)
          }
        </div>
      }

    </div>

  )
}

export default App
