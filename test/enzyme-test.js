import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/Components/Application';
import Input from '../lib/Components/Input';
import NewRange from '../lib/Components/NewRange';
import Output from '../lib/Components/Output';
import GuessCounter from '../lib/Components/GuessCounter';
import PreviousGuesses from '../lib/Components/PreviousGuesses';
import Score from '../lib/Components/Score';


describe('<Application/>', ()=>{
  it('should have Input, Output, Score, and GuessCounter Components', ()=>{
    const wrapper = shallow(<Application/>)
    const Input = wrapper.find('Input')
    const Output = wrapper.find('Output')
    const Score = wrapper.find('Score')
    const GuessCounter = wrapper.find('GuessCounter')
    expect(Input).to.have.length(1);
    expect(Output).to.have.length(1);
    expect(Score).to.have.length(1);
    expect(GuessCounter).to.have.length(1);
  })
})
