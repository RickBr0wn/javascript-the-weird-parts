function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let arr3 = [...arr2]
    arr3.splice(n, 0, ...arr1)
    console.log(arr3)
    return arr2
  }
	
	// frankenSplice([1, 2], ["a", "b"], 1)
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

  // frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
	
	// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
	
	// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 
  // 	should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].