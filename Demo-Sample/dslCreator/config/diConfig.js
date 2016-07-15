module.exports = {
    "services": {
        "Constant": {
            "service": "./common/constant.js",
            "instantiate": false
        },

/*----------------------------------------------------------------------------------------------------------------------*/
        "TreeVisitor": {
            "service": "./grammar/treeVisitor.js",
            "arguments": ["@Constant"],
            "instantiate": true
        }
/*---------------------------------------------------------------------------------------------------------------------*/
    },
    "setup": {
        "expose": "true"
    }
}