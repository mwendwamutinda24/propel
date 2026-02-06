import { useState } from "react";
import {Link} from 'react-router-dom';

function Hero(){

    const steps = [
  {
    id: 1,
    title: "Expert Intelligence",
    description: "Domain experts encode their knowledge into structured datasets.",
    details: [
      "Knowledge captured from real industry experts",
      "Converted into structured, machine-readable formats",
      "Forms the foundation of reliable AI reasoning"
    ]
  },
  {
    id: 2,
    title: "Context Assembly",
    description: "Relevant expert knowledge is retrieved and prepared for the AI.",
    details: [
      "Retrieves only the most relevant context",
      "Assembles information into usable packages",
      "Ensures AI has the right data at the right time"
    ]
  },
  {
    id: 3,
    title: "Reasoned Decisions",
    description: "AI reasons through constraints, risks, and trade-offs using expert context.",
    details: [
      "Evaluates multiple options with expert logic",
      "Balances risks and constraints",
      "Produces decisions aligned with industry standards"
    ]
  },
  {
    id: 4,
    title: "Native Outputs",
    description: "Produces documents, reports, and analyses in industry-standard formats.",
    details: [
      "Outputs are ready-to-use in professional workflows",
      "Reports, documents, and analytics generated automatically",
      "Seamlessly integrates into existing industry processes"
    ]
  }
];

    const [expanded, setExpanded] = useState(null);
     const toggleExpand = (id) => {
         setExpanded(expanded === id ? null : id);
         };

    return(
        <>
        <div className="hero">
            <p>Expert Intelligence for Specialized AI Systems</p>
            <h2>We encode expert knowledge into AI so it can reason, decide, and act reliably in real industries.</h2>

        </div>

        <div className="buttons"> 
           <button className="experiment"><Link to="/Experiment" > View the experiment </Link> </button> 
            <button  className="experiment2"><Link to="/RequestAccess"> Request Access </Link></button> 
      </div>
        <div className="how">
            <h1>How Propel Works</h1>
        </div>
       <div className="work">
        {steps.map((step) => (
          <div key={step.id} className="work-card" onClick={() => toggleExpand(step.id)}
          >
            <h2>{step.title}</h2>
            <p>{step.description}</p>

            <ul className={`details ${expanded === step.id ? "expanded" : ""}`} >
              {step.details.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <span className="toggle-icon">
              {expanded === step.id ? "−" : "+"}
            </span>
          </div>
        ))}
            
    
            <div className="gap">
                <div className="gap2">
                    <h1>Intelligence gap</h1>
                </div>
                <div className="the-gap">
                    <ul>
                        <li>General AI lacks domain-grounded reasoning</li>
                        <li>Enterprises require explainable,auditable decisions</li>
                        <li>Expert knowledge remains trapped in people and documents</li>
                    </ul>
                </div>
                <div className="text">
                    <h3>Propel turns expert judgment into  infrastructure</h3>
                </div>
            </div>
        </div>
        <div className="evidence">
            <h1>Evidence-Based  Approach</h1>
            <p>We validated our approach through a controlled  experiment in the
                 Nairobi climate & carbon market .Thec results demonstrate measurable improvements in AI reasoning quality across six benchmark dimensions.</p>
        
        <button className="experiment"><a href="/Experiment">See the experiment <span>&#9650;</span></a></button>
        </div>
       </>
      
    )
}
export default Hero;









