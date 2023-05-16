/// <reference types="cypress" />

const JSONdata = require('../../fixtures/createuser.json')

describe('update user request testing', () => {
  let accessToken = '57f32c94f96833ebf663b9bbbc084741ff3f6ab9913385e9a5d61951ced423e9'
  let randomtext = ""
  let testEmail = ""

  it('Create User Test', () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++) {
      randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    testEmail = randomtext + '@gmail.com';
    let userId;

    cy.request({
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
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eql(201);
      expect(res.body).to.have.property('email', testEmail);
      expect(res.body).to.have.property('name', 'CHIKBALOLO');
      expect(res.body).to.have.property('gender', 'male');
      expect(res.body).to.have.property('status', 'active');
      userId = res.body.id;

      // PUT REQUEST //

      cy.request({
        method: 'PUT',
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
        body: {
          "name": 'CHIKoblashtrum',
          "email": testEmail,
          "gender": 'male',
          "status": 'inactive'
        }
      }).then((res2) => {
        cy.log(JSON.stringify(userId));
        expect(res2.status).to.eql(200);
        expect(res2.body).to.have.property('email', testEmail);
        expect(res2.body).to.have.property('name', 'CHIKoblashtrum');
        expect(res2.body).to.have.property('gender', 'male');
        expect(res2.body).to.have.property('status', 'inactive');

        // GET USER //

        cy.request({
          method: 'GET',
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        }).then((res3) => {
          cy.log(JSON.stringify(res3));
          expect(res3.status).to.eql(200);
          expect(res3.body).to.have.property('email', testEmail);
          expect(res3.body).to.have.property('name', 'CHIKoblashtrum');
          expect(res3.body).to.have.property('gender', 'male');
          expect(res3.body).to.have.property('status', 'inactive');
        });
      });
    });
  });
});
