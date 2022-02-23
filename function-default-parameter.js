function register(name, gender = "UNKNOWN") {
    console.info(name);
    console.info(gender);
}

register();
register("Wawan");
register("Wawan", "MALE");
register("Wawan", undefined);
register("Wawan", null);