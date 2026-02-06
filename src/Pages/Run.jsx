import { useState, useEffect } from "react";

function Run() {
  const [mode, setMode] = useState("none");
  const [visiblePipelineSteps, setVisiblePipelineSteps] = useState(0);
  const [visibleOutputSteps, setVisibleOutputSteps] = useState(0);
  const [running, setRunning] = useState(false);

  
  const [expanded, setExpanded] = useState(null);
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const pipelineSteps = [
    "Context Retrieval – Finding relevant expert cases...",
    "Constraint Analysis – Identifying binding local constraints...",
    "Risk & Trade-off Evaluation – Weighing expert-identified risks...",
    "Decision Synthesis – Synthesizing expert-aligned decision...",
    "Assumption Encoding – Documenting critical assumptions...",
    "Document Assembly – Assembling industry-native document..."
  ];

  const outputSteps = [
    "Step 1-2: Blank document",
    "Step 3: Risk matrix starts populating",
    "Step 4: Tables fill with data",
    "Step 5: Assumptions list appears",
    "Step 6: Complete document rendered"
  ];


  useEffect(() => {
    let timer;
    if (running && mode === "with") {
      timer = setInterval(() => {
        setVisiblePipelineSteps((prev) =>
          prev < pipelineSteps.length ? prev + 1 : prev
        );
        setVisibleOutputSteps((prev) =>
          prev < outputSteps.length ? prev + 1 : prev
        );
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [running, mode]);

  const start = () => {
    setVisiblePipelineSteps(0);
    setVisibleOutputSteps(0);
    setRunning(true);
  };

  const pause = () => setRunning(false);

  const reset = () => {
    setRunning(false);
    setVisiblePipelineSteps(0);
    setVisibleOutputSteps(0);
  };

  const task = [
    { id: 1, prompt: "Project Viability Assessment•", task: "Assess viability of [PROJECT TYPE] in [LOCATION]", expectedOutput: "Risk matrix, constraint analysis" },
    { id: 2, prompt: "Budget Realism Check•", task: "Estimate real budget for [PROJECT TYPE]•", expectedOutput: "Cost breakdown with hidden costs" },
    { id: 3, prompt: "Stakeholder Engagement Plan•", task: "Create engagement plan for [PROJECT TYPE]", expectedOutput: "Timeline with specific stakeholder actions" },
    { id: 4, prompt: "Regulatory Compliance Checklist•", task: "Generate compliance requirements•", expectedOutput: "Checklist with enforcement reality" },
    { id: 5, prompt: "12-Month Survival Roadmap", task: "Create first-year survival plan•", expectedOutput: "Phased actions with failure prevention" }
  ];

  return (
    <div className="run">
      <div className="run1">
        <h2>Controls</h2>
        {task.map((task) => (
          <div key={task.id} className="tasks-dropdown">
            <div className="tasks-header" onClick={() => toggleExpand(task.id)}>
              <span>
                {expanded === task.id ? "▲" : "▼"} Prompt {task.id}: {task.prompt}
              </span>
            </div>
            {expanded === task.id && (
              <div className="tasks-content">
                <p><strong>Task:</strong> {task.task}</p>
                <p><strong>Expected Output:</strong> {task.expectedOutput}</p>
              </div>
            )}
          </div>
        ))}

        <div className="radio">
          <label>
            <input
              type="radio"
              name="mode"
              value="without"
              onChange={() => setMode("without")}
            />
            Without Propel
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="with"
              onChange={() => setMode("with")}
            />
            With Propel
          </label>
        </div>

        <div className="start-btn">
          <button onClick={start} className="start">Start</button>
          <button onClick={pause} className="pause">Pause</button>
          <button onClick={reset} className="stop">Reset</button>
        </div>
      </div>

      
      <div className="run1">
        <h2>Reasoning Pipeline</h2>
        {mode === "without" && (
          <p className="pipeline-placeholder">Generating response...</p>
        )}
        {mode === "with" && (
          <div className="steps">
            {pipelineSteps.slice(0, visiblePipelineSteps).map((step, i) => (
              <p key={i}>{step}</p>
            ))}
          </div>
        )}
      </div>

     <div className="run1">
  <h2>Output Preview</h2>

 
  {mode === "none" && (
    <p className="output-placeholder">Output process...</p>
  )}

  
  {mode === "without" && (
    <p className="output">Generating Output...</p>
  )}

 
  {mode === "with" && (
    <div className="output2">
      <ul>
        {outputSteps.slice(0, visibleOutputSteps).map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  )}
</div>

<div className="view">
    <button className="view-detail"><a href="/Results">View Detail Comparison</a></button>
</div>


    </div>
  );
}

export default Run;
