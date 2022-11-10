document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    // console.log(characterName)
    // console.log(`http://localhost:8000/api/character/${characterName}`)
    try{
        const response = await fetch(`http://localhost:8000/api/character/${characterName}`)
        const data = await response.json()
        console.log(characterName)
        // console.log(data.deaths)
        // document.querySelector('#response').innerHTML = `${element}` 
        document.querySelector('#response').innerText = JSON.stringify(data, null, "    ")
        // console.log(JSON.stringify(data, null, "\t"))

        // for (const key in data) {
        //     if (Object.hasOwnProperty.call(data, key)) {
        //         const element = data[key];
        //         if(Object.keys(element).length != 0) {
        //             for (const key2 in element) {
        //                 if (Object.hasOwnProperty.call(element, key2)) {
        //                     const element2 = element[key2];
        //                     console.log(`${key} ${key2} ${element2}`)
        //                 }
        //             }
        //         }            
        //     }
        // }

    

        // for (const key in data) {
        //     if(data.hasOwnProperty(key)){
        //         console.log(`${key} ${data[key]}`)
        //         for(const withinKey in data[key]) {
        //             if(data.hasOwnProperty(key)) {
        //                 // console.log(`${key} ${data[key]} ${data[key][withinKey]}`)
        //             }
        //         }
        //         // console.log(`${key}: ${data[key]}`)
        //     }
        // }

    }catch(error){
        console.log(error)
    }
}