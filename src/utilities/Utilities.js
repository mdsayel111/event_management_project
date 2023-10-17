
export function getItemsFromLocale(uid){
    return localStorage.getItem(`${uid}`)
}

export default function setItemInLocale(id,uid){
    console.log(id,uid)
    const itemsJson = getItemsFromLocale(`${uid}`)
    if(itemsJson){
        const items = JSON.parse(itemsJson)
        if(items.includes(id)){
            return false
        }else{
            items.push(id)
            const newItems = JSON.stringify(items)
            localStorage.setItem(`${uid}`, newItems)
            return true
        }
    }else{
        const arr = [id]
        const newItems = JSON.stringify(arr)
        localStorage.setItem(`${uid}`,newItems)
        return true
    }
}

