<h1>Documentation</h1>

<h2>Run instructions</h2>

<pre> docker-compose up </pre>

<h2>Endpoints</h2>
<b>Hostname</b>: http://localhost:3000
<pre>
/ - home page,
/cryptos - list of crypto,
/crypto - specific crypto
body: { name: string, time(optional, default: current): date }
</pre>

asdf