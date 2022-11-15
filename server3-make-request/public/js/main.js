async function run(host) {
    const response = await fetch(host + '/products/1');
    const body = await response.text();

    console.log(body);
}