const body=document.querySelector(".body")
const ciphers=document.querySelectorAll(`.number`)
const inputText=document.querySelector(".input")
const outputText=document.querySelector(".output")
const operator= document.querySelectorAll(".operator")
const sum=document.querySelector(".sum")
let inputarr=[]
let inputarrTwo=[]
let operation=undefined
let sumOne=undefined
let sumTwo=undefined
let calculateCheck=false
const input=(e)=>{
   if (calculateCheck==true){
      inputarrTwo.push(e.target.textContent) 
      outputText.textContent=`${inputarr.join("")}`
      inputText.textContent=`${inputarrTwo.join("")}`
   }
   else{ 
      if (operation===undefined){inputarr.push(e.target.textContent)
         inputText.textContent=`${inputarr.join("")}`
         }
   
   else {
         inputarrTwo.push(e.target.textContent)
         outputText.textContent=`${inputarr.join("")}`
         inputText.textContent=`${inputarrTwo.join("")}`   
      }  
   } 
}

const operatorType=(e)=>{
   if (operation=== undefined){
      operation=e.target.textContent
      e.target.style.backgroundColor=`green`

   } 
   else return
}

const calculate=(e)=>{
   if (operation=== undefined || inputarr.length==0 || inputarrTwo.length==0)return 
   else{
      let result=""
      sumOne=inputarr.join("").toString()  
      sumTwo=inputarrTwo.join("").toString()
      inputarr=[]
      inputarrTwo=[]
      if(operation==="+"){      
      result= (+sumOne)+(+sumTwo)
      inputarr=result.toString().split("")
      }
      if(operation==="-"){        
         result= (+sumOne)-(+sumTwo)
         inputarr=result.toString().split("")
         }
      if(operation==="*"){        
         result= (+sumOne)*(+sumTwo)
         inputarr=result.toString().split("")
      }
      if(operation==="/"){         
         result= (+sumOne)/(+sumTwo)
         inputarr=result.toString().split("")
         }
   inputText.textContent=`${inputarr.join("")}` 
   outputText.textContent=""
   calculateCheck=true
   operation=undefined
   operator.forEach(operator=>operator.style.backgroundColor=`rgb(183, 181, 181`) 
       
   }
}

sum.addEventListener(`click`, calculate)
ciphers.forEach(ciphers=>ciphers.addEventListener(`click`, input))
operator.forEach(operator=>operator.addEventListener(`click`, operatorType))