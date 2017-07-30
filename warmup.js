function my_max(a){
    currentMax = a[0];
    for(var i = 1; i < a.length; i++){
        if(a[i] > currentMax)
            currentMax = a[i]
    }
    return currentMax;
}

function vowel_count(a){
    var count = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i]=='A' || a[i]=='a' || a[i]=='E' || a[i]=='e' || a[i]=='I' || a[i]=='i' || a[i]=='O' || a[i]=='o' || a[i]=='U' || a[i]=='u' || a[i]=='Y' || a[i]=='y'){
            count++;
        }
    }
    return count;
}

function reverse(a){
    var reverse = '';
    for(var i = a.length-1; i >= 0; i--){
        reverse += a[i];
    }
    return reverse;
}