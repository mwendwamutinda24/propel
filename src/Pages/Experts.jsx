function Experts(){

    const experts = [ 
        { role: "Carbon Project Developer",
        location: "Nairobi County, Kenya", 
        experience: "12 years",
         skills: ["Constraint identification", "Risk assessment", "Stakeholder mapping"], 
        },
         { role: "Energy Policy Analyst",
             location: "Mombasa, Kenya",
              experience: "8 years", 
              skills: ["Regulatory compliance", "Policy drafting", "Audit frameworks"], 
            },
             { role: "Climate Finance Specialist",
                 location: "Nairobi, Kenya", 
                 experience: "10 years", 
                 skills: ["Budget realism", "Hidden cost analysis", "Financial modeling"],
                 },
                  { role: "Environmental Lawyer", 
                    location: "Kisumu, Kenya",
                     experience: "15 years",
                      skills: ["Compliance checks", "Legal risk analysis", "Contract enforcement"], 
                    }, 
                    { role: "Carbon Market Auditor", 
                        location: "Nairobi, Kenya",
                         experience: "9 years",
                          skills: ["Verification", "Audit trails", "Standards enforcement"], 
                        },
                         { role: "Sustainability Consultant",
                             location: "Machakos, Kenya",
                              experience: "11 years", 
                              skills: ["Stakeholder engagement", "Risk mitigation", "Sustainability planning"], 
                            }, 
                            { role: "Renewable Energy Engineer",
                                 location: "Eldoret, Kenya", 
                                 experience: "7 years", 
                                 skills: ["Solar design", "Grid integration", "Technical feasibility"],
                                 },
                                  { role: "Agricultural Economist", 
                                    location: "Meru, Kenya",
                                     experience: "13 years",
                                      skills: ["Cost-benefit analysis", "Market modeling", "Policy impact"],
                                     }, { role: "Climate Data Scientist", 
                                        location: "Nairobi, Kenya",
                                         experience: "6 years", skills: 
                                         ["Data modeling", "Risk forecasting",
                                             "Constraint mapping"],
                                             }, 
                                            ];

    return(
        <div className="expert">
            <div className="expert-inte">
                <h2>Experts Intelligence</h2>
                <h3>Propel is powered by verified domain experts, not scraped text</h3>
            </div>

            <div className="network">

           <section className="experts-section">
        <h2 className="section-title">Our Expert Network</h2>
        <div className="expert-grid">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-header">
                <h3 className="expert-role">{expert.role}</h3>
                <span className="expert-experience">{expert.experience}</span>
              </div>
              <p className="expert-location">{expert.location}</p>
              <ul className="expert-skills">
                {expert.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
            </div>

<section className="pipeline-section">
     <h2 className="pipeline-title">The Intelligence Pipeline</h2> 
     <div className="pipeline-flow"> 
        <div className="pipeline-step">Structured Knowledge Input</div> 
        <span className="pipeline-arrow">→</span> 
        <div className="pipeline-step">Peer Validation</div> 
        <span className="pipeline-arrow">→</span>
        <div className="pipeline-step">Continuous Refinement</div> </div> </section>
        </div>
    )
}
export default Experts;