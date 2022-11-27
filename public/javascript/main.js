document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://supernatural-the-api-business.onrender.com/api/character/${characterName}`)
        const data = await response.json()
        console.log(characterName)
        document.querySelector('#response').innerText = JSON.stringify(data, null, "    ")
    }catch(error){
        console.log(error)
    }
}