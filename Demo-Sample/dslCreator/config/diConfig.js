module.exports = {
    "services": {
        "Constant": {
            "service": "./common/constant.js",
            "instantiate": false
        },
        "DaoFactory": {
            "service": "./factory/daoFactory.js",
            "instantiate": false
        },

/*----------------------------------------------------------------------------------------------------------------------*/
        "TreeVisitor": {
            "service": "./grammar/treeVisitor.js",
            "arguments": ["@Constant"],
            "instantiate": true
        },
        "XYZ": {
            "service": "./xyz.js",
            "arguments": [],
            "instantiate": true
        },
/*---------------------------------------------------------------------------------------------------------------------*/
    },
    "setup": {
        "expose": "true"
    }
}