const EnvConstants = require('../utils/EnvConstants');
const reqResApi = require('../apis/ReqResApi');

describe('API tests (https://reqres.in/)', () => {

    test('Create user (POST)', async () => {

        let randomStr = generateString(10);
        let userData = {
            "name": "name_" + randomStr,
            "job": "job_" + randomStr
        }

        let respData = await  reqResApi.post('users/', userData);
        userId = respData.id;

        expect(respData.id).not.toBeNull();
        expect(respData.createdAt).not.toBeNull();
    });

    test('Get user (GET)', async () => {
        let respData = await reqResApi.get("users/"+EnvConstants.api_user_id);

        expect(respData.data.id).toEqual(EnvConstants.api_user_id);
        expect(respData.data.email).toEqual(EnvConstants.api_user_email);
    });

    test('Update user (PUT)', async () => {

        let randomStr = generateString(10);
        let userData = {
            "name": "name_" + randomStr,
            "job": "job_" + randomStr
        }

        let respData = await reqResApi.put("users/"+EnvConstants.api_user_id, userData);
        expect(respData.createdAt).not.toBeNull();
    });

    test('Update user (PATCH)', async () => {

        let randomStr = generateString(10);
        let userData = {
            "name": "name_" + randomStr,
            "job": "job_" + randomStr
        }

        let respData = await reqResApi.patch("users/"+EnvConstants.api_user_id, userData);
        expect(respData.createdAt).not.toBeNull();
    });

    test('Delete user (DELETE)', async () => {

        let respData = await reqResApi.delete("users/"+EnvConstants.api_user_id);

        console.log(respData);
        expect(respData).toBeNull();
    });
});

    function generateString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }