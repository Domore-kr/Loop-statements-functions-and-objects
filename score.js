const good = {
    1: {
        id: 1,
        name: "рубашка",
        description: "желтая",
        sizes: 40,
        price: 1000,
        available: true,
    },
    2: {
        id: 2,
        name: "джинсы",
        description: "синие",
        sizes: 45,
        price: 2000,
        available: true,
    },
    3: {
        id: 3,
        name: "кофта",
        description: "черная",
        sizes: 51,
        price: 3000,
        available: true,
    },
    4: {
        id: 4,
        name: "кроссовки",
        description: "белые",
        sizes: 39,
        price: 6000,
        available: true,
    },
    5: {
        id: 5,
        name: "платье",
        description: "красное",
        sizes: 41,
        price: 2500,
        available: true,
    },
}

let basket = []

function add(goodID, amount) {    
    basket.push(
        {
            good: goodID,
            amount: amount
        }
    )
}

function del(goodID, amount) {
    for (i = 0; i < basket.length; i++) {
        if (good[goodID].id == basket[i].good) {
            basket[i].amount = basket[i].amount - amount
        }
    }
}

function delAll() {
    basket = Array()
}

add(1, 2)
add(2, 3)


function total(bask) {
    let totalobj = [
        {
            totalAmount: 0,
            totalSumm: 0,
        }
    ]

    for (let i=1; i <= Object.keys(good).length; i++) {
        for (let j=0; j < bask.length; j++) {
            if (good[i].id == bask[j].good) {
                totalobj[0].totalAmount = totalobj[0].totalAmount + basket[j].amount;
                totalobj[0].totalSumm = totalobj[0].totalSumm + good[i].price * basket[j].amount
            }
        }
    }

    console.log(totalobj)
}

total(basket)