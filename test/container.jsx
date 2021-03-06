import React from 'react';
import $ from 'teaspoon';

let {
    MessageContainer
  , MessageTrigger
  , Message } = require('../src');

describe('Container', function(){
  var validator;

  it('should pass messages', () => {
    var inst = $(
      <MessageContainer messages={{ fieldA: ['hi', 'good day'] }} >
        <div>
          <Message for='fieldA' className='msg'/>
          <Message for='fieldB' className='msg'/>
        </div>
      </MessageContainer>)


    inst.render().find('.msg:dom').text()
      .should.equal('hi, good day')
  })

})
