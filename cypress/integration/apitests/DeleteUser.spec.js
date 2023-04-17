/// <reference types = "cypress" />
const JSONdata =  require('../../fixtures/createuser.json')

describe ('delete user request testing',()=>{

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
                    "name": 'CHIKBALOLO',
                    "email": testEmail,
                    "gender": 'male',
                    "status": 'active'
                }
            });
            cy.log(JSON.stringify(res));
            expect(res.status).to.eql(201);
            expect(res.body).has.property('email', testEmail);
            expect(res.body).has.property('name', 'CHIKBALOLO');
            expect(res.body).has.property('gender', 'male');
            expect(res.body).has.property('status', 'active');
            userId = res.body.id;
        } catch (err) {
            console.error(err);
        }

            //DELETE USER REQUEST//
            
        try {
            const res2 = await cy.request({
                method: 'DELETE',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },                      
            });
            expect(res2.status).to.eql(204);
        } catch (err) {
            console.error(err);
        }
        
    });
        
        
})
