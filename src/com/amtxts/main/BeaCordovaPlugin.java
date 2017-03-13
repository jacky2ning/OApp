package com.amtxts.main;

import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by Administrator on 2017/3/9.
 */

public class BeaCordovaPlugin extends CordovaPlugin {

    public void speak(String str){
        Toast.makeText(cordova.getActivity(),str,Toast.LENGTH_LONG).show();
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if("speak".equals(action)){
            String content = args.getString(0);
            speak(content);
            callbackContext.success("finish");
            return true;
        }
        return false;
    }
}
