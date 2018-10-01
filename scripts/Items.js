
const Item = (function() {
    
    function validateName(name){
        if(!name){
     throw TypeError('Name does not exit');
        }
    };

    function create(name) {
        return {
            id: cuid(),
            name,
            checked: false
        };
        };
return {
    validateName,
    create
};
}() );



