const BASEURL = `http://faceprog.ru/reactcourseapi/products/`

export async function all(){
    let response = await fetch(`${BASEURL}all.php`)
	return await response.json();
}