define({ "api": [
  {
    "type": "get",
    "url": "/users?userid=1",
    "title": "/",
    "name": "_",
    "group": "users",
    "description": "<p>获取用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users?userid=1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"获取成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/add",
    "title": "add",
    "name": "add",
    "group": "users",
    "description": "<p>添加用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "username",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/add/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"添加成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/del",
    "title": "del",
    "name": "del",
    "group": "users",
    "description": "<p>删除用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/del/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"添加成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/edit",
    "title": "edit",
    "name": "edit",
    "group": "users",
    "description": "<p>修改用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "username",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/edit/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"添加成功\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "users"
  }
] });
