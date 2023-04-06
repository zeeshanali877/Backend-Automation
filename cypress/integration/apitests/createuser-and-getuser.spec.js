/// <reference types = "cypress" />
const JSONdata =  require('../../fixtures/createuser.json')

describe ('post user request testing',()=>{

    let accessToken = '57f32c94f96833ebf663b9bbbc084741ff3f6ab9913385e9a5d61951ced423e9'
    let randomtext = ""
    let testEmail = ""

    it('Create User Test', async () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++) {
            randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length));
        }
        testEmail = randomtext + '@gmail.com';
        let userId;
        try {
            const res = await cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "id": 3340,
                    "name": JSONdata.name,
                    "email": testEmail,
                    "gender": JSONdata.gender,
                    "status": JSONdata.status
                }
            });
            cy.log(JSON.stringify(res));
            expect(res.status).to.eql(201);
            expect(res.body).has.property('email', testEmail);
            expect(res.body).has.property('name', JSONdata.name);
            expect(res.body).has.property('gender', JSONdata.gender);
            expect(res.body).has.property('status', JSONdata.status);
            userId = res.body.id;
        } catch (err) {
            console.error(err);
        }
    
        // GET USER//
        
        try {
            const res2 = await cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });
            cy.log('user id is:' + userId);
            expect(res2.body).has.property('id',userId)
            expect(res2.body.id.name).has.property('name','chiko')
        } catch (err) {
            console.error(err);
        }
    });
        
})
