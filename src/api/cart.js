const BASEURL = `http://faceprog.ru/reactcourseapi/cart/`

export async function load(token){
    let response = await fetch(`${BASEURL}load.php?token=${token}`)
	return response.json();
}

export async function add(token, id){
    let response = await fetch(`${BASEURL}add.php?token=${token}&id=${id}`)
    return await response.json();
}

export async function change(token, id, cnt){
    let response = await fetch(`${BASEURL}change.php?token=${token}&id=${id}&cnt=${cnt}`)
    return await response.json();
}

export async function remove(token, id){
    let response = await fetch(`${BASEURL}remove.php?token=${token}&id=${id}`)
    return await response.json();
}