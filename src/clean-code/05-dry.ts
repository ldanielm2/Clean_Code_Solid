type Size = ''|'S'|'M'|'L';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean{
        for(const key in this){
            console.log(key, typeof this[key]);
            switch(typeof this[key]){
                case 'string':
                        if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is Empty`);
                    break;
                case 'number':
                    if((<number><unknown>this[key])<= 0) throw Error(`${key} is Zero`);
                break;
                default:
                    throw Error(`${ typeof this[key]} is not supported`);                    
            }
        }
        return true;
    }

    toString(){
        //No DRY
        //if(this.name.length <= 0) throw Error('Name is Empty');
        //if(this.price <= 0) throw Error('Price is Empty');
        //if(this.size.length <= 0) throw Error('Size is Empty');

        if(!this.isProductReady) return;
        return 'Name: '+this.name + ' ' + this.price+' '+this.size;        
    }
}

(()=> {
const bluePants = new Product('Blue Pants',5,'M');
console.log(bluePants.toString());
})();