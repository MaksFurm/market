async function buildVitamins(){
    const arrayOfVitamins = await getObjectFromFile('js/vitamins.json')
    console.log(arrayOfVitamins)
    
    if (!arrayOfVitamins) {
        console.log('Відсутні дані у JSON-файлі!');
        return;
    }
    
    arrayOfVitamins.forEach((item, index) => {
        //console.log("елемент №",index,item)
        let divVitamin = document.createElement('div')
        divVitamin.classList.add('vitamin')
    
        divVitamin.innerHTML = `
                    <p>${item.id}</p>
                    <h3>${item.title}</h3>
                    <hr>
                    <div class="img_container">
                        <img src="img/vitamins/${item.photo}" alt="Картина для ${item.title}" onerror="this.onrerror = null;
                        this.src='img/vitamins/default.png';">
                    </div>
    
                    <p>${item.description}</p>
    
                    <div>
                    <img src="img/vitamins/${item.schema}" alt="" onerror="this.onerror = null; this.src='img/vitamins/
                    default_schema.png';">
                        <p>${'💚'.repeat(item.rating) + '🤍'.repeat(5 - item.rating)}</p>
                        <p>${item.type}</p>
                    </div>  
     
                `
        document.getElementById("p-vitamins").appendChild(divVitamin)
        })
    }