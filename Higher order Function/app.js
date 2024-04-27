
function oddOrEvenFactory(request) {

    if (request == "even") {

        let even = function (n) {
            console.log((n % 2 == 0));
        }
        return even;
    }

    else if (request == "odd") {

        odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }

    else {
        console.log("Wrong request ");
    }

}
let request = "odd";