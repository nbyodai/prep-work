function makeArrayConsecutive2(statues) {
    // Math.min.apply(null, statues)
    // Math.max.apply(null, statues)
   return Math.max(...statues) - Math.min(...statues) - statues.length + 1   
}


// essentially we can pull max amount without sorting, and the use Math.min/max.apply(null, []) does not need 
// array spread

