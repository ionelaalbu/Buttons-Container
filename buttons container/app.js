
let div=document.querySelector("#btns")
let bt1=document.querySelector("#btn1")
let bt2=document.querySelector("#btn2")
let bt3=document.querySelector("#btn3")
let bt4=document.querySelector("#btn4")
let bt5=document.querySelector("#btn5")
let bt6=document.querySelector("#btn6")
let bt7=document.querySelector("#btn7")
let bt8=document.querySelector("#btn8")
let bt9=document.querySelector("#btn9")



let arr1=[4,7,8,9,6,3,2,1]
let arr2=[1,4,7,8,9,6,3,2]
let arr3=[2,1,4,7,8,9,6,3]
let arr4=[7,8,9,6,3,2,1,4]

let arr6=[3,2,1,4,7,8,9,6]
let arr7=[8,9,6,3,2,1,4,7]
let arr8=[9,6,3,2,1,4,7,8]
let arr9=[6,3,2,1,4,7,8,9]
let curent1=0
let curent2=0
let curent3=0
let curent4=0

let curent6=0
let curent7=0
let curent8=0
let curent9=0
bt5.addEventListener("click", ()=>{
    bt1.innerHTML=arr1[curent1]
    curent1=(curent1+1)%arr1.length

    bt2.innerHTML=arr2[curent2]
    curent2=(curent2+1)%arr2.length

    bt3.innerHTML=arr3[curent3]
    curent3=(curent3+1)%arr3.length

    bt4.innerHTML=arr4[curent4]
    curent4=(curent4+1)%arr4.length

    

    bt6.innerHTML=arr6[curent6]
    curent6=(curent6+1)%arr6.length

    bt7.innerHTML=arr7[curent7]
    curent7=(curent7+1)%arr7.length

    bt8.innerHTML=arr8[curent8]
    curent8=(curent8+1)%arr8.length

    bt9.innerHTML=arr9[curent9]
    curent9=(curent9+1)%arr9.length
})

