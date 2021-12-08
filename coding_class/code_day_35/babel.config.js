//babel.config.js

module.exports = {// node.js기능에서 모듈을 사용할 수 있도록 셋팅
  presets : [
    [ '@babel/preset-env',{
      targets : {ie:9},
      "useBuiltIns": "usage",
      corejs:{version:2}
    }]
  ]
}