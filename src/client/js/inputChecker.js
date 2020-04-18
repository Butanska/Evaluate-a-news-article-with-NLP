function urlValidation(inputText) {
    console.log("::: Running URL validation :::", `${inputText}`);

    let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    if(regex.test(inputText)){
        return true
    } else {
        alert('Invalid URL!')
    }
}

export { urlValidation }
