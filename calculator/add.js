module.exports=((...args)=>{
    let result=args[0];
    for(let i=1;i<args.length;i++){
        result+=args[i];
    }
	return result;
});