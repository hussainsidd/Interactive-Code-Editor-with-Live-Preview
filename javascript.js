const htmlCode = document.getElementById("htmlcode");
const cssCode = document.getElementById("csscode");
const jsCode = document.getElementById("jscode");
const output = document.getElementById("output");
const reset=document.querySelector('#reset')
const download=document.querySelector('#download')

window.addEventListener('DOMContentLoaded',()=>{
    htmlCode.value=localStorage.getItem('html-code')||""
    cssCode.value=localStorage.getItem('css-code')||""
    jsCode.value=localStorage.getItem('js-code')||""
    updateOutput()
})

function updateOutput() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  
  const finalCode = html + css + js;
  output.srcdoc = finalCode;

    localStorage.setItem('html-code',html)
    localStorage.setItem('css-code',cssCode.value)
    localStorage.setItem('js-code',jsCode.value)
}

// Live preview
htmlCode.addEventListener("input", updateOutput);
cssCode.addEventListener("input", updateOutput);
jsCode.addEventListener("input", updateOutput);

reset.addEventListener('click',()=>{
  htmlCode.value=''
  cssCode.value=""
  jsCode.value=""
  localStorage.clear()
  updateOutput()
})

download.addEventListener('click',()=>{
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  fullCode=html+css+js
  const blob=new Blob([fullCode],{type:'text/html'})
  const url=URL.createObjectURL(blob)


  const link=document.createElement('a')
  link.href=url
  link.download="index.html"
  link.click()
  URL.revokeObjectURL(url)
})