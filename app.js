//Define UI variables


// form for adding a new task
const form = document.querySelector('#task-form'); 

//collection of tasks - this is the ul ID
const taskList = document.querySelector('.collection');

//black clear tasks button 
const clearBtn = document.querySelector('.clear-tasks');

//filter tasks input field 
const filter = document.querySelector('#filter');

//input field for a new task 
const taskInput = document.querySelector('#task');

//green add task button
// const taskAdd = document.querySelector('.btn');
 

//Calling the loadEventListeners function

loadEventListeners()


//load all event listeners function
//The form listens out for a "submit" event and performs the addTask function once the event is triggered
function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);

    //remove task
    taskList.addEventListener('click', removeTask);
    
    //clear all tasks
    clearBtn.addEventListener('click', clearTasks);

    //filter events
    filter.addEventListener('keyup', filterTasks);
}

/*concerns everything that will happen once we click submit on the form. 
First - we handle the exception of if someone forgets to add a task and 
we display an alerted errors

Next - we create the element that we want to see, which is an li- since we do not 
already have one created in our HTML

Next - we create and append a text node to the HTML element which will contain the taskInput.value
seeing as we want each li to reflect qhat the user has entered into the input field

Next we create a link which will be the x element on the li tag that allows users to delete when it's pressed

Next - we add some optional styling from materialise to allow users to delete the task with an x button 
which will be positioned to the right of the li (done with secondary-content on materialise)

Next -  we append this link (x) to the li 

Next - we add the icon that we want to appear in place of the link (x) for deleting items 

*/
function addTask(e){

    //create li element so that we can later append a taskInput.value to it

    const li = document.createElement('li');

    //add a class name to new li item of collection-item
    li.className='collection-item'

    //create a textnode and append to li
    if(taskInput.value !== ''){

    li.appendChild(document.createTextNode(taskInput.value));
    }

    //create a new link for x button to appear 

    const link = document.createElement('a');

    // //add class name
    link.className ='delete-item secondary-content';

    // //add icon html 
    link.innerHTML ='<i class="fas fa-trash"></i>';

    //append link to li
    li.appendChild(link);

    //append the li that has been created to our task list
    if (taskInput.value=== ''){
        alert('No task has been added please add a task!')
    }else{

    taskList.appendChild(li);
    }
    //clear input
    taskInput.value = '';


    e.preventDefault();
}

//Remove task when the x link is clicked on each li that is generated
//but first confirm that the user is OK with deleting
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure you want to delete this?')){
            e.target.parentElement.parentElement.remove();

        }
      
    }
}


//clear all tasks whent the black button is clicked

function clearTasks(e){

    if(confirm('Hey, you\'re deleting all your work, are your sure you want to do this?')){

        taskList.innerHTML ='';
    }
}

    /*Does the same thing as above, but faster. This basically says, 
    "hey, I'm grabbing the first child of all elements within the ul,
    so that means all of the li's and removing them one by one. If there is a first child there, it s getting removed,
    until there is nothing else left."
*/
   
        
//         while(taskList.firstChild){
//             taskList.removeChild(taskList.firstChild);
//     }
// }


    //filter tasks
    
function filterTasks(e){
    //set text to whatever is being typed
    const text = e.target.value.toLowerCase();
    //select all items that have a class of .collection-item and loop through each of them

    document.querySelectorAll('.collection-item').forEach(function(task){
        //grab each li and see what is written inside it, save that to item.
        const item=task.firstChild.textContent;
        //if this matches what is being typed in, then  display it, else don't display it
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
        task.style.display = 'none';
    }

    });
}



