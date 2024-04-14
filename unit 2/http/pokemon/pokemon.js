const pokedex = document.getElementById("pokeList");
axios.get("https://api.vschool.io/pokemon")
    .then(response => {   
    for (let i = 0; i < response.data.objects[0].pokemon.length; i++) {
    const li = document.createElement("LI");
    li.textContent = response.data.objects[0].pokemon[i].name
    pokedex.appendChild(li);
    console.log([i])
    console.log(li)
    console.log(pokedex);
    console.log(response.data.objects[0].pokemon[0].name);
}})

    .catch(function (error) {
    console.log(error);
});