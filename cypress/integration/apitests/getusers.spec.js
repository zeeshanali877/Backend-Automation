/// <reference types = "Cypress" />


describe('get users api tests',()=>{

    let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImZpcnN0TmFtZSI6IlVzbWFuIiwibGFzdE5hbWUiOiJNYWxpayIsImVtYWlsIjoidXNtYW4ubWFsaWtAaW52b3pvbmUuY29tIiwicm9sZSI6ImFkbWluIiwibGFuZyI6ImVuIiwicHJvZmlsZVBob3RvIjoiL2FwaS91cGxvYWRzLzMzN2IxNjg3NmZjOTA3YWMzMjcxMWIzZWMyNmY5YzE2LnBuZyIsImlhdCI6MTY4MDAwMDY0MH0.R5Qe12R9oNJUi-yjQxF5PmDUVa2MobJV361h3upeaj8'

    it('get users',()=>{
        cy.request ({
            method: 'GET',
            url:'https://oofoq-dev.invo.zone/api/users',
            headers:{
                'authorization': "Bearer " + accessToken
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.equal(200)
        })
    })

    it('get users meetings',()=>{
        cy.request ({
            method: 'GET',
            url:'https://oofoq-dev.invo.zone/api/users/61/meetings?meetingType=all',
            headers:{
                'authorization': "Bearer " + accessToken
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
        })
    })
})
