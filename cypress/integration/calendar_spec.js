describe('add available dates', function (){
  var url = 'http://localhost:8000'
  it("add the selected date to the listing", function() {
    cy.visit(url)
    cy.get('input[name=name]').type('Tom')
    cy.get('input[name=email]').type('tom@gmail.com')
    cy.get('input[name=phone]').type('+447568922100')
    cy.get('input[name=title]').type('Hollywood Mansion')
    cy.get('textarea[name=description]').type('my first listing')
    cy.get('input[name=price]').type(500)
    cy.get('.date-picker').
    cy.get('button').click()
    cy.get('.listing:last p').should(($ps) => {
      expect($ps).to.have.length(6)
      expect($ps.eq(0)).to.contain('Tom')
      expect($ps.eq(1)).to.contain('tom@gmail.com')
      expect($ps.eq(2)).to.contain('+447568922100')
      expect($ps.eq(3)).to.contain('Hollywood Mansion')
      expect($ps.eq(4)).to.contain('my first listing')
      expect($ps.eq(5)).to.contain(500)
    })
  })
});
