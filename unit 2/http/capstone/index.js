const todoInfo = document.todoForm;
const Todos = document.getElementById('list');


axios.get("https://api.vschool.io/chrisbarr/todo")
    .then(res => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
        const div = document.createElement('div');
        div.classList.add('todoItem');
        const title = document.createElement('h1');
        title.classList.add('todoTitle');
        const description = document.createElement('p');
        description.classList.add('todoDescription');
        const price = document.createElement('p');
        price.classList.add('todoPrice');
        const img = document.createElement('img');
        img.classList.add('todoImg');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add("todoCheckbox");
        const del = document.createElement('button');
        del.classList.add("todoDelete");
        const edit = document.createElement('button');
        edit.classList.add("todoEdit");

        title.textContent = res.data[i].title;
        description.textContent = res.data[i].description;
        price.textContent = res.data[i].price;
        img.src = res.data[i].imgUrl;
        checkbox.textContent = 'Completed';
        del.textContent = 'Delete';
        edit.textContent = 'Edit';
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(img);
        div.appendChild(checkbox);
        div.appendChild(del);
        div.appendChild(edit);
        Todos.appendChild(div);

//;
        del.addEventListener('click', () => {
            
                axios.delete(`https://api.vschool.io/chrisbarr/todo/${res.data[i]._id}`)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        

            checkbox.addEventListener('click', () => {
                if (checkbox.checked) {
                    axios.put(`https://api.vschool.io/chrisbarr/todo/${res.data[i]._id}`, res.data[i].completed, true)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                } else {
                    axios.put(`https://api.vschool.io/chrisbarr/todo/${res.data[i]._id}`,res.data[i].completed, false)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
                
            });
    }})

    .catch(err => {
        console.log(err);
    });

todoInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = {
        title: todoInfo.title.value,
        description: todoInfo.description.value,
        price: todoInfo.price.value,
        imgUrl: todoInfo.imgUrl.value,
        completed: false
    };
    axios.post("https://api.vschool.io/chrisbarr/todo", newTodo)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
});
