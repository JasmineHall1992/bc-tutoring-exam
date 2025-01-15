// Problem #1 //
//this is a nested array problem
function filterByOneStarReviews(array){
    return array.filter(car => {
        for (let i = 0; i < car.reviews.length; i++){
            if (car.reviews[i].stars === '1'){
                return true;
            }
        }
        return false;
    }); 
    
};

// Problem #2 //
    function logItems(array){
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].price < 10){
                console.log(`${array[i].item} (${array[i].category})`);    
            }
        }
        
    };

// Problem #3 //
function getStrings(array){
    return array.map(data => {
        const objName = data.item;
        //this needs to reflect the unit price and quantity, so we would multiply the two
        //I just dont know how are where to do it but I know thats whats needed.
        const howMany = (data.quantity * data.price);
        return `${objName} - Total cost: ${howMany}`;
    });
    console.log(objName);
}

// Problem #4 //
//recursion problem
function getTotalByCategory(array, category,output=[]){
    //base case
    if(array.length === 0){
        return output;
    }
    //conditional logic
    if(array[0].category === category){
        //push the total number of items, this takes the quantity into account
        output.push(`${array[0].quantity}`)
    }
    //recursive logic
    return getTotalByCategory(array.slice(1),category,output);
    
};

// Problem #5 //
function mapReviews(array){
    return array.map(items => {
        return items.reviews.map(review => review.text);
    });
};

// Problem #6 //
function logLastReview(array){
    //access the last review in the reviews array
    const lastReview = array.reviews[array.reviews.length - 1];
    //log using template literal, stars, text of the review, and username of author
   console.log(`${lastReview.stars} star: ${lastReview.text}! (${lastReview.author.username})`);
   
}

// Problem #7 //
function updateObjects(array, update){
    //make an empty output array
    output = [];
    //use a for loop to iterate through array
    for (let i = 0; i < array.length; i++){

    }
    
}


