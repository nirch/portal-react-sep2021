import axios from "axios";

async function server(activeUser, data, type) {

    const version = 2.3;
    const phpDomain = 'https://pil1.appleseeds.org.il/dcnir/server/';
    const imgsDomain = 'https://pil1.appleseeds.org.il/dcnir/';

    // Adding the user's token to the payload
    data.token = activeUser ? activeUser.token : undefined;

    // Adding the version to the payload
    data.v = version;

    // creating the request
    const request = {
        method: "post",
        url: phpDomain + "datagate.php?type=" + type,
        data: JSON.stringify(data),
        headers : { 'Content-Type': undefined},
    }

    const response = await axios(request);
    return response;
    // if (json && json.error == "user not found") {
    //     loginStatus	=false;
    //     $rootScope.userToken = "";
    //     $rootScope.isAdmin = false;
    //     $state.transitionTo('login');
    // }
    // else if (json && json.error=="access permission")
    // {
    //     alert(json.error);
    // }
}

export default server;