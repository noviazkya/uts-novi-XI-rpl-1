function samplePromise(){
    return Promise.resolve("novi");
}

const name = await samplePromise();
console.info(name);