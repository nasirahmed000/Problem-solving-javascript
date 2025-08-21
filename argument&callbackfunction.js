//argment & parameter

function greet(name) {   // এখানে "name" হলো parameter
    console.log("Hello " + name);
}

greet("Nasir"); // এখানে "Nasir" হলো argument
greet("Ahmed"); // এখানে "Ahmed" হলো argument





function orderFood(callback) {
    console.log("🍽️ ওয়েটার: আপনার অর্ডার নেওয়া হলো...");
    console.log("⏳ রান্না চলছে...");

    // 2 সেকেন্ড পর খাবার রেডি হবে
    setTimeout(() => {
        console.log("✅ খাবার তৈরি!");
        callback(); // এখানে callback ফাংশনকে কল করলাম
    }, 2000);
}

function eatFood() {
    console.log("😋 আমি এখন খাবার খাচ্ছি!");
}

// মূল ফাংশন কল করা হলো
orderFood(eatFood);

