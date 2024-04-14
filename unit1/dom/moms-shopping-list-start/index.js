var form = document.getElementById('add-todo');
var list = document.getElementById('list');
var data = document.getElementById('title');
var cancel = document.getElementsByName('x');
var check = document.getElementById('edit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newDiv = document.createElement('div');
    const newItem = document.createElement('li');
    const edit = document.createElement('button');
    const del = document.createElement('button')
    del.innerText = "x";
    edit.innerText = 'Edit';
    newDiv.innerText = data.value;
    newItem.appendChild(newDiv) 
    newItem.appendChild(edit)
    newItem.appendChild(del)
    list.appendChild(newItem);
    data.value = '';


        del.addEventListener('click', function (){
            newItem.remove();
            }
        )


        edit.addEventListener('click', function (){
    console.log("editing")
})
});