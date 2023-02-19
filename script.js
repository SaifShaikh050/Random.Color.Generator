let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById('t3')
let t4 = document.getElementById('t4')
let t5 = document.getElementById('t5')
let t6 = document.getElementById('t6')
let t7 = document.getElementById('t7')
let t8 = document.getElementById('t8')
let t9 = document.getElementById('t9')
let t10 = document.getElementById('t10')
let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')
let bt3 = document.getElementById('bt3')
let bt4 = document.getElementById('bt4')
let bt5 = document.getElementById('bt5')
let bt6 = document.getElementById('bt6')
let bt7 = document.getElementById('bt7')
let bt8 = document.getElementById('bt8')
let bt9 = document.getElementById('bt9')
let bt10 = document.getElementById('bt10')
let generator = document.querySelector('.gen-col')

class color{
    constructor(){

    }
    temp1(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t1.style.backgroundColor = `#${red}${blue}${green}`
        t1.innerHTML = `#${red}${blue}${green}`
        
    }
    temp2(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t2.style.backgroundColor = `#${red}${blue}${green}`
        t2.innerHTML = `#${red}${blue}${green}`
    }
    temp3(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t3.style.backgroundColor = `#${red}${blue}${green}`
        t3.innerHTML = `#${red}${blue}${green}`
    }
    temp4(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t4.style.backgroundColor = `#${red}${blue}${green}`
        t4.innerHTML = `#${red}${blue}${green}`
    }
    temp5(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t5.style.backgroundColor = `#${red}${blue}${green}`
        t5.innerHTML = `#${red}${blue}${green}`
    }
    temp6(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t6.style.backgroundColor = `#${red}${blue}${green}`
        t6.innerHTML = `#${red}${blue}${green}`
    }
    temp7(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t7.style.backgroundColor = `#${red}${blue}${green}`
        t7.innerHTML = `#${red}${blue}${green}`
    }
    temp8(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t8.style.backgroundColor = `#${red}${blue}${green}`
        t8.innerHTML = `#${red}${blue}${green}`
    }
    temp9(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t9.style.backgroundColor = `#${red}${blue}${green}`
        t9.innerHTML = `#${red}${blue}${green}`
    }
    temp10(){
        let val = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let red = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let blue = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        let green = `${val[Math.floor(Math.random()*val.length)]}${val[Math.floor(Math.random()*val.length)]}`
        t10.style.backgroundColor = `#${red}${blue}${green}`
        t10.innerHTML = `#${red}${blue}${green}`
    } 
}

let col = new color()
    col.temp1()
    col.temp2()
    col.temp3()
    col.temp4()
    col.temp5()
    col.temp6()
    col.temp7()
    col.temp8()
    col.temp9()
    col.temp10()

    bt1.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t1.innerHTML
        t1.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t1.removeChild(storage)
    }) 
    bt2.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t2.innerHTML
        t2.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t2.removeChild(storage)
    }) 
    bt3.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t3.innerHTML
        t3.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t3.removeChild(storage)
    }) 
    bt4.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t4.innerHTML
        t4.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t4.removeChild(storage)
    })
    bt5.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t5.innerHTML
        t5.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t5.removeChild(storage)
    }) 
    bt6.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t6.innerHTML
        t6.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t6.removeChild(storage)
    }) 
    bt7.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t7.innerHTML
        t7.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t7.removeChild(storage)
    }) 
    bt8.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t8.innerHTML
        t8.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t8.removeChild(storage)
    }) 
    bt9.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t9.innerHTML
        t9.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t9.removeChild(storage)
    }) 
    bt10.addEventListener('click',function(){
        let storage = document.createElement('textarea')
        storage.value = t10.innerHTML
        t10.appendChild(storage)
        storage.select()
        storage.setSelectionRange(0, 99999)
        document.execCommand('copy')
        t10.removeChild(storage)
    }) 

generator.addEventListener('click',()=>{
    let colors = new color()
    colors.temp1()
    colors.temp2()
    colors.temp3()
    colors.temp4()
    colors.temp5()
    colors.temp6()
    colors.temp7()
    colors.temp8()
    colors.temp9()
    colors.temp10()
})