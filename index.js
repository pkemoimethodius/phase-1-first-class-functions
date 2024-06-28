function receivesAFunction(weekendDestination){

    weekendFit();

    weekendDestination();
}

function weekendFit(){
    console.log(`lookFreshiBarida`);
}

function weekendDestination(){
    console.log("westObvi");
}

function returnsANamedFunction(){
    return function weekendTingz(){
        console.log("we outside");
    }
}

function returnsAnAnonymousFunction(){
   return function(){
    console.log("again");
   }
}