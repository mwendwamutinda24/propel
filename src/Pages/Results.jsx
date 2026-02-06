function Results(){

    return(
        <>
        <div className="comparison">
            <h1>Output comparison</h1>
        </div>
        <div className="results">
             <div className="with-Propel">
                 <h2>Without Propel</h2><br/>
            <div className="result1">
                <p>Missing:Hidden Costs</p>
                <p>Missing: Informal Barriers</p>
            </div>
            </div>
            <div className="with-Propel">
                 <h2>With Propel</h2><br/>
            <div className="results2">
                <p>Included: Real Budget</p>
                <p>Included : Stake Holdermap</p>
            </div>
            </div>
           

        </div>
        <div className="tile">
            <h1>Qualifield Improvement</h1>
            <p>ScoreCard Table</p>
        </div>
        <div className="resultsTable">
            
            <table>
                <thead>
                    <tr>
                        <th>Dimension</th>
                        <th>Without Propel</th>
                        <th>With Propel</th>
                        <th>Improvement</th>
                        <th>Significance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Constraint Covered</td>
                        <td>2.1</td>
                        <td>4.2</td>
                        <td>+110%</td>
                        <td><p>p&lt;0.001</p></td>
                    </tr>
                    <tr>
                        <td>Decision coherence</td>
                        <td>1.8</td>
                        <td>4.2</td>
                        <td>+133%</td>
                        <td><p>p&lt;0.001</p></td>
                    </tr>
                      <tr>
                        <td>Risk Identification</td>
                        <td>2.3</td>
                        <td>4.5</td>
                        <td>+95%</td>
                        <td><p>p&lt;0.001</p></td>
                    </tr>
                      <tr>
                        <td>Regulatory Alignment</td>
                        <td>1.9</td>
                        <td>4.3</td>
                        <td>+129%</td>
                        <td><p>p&lt;0.001</p></td>
                    </tr>
                      <tr>
                        <td>Actionability</td>
                        <td>2.0</td>
                        <td>4.6</td>
                        <td>+130%</td>
                        <td><p>p&lt;0.001</p></td>
                    </tr>
                    <tr>
                        <td>Average</td>
                        <td>2.0</td>
                        <td>4.1</td>
                        <td>+1119</td>
                        <td><p>p&lt;0.001</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="findings">
            <h1>Key Findings</h1>
            <ul>
                <li> Expert intelligence materially changes reasoning quality</li>
                <li> Improvements are systematic, not stylistic</li>
                <li>Effects persist across all evaluation tasks</li>
                <li>Missing constraints are the most common failure mode without Propel</li>
            </ul>
        </div>
        <div className="experts">
            <button className="btn-expert"><a href="/Experts">Meet the experts behind the intelligence</a></button>
        </div>
    </>
    )
}
export default Results;