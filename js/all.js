const btn = document.querySelector('.btn');
const areadata = document.querySelector('.areadata');
const btndall = document.querySelector('.btndall');
const ans = document.querySelector('.ans');
let data = JSON.parse(localStorage.getItem('list')) || [];
const body = document.body


btn.addEventListener('click',function(e){
    let obj = {};
    let str = '';
    let height = document.querySelector('.height').value;
    let weight = document.querySelector('.weight').value;

    if(height === '' || weight ===''){
      alert('請輸入內容')
      return
    }
    if(isNaN(height) === true || isNaN(weight) === true){
      alert('請輸入有效數字');
      return
    }
    if(e.target.nodeName === 'BUTTON'){
      str+=`
      <p class="ans">看結果</p>
      <p class="ansre"></p>
      `
      btn.innerHTML = str
      document.querySelector('.height').value = '';
      document.querySelector('.weight').value = '';
    }
    if(e.target.nodeName !== 'P'){return}

    let result = (weight / ((height/100)**2)).toFixed(1);
    obj.height = height;
    obj.weight = weight;
    obj.result = result;

    if(result < 18.5){
      obj.determination = '過輕'
      str+=`
      <a class="ans frame g">
      ${obj.result}
      <span class="wg">BMI</span> 
      </a>
      <button class="ansre green_outframe wg">${obj.determination}
      </button>
      `
    }
    if(result >= 18.5 && result < 24){
      obj.determination = '理想'
      str+=`
      <a class="ans frame b">
      ${obj.result}
      <span class="wb">BMI</span> 
      </a>
      <button class="ansre blue_outframe wb">${obj.determination}
      </button>
      `
    }
    if(result >= 24 && result < 27){
      obj.determination = '過重'
      str+=`
      <a class="ans frame lo">
      ${obj.result}
      <span class="wlo">BMI</span> 
      </a>
      <button class="ansre lightorange_outframe wlo">${obj.determination}
      </button>
      `
    }
    if(result >= 27 && result < 30){
      obj.determination = '輕度肥胖'
      str+=`
      <a class="ans frame do">
      ${obj.result}
      <span class="wdo">BMI</span> 
      </a>
      <button class="ansre orange_outframe wdo">${obj.determination}
      </button>
      `
    }
    if(result >= 30 && result < 35){
      obj.determination = '中度肥胖'
      str+=`
      <a class="ans frame do">
      ${obj.result}
      <span class="wdo">BMI</span> 
      </a>
      <button class="ansre orange_outframe wdo">${obj.determination}
      </button>
      `
    }
    if(result >= 35){
      obj.determination = '重度肥胖'
      str+=`
      <a class="ans frame r">
      ${obj.result}
      <span class="wr">BMI</span> 
      </a>
      <button class="ansre red_outframe wr">${obj.determination}
      </button>
      `
    }
    btn.innerHTML = str
    data.push(obj)
    localStorage.setItem('list',JSON.stringify(data))
    updata(data);
},false)


function updata(k){
    const day = new Date()
    let today = `${day.getDate()}-${day.getMonth() + 1}-${day.getFullYear()}`
    let str = '';
    let len = k.length; 
    for(let i=0;i<len;i++){
      if(k[i].determination === '過輕'){ str+=`
      <p class="tg"></p>
      <ul>
        <li>${k[i].determination}</li>
        <li><span>BMI</span> ${k[i].result}</li>
        <li><span>weight</span> ${k[i].weight}kg</li>
        <li><span>height</span> ${k[i].height}cm</li>
        <li>${today}</li>
      <img src="img/co.png" class='btnd' data-index=${i}>
      </ul>
      `}
      if(k[i].determination === '理想'){ str+=`
      <p class="tb"></p>
      <ul>
        <li>${k[i].determination}</li>
        <li><span>BMI</span> ${k[i].result}</li>
        <li><span>weight</span> ${k[i].weight}kg</li>
        <li><span>height</span> ${k[i].height}cm</li>
        <li>${today}</li>
      <img src="img/co.png" class='btnd' data-index=${i}>
      </ul>
      `}
      if(k[i].determination === '過重'){ str+=`
      <p class="tlo"></p>
      <ul>
        <li>${k[i].determination}</li>
        <li><span>BMI</span> ${k[i].result}</li>
        <li><span>weight</span> ${k[i].weight}kg</li>
        <li><span>height</span> ${k[i].height}cm</li>
        <li>${today}</li>
      <img src="img/co.png" class='btnd' data-index=${i}>
      </ul>
      `}
      if(k[i].determination === '輕度肥胖'){ str+=`
      <p class="to"></p>
      <ul>
        <li>${k[i].determination}</li>
        <li><span>BMI</span> ${k[i].result}</li>
        <li><span>weight</span> ${k[i].weight}kg</li>
        <li><span>height</span> ${k[i].height}cm</li>
        <li>${today}</li>
      <img src="img/co.png" class='btnd' data-index=${i}>
      </ul>
      `}
      if(k[i].determination === '中度肥胖'){ str+=`
      <p class="to"></p>
      <ul>
        <li>${k[i].determination}</li>
        <li><span>BMI</span> ${k[i].result}</li>
        <li><span>weight</span> ${k[i].weight}kg</li>
        <li><span>height</span> ${k[i].height}cm</li>
        <li>${today}</li>
      <img src="img/co.png" class='btnd' data-index=${i}>
      </ul>
      `}
      if(k[i].determination === '重度肥胖'){ str+=`
      <p class="tr"></p>
      <ul>
        <li>${k[i].determination}</li>
        <li><span>BMI</span> ${k[i].result}</li>
        <li><span>weight</span> ${k[i].weight}kg</li>
        <li><span>height</span> ${k[i].height}cm</li>
        <li>${today}</li>
      <img src="img/co.png" class='btnd' data-index=${i}>
      </ul>
      `}
    }
    areadata.innerHTML = str;
  }

areadata.addEventListener('click',bntd,false)
function bntd(e){
  e.preventDefault();
  let index = e.target.dataset.index;
  if(e.target.nodeName !== 'IMG'){return}
  data.splice(index,1);
  localStorage.setItem('list',JSON.stringify(data));
  updata(data);
}

btndall.addEventListener('click',function(e){
  e.preventDefault();
  data = []
  localStorage.setItem('list',JSON.stringify(data))
  updata(data)
},false)

body.addEventListener('keydown',function(e){
  if(e.keyCode === 13){
    ans.click();
  }
})