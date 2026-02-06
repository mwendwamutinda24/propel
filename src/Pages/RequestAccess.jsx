function RequestAccess(){

    return(
        <div className="access">
            <div className="header-sect">
                  <h1>We onboard partners selectively to maintain expert integrity and deliver maximum value</h1>
            </div>

            <div className="re-access">
              <h3>Register details here</h3>
                <form method="POST">
                    <div className="form-group">
                        <label>Name</label>
                        <br/>
                        <input type="text"
                        name="name"
                        required
                        placeholder="Enter your name"/>

                    </div>
                    <div className="form-group">
                        <label>Organization</label>
                        <br/>
                        <input type="text"
                        name="organization"
                        required
                        placeholder="Enter your Organization"/>

                    </div>
                    <div className="form-group">
                        <label>Industry</label>
                        <br/>
                        <input type="text"
                        name="industry"
                        required
                        placeholder="input your industry name"/>

                    </div>
                    <div className="form-group">
                        <label>Intended Use</label>
                        <br/>
                        <input type="text"
                        name="use"
                        required
                        placeholder="Input your intended Use"/>

                    </div>
                    <button className="submit">Submit Request</button>
                </form>
            </div>

        </div>
    )
}
export default RequestAccess;