const coin = {
    state: 0,
  
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
    },
  
    toString: function () {
        if(this.state === 0){
            return "Heads"
        }
        else{
            return "Tails"
        }
    },
  
    toHTML: function () {
        const image = document.createElement("img");
        if(this.state === 0){
            image.src = "./coinObject/cara.png"
            image.alt = "Heads"
        }
        else{
            image.src = "./coinObject/coroa.png"
            image.alt = "Tails"
        }
        return image;
    },

};

function display20Flips() {
    const results = [];
    const body = document.querySelector('body')
    const text = document.createElement('h2')
    body.appendChild(text)

    for(let i = 0; i < 20; i++){
        coin.flip()
        results.push(coin.state)
        text.innerHTML += `${coin.toString()} - `
    }
    return results

}
  
function display20Images() {
    const results = [];
    const body = document.querySelector("body")
    const imagens = document.createElement("div")
    body.appendChild(imagens)
    for(let i = 0; i < 20; i++) {
        coin.flip()
        results[i] = coin.state
        imagens.appendChild(coin.toHTML())
    }
    return results
}

display20Flips()
display20Images()