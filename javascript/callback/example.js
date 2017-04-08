function heavyProcess(data,callback){
    console.log(data,'heavy process starts');
    for (let i = 0 ;  i < 1000000000 ; i++){
        i = i;
    }
    console.log(data,'heavy process ends');
    callback();
}


heavyProcess('sample',function(){
    console.log('i got the data from heavy process in this callback function');
});

