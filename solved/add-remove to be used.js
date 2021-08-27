const inputText=document.querySelector("#txt");
const myButton=document.querySelector(".btn-list");
const list=document.querySelector(".container ul");
const pendingList=document.querySelector(".pending");



let  listArr=[];
myButton.addEventListener("click", (e)=>{

if (inputText.value !=""){

    e.preventDefault();
    //Create li
    const myLi=document.createElement('li')
    myLi.innerHTML=inputText.value;
    
    list.appendChild(myLi);
    // console.log(list)
    //Create span
    const mySpan=document.createElement("span");
    mySpan.innerHTML="X";
    mySpan.className=" btn delete"
    // mySpan.classList.add("count");
    myLi.appendChild(mySpan); 

    // Create checkbox
    const myCheckbox=document.createElement("input");
   
    myCheckbox.classList="checkbox";
    myCheckbox.type="checkbox"
    myLi.appendChild(myCheckbox)

    //counting  todo items
    listArr.push(inputText.value);
    
}
pendingList.textContent=listArr.length;
console.log(listArr.length)
console.log(listArr)
})

//deleting an item
const itemList=document.getElementById('list-group')
itemList.addEventListener("click",removeEvent)


function removeEvent(e){
    if(e.target.classList.contains('delete')){
        if(confirm('You are about to delete this item')){
            const li=e.target.parentElement;
            itemList.removeChild(li);
            
        }
    }
    listArr.pop();
    // console.log(listArr)
    // console.log(listArr.length)
    pendingList.textContent=listArr.length;
    console.log(listArr.length)
    console.log(listArr)
}

// pendingList.textContent=listArr.length;
    


const close=document.querySelectorAll("span");
// console.log(close)
for (let i=0; i<close.length; i+=1){
close[i].addEventListener('click', (e)=>{
    close[i].parentElement.style.opacity="0";
    setTimeout((e)=>{
    close[i].parentElement.style.display="none" }, 500)  
    //close[i].parentElement.remove();
});

console.log(close.length)

}


const filter=document.getElementById('txt');
filter.addEventListener('keyup', filterElements);

function filterElements(e){
//convert text to lowercase

const text=e.target.value.toLowerCase();
//get list
const items= itemList.getElementsByTagName('li');
console.log(items)
// convert to an array
Array.from(items).forEach(function(item){
    const itemName=item.textContent;
    // console.log(itemName)
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display="block";
    }else {
        item.style.display="none"
    }
});


}

// const filter=document.getElementById('all');

// filter.addEventListener('click', (filterElements)=>{
//     const item= itemList.getElementsByTagName('li');
// });