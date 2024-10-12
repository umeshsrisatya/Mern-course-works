var list = [];
while (true) {
    let command = prompt(`What you would like to do?`);
    if (command === 'new') {
        let todo = prompt(`Enter a new Todo`);
        list.push(todo);
        console.log(`${todo} is added`);
    } else if (command === 'list') {
        if (list.length) {
            console.log(`*************`);
            for (let todo of list) {
                console.log(`${todo}`);
            }
            console.log(`*************`);
        } else {
            console.log(`list is empty`);
        }
    } else if (command === 'delete') {
        let index = parseInt(prompt(`enter index of element you want to delete`));
        if (index) {
            if (index < list.length) {
                console.log(`${list.splice(index, 1)} is deleted from the list`);
            } else {
                console.log(`Enter a valid index `);
            }
        } else {
            alert(`enter a valid index`)
        }
    } else if (command === 'quit') {
        console.log(`Quiting the Application`);
        break;
    } else {
        console.log(`Enter a valid input`)
    }
}