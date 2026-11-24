// Practice SonarQube: Intentional issues

const password = "admin123";

function calculateDiscount(price, discount) {

  const result = price - discount;

    if (price != null) {

        if (discount > 0) {

            if (discount > price) {
                return price;
            }

        }
    }

    return result;

    console.log("This code is unreachable");
}

function checkAdmin(user) {

    if (user.isAdmin = true) {
        return "Admin access granted";
    }

    return "Access denied";
}

console.log(calculateDiscount(100, 10));
console.log(checkAdmin({ isAdmin: false }));
