# Mock简明文档

## Mock.mock()

- Mock.mock( requestUrl?, requestType?, template|function(options) )
- Mock.mock( template )
- Mock.mock( requestUrl, template )
- Mock.mock( requestUrl, requestType, template )
- Mock.mock( requestUrl, requestType, function(options) )

> requestUrl: 要拦截的URL，字符串或正则表达式<br>
equestType: 要拦截的请求类型，get/post/put/delete/options...<br>
template: 数据模板<br>
function(options)：生成响应数据的函数，options --> { url, type, body }

----

## 语法规范

### 数据模板定义

> 数据模板中每个属性由3部分组成： **属性名|生成规则：属性值**

1. 'name|min-max': value
2. 'name|count': value