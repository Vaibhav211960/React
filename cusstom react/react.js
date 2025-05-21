const createElement = (reactElement,mainContainer) => {
    const domElement =document.createElement(reactElement.type) 
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement) 
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://netflix.com',
        target : '_black'
    },
    children : 'google'
}

const mainContainer = document.getElementById('root')

createElement(reactElement,mainContainer)