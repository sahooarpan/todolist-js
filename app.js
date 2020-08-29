showTask()
let addtaskbtn = document.getElementById("addtaskbtn");
let savetaskbtn = document.getElementById("savetaskbtn");
let addtaskinput = document.getElementById("addtaskinput")


function getTasksStored(){
    let tasksStored = localStorage.getItem("tasksStored")
    if(tasksStored===null){
        tasksArr =[]
    }else{
        tasksArr = JSON.parse(tasksStored)
    }
    return tasksArr
}


addtaskbtn.addEventListener('click',()=>{
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()){
        let tasksArr = getTasksStored()
        tasksArr.push({'task_name':addtaskinputval,'compeleteStatus':false})
        localStorage.setItem("tasksStored",JSON.stringify(tasksArr))
        addtaskinput.value=''
    }
    console.log(tasksArr)
    showTask()
})

function showTask(){
    let tasksStored = getTasksStored()
    let html = ''
    let addedtasklist = document.getElementById("addedtasklist")
    tasksStored.map((task,index)=>{
        console.log(task,index)
        if(task.compeleteStatus){
            taskCompeleteValue=`<td class="completed">${task.task_name}</td>`
        }else{
            taskCompeleteValue=`<td>${task.task_name}</td>`
            
        }
        html+=`
        <tr>
        <th scope="row">${index+1}</th>
        ${taskCompeleteValue}
        <td><button type="button" onclick="editTask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
        <td><button type="button" class="text-success" id=${index} ><i class="fa fa-square-o"></i>Complete</button></td>
        <td><button type="button" onclick="deleteTask(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
        
        </tr>
        `
        addedtasklist.innerHTML=html
    })

}


function editTask(index){
    let addtaskinput = document.getElementById("addtaskinput")
    let saveindex = document.getElementById("saveindex")
    saveindex.value=index
    console.log(saveindex.value)
    let tasksArr = getTasksStored()
    console.log(tasksArr[index]["task_name"])

    addtaskinput.value=tasksArr[index].task_name
    console.log(addtaskinput.value)
    
    let savetaskbtn = document.getElementById("savetaskbtn")
    addtaskbtn.style.display='none'
    savetaskbtn.style.display='block'



    console.log(addtaskinput.value)
    
    

}


savetaskbtn.addEventListener("click",()=>{
    console.log(addtaskinput.value)
    tasksArr[saveindex.value]["task_name"] = addtaskinput.value
    console.log(tasksArr[saveindex.value]["task_name"])
      savetaskbtn.style.display='none'
addtaskbtn.style.display='block'

localStorage.setItem("tasksStored",JSON.stringify(tasksArr))
console.log("ls",localStorage.getItem("tasksStored"))
addtaskinput.value=''
showTask()              

})



function deleteTask(index){
    let tasksStored = getTasksStored()
    tasksStored.splice(index,1)
    localStorage.setItem("tasksStored",JSON.stringify(tasksArr))
    showTask()  

    
}






    
    
    // })






