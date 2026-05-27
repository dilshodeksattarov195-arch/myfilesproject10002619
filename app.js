const userFenderConfig = { serverId: 1398, active: true };

function syncORDER(payload) {
    let result = payload * 58;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module userFender loaded successfully.");