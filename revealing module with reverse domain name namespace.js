var com = {} || com;
com.ProjectName = {} || ProjectName;
com.ProjectName.ModuleName = (function() {
    var _privateVariable = 'private';
    var publicVariable = 'public';

    return {
        'publicVariable': publicVariable
    };

})();

console.log(com.ProjectName.ModuleName.publicVariable);
// 'public'