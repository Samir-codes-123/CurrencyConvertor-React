const mainContainer=document.getElementById("root");
const reactElement ={
    type:"a",
    props:{
        href:"https://google.com"
    },
    children:"click me"

}
function customRender(reactElement,mainContainer){
   /* const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    mainContainer.appendChild(domElement);*/
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop]);
            
        }
        mainContainer.appendChild(domElement)
    }


customRender(reactElement,mainContainer)