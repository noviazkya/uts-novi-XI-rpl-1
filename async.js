function samplePromise(){
    return Promise.resolve("novi");
}

const name = await simplePromise();
console.info(name);