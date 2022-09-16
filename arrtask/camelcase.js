function camelize(str) {
    return console.log(str 
        .split("-")
        .map((word,index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(""));
}

camelize("list-style-image");
