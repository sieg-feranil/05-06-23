import axios from 'axios'

async function call(osama) {
    let res = await axios.get('https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students', {
        method: 'get',
        headers: {
          'key': osama,
        }
      })
    return res.data
  }
  function nextKey(osama) {
    const x= 4 - (''+osama).length
    let key=''
        for (let i = 0; i < x; i++) {
            key+='0'
            
        }
    return key+=osama
  }
  console.log(nextKey(100));


