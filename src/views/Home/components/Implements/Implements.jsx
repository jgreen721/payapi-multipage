import React from 'react'
import "./Implements.css"

const Implements = () => {

    let codeSnippet = `<form id="form-id" method="GET"></form>
    <script
        src="https://loremipsum.com/api.js"
        data-client-name="Your Company's Name"
        data-form-id="form-id"
        data-key="test_key"
        data-product="transactions"
        data-env="sandbox">
    </script>
    `

    let circles =[
      {id:1,color:'darkpink'},
      {id:2,color:'lightjuanblue'},
      {id:3,color:'darkblue'},
    ]
  return (
    <section className="implements-section">
        <div className="implements-column">
          <div className="code-snippet-box">
          <div className="code-top-row">
            {circles.map(c=>(
              <div key={c.id} className={`circle ${c.color}`}></div>
            ))}
          </div>

        <pre className="code-snippet">
  <code className="code-text">
{codeSnippet}
  </code>
</pre>
</div>
            
        </div>
        <div className="implements-column">
            <div className="implements-content">
                <h2 className="implements-header">Easy to Implement</h2>
                <p className="implement-blurb">  
                Our API comes with just a few lines of code. 
                You’ll be up and running in no time. 
                We built our documentation page to integrate 
                payments functionality with ease.</p>
            </div>
        </div>
    </section>
  )
}

export default Implements