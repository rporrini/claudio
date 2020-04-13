const lastUpdatedElement = updated => {
    const element = document.createElement('span')
    element.innerHTML = `Milano, ${updated.asString()}.` 
    return element   
}

export {lastUpdatedElement}