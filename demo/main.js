
window.onload = () => {
	console.log('contentHash ✅')

	const ipfsInputElem = document.getElementById('ipfs-input')
	const ipfsButtonElem = document.getElementById('ipfs-encode')
	const ipfsResultElem = document.getElementById('ipfs-result')
	ipfsButtonElem.addEventListener('click', () => {
		ipfsResultElem.innerHTML = contentHash.fromIpfs(ipfsInputElem.value)
	})

	const swarmInputElem = document.getElementById('swarm-input')
	const swarmButtonElem = document.getElementById('swarm-encode')
	const swarmResultElem = document.getElementById('swarm-result')
	swarmButtonElem.addEventListener('click', () => {
		swarmResultElem.innerHTML = contentHash.fromSwarm(swarmInputElem.value)
	})

	const contentInputElem = document.getElementById('content-input')
	const contentButtonElem = document.getElementById('content-decode')
	const contentResultElem = document.getElementById('content-result')
	const codecResultElem = document.getElementById('codec-result')
	contentButtonElem.addEventListener('click', () => {
		let cth = contentHash.decode(contentInputElem.value)
		
		let codec = 'unknown'
		
		if(contentHash.isHashOfType(contentInputElem.value, contentHash.Types.ipfs))codec = 'ipfs'
		else if(contentHash.isHashOfType(contentInputElem.value, contentHash.Types.swarm))codec = 'swarm'

		let url = 'https://'
		if(codec === 'ipfs') url += 'gateway.ipfs.io/ipfs/' + cth + '/'
		else if(codec === 'swarm') url += 'swarm-gateways.net/bzz:/' + cth + '/'
		else url = '#'

		codecResultElem.innerHTML = 'codec : ' + codec
		contentResultElem.innerHTML = cth
		contentResultElem.href = url
	})
}