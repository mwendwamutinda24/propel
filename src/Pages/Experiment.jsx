import { useState } from "react";
function Experiments(){

    const [expanded, setExpanded] = useState(null); 
    const toggleExpand = (id) => { setExpanded(expanded === id ? null : id); };
    const task=[

        {
            id:1,
            prompt:" Project Viability Assessment•",
            task:" Assess viability of [PROJECT TYPE] in [LOCATION]",
            expectedOutput:" Risk matrix, constraint analysis"
        },
        {
            id:2,
            prompt:" Budget Realism Check•",
            task:" Estimate real budget for [PROJECT TYPE]•",
            expectedOutput:" Cost breakdown with hidden costs"
        },
        {
            id:3,
            prompt:" Stakeholder Engagement Plan•",
            task:" Create engagement plan for [PROJECT TYPE]",
            expectedOutput:"Timeline with specific stakeholder actions"
        },
        {
            id:4,
            prompt:" Regulatory Compliance Checklist•",
            task:" Generate compliance requirements•",
            expectedOutput:" Checklist with enforcement reality"
        },
        {
            id:5,
            prompt:" 12-Month Survival Roadmap",
            task:" Create first-year survival plan•",
            expectedOutput:" Phased actions with failure prevention"
        }
    ]

    return(
<>
        <div className="propel">
            <h1>The Propel Experiment</h1>
        </div>
        <div className="experimentes">
            <div className="overview">
                <h1>The Propel Experiment</h1>
                <p>General AI systems make decisions without 
                    domain-specific context, leading to unrealistic 
                    recommendations and unmanaged risks</p>
            </div>
             <div className="overview">
                <h1>Test Environment</h1>
                <p>Nairobi County climate & carbon market:
                     bounded, real-world, regulation-heavy, expert-driven.</p>
            </div>

        </div>
        <div className="experiment-design">
  <h1>Controlled Comparison</h1>
  <table>
    <thead>
      <tr>
        <th>Baseline System</th>
        <th>Propel System</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>General LLM</td>
        <td>Same base LLM</td>
      </tr>
      <tr>
        <td>No expert dataset</td>
        <td>Expert-curated dataset</td>
      </tr>
      <tr>
        <td>No domain RAG</td>
        <td>Expert intelligence RAG</td>
      </tr>
    </tbody>
  </table>

  <p className="note">
    All variables held constant except expert intelligence.
  </p>
</div>

 <div className="tasks">
    <div className="task1">
        <h1>Evaluation Tasks</h1>
        {task.map((task)=>(
             <div key={task.id} className="tasks-dropdown">
            <div className="tasks-header" onClick={() => toggleExpand(task.id)}
            >
            <span>{expanded === task.id ? "▲" : "▼"} Prompt {task.id}: {task.prompt}</span>
            </div>

            {expanded === task.id && (
              <div className="tasks-content">
                <p><strong>Task:</strong> {task.task}</p>
                <p><strong>Expected Output:</strong> {task.expectedOutput}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="btn"><a href="/experiment/run">Run Experiment</a></button>
      </div>
 </div>
        </>
    )
}
export default Experiments ;