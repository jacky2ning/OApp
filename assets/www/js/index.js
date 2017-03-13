/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
		
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var camaerInit={
	
	   initialize: function() {
        document.addEventListener('cameraready', this.onDeviceReady.bind(this), true);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('cameraready');
    },
		
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        openCamera();
        //console.log('Received Event: ' + id);
    }
};

camaerInit.initialize();
 
/**
  takeSuccess  成功返回的函数
  takeFail     失败返回的函数
*/
function openCamera(){
    //调用拍照相机
    navigator.camera.getPicture(takeSuccess,takeFail,{destinationType:Camera.DestinationType.FILE_URI});
}

function takeSuccess(imageURI){
    navigator.notification.alert("拍照成功!");
}

function takeFail(message){
    navigator.notification.alert("拍照失败,原因："+message);
}

function takePic(){
   //navigator.notification.alert("Hello!");
   plugins.imagePicker.getPictures(getPicSuccess,getPicError,{
        maximumImagesCount: 10,
        width: 800,
        height:800,
        quality: 80
   });
}

function  getPicSuccess(results) {
    for (var i=0;i<results.length;i++) {
        console.log('Image URI: ' + results[i]);
     }
}

function  getPicError(error) {
    //console.log('Error: ' + error);
    navigator.notification.alert("Error!"+error);
}

function speakSomething(result){
	cordova.exec(success, fail, "BeaCordovaPlugin", "speak", [result]);
}

function success(){
	navigator.notification.alert("成功调用:"+result);
}

function fail(){
	navigator.notification.alert("调用失败:"+error);
}


app.initialize();