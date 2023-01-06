const body=document.querySelector(".body")
const ciphers=document.querySelectorAll(`.number`)
const inputText=document.querySelector(".input")
const outputText=document.querySelector(".output")
const operator= document.querySelectorAll(".operator")
const operatorIcon=document.querySelector(".operatorSelected")
const sum=document.querySelector(".sum")
const clearButton=document.querySelector(".clear")
const period= document.querySelector(".period")
let inputarr=[]
let inputarrTwo=[]
let operation=undefined
let calculateCheck=false
let ready=false
const displayInputText=(e)=>{
   inputarr.push(e.target.textContent)
   inputText.textContent=`${inputarr.join("")}`
}
const displayOutputText=(e)=>{
   inputarrTwo.push(e.target.textContent) 
   outputText.textContent=`${inputarr.join("")}`
   inputText.textContent=`${inputarrTwo.join("")}`
}
const input=(e)=>{
   if(inputarr.length>15 && typeof(operation)==="undefined") return
   if (inputarrTwo.length>15 && typeof(operation)!=="undefined")return
   if (calculateCheck===true && typeof(operation)!="undefined"){
      displayOutputText(e)
   }  
   else if(calculateCheck===true && typeof(operation)==="undefined"){
      if(ready===true){
         inputarr=[]
         ready=false
         displayInputText(e)
         calculateCheck=false
      }
   }     
   else if (typeof(operation)==="undefined" && calculateCheck==false){
         displayInputText(e)
         }
   else if (calculateCheck===false){
         displayOutputText(e)  
      }  
   
}

const operatorType=(e)=>{
   if (typeof(operation)!="undefined" && inputarr.length>0 && inputarrTwo.length>0){
      calculate()
      operation=e.target.textContent
      e.target.style.backgroundColor=`rgb(135, 213, 187)`
      operatorIcon.textContent=`${e.target.textContent}`
   }
   if (typeof(operation)==="undefined" && inputarr.length>0){
      operation=e.target.textContent
      e.target.style.backgroundColor=`rgb(135, 213, 187)`
      operatorIcon.textContent=`${e.target.textContent}`
   } 
   else return
}

const calculate=(e)=>{
   if (operation=== undefined || inputarr.length==0 || inputarrTwo.length==0)return 
   else{
      let result=""
      let sumOne=inputarr.join("").toString()  
      let sumTwo=inputarrTwo.join("").toString()
      inputarr=[]
      inputarrTwo=[]
      if(operation==="+"){      
      result= (+sumOne)+(+sumTwo)      
      }
      if(operation==="-"){        
         result= (+sumOne)-(+sumTwo)        
         }
      if(operation==="*"){        
         result= (+sumOne)*(+sumTwo)
      }
      if(operation==="/"){
         if((+sumOne)/(+sumTwo)===(+sumOne)/0 ){            
            clear()
            inputText.textContent="SERR?"
            return
         }
         else            
         result= (+sumOne)/(+sumTwo)
         }
   result=Math.round((result + Number.EPSILON) * 100) / 100      
   inputarr=result.toString().split("")
   inputText.textContent=`${inputarr.join("")}` 
   outputText.textContent=""
   calculateCheck=true
   ready=true
   operation=undefined
   operator.forEach(operator=>operator.style.backgroundColor=`rgb(183, 181, 181`)
   operatorIcon.textContent=""       
   }
}
const clear=()=>{
   inputarr=[]
   inputarrTwo=[]
   operation=undefined
   calculateCheck=false
   inputText.textContent=""
   outputText.textContent=""
   operatorIcon.textContent=""
   operator.forEach(operator=>operator.style.backgroundColor=`rgb(183, 181, 181`)
}

const decimal=(e)=>{
   if (typeof(operation)==="undefined"){
      if ((inputarr.some((comma)=>{
         return comma==="."
      }))=== true)return
      else inputarr.push(e.target.textContent) 
   }
   if (typeof(operation)!=="undefined"){
      if ((inputarrTwo.some((comma)=>{
         return comma==="."
      }))=== true)return
      else inputarrTwo.push(e.target.textContent) 
   }
}

clearButton.addEventListener(`click`, clear)
sum.addEventListener(`click`, calculate)
ciphers.forEach(ciphers=>ciphers.addEventListener(`click`, input))
operator.forEach(operator=>operator.addEventListener(`click`, operatorType))
period.addEventListener(`click`, decimal)