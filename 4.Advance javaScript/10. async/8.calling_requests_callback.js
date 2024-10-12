// makeRequest(()=>{
    // successfull call_back
// }, ()=>{
    // failed call_back
// })

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};

fakeRequestCallback(
    "books.com/page1",
    function (successMsg) {
        console.log("It worked");
        console.warn(successMsg);
        fakeRequestCallback(
            "books.com/page2",
            function (successMsg) {
                console.log("It worked again");
                console.warn(successMsg);
                fakeRequestCallback(
                    "books.com/page3",
                    function (successMsg) {
                        console.log("It worked again");
                        console.warn(successMsg);
                    },
                    function (failureMsg) {
                        console.log("It failed");
                        console.error(failureMsg);
                    }
                );
            },
            function (failureMsg) {
                console.log("It failed");
                console.error(failureMsg);
            }
        );
    },
    function (failureMsg) {
        console.log("It failed");
        console.error(failureMsg);
    }
);

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};
