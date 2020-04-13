const lastUpdatedElement = updated => {
    const element = document.createElement('span')
    element.innerHTML = ` Ultimo aggiornamento: ${updated.asString()}.` 
    return element   
}

export {lastUpdatedElement}