function outer() {
    function inner() {
        console.info("Inner");
    }
    inner();
    inner();
}
outer();
inner(); //error karena diluar function inner