import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    realm: "hitec",
    url: "http://192.168.56.1:8090/",
    clientId: "devtest"
});

export default keycloak;