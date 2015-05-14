ModuleName = (function() {
    var _privateVariable = 'private';
    var publicVariable = 'public';

    return {
        'publicVariable': publicVariable
    };

})();

console.log(ModuleName.publicVariable);
// 'public'